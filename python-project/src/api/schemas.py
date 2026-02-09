"""Define validation schemas for the api."""
from enum import Enum
from pydantic import BaseModel
from models.products import products

class HealthStatusEnum(str, Enum):
  """A health status."""

  passed = "pass"
  failed = "fail"
  warned = "warn"


class HealthSchema(BaseModel):
  """An integrated health report."""

  status: HealthStatusEnum
  version: str
  releaseId: str

class ProductSchema(products):
	"""The product model"""


class ProductChangedSchema(BaseModel):
	"""Response when a product was changed."""

	result: str = "Product saved successfully"
	product: ProductSchema

class ProductUnchangedSchema(BaseModel):
	"""Response when a product was not changed."""

	result: str = "Product alredy existed, it was not changed"
	product: ProductSchema

