"""Define the User model."""
import json
from pathlib import Path
from pydantic import BaseModel, Field
from enum import Enum
from typing import Any, Dict

base_path = Path(__file__).parent / "data/"

# ---------- MODELOS ----------

class productStatus(str, Enum):
  """An product status."""

  active = "active"
  inactive = "inactive"


class products(BaseModel):
	"""products models"""

	status: productStatus = Field(..., example="active")
	product: Dict[str, Any] = Field(..., example={"id": "123", "descripction":"mouse"})

# ---------- HELPERS ----------

class helpers():

	def read_products(self):
		"""Read products from the JSON file."""
		json_file = base_path / "products.json"
		if not json_file.exists():
			return []
		with open(json_file, "r", encoding="utf-8") as f:
			return json.load(f)