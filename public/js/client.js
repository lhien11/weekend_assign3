$(function(){
  //console.log('document loaded');

  $('#calculator').on('submit', calculate);
  $('#clear').on('click', clear);
});

function calculate(event) {
  console.log('inside calculate function');
  event.preventDefault();

  var data = $(this).serialize();
  console.log('data', data);

  $.post('/math', data).then(function(response) {
    updateDisplay(response.result);
    clearForm();
  }).catch(function(error) {
    // do stuff
    console.log(error);
  });
}

function updateDisplay(textToDisplay) {
  $('#display').text(textToDisplay);
}

function clearForm() {
  $('#calculator').find('input[type=number], input[type=radio]').val('');
}

function clear() {
  clearForm();
  updateDisplay('');
}
