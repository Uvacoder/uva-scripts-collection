import config

from twython import Twython, TwythonError

# create a Twython object by passing the necessary secret passwords
twitter = Twython(config.api_key, config.api_secret, config.access_token, config.token_secret)

# return tweets containing #FreeCodeCamp
response = twitter.search(q='"#FreeCodeCamp"  -filter:retweets', result_type="recent", count=100)


# for each tweet returned from search of #FreeCodeCamp
for tweet in response['statuses']:
    # print each username if needed for debugging
    # print(tweet['user']['screen_name'])

    # try to add each user who has tweeted the hashtag to the list
    try:
        twitter.add_list_member(slug='YOUR_LIST_SLUG', owner_screen_name='YOUR_SCREEN_NAME', screen_name= tweet['user']['screen_name'])
    except TwythonError as e:
        print(e)
