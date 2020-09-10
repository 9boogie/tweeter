$(document).ready(function() {
const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'json',
    success: (posts) => {
      renderTweets(posts);
    },
    error: (error) => {
      console.error(error);
    }
  });
};

loadTweets();

const createTweetElement = function(tweet) {
  const userData = tweet;
  const passedDays = moment(userData.created_at).fromNow()
  let $tweet = $(`
  <article class="exist-tweet">
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
        ${escape(userData.content.text)}
      </p>
    </div>
    <footer class="days-icon">
      <h5>
        ${passedDays}
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
  const $tweetsContainer = $('#tweets-container');
  $tweetsContainer.empty();

  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);

    $('#tweets-container').prepend($tweet);
  }
}

const $postForm = $('#new-post');

$postForm.on('submit', function (event) {
  event.preventDefault();
  const serializedData = $(this).serialize();
  const wordCount = $(this).find('.counter').val();

  if(wordCount >= 140) {
    alert('Please say something :)')
  } else if (wordCount < 0) {
    alert('Too many words! 140 characters limits!')
  } else {
    $.post('http://localhost:8080/tweets',serializedData)
      .then(() => {
        loadTweets();
  
        $("#text-box").val('');
        $(".counter").text(140);
      })
  }
})

});