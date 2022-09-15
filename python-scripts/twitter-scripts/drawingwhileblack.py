import config
from twython import Twython, TwythonError

# create a Twython object by passing the necessary secret passwords
twitter = Twython(config.api_key, config.api_secret,
                  config.access_token, config.token_secret)

# return tweets containing ##drawingwhileblack with an image or video.
# add 'since: 2021-02-26' to query by tweets after a certain date
response = twitter.search(
    q='"#drawingwhileblack"  -filter:retweets filter:media', result_type="recent", count=500)

# for each tweet returned from search of #drawingwhileblack
for tweet in response['statuses']:
    # try to add each user who has tweeted the hashtag to the list
    try:
        print("trying to add " + tweet['user']['screen_name'])
        twitter.add_list_member(
            list_id='1365754875812929537', owner_screen_name='indigitalcolor', screen_name=tweet['user']['screen_name'])
    except TwythonError as e:
        print(e)
