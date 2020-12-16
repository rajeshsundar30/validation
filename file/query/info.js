// $(document).ready(function(){
//     $("#btn1").click(function(){
//      var name = $("input[type='text']").val();
//      if(name === "" || name === null){
//      alert('Search anything here');
//      }else{
//          alert(name + '' +' this is you typed');
//          console.log(name);
//      }
//     alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click( () =>{
//         alert("Html: " + $("#test").html());
//     });
//     $("a").click( () =>{
//         alert($("#wrk").attr("href"));
//     })
// });

// "G20gle"

// $(document).ready(function(){
// $(".btn").click(function(){
//     let inputVal = $('.box input').val();

//     $(".box h1").text(function(i, oldText){
//         console.log('index value', i);
//         let value = "G"+ Number(inputVal) * 2 +"gle";
//         return value;
//     });
// });
// });
// $(document).ready(function(){
//     $(".boxLevel").click(function(){
//         let width = $(".boxLevel").width();
//         let innerwidth = $(".boxLevel").innerWidth();
//         let outerWidth = $(".boxLevel").outerWidth();
//         console.log("width",width, "iinnerWidth", innerwidth, "outerWidth", outerWidth)
//     })
// })

// $(document).ready(function(){
//     $(".box input").click(function(){
//         let widthBox = $(".box input").innerWidth();
//         console.log(widthBox);
//     })
// })

$(document).ready(function(){
    $(".btn").click(function(){
        $(".box h1").addClass("GOGLE");
    })
    $(".box h1").click(function(){
        $(".box h1").removeClass("GOGLE");
    })
    $(".btn").click(function(){
        $(".box input").fadeOut("slow");
    })
    $(".btn").click(function(){
         $(".cover").slideToggle("slow");
     })
})