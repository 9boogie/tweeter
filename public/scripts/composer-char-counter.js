$(document).ready(function() {
  // --- our code goes here ---
  console.log('Testing! ');

  $('#text-box').on("keyup", function(e) {
    const currentLength = $(this).val().length;
    const result = 140 - currentLength;
    const charCount = $(this).parent().parent().find(".counter")

    if (currentLength >= 140) {
      charCount.text(result).css({'color': 'red'});
    }

    charCount.text(result);
    });

});