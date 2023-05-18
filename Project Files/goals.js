function divide() {

    var x = document.getElementById("first").te;
    var y = document.getElementById("second").value;
    var z = document.getElementById("third").value;
    var result = y/z

    alert("Your monthly savings should be: "+result)



    if(result>=1000 && result<=2000){
        alert("You can buy Reliance stocks");
    }
    else if(result>=2001 && result<=3000){
        alert("You can buy HDFC bank stocks");
    }else if(result>=3001 && result<=4000){
        alert("You can buy Tata Stocks");
    }else if(result>4001){
        alert("You can buy Infosys Stoc");
    }

}


function multiplyAndDivide() {
    divide();

}
