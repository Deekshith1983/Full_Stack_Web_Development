document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const employeeData = { // Creating an object to hold employee data from form inputs
        name:document.getElementById('name').value,
        email:document.getElementById('inputEmail4').value,
        password:document.getElementById('inputPassword4').value,
        address:document.getElementById('inputAddress').value,
        address2:document.getElementById('inputAddress2').value,
        city:document.getElementById('inputCity').value,
        state:document.getElementById('inputState').value,
        zip:document.getElementById('inputZip').value
    };
        fetch('/saveEmployee', { //fetch to send data to server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeData) // Stringify employee data to send as JSON in request body
        })
        .then(response => response.text()) //.then to convert response to text
        .then(data => {
            alert(data);
            console.log('Success:', data);
            document.getElementById('demo').innerHTML = "Form Submitted Successfully";
        })
        .catch(error => {
            alert('Error: ' + error);
            console.error('Error:', error);
        });
});