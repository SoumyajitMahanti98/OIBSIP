var objUser = [
    {
        username: "Soumyajit",
        password: "soumyajit@2001"
    },
    {
        username: "Mijan",
        password: "mijan@2003"
    },
    {
        username: "Rahul",
        password: "rahul@2002"
    }
]


function getDetails() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (!username && !password) {
        alert('Please enter both username and password.');
        return;
    }
    for (i=0;i<objUser.length;i++) {
        if (username == objUser[i].username && password == objUser[i].password) {
            alert("loggedin successfully :(");
            document.write(username + "is logedin !0");
            return
        }
    }
    console.log("incorrect username and password");
    alert("incorrect username and password");
}