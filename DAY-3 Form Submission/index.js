function submitForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let emailReceiver = "kholisnurfajri1@gmail.com";
    
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);
    
    
    if (name == ""){
        alert("Isi Nama Anda!!!")
    };
    
    if (email == ""){
        alert("Isi Email Anda!!!")
    };
    
    if (number == ""){
        alert("Isi Nomor Handphone Anda!!!")
    };
    
    let a = document.createElement ("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hi my name is ${name}, ${number}, ${message}`;
    a.click();
    
    }
    
    
    
    
    