import pandas as pd
import requests
from bs4 import BeautifulSoup

# Change this URL with a valid location from https://forecast.weather.gov/
page = requests.get(
    'https://forecast.weather.gov/MapClick.php?lat=37.777120000000025&lon=-122.41963999999996')

soup = BeautifulSoup(page.content, "html.parser")

week = soup.find(id='seven-day-forecast-body')
items = week.find_all(class_='tombstone-container')

period_names = [item.find(class_='period-name').get_text() for item in items]
short_description = [item.find(class_='short-desc').get_text()
                     for item in items]
temperatures = [item.find(class_='temp').get_text() for item in items]

weather_stuff = pd.DataFrame(
    {
        'period': period_names,
        'short_description': short_description,
        'temperatures': temperatures,
    })

print(weather_stuff)
print(weather_stuff.to_csv('weather.csv'))
