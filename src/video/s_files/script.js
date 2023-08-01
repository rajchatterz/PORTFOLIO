let form  = document.getElementById("myform")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let para = document.getElementById("error1")
    let emailValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailValid.test(email)){
        para.innerText="Email is not valid one"
        document.getElementById("email").classList.add('border')
    }
    document.getElementById("email").classList.remove("border")
    form.submit()

})