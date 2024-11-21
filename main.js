let form = document.getElementById('form');
let names = document.getElementById('name');
let errorname = document.getElementById('errorname');
let lastname = document.getElementById('lastname');
let errorlastname = document.getElementById('errorlastname');
let email = document.getElementById('email');
let erroremail = document.getElementById('erroremail');
let password = document.getElementById('password');
let errorpassword = document.getElementById('errorpassword');

form.addEventListener('submit' , function (event) {
    let haveErroe = false ;

    errorname.innerHTML='';
    errorlastname.innerHTML='';
    erroremail.innerHTML='';
    errorpassword.innerHTML='';

    if(names.value.trim() ===''){
        haveErroe = true ;
        errorname.innerHTML='لم تدخل الاسم بعد ';
    }
    else if(names.value.trim().length < 3){
        haveErroe = true ;
        errorname.innerHTML='الاسم الذي أدخلته قصير جداً. 3 أحرف هو الحد الأدنى ';
    }

    if(lastname.value.trim() ==='') {
        haveErroe = true ;
        errorlastname.innerHTML='لم تدخل اسم العائله بعد';
    }
    else if(lastname.value.trim().length < 3 ) {
        haveErroe = true ;
        errorlastname.innerHTML='اسم العائلة الذي أدخلته قصير جداً. 3 أحرف هو الحد الأدنى';
    }
    if(email.value.trim() ===''){
        haveErroe = true ;
        erroremail.innerHTML='م تدخل بريدك الالكتروني بعد';
    }
    if(password.value.trim() ===''){
        haveErroe = true ;
        errorpassword.innerHTML='لم تدخل كلمة مرور بعد';

    }

    else if(password.value.trim().length<8){
        haveerroe = true ;
        errorpassword.innerHTML='الرمز الذي ادخلته اقل من 8 احرف';
    }

    if(haveErroe){
        event.preventDefault()
    }
});