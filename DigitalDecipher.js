const DDecipher = (message, key) => {
    let xkey = [];
    let yKey = key.toString();
    let zkey = yKey.repeat(message.length);
    let total = [];

    for (var a = 0, len = message.length; a < len; a++){
        xkey.push(+zkey.charAt(a));
    }
    
    for (var b = 0; b < message.length; b++){
        total.push(message[b] - xkey[b]);
    }
    
    let word = [];
    for (var c = 0; c < total.length; c++){
        if (total[c] == 1){
            word.push("a");
        } else if (total[c] == 2){
            word.push("b");
        } else if (total[c] == 3){
            word.push("c");
        } else if (total[c] == 4){
            word.push("d");
        } else if (total[c] == 5){
            word.push("e");
        } else if (total[c] == 6){
            word.push("f");
        } else if (total[c] == 7){
            word.push("g");
        } else if (total[c] == 8){
            word.push("h");
        } else if (total[c] == 9){
            word.push("i");
        } else if (total[c] == 10){
            word.push("j");
        } else if (total[c] == 11){
            word.push("k");
        } else if (total[c] == 12){
            word.push("l");
        } else if (total[c] == 13){
            word.push("m");
        } else if (total[c] == 14){
            word.push("n");
        } else if (total[c] == 15){
            word.push("o");
        } else if (total[c] == 16){
            word.push("p");
        } else if (total[c] == 17){
            word.push("q");
        } else if (total[c] == 18){
            word.push("r");
        } else if (total[c] == 19){
            word.push("s");
        } else if (total[c] == 20){
            word.push("t");
        } else if (total[c] == 21){
            word.push("u");
        } else if (total[c] == 22){
            word.push("v");
        } else if (total[c] == 23){
            word.push("w");
        } else if (total[c] == 24){
            word.push("x");
        } else if (total[c] == 25){
            word.push("y");
        } else if (total[c] == 26){
            word.push("z");
        } else{
            console.log("Problem Detected");
        }
    }
    let decipher = word.join("");
    console.log(decipher);
}

DDecipher([20, 12, 18, 30, 21], 1939);
DDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
DDecipher([6, 4, 1, 3, 9, 20], 100);