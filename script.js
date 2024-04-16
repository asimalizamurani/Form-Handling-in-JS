function seterror(id, error) {
//  set error inside tag of
element = document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    returnval = true;
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5) {
        seterror("name", "Length of name is too short")
        returnval = false;
    }


    return returnval;
}