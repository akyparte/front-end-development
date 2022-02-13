let username = document.getElementById('sign-in-username');
let password = document.getElementById('sign-in-password');
let login_btn = document.getElementById('sign-in-btn');
let forgot_password = document.getElementById('forgot-pass');
let sign_up_form = document.querySelector(".form.sign-in");


login_btn.addEventListener('click',async () => {

	if(username.value.length && password.value.length){
		let userObj = {
			username: username.value.trim(),
			password: password.value.trim()
		}
		
		let result = await fetch('/sign_in',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body:JSON.stringify(userObj)  
		});
	
		result = await result.json();
		if(result.response === 'authenticated'){
		   // now user is authenticated 
		   // redirect him to chatting home page
		   // useing location.href property
		}else {
		   username.value = 'Invalid username';
		   password.value = 'Invalid password';
		   username.style.border = '1px solid red';
		   password.style.border = '1px sold red';
		}
	
	}else {
        for (let i = 0; i < sign_up_form.children.length - 3; i++) {
            if (sign_up_form.children[i].children[1].value.length === 0) {
                sign_up_form.children[i].children[1].style.border = "1px solid red";
            }
        }
    }
	
});

forgot_password.addEventListener('click',() => {
	// now take him to reset password page
});

