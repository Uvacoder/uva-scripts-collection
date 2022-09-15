import xml.etree.ElementTree as ET

data = '''<person>
            <name>Ayesha</name>
            <email hide = "yes"/>
            <phone type = "intl">
                +1 000 000 0000
            </phone>
        </person>
        '''

tree = ET.fromstring(data)
print('Name: ', tree.find('name').text)
print('Attr: ', tree.find('email').get('hide'))