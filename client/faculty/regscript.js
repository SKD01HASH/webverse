function validateForm(event) {
    // document.getElementById("registrationForm").addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     submitForm(event);
    //   });
    event.preventDefault(); // Prevent the form from submitting

    const nameInput=document.getElementById('name');
    const name=nameInput.value;
    const regNoInput=document.getElementById('empId');
    const regno=regNoInput.value;
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const isHODinput=document.getElementById('isHOD');
    const isHOD=isHOD.value;
    
    fetch("http://localhost:8000//api/v1/faculty/auth/register", {
        method:"POST",
        headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify(
            {
                name:name,
                empId:regno,
                password:password,
                isHOD: (isHOD == "yes" ? true: false)
                
        }
        )
    }).then(res => res.json()).then((data) => {
        console.log(data)
       localStorage.setItem("student_token", data.token);
       location.replace("loggedin.html");
        
    }).catch((e) => {
        console.log(e); 
    })
  }
  