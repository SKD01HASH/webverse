function validateForm(event) {
    // document.getElementById("registrationForm").addEventListener("submit", function(event) {
    //     event.preventDefault();
    //     submitForm(event);
    //   });
    event.preventDefault(); // Prevent the form from submitting

    const nameInput=document.getElementById('name');
    const name=nameInput.value;
    const regNoInput=document.getElementById('regNo');
    const regno=regNoInput.value;
    const blockInput=document.getElementById('block');
    const block=blockInput.value;
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const roomNoinput=document.getElementById('roomNo');
    const roomNo=roomNoinput.value;


    fetch("http://localhost:8000/api/v1/student/auth/register", {
        method:"POST",
        headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify(
            {
                name:name,
                regno:regno,
                block:block,
                password:password,
                roomNo:roomNo,
                
        }
        )
    }).then(res => res.json()).then((data) => {
        console.log(data)
       localStorage.setItem("student_token", data.token);
       location.replace("dashboard.html");
        
    }).catch((e) => {
        console.log(e); 
    })
  }
  