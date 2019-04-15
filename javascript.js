//function functie1(choice1){

var min = 1;
var max = 10;

var Random = ["*", "/", "+", "-"];
var rand = Random[Math.floor(Math.random() * Random.length)];

function show() {


    var getal1 = Math.floor(Math.random() * (+max - +min) + +min);
    var getal2 = Math.floor(Math.random() * (+max - +min) + +min);

    var antwoord1 = eval(getal1 + rand + getal2);

    document.getElementById("test3").value = getal1 + " ? " + getal2 + "=" + antwoord1;
}





function controleer() {


    if (rand == document.getElementById('testInput').value) {

        document.getElementById('test2').innerHTML = "Correct!";
        setTimeout(function() {
            location.reload();
        }, 3000);

    } else {

        document.getElementById('test2').innerHTML = "Fout!";
        setTimeout(function() {
            location.reload();
        }, 3000);
    }

}


function plus() {
    var input = document.getElementById('testInput');
    input.value = "+";


}

function minSom() {
    var input = document.getElementById('testInput');
    input.value = "-";
}

function keer() {
    var input = document.getElementById('testInput');
    input.value = "*";
}

function delen() {
    var input = document.getElementById('testInput');
    input.value = "/";
}
