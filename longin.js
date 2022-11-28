
function signup() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var check = /^\w+@+[a-zA-Z]+\.com$/i;
    document.getElementById("su-name").style.display = "none";
    document.getElementById("su-email").style.display = "none";
    document.getElementById("su-pass").style.display = "none";
    document.getElementById("er-email").style.display = "none";
    if (username == "" || email == "" || pass == "") {
        if (username == "") {
            document.getElementById("su-name").style.display = "block";
        }
        if (email == "") {
            document.getElementById("su-email").style.display = "block";
        }
        if (pass == "") {
            document.getElementById("su-pass").style.display = "block";
        }
    } else if (!check.test(email)) {
        document.getElementById("er-email").style.display = "block";
    }
    else {
        var user = {
            username: username,
            email: email,
            pass: pass,
        }
        var json = JSON.stringify(user);
        localStorage.setItem("account", json);
        document.getElementById("comp2").style.display = "block";
    }
}
function chuyentab() {
    document.getElementById("comp2").style.display = "none";
}

function login() {
    const x = [];
    event.preventDefault();
    var username = document.getElementById("l-user").value;
    var pass = document.getElementById("l-pass").value;
    //var user = localStorage.parse(arrayAccount);
    console.log(JSON.parse(localStorage.getItem("account")));
    x.push(JSON.parse(localStorage.getItem("account")));

    if (username !== x[0].username && pass !== x[0].pass) {
        document.getElementById("error1").style.display = "block";
        document.getElementById("error2").style.display = "none";
    } else if(username === x[0].username && pass !== x[0].pass){
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "block";
    }else {
        window.location.href = "index.html";
    }
    // else if (username == data.username && pass == data.pass) {
    //     var a = document.getElementById("error1").value;
    //     console.log(a);
    //     window.location.href = "index.html";
    // }
    // else {
    //     document.getElementById("error1").style.display = "none";
    //     document.getElementById("error2").style.display = "block";
    // }
}