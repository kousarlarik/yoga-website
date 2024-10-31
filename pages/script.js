function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    if (username && email && mobile && message) {
        
        const userData = {
            name: username,
            email: email,
            mobile: mobile,
            message: message
        };
        
      
        localStorage.setItem('userData', JSON.stringify(userData));
        
       
        alert('Your message has been successfully sent and stored locally!');

        
        document.getElementById('contactForm').reset();

    } else {
        alert('Please fill in all fields.');
    }
}
