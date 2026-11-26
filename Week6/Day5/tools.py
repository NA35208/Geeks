

from typing import Dict, Any, Optional

ORDERS_DB = {
    "A104": {
        "order_id": "A104",
        "status": "shipped",
        "carrier": "ExpressPost",
        "delivery_estimate": "2026-11-28",
        "delay_status": "on_time",
        "tracking_number": "TRK98124"
    },
    "A205": {
        "order_id": "A205",
        "status": "processing",
        "carrier": None,
        "delivery_estimate": None,
        "delay_status": None,
        "tracking_number": None
    }
}

POLICIES_DB = {
    "processing": (
        "Orders in 'processing' status are currently being picked and packed at the fulfillment center. "
        "Standard warehouse processing takes 24-48 business hours. If an order remains in processing for more "
        "than 72 hours, the customer is entitled to free priority shipping upgrade on request."
    ),
    "delivery-delay": (
        "For orders currently in transit (shipped) experiencing delivery delays: If transit exceeds the delivery "
        "estimate by 2 or more business days, customers may claim a shipping fee refund or request a priority replacement."
    ),
    "shipped": (
        "Shipped orders are in custody of the courier. Real-time updates appear via the courier tracking code. "
        "Inquiries about transit delays are governed by the Delivery Delay policy."
    ),
    "general": "Standard returns accepted within 30 days of delivery. For status lookups, an order reference is required."
}

def get_order_status(order_id: str) -> Dict[str, Any]:
    oid = order_id.strip().upper()
    if oid in ORDERS_DB:
        return {"found": True, "order": ORDERS_DB[oid]}
    return {"found": False, "error": f"Order {oid} not found in database", "order_id": oid}

def search_policy(topic: str) -> Dict[str, Any]:
    """Search company policies relevant to a specific order status or customer question."""
    t = topic.lower().strip()
    for key, policy in POLICIES_DB.items():
        if key in t or t in key:
            return {"found": True, "topic": key, "policy_text": policy}
    return {
        "found": True,
        "topic": "general",
        "policy_text": POLICIES_DB["general"]
    }

TOOLS_REGISTRY = {
    "get_order_status": get_order_status,
    "search_policy": search_policy
}
