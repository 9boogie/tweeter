$(document).ready(function() {
  // --- our code goes here ---
  console.log('Testing! ');

  $('#textBox').on("keyup", function(e) {
    const currentLength = $(this).val().length;
    const result = 140 - currentLength;
    //onst charCount = $(this).parent().children('.bottomBody').children('.counter');

    if (currentLength >= 140) {
      return $(".counter").text(result).css({'color': 'red'});
    }

    return $(".counter").text(result);
    });

});