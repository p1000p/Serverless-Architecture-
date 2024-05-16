function submitForm() {
    event.preventDefault();

    // Get form Data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Check if form fields are empty
    if (!name || !email || !phone || !password) {
        alert('Please fill out all fields');
        return;
    }

    // Create request object 
    const xhr = new XMLHttpRequest();

    // Set up Request 
    xhr.open('POST', 'https://kdbj7n86ca.execute-api.ap-south-1.amazonaws.com/prod/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Registration successful');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('password').value = '';
            } else {
                alert('Registration failed: ' + xhr.responseText);
            }
        }
    };

    // Handle errors
    xhr.onerror = function () {
        alert('Error occurred while sending request');
    };

    // Send the request
    xhr.send(JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password
    }));
}
