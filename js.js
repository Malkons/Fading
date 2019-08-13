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

    var relationshipObj = {
        gauss: ["tem"],
        surface: ["tem", "led", "sed", "med"],
        fiber: ["tem", "led", "sed", "med"],
        machine: ["led", "sed", "med"],
        tem: ["gauss", "surface", "fiber"],
        led: ["surface", "fiber", "machine"],
        sed: ["surface", "fiber", "machine"],
        med: ["surface", "fiber"]
    };//end of relationship Object

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

        var firstChoice = choiceArr[0];

        for (var i = 0; i < relationshipObj[firstChoice].length; i++) {
             
            if (relationshipObj[firstChoice][i] === choiceArr[1]) {
                alert(firstChoice + " " + choiceArr[1]);
            }//end of conditional
        }//end of loop

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