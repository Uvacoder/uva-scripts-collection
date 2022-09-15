#! C:\Python39\python.exe

import sys
import requests
import pyperclip

if __name__ == "__main__":
    print("Python google font css link generator and checker")
    if(len(sys.argv) < 3):
        print("Insufficient argument passed")
        print("Structure:")
        print('\tfont "fontFamily" "fontWeight"')
        exit()
    font_family = sys.argv[1].replace(" ", "+")
    font_weight = sys.argv[2].replace(" ", ";")
    google_fonts_url = "https://fonts.googleapis.com/css2?family=" + \
        font_family+":wght@"+font_weight+"&display=swap"
    html_to_copy = f'<link rel="preconnect" href="https://fonts.gstatic.com"/>\n<link rel="stylesheet" href="{google_fonts_url}"/>'
    r = requests.get(google_fonts_url)
    response = r.status_code
    if response == 200:
        print("Below html have been copied")
        print(html_to_copy)
        pyperclip.copy(html_to_copy)
    elif response == 400:
        print('Font not found')
    else:
        print("Something went wrong")
