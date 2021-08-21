
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