
function validate() {

    let name = document.querySelector(".username");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let btn = document.querySelector(".submit");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {

            emptyerror();

        } else { /*(name.value !== "" || email.value !== "" || msg.value !== "")*/

            sendmail(name.value, email.value, msg.value);
            success();

            name.value = "";
            email.value = "";
            msg.value = "";
        }
    });
}
validate();

function sendmail(name, email, msg){
    emailjs.send("service_bj1y8vn","template_as5swkt", {
    to_name: name,
    from_name: email,
    message: msg,
    });
}
  

function emptyerror() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Veuillez renseigner tous les champs !",
    });
}

function success() {
    Swal.fire({
        icon: "success",
        title: "Envoyé",
        text: "Message envoyé avec succès",
    });
}

function validation(){

    const email = document.querySelector("#email");
    const icon = document.querySelector(".icon");

    const pattern = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    icon.style.display = "inline-block";

    if(email.value.match(pattern)){

        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';

    } else if(email.value == ""){

        icon.style.display = "none";

    } else {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
    }

}


// const email = document.querySelector("#email");

// email.addEventListener("click" , event => {
//     event.preventDefault();

//     // let input = document.querySelector('input[type="email"]');

//     var emailReg = new RegExp(/^([w-.]+)@((?:[w]+.)+)([a-zA-Z]{2,4})/i);
//     var valid = emailReg.test(email);

//     if(!valid) {
//         email.classList.add('invalid');
//     } else {
//         email.classList.add('valid');
//     }
    
// }) 
