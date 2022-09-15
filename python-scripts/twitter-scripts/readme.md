# offScript

## A collection of Python scripts that I have found useful.

### Add Twitter users to a Twitter list
Add users who use specific niche hashtags to a twitter lists in order to have an automated way to group together a community of users.This repository contains 3 examples of this with different communities/hashtags. 
- newwyear_add_members.py
- devdiscuss_add_members.py
- addToFreeCodeCampList.py
- Need help using these scripts?
  - Check out my article on freeCodeCamp *[How I automatically created a Twitter List of FreeCodeCampers in 5 minutes
](https://medium.freecodecamp.org/how-i-automatically-created-a-twitter-list-of-freecodecampers-in-5-minutes-425f0b922118)*.

### Shondaland Tweet Tracking

`twitter_streaming.py` is a Python script to track tweets related to Shondaland in real-time via Twitter's streaming API. 

## setup:
`pip install tweepy`

## run:
Run `twitter_streaming.py` in the command line **after** replacing with your Twitter API credentials and keywords (if applicable).

- Twitter API keys can be generated on [Twitter's Application Management Site](https://apps.twitter.com/). Check out my [freeCodeCamp article on how I used Twython](https://medium.freecodecamp.org/how-i-automatically-created-a-twitter-list-of-freecodecampers-in-5-minutes-425f0b922118) if you need help setting up your Twitter application.


Run with the following command `python twitter_streaming.py`

## run and save output:

You can save the output of data from  `twitter_streaming.py` in `twitter_data.txt` or whatever file name you would like. The command to save the data into `twitter_data.txt` is:  `python twitter_streaming.py > twitter_data.txt`.

Note: `twitter_data.txt` can be replaced with the name of the file you would like to save it as. This will overwrite or create a new file in your current working directory where the output is saved.

## halt/stop script:

Stop the program from running on the command line by pressing `Ctrl-C`.
