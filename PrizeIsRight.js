﻿(function () {

    "use strict";

    var prizes = document.getElementsByName("prize"),
        showPrize = document.getElementsByName("display"),
        i,

        reward = function () {
            var selectedPrize = prizes[i].value;

            document.getElementById("submitBtn").onclick = function () {

                for (i = 0; i < prizes.length; i = i + 1) {

                    if (prizes[i].checked) {

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
                    } else {
                        showPrize[0].innerHTML = "Please make a selection and click submit";
                    }
                }
            };
        },

        reset = function () {

            document.getElementById("resetBtn").onclick = function () {
                for (i = 0; i < prizes.length; i += 1) {

                    if (prizes[i].checked) {
                        prizes[i].checked = false;
                    }
                }

                for (i = 0; i < showPrize.length; i += 1) {

                    if (showPrize[i].value) {
                        showPrize[i].value = "";
                    } else {
                        showPrize[0].innerHTML = "Please make a selection and click submit";
                    }
                }
            };
        };


    window.onload = function () {

        reward();
        reset();

    };

}());




