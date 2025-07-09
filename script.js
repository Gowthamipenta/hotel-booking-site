document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;

  const confirmationMessage = `
    Thank you, ${name}!<br/>
    Your booking from <strong>${checkin}</strong> to <strong>${checkout}</strong> for <strong>${guests}</strong> guest(s) has been confirmed.
  `;

  document.getElementById('confirmation').innerHTML = confirmationMessage;
});
