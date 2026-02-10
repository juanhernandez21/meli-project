"""Define the User model."""
import json
from pathlib import Path
from pydantic import BaseModel, Field
from enum import Enum
from typing import Any, Dict

base_path = Path(__file__).parent / "data/"

# ---------- MODELOS ----------

class offerStatus(str, Enum):
  """An offer status."""

  active = "active"
  inactive = "inactive"


class offers(BaseModel):
	"""offers models"""

	status: offerStatus = Field(..., example="active")
	offer: Dict[str, Any] = Field(..., example={"id": "123", "price": 100,})

# ---------- HELPERS ----------

class offersHelpers():

	def read_offers(self):
		"""Read offers from the JSON file."""
		json_file = base_path / "offers.json"
		if not json_file.exists():
			return []
		with open(json_file, "r", encoding="utf-8") as f:
			return json.load(f)