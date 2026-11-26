

import re
from typing import Dict, Any, Tuple
from tools import execute_tool

def process_assistant_turn(user_message: str) -> Dict[str, Any]:

    text = user_message.strip()
    match = re.search(r'\b[A-Za-z]\d{3,4}\b', text)

    trace = {
        "user_message": user_message,
        "tool_invoked": False,
        "tool_trace": None,
        "final_answer": None
    }

    if not match:
      
        trace["final_answer"] = (
            "I would be glad to check your order, but you did not provide an order number. "
            "Please provide your order reference."
        )
        return trace

    order_id = match.group(0).upper()
    trace["tool_invoked"] = True
    tool_trace = execute_tool(
        name="get_order_status",
        arguments={"order_id": order_id},
        user_message=user_message
    )
    trace["tool_trace"] = tool_trace

    if tool_trace.get("error"):
        trace["final_answer"] = f"Error looking up order: {tool_trace['error']}"
        return trace

    result_data = tool_trace.get("result", {}).get("data", {})
    http_status = tool_trace.get("result", {}).get("http_status")

    if http_status == 404:
        trace["final_answer"] = f"Order {order_id} was not found in our system. Please check the number and try again."
    elif http_status == 200:
        status = result_data.get("status")
        estimate = result_data.get("delivery_estimate")
        carrier = result_data.get("carrier")
        tracking = result_data.get("tracking_number")

        parts = [f"Order {order_id} is currently {status}."]
        if estimate:
            parts.append(f"Estimated delivery date is {estimate}.")
        else:
            parts.append("No delivery estimate is available at this time.")
        if tracking and carrier:
            parts.append(f"Shipped via {carrier} with tracking number {tracking}.")

        trace["final_answer"] = " ".join(parts)
    else:
        trace["final_answer"] = f"Unable to retrieve details for order {order_id} (HTTP {http_status})."

    return trace
