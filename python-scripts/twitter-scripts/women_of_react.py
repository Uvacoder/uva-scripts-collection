import config
from twython import Twython, TwythonError

# create a Twython object by passing the necessary secret passwords
twitter = Twython(config.api_key, config.api_secret,
                  config.access_token, config.token_secret)

# return tweets containing ##womenofreact2020
response = twitter.search(
    q='"#womenofreact2020"  -filter:retweets', result_type="recent", count=500)

# for each tweet returned from search of #womenofreact2020
for tweet in response['statuses']:
    # try to add each user who has tweeted the hashtag to the list
    try:
        print("trying to add " + tweet['user']['screen_name'])
        twitter.add_list_member(
            list_id='1254194185709785089', owner_screen_name='waterproofheart', screen_name=tweet['user']['screen_name'])
    except TwythonError as e:
        print(e)
