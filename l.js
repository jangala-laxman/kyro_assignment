var userArray = [];
var passArray = []
var username = document.getElementById("username").value
var password = document.getElementById("password").value

userArray.push(username)
passArray.push(password)
console.log(userArray+" "+passArray)

function validation()
    {
        var valid = false;
        for (var i=0; i <userArray.length; i++) {
            if ((username == userArray[i]) && (password == passArray[i])) {
                valid = true;
                index = i;
                break;
            }
        }
    }