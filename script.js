document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var amount = document.getElementById('amount').value;
    var name = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    
    // In a real scenario, you might perform validation here
    
    // Simulate sending donation data to a server
    setTimeout(function() {
      document.getElementById('message').innerText = 'Thank you, ' + name + '! Your donation of ₹' + amount + ' has been received.';
      document.getElementById('donationForm').reset();
    }, 1000);
  });
  