
import re
from typing import Dict, Any
from models import SupportExtraction, CategoryType

INITIAL_SYSTEM_PROMPT = """You classify customer support inquiries into:
- order_status
- return_request
- refund_status
Extract the order_id if present.
"""

IMPROVED_SYSTEM_PROMPT = """You classify customer support inquiries into exact categories:
1. 'order_status': Queries regarding shipping tracking, parcel whereabouts, or delivery delays.
2. 'return_request': Inquiries about initiating a return, returning items, or return eligibility (including packages still in transit).
3. 'refund_status': Inquiries specifically regarding money/funds returned to accounts, missing credit, or bank processing times for completed returns.
4. 'payment_issue': Failed payments, declined credit cards, double charges, gateway errors, or invoice billing issues during or immediately following checkout.
5. 'general_inquiry': General brand questions, company policies, or inquiries not fitting the above.

Boundary Disambiguation Rules:
- If a customer asks to return an item that has not yet arrived or is still in delivery, classify as 'return_request' (NOT 'order_status').
- If a customer asks where their refunded money is or why credit hasn't posted, classify as 'refund_status' (NOT 'return_request' or 'payment_issue').
- If a customer has an issue with payment processing or unexpected charges at checkout, classify as 'payment_issue'.
"""

def extract_support_intent(user_message: str, prompt_version: str = "improved") -> SupportExtraction:
  
    text = user_message.strip()
    text_lower = text.lower()

    order_id_match = re.search(r'\b[A-Za-z]\d{3,4}\b', text)
    extracted_order_id = order_id_match.group(0).upper() if order_id_match else None

    if prompt_version == "initial":
        if "return" in text_lower and "delivered" in text_lower:
            category = "order_status"
        elif "refund" in text_lower:
            category = "return_request"  
        elif "charged" in text_lower or "card declined" in text_lower or "payment" in text_lower:
            category = "general_inquiry"
        elif "package" in text_lower or "order" in text_lower:
            category = "order_status"
        else:
            category = "general_inquiry"
    else:
        if any(k in text_lower for k in ["payment", "declined", "charged twice", "double charge", "card failed", "checkout error"]):
            category = "payment_issue"
        elif re.search(r'\brefund(s|ed)?\b', text_lower):
            category = "refund_status"
        elif re.search(r'\breturn(s|ed|ing)?\b', text_lower) and not re.search(r'\breturned an? (error|exception)\b', text_lower):
            category = "return_request"
        elif any(k in text_lower for k in ["order", "package", "where is", "delivery", "late", "track"]):
            category = "order_status"
        else:
            category = "general_inquiry"

    
    requires_clarification, reason = evaluate_clarification_rule(category, extracted_order_id, text)

    return SupportExtraction(
        category=category,
        order_id=extracted_order_id,
        urgency="high" if "late" in text_lower or "declined" in text_lower else "medium",
        requires_clarification=requires_clarification,
        clarification_reason=reason
    )

def evaluate_clarification_rule(category: CategoryType, order_id: str | None, raw_message: str):
    """
    Application business logic that enforces data prerequisites:
    - order_status requires an order_id.
    - return_request requires an order_id to locate items.
    - payment_issue may require order_id or transaction ref.
    """
    if category in ("order_status", "return_request") and not order_id:
        return True, f"Inquiry category '{category}' requires an order reference (e.g., A104)."
    if category == "payment_issue" and not order_id and "order" in raw_message.lower():
        return True, "Payment issue references an order but order ID is missing."
    if raw_message.strip() and not any(c.isalnum() for c in raw_message):
        return True, "Message contains no discernible query."
    return False, None
