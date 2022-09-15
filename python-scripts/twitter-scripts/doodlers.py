import config
from twython import Twython, TwythonError

# create a Twython object by passing the necessary secret passwords
twitter = Twython(config.api_key, config.api_secret,
                  config.access_token, config.token_secret)

# return tweets containing
# SketchTogether
# SketchnoteArmy // not super popular of a hashtag
# letssketchtech
# sketchnote
response = twitter.search(
    q='"#sketchnote"  -filter:retweets', result_type="recent", count=200)

# for each tweet returned from search of #womenofreact2020
for tweet in response['statuses']:
    # try to add each user who has tweeted the hashtag to the list
    try:
        print("trying to add " + tweet['user']['screen_name'])
        twitter.add_list_member(
            list_id='1211648678508875777', owner_screen_name='waterproofheart', screen_name=tweet['user']['screen_name'])
    except TwythonError as e:
        print(e)
