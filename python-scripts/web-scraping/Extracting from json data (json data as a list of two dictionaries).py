import json

#json represents data as lists and dictionaries, here's a list of two dictionaries

data = '''
[
  { "id" : "001",
    "x" : "2",
    "name" : "Ayesha"
  } ,
  { "id" : "009",
    "x" : "7",
    "name" : "Sahar"
  }
]'''

info = json.loads(data)
print('User count:', len(info))

for item in info:
    print('Name', item['name'])
    print('Id', item['id'])
    print('Attribute', item['x'])
