$(document).ready(function(){
    $("#form").validate({
        rules : {
            name : "required",
            dob : {
                required : true,
                date: true,
            },
            email :{
                required : true,
                email : true,
            },
            phnum :{
                required : true,
                number: true,
                maxlength: 10,
                minlength :10,
            }
        },
        messages : {
            name: "please enter your name",
            dob : {
                required :"D.O.B is mandatory",
                date : "enter your date"
            },
            email :{
                required : "please enter your mail id",
                email: "please enter your valid mail id"
            },
            phnum :{
                required :"please enter your  phone number",
                maxlength: "Your digit value is correct"
            }
        },
    })
})