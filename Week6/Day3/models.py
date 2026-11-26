

from typing import Literal, Optional
from pydantic import BaseModel, ConfigDict, Field, ValidationError

CategoryType = Literal[
    "order_status",
    "return_request",
    "refund_status",
    "payment_issue",
    "general_inquiry"
]

class SupportExtraction(BaseModel):
  
    model_config = ConfigDict(extra="forbid")

    category: CategoryType
    order_id: Optional[str] = Field(
        default=None, 
        description="Extracted alphanumeric order identifier, e.g. 'A104'"
    )
    urgency: Literal["low", "medium", "high"] = Field(
        default="medium",
        description="Assessed priority of the inquiry"
    )
    requires_clarification: bool = Field(
        default=False,
        description="Whether the request is missing essential information needed to proceed"
    )
    clarification_reason: Optional[str] = Field(
        default=None,
        description="Explanation of what missing piece of information is required"
    )
