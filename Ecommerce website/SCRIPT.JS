 // FUNCTION FOR SUBMIT
        
 function submit(){
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var msg = document.getAnimations('msg').value;
    if(name == "" || mail == "" || msg == ""){
        document.getElementById('wrnng').innerHTML = "Fill all fields";
    }else{
        alert('Thank you for your concern.')
    }
}