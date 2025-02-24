function sendMail(){
    var sends = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_kabtdwa";
    const templateID = "template_ewymim1";
    

    if(sends.name && sends.email && sends.message)
        {
        emailjs
        .send(serviceID, templateID, sends)
        .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message send succesfully");

    })
    .catch((err) => console.log(err));
    }else{
        alert("Please Fill Out The Boxes");
    }
}