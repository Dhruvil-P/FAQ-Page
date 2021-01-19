$(document).ready(function(){
    var Drop1 = $("#B1");
    Drop1.on("click" , ()=>{
        $("#Label1-1").toggleClass("Hidden1");
        $("#B1").toggleClass("Rotate");
        $("#Label1").toggleClass("Black");
    })

    var Label2 = $("#Label2");
    var Drop2 = $("#B2");
    Drop2.on("click" , ()=>{
        $("#Label2-1").toggleClass("Hidden2");
        $("#B2").toggleClass("Rotate");
        $("#Label2").toggleClass("Black");
    })

    var Label3 = $("#Label3");
    var Drop3 = $("#B3");
    Drop3.on("click" , ()=>{
        $("#Label3-1").toggleClass("Hidden3");
        $("#B3").toggleClass("Rotate");
        $("#Label3").toggleClass("Black");
    })

    var Label4 = $("#Label4");
    var Drop4 = $("#B4");
    Drop4.on("click" , ()=>{
        $("#Label4-1").toggleClass("Hidden4");
        $("#B4").toggleClass("Rotate");
        $("#Label4").toggleClass("Black");
    })

    var Label5 = $("#Label5");
    var Drop5 = $("#B5");
    Drop5.on("click" , ()=>{
        $("#Label5-1").toggleClass("Hidden5");
        $("#B5").toggleClass("Rotate");
        $("#Label5").toggleClass("Black");
    })
})