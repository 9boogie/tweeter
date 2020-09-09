/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweet) {
  const userData = tweet;
  let $tweet = $(`<article class="exist-tweet">
  <h5 class='account-name'>
    <span class="user-name">
      <img src=${userData.user.avatars} alt="userImage">
      ${userData.user.name}
    </span>
    <span class="user-id">
      ${userData.user.handle}
    </span>
  </h5>
  <div class="tweet-body">
    <p>
      ${userData.content.text}
    </p>
  </div>
  <footer class="days-icon">
    <h5>
      ${userData.created_at}
    </h5>
    <div>
      <span class="material-icons">
        flag
      </span>
      <span class="material-icons">
        cached
      </span>
      <span class="material-icons">
        favorite
      </span>
    </div>
  </footer>
</article>`);

  return $tweet;
}

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);

    $('#tweets-container').append($tweet);
  }
}

renderTweets(data);

const tester = moment().startOf('day').fromNow()
console.log(tester);

});