
import os
import requests
from typing import Dict, Any, Tuple

ORDER_SERVICE_BASE_URL = os.environ.get("ORDER_SERVICE_URL", "http://127.0.0.1:5002")

TOOL_SCHEMAS = [
    {
        "name": "get_order_status",
        "description": "Look up order fulfillment status, delivery estimates, and tracking details by order ID.",
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "The unique alphanumeric order code (e.g. 'A104', 'A205', 'A407')"
                }
            },
            "required": ["order_id"]
        }
    }
]

HANDLERS = {}

def register_tool(name: str):
    def decorator(fn):
        HANDLERS[name] = fn
        return fn
    return decorator

@register_tool("get_order_status")
def handle_get_order_status(arguments: Dict[str, Any]) -> Dict[str, Any]:
    """
    Handler executing the HTTP request to the Express backend.
    """
    order_id = arguments["order_id"]
    endpoint = f"{ORDER_SERVICE_BASE_URL}/orders/{order_id}"
    
    try:
        resp = requests.get(endpoint, timeout=3.0)
        return {
            "endpoint_called": endpoint,
            "http_status": resp.status_code,
            "data": resp.json()
        }
    except requests.exceptions.RequestException as e:
        return {
            "endpoint_called": endpoint,
            "http_status": None,
            "error": f"Failed to reach order service: {str(e)}"
        }

def validate_tool_call(name: str, arguments: Dict[str, Any]) -> Tuple[bool, str | None]:
    """
    Validates tool name against registered operations, and arguments against expected types.
    """
    if name not in HANDLERS:
        return False, f"Unknown operation / tool: '{name}'"

    if name == "get_order_status":
        if "order_id" not in arguments:
            return False, "Missing required argument 'order_id'"
        order_id = arguments["order_id"]
        if not isinstance(order_id, str):
            return False, f"Argument 'order_id' must be a string, received {type(order_id).__name__} ({order_id})"
        if not order_id.strip():
            return False, "Argument 'order_id' cannot be an empty string"

    return True, None

def execute_tool(name: str, arguments: Dict[str, Any], user_message: str = "") -> Dict[str, Any]:
    """
    Executes a tool with defensive pre-execution validation (Exercise 3).
    If validation fails or tool is unknown, returns early WITHOUT making an HTTP request.
    """
    trace = {
        "tool_name": name,
        "arguments": arguments,
        "user_message": user_message,
        "handler_executed": None,
        "http_request_made": False,
        "endpoint_called": None,
        "result": None,
        "error": None
    }

    is_valid, error_msg = validate_tool_call(name, arguments)
    if not is_valid:
        trace["error"] = error_msg
        return trace

    handler = HANDLERS[name]
    trace["handler_executed"] = handler.__name__
    trace["http_request_made"] = True
    
    exec_result = handler(arguments)
    trace["endpoint_called"] = exec_result.get("endpoint_called")
    trace["result"] = exec_result
    return trace
