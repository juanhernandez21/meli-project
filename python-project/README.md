# process

### Get Orders job

It is executed by running:

```bash
python main.py process-test
```

### Not (necessarilly) in tests

Insert this at the point where you want to debug

```python
import pdb

pdb.set_trace()
```

### Prints

If you can't see prints, use flush

```python
print("asdadssad", flush=True)
```

For dictionaries you may use `pprint`:

```python
from pprint import pprint

pprint(my_dictionary)
```

Or `json.dumps` with indent

```python
import json

print(json.dumps(my_dictionary, indent=4))
```
