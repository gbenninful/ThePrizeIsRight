﻿var prizes = document.getElementsByName("prize");
var showPrize = document.getElementsByName("display");

function reward() {

    for (i = 0; i < prizes.length; i++) {

        if (prizes[i].checked) {
            var selectedPrize = prizes[i].value;

            if (selectedPrize === "door 1") {

                showPrize[0].value = "You won a CAR";      //Alternate approach: showPrize[0].innerHTML = "You won a CAR";

            } else if (selectedPrize === "door 2") {

                showPrize[0].value = "You won a CAT";

            } else if (selectedPrize === "door 3") {

                showPrize[0].value = "Sorry you won NOTHING, Thanks for playing, Goodbye!";

            } else if (selectedPrize === "door 4") {

                showPrize[0].value = "You won a BOAT";

            } else {

                showPrize[0].value = "Sorry I did not understand your selection";
            }
        }
    }

}


function reset() {

    for (i = 0; i < prizes.length; i++) {

        if (prizes[i].checked || showPrize[i].value) {
            prizes[i].checked = false;
            showPrize[i].value = "";
        }
    }
}

