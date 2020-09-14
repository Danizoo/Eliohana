// var randomNum = Math.ceil((Math.random())*100);
// // console.log(randomNum);
// var FirstPercent = 45 //*2 = 90


document.getElementById("button1").onclick = function() {myFunction()};

function myFunction() {

    var randomNum = Math.ceil((Math.random())*100);
    var FirstPercent = 45 //*2 = 90
    var EliOhanaPercent = 98

    if (randomNum < FirstPercent) { //Eli

        document.querySelector("h1").innerText = "!אלי"
        var randomNum2 = Math.ceil((Math.random())*10);
        document.querySelector("img").setAttribute("src", "אלי יצפאן/EY" + randomNum2 +".jpg")
        
    
    } else if (randomNum >= FirstPercent && randomNum < FirstPercent*2) { //Hana
    
        document.querySelector("h1").innerText = "!חנה"
        var randomNum2 = Math.ceil((Math.random())*10);
        document.querySelector("img").setAttribute("src", "חנה לסלאו/HL" + randomNum2 + ".jpg")
        
    
    } else if (randomNum >= FirstPercent*2 && randomNum < EliOhanaPercent) { //Eli Ohana
    
        document.querySelector("h1").innerText = "!אלי אוחנה"
        var randomNum2 = Math.ceil((Math.random())*5);
        document.querySelector("img").setAttribute("src", "אלי אוחנה/EO" + randomNum2 + ".jpg")
        
    
    } else {    //Eli & Hana
    
        document.querySelector("h1").innerText = "!וואו! אלי וחנה"
        var randomNum2 = Math.ceil((Math.random())*10);
        document.querySelector("img").setAttribute("src", "E&H.jpg")
        
    }



}




// if (randomNum < FirstPercent) { //Eli
    
//     document.querySelector("img").setAttribute("src", "אלי יצפאן/EY1.jpg")

// } else if (randomNum >= FirstPercent && randomNum < FirstPercent*2) {

//     document.querySelector("img").setAttribute("src", "חנה לסלאו/HL1.jpg")

// } else if (randomNum >= FirstPercent*2 && randomNum < 98) {

//     document.querySelector("img").setAttribute("src", "אלי אוחנה/EO1.jpg")

// } else {

//     document.querySelector("img").setAttribute("src", "E&H.jpg")
// }