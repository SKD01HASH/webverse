function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const regnoinput=document.getElementById('username');
    const regNo=regnoinput.value;


    fetch("http://localhost:8000/api/v1/student/auth/login", {
        method:"POST",
        body:JSON.stringify(
            {regNo: regNo,
            password: password}
        )
    }).then(res => res.json()).then((data) => {
        console.log(data)
    })
  }
  