var nameerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var submiterror = document.getElementById('submit-error');


function validetname(){

    var name = document.getElementById('contact-name').value;

    if(name.lenght == 0){
        nameerror.innerHTML= 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = 'write full name';
        nameerror.style.color = "red";
        return false;    
    }
        nameerror.innerHTML = 'valid';
        nameerror.style.color = "green";
        return true;
}

function validetphone(){

    var phone = document.getElementById('contact-phone').value;

    if(phone.lenght == 0){
        phoneerror.innerHTML= 'phone is required';
        return false;
    }
    if(!phone.match(/^\d{3}-\d{3}-\d{4}$/)){
        phoneerror.innerHTML = 'write full phone';
        phoneerror.style.color = "red";
        return false;    
    }
        phoneerror.innerHTML = 'valid';
        phoneerror.style.color = "green";
        return true;
}

function validetemail(){

    var email = document.getElementById('contact-email').value;

    if(email.lenght == 0){
        emailerror.innerHTML= 'email is required';
        return false;
    }
    if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailerror.innerHTML = 'write full email';
        emailerror.style.color = "red";
        return false;    
    }
        emailerror.innerHTML = 'valid';
        emailerror.style.color = "green";
        return true;
}

function validetmessage(){

    var message = document.getElementById('contact-message').value;
    // console.log(message);
    var required = 30;
    var numberchrleft = required - message.length;

    if(message.lenght == 0){
        messageerror.innerHTML= 'Message is required';
        return false;
    }

    console.log(numberchrleft)

    if(numberchrleft > 0){
        messageerror.innerHTML = numberchrleft + 'more characters  required';
        messageerror.style.color = "red";
        return false;
    }
        messageerror.innerHTML = 'valid';
        messageerror.style.color = "green";
        return true;
}

function formvalidet(){
    if(!validetname() || !validetphone() || !validetemail() || !validetmessgae()){
        submiterror.innerHTML = 'please enter ur information !';
        submiterror.style.color = "red";
        setTimeout(function(){submiterror.style.display = 'none';},3000);
        return false;
    }
}