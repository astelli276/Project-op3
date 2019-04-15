function function1(userChoice) {


    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "steen";
    } else if (computerChoice <= 0.67) {
        computerChoice = "papier";
    } else {
        computerChoice = "schaar";
    }

    var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
            document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>" + "De Bot heeft gekozen voor " + computerChoice + "<br>"+ "<br>" + " Het is gelijkspel!!";
            return "Het is gelijkspel!!";
        }
        if (choice1 === "steen") {
            if (choice2 === "schaar") {
                document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>" + "De Bot heeft gekozen voor " + computerChoice + "<br>"+ "<br>" + " Speler 1 wint!!"
                return "steen wint";
            } else {
                document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>"  + "De Bot heeft gekozen voor " + computerChoice + "<br>"+ "<br>" + " Bot wint!!"
                return "paper wint";
            }
        }
        if (choice1 === "papier") {
            if (choice2 === "steen") {
                document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>" + "De Bot heeft gekozen voor " + computerChoice + "<br>"+ "<br>" + " Speler 1 wint!!"
                return "papier wint";
            } else {
                if (choice2 === "schaar") {
                    document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>" + "De Bot heeft gekozen voor " + computerChoice + "<br>"+ "<br>" + " Bot wint!!"
                    return "scissors wint";
                }
            }
        }
        if (choice1 === "schaar") {
            if (choice2 === "steen") {
                document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>" + "De Bot heeft gekozen voor " + computerChoice + "<br>" + " Bot wint!!"
                return "steen wint";
            } else {
                if (choice2 === "papier") {
                    document.getElementById("antwoord").innerHTML = "Je hebt gekozen voor " + userChoice + "<br>"+ "<br>" + "De Bot heeft gekozen voor " + computerChoice + "<br>"+ "<br>" + " Speler 1 wint!!"
                    return "scissors wins";
                }
            }
        }
    }
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
    compare(userChoice, computerChoice);
}
