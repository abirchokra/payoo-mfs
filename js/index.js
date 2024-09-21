document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const number = document.getElementById('login-number').value;
    const pass = document.getElementById('login-pass').value;

    console.log(number, pass);

    if (number === '1234' && pass === '1234') {
        window.location.href = "home.html";
        
    }
    else{
        alert('Login Failed');
    }
})