// VANTA.BIRDS({
//   el: document.getElementById('vanta-bg'),
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   backgroundColor: 0x333940,
//   backgroundAlpha: 0.30
// })


document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const employeeData = { // Creating an object to hold employee data from form inputs
        employee_id:document.getElementById('Employee_id').value,
        firstname:document.getElementById('firstname').value,
        lastname:document.getElementById('lastname').value,
        email:document.getElementById('inputEmail4').value,
        address:document.getElementById('inputAddress').value,
        mobile_number:document.getElementById('inputNumber').value,
        telephone_number:document.getElementById('inputteleNumber').value,
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
            document.getElementById('employee-form').reset(); //this line to clears the form after successful submission
        })
        .catch(error => {
            alert('Error: ' + error);
            console.error('Error:', error);
        });
});