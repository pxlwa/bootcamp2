function submitForm() {
  let name = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let phone = document.getElementById('input-phone').value;
  let subject = document.getElementById('input-subject').value;
  let message = document.getElementById('input-message').value;

  if (name == '') {
    return alert('Name input fields must be not empty');
  } else if (email == '') {
    return alert('Email input fields must be not empty');
  } else if (phone == '') {
    return alert('Phone input fields must be not empty');
  } else if (subject == '') {
    return alert('Subject input fields must be not empty');
  } else if (message == '') {
    return alert('Message input fields must be not empty');
  }

  const emailReciver = 'rhomairama.dev@gmail.com';

  const a = document.createElement('a');

  a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.target = '_blank';
  a.click();

  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
  };
  console.log(dataObject);
}
