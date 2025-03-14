
// var dag = "fredag"; // inge tryparse tack gud
// alert(dag); // popup
// console.log("Idag är det "+ dag) //skickar skiten i googles console


// var fördelse = prompt("Var är du född?"); // consol.readline ahh
// console.log("du är föd i "+fördelse)
// if(fördelse = "afrika");{ // svär de c#
//     console.log("mhm")
// }


// var siffran = 10 + 20;
// var  gissning = prompt("vad är 10 + 20")
// if (gissning == siffran || gissning == "fusk" || 30 < gissning < 100){
//     console.log("djurrrr de va rätt")
// }
// else {
//     console.log("du är dum")
// }


// spam check med två random tal
// var slumptal1 = Math.round(Math.random(1) * 100);
// var slumptal2 = Math.round(Math.random(1) * 100);

// var pas = slumptal1 + slumptal2;
// var svar = prompt("vad är " + slumptal1 + " + " + slumptal2)
// if (svar == pas) { console.log("Du hadde rätt wow svaret var " + "(" + pas + ")" + " du är en människa") }
// else { console.log("du är inte en människa lol svaret var " + pas) };


// var input1 = prompt("skriv ett tal");
// var input2 = prompt("skriv ett tal igen");

// var svar = (Number(input1) + Number(input2));
// alert(input1+"+"+input2+"="+svar);  
var loop = true;
while(loop = true){
    var input = prompt("vad är din inkomst")
    var skatt = prompt("vad är din skatt i procent")
    var efterskatt = input*((100- skatt) / 100);
    if (efterskatt < input){
        alert("din netto lön är "+efterskatt);
        loop=false;
    }
    else(alert("du måste skriva in en siffra inga mer symboler eller bokstäver"))
}





// //upgift 1
// var loop = true;
// var rättålder = 15;
// while(loop == true){
//     var svar = prompt("hur gammal är du")
//     if(svar >= rättålder){
//         alert("grattis du får se filmen") 
//         loop=false
//     }
//     else(alert("du får inte se filmen"))
// }



