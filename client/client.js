/**
* Templates
*/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
}

Template.input.events = {
  'click input#submit': function () {
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
 
      if (message.value != '') {
        Messages.insert({
          name: name.value,
          email: email.value,          
          message: message.value,
          time: Date.now(),
        });
				document.getElementById('name').value = '';
				name.value = '';
				document.getElementById('email').value = '';
				email.value = '';
        document.getElementById('message').value = '';
        message.value = '';
      } else {
      	alert("Please fill out the form in its entirety!");
      }
    }
  }