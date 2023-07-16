let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");
let button = document.querySelector("button");


button.addEventListener("click", () => {
    if(password.value === passwordConfirm.value){
        if(password.value === ""){
            alert("fields can't be empty")
        }else{
            alert("success");
        }
    }else{
        alert("fields don't match");
    }
})