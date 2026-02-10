"""Define the User model."""
import json
from pathlib import Path
from pydantic import BaseModel, Field
from enum import Enum
from typing import Any, Dict

base_path = Path(__file__).parent / "data/"

# ---------- MODELOS ----------

class sellerStatus(str, Enum):
  """An product status."""

  active = "active"
  inactive = "inactive"


class sellers(BaseModel):
	"""sellers models"""

	status: sellerStatus = Field(..., example="active")
	seller: Dict[str, Any] = Field(..., example={"id": "123", "sales": 100,})

# ---------- HELPERS ----------

class sellersHelpers():

	def read_sellers(self):
		"""Read sellers from the JSON file."""
		json_file = base_path / "sellers.json"
		if not json_file.exists():
			return []
		with open(json_file, "r", encoding="utf-8") as f:
			return json.load(f)