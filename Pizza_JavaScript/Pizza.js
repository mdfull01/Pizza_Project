function getReceipt() {
    //This initializes our string so it can get passed from 
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //find all elements with class name of size and store 
    //their value in sizeArray
    for (var i = 0; i < sizeArray.length; i++) { //iterate through sizeArray and set selectedSize to the value of sizeArray index value that is checked
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //if the value of selectedSize matches this value set sizeTotal to value
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //set value of runningTotal to value of sizeTotal
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1); //calls getTopping
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = []; //array for storing selected toppings
    var toppingArray = document.getElementsByClassName("toppings"); //create toppingArray and 
    //give it values of classname = toppings
    for (var j = 0; j < toppingArray.length; j++) { //iterate through toppingArray looking for values with checked attribute
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //if toppingArray at index j is checked, push its value to selectedTopping array
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length; //set toppingCount to selectedTopping array length
    if (toppingCount > 1) { //this adjusts toppingCount to reflect that the first topping is free and stores new total in toppingTotal
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); 
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; //replace showText content with text1 value
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
    runningTotal+".00"+"</strong></h3>"; //replace totalPrice content with strings and runningTotal
};