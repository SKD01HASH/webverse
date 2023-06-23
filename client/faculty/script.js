function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const regnoinput=document.getElementById('username');
    const regNo=regnoinput.value;

    console.log(password, regNo )


    fetch("http://localhost:8000//api/v1/faculty/auth/login", {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            regNo :regNo,
            password:password
        })
        
    }).then(res => res.json()).then((data) => {
        
        console.log(data)
       localStorage.setItem("student_token", data.token);
       location.replace("loggedin.html");
        
    })
    .catch(error => {
        // Handle any errors that occur during the login request
        console.error('Error:', error);
      });
  }
  