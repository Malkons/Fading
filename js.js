$(document).ready(function () {

    var hideMe = {
        gauss: ["#surface", "#fiber", "#machine", "#led", "#sed", "#med"],
        surface: ["#gauss", "#fiber", "#machine"],
        fiber: ["#gauss", "#surface", "#machine"],
        machine: ["#gauss", "#surface", "#fiber", "#tem", "#med"],
        tem: ["#machine", "#led", "#sed", "#med"],
        led: ["#gauss", "#tem", "#sed", "#med", "#explore"],
        sed: ["#gauss", "#tem", "#led", "#med", "#explore"],
        med: ["#gauss", "#machine", "#tem", "#led", "#sed", "#explore"],
        explore: ["#tem", "#led", "#sed", "#med"]
    }//end of hideMe object

    var infoObj = {
        details1: {
            title: "Gauss and TEM",
            info: "Here is some info about Gauss and TEM"
        }
    }

    var choiceArr = [];

    function reset() {
        choiceArr = [];
        var showMeArray = [
            "#gauss",
            "#surface",
            "#fiber",
            "#machine",
            "#tem",
            "#led",
            "#sed",
            "#med",
            "#explore",
        ];//end of showMeArray
        for (j = 0; j < showMeArray.length; j++) {
            $(showMeArray[j]).show("fast");
        }//end of loop
        $("#info").empty();
    }//end of reset function


    function infoPanel() {

        if (choiceArr[0] === "gauss" && choiceArr[1] === "tem") {
            alert("gauss and tem");
        } else if (choiceArr[0] === "tem" && choiceArr[1] === "gauss") {
            alert("gauss and tem");
        }

        if (choiceArr[0] === "surface" && choiceArr[1] === "tem") {
            alert("surface and tem");
        } else if (choiceArr[0] === "tem" && choiceArr[1] === "surface") {
            alert("surface and tem");
        }

        if (choiceArr[0] === "surface" && choiceArr[1] === "led") {
            alert("surface and led");
        } else if (choiceArr[0] === "led" && choiceArr[1] === "surface") {
            alert("surface and led");
        }

        if (choiceArr[0] === "surface" && choiceArr[1] === "sed") {
            alert("surface and sed");
        } else if (choiceArr[0] === "sed" && choiceArr[1] === "surface") {
            alert("surface and sed");
        }

        if (choiceArr[0] === "surface" && choiceArr[1] === "med") {
            alert("surface and med");
        } else if (choiceArr[0] === "med" && choiceArr[1] === "surface") {
            alert("surface and med");
        }

        if (choiceArr[0] === "fiber" && choiceArr[1] === "tem") {
            alert("fiber and tem");
        } else if (choiceArr[0] === "tem" && choiceArr[1] === "fiber") {
            alert("fiber and tem");
        }

        if (choiceArr[0] === "fiber" && choiceArr[1] === "led") {
            alert("fiber and led");
        } else if (choiceArr[0] === "led" && choiceArr[1] === "fiber") {
            alert("fiber and led");
        }
        
        if (choiceArr[0] === "fiber" && choiceArr[1] === "sed") {
            alert("fiber and sed");
        } else if (choiceArr[0] === "sed" && choiceArr[1] === "fiber") {
            alert("fiber and sed");
        }

        if (choiceArr[0] === "fiber" && choiceArr[1] === "med") {
            alert("fiber and med");
        } else if (choiceArr[0] === "med" && choiceArr[1] === "fiber") {
            alert("fiber and med");
        }

        if (choiceArr[0] === "machine" && choiceArr[1] === "led") {
            alert("machine and led");
        } else if (choiceArr[0] === "led" && choiceArr[1] === "machine") {
            alert("machine and led");
        }

        if (choiceArr[0] === "machine" && choiceArr[1] === "sed") {
            alert("machine and sed");
        } else if (choiceArr[0] === "sed" && choiceArr[1] === "machine") {
            alert("machine and sed");
        }

        console.log("User picks =" + " " + choiceArr);
        /*
                var div = $("<div>" + choiceArr[0] + " " + choiceArr[1] + "</div>");
                var button = $("<button>");
                button.html("click me");
                button.on("click", function () {
                    reset();
                });
                $("#info").append(div);
                $("#info").append(button);
                $("#info").show("fast");
                
                */
    }//end of infoPanel function

    $(".routecard").on("click", function () {
        var clickedId = $(this).attr("id");
        for (var i = 0; i < hideMe[clickedId].length; i++) {
            $(hideMe[clickedId][i]).hide("fast");
        }//end of loop
        choiceArr.push(clickedId);
        if (choiceArr.length === 2) {
            infoPanel();
        } else if (clickedId === "explore") {
            alert("hello");
            reset();
        } else if (choiceArr.indexOf(clickedId) === choiceArr[0] || choiceArr[1]) {
            reset();
        }//end of conditional
    });//end of OnClick
});//end of ready function