# weather-to-csv

_A web scraper built with Python and BS4 that gathers weather forecast data and converts it to CSV._

---

## Run this file

### Prerequisites

Make sure you have [Python](https://www.python.org/) installed.

Once finished, [fork this repository](https://github.com/BraydenTW/weather-to-csv) and run the following command in your terminal:

```sh
python scraper.py
```

Doing this, there will be an output in your terminal and a .csv file automatically generated with the given forecast data. (`weather.csv`)

## Customize the location 📍

**Currently**, the location is set on [San Francisco, CA](https://forecast.weather.gov/MapClick.php?lat=37.777120000000025&lon=-122.41963999999996). In order to change where you want it:

1. Go to https://forecast.weather.gov.
2. Search for the city/town you want.
3. Copy the URL and paste it into the `requests.get()` function.

```py
page = requests.get('') # Change this URL with a valid location from https://forecast.weather.gov/
```

---

_This was **not orignally** created by me. This was made by following a tutorial from [CleverProgrammer's Python Course](https://www.youtube.com/watch?v=4F2m91eKmts)_.
