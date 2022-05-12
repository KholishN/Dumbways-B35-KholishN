const penerima = "kholisnurfajri1@gmail.com"

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("phone-number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);


    if (name == ""){
        alert("Tolong Isi Nama Kamu");
    };
    if (email == ""){
        alert("Tolong Isi Email Kamu");
    };
    
    if (phone == ""){
        alert("Tolong Isi Nomor Handphone Kamu");
    };
    
    


    let a = document.createElement("a");

    a.href=`mailto:${penerima}?subject=${subject}&Body=Hey,My Name is${name},${subject},${message}`
    a.click();
    
};


