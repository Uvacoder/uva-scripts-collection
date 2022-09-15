import json

data = '''
{
  "name" : "Ayesha",
  "phone" : {
    "type" : "intl",
    "number" : "+1 000 000 0000"
   },
   "email" : {
     "hide" : "yes"
   }
}'''

info = json.loads(data)
print('Name:', info["name"])
print('Hide:', info["email"]["hide"])
