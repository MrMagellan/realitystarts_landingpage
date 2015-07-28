$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.1703212062': $('.form-control.email-field').val(),
      }

      $.post("https://docs.google.com/a/realitystarts.com/forms/d/1s44PQKgHwtRt5ipNkctSdoiIEvrT1VsvMDDW7voFBrs/formResponse", data);

      return false;
  }

  $('#target').submit(function(event) {
    event.preventDefault();
    console.log("THIS WORKS")
    $('.btn.btn-primary.btn-lg.btn-block').hide();   
    $('.form-control.email-field').hide(); 
    $('.success-text').show();
    $('.form-group').css("@media (max-width:768px){ .form-group{ height: 135px;}}")
    $('.form-group').css("height", "100px");

    postToGoogle();

  });

});
