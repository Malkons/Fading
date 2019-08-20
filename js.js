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
        gauss: [["tem", "details1"]],

        surface: [
            ["tem", "details2"],
            ["led", "details5"],
            ["sed", "details8"],
            ["med", "details11"]],

        fiber: [
            ["tem", "details3"],
            ["led", "details6"],
            ["sed", "details9"],
            ["med", "details12"]],

        machine: [
            ["led", "details7"],
            ["sed", "details10"]],

        tem: [
            ["gauss", "details1"],
            ["surface", "details2"],
            ["fiber", "details3"]],

        led: [
            ["surface", "details5"],
            ["fiber", "details6"],
            ["machine", "details7"]],

        sed: [
            ["surface", "details8"],
            ["fiber", "details9"],
            ["machine", "details10"]],

        med: [
            ["surface", "details11"],
            ["fiber", "details12"]],
    };//end relationship object

    var infoObj = {
        details1: {
            title: "Gauss and Tem",
            info: "Here is some information about Gauss and tem"
        },
        details2: {
            title: "Surface and Tem",
            info: "Here is some information about Surface and tem"
        },
        details3: {
            title: "Fiber and Tem",
            info: "Here is some information about Fiber and tem"
        },
        details4: {
            title: "Gauss and Tem",
            info: "Here is some information about Gauss and tem"
        },
        details5: {
            title: "Surface and led",
            info: "Here is some information about Surface and led"
        },
        details6: {
            title: "Fiber and led",
            info: "Here is some information about Fiber and led"
        },
        details7: {
            title: "Machine and led",
            info: "Here is some information about Machine and led"
        },
        details8: {
            title: "Surface and sed",
            info: "Here is some information about Surface and sed"
        },
        details9: {
            title: "Fiber and sed",
            info: "Here is some information about Fiber and sed"
        },
        details10: {
            title: "Machine and sed",
            info: "Here is some information about Machine and sed"
        },
        details11: {
            title: "Fiber and med",
            info: "Here is some information about Fiber and med"
        },
        details12: {
            title: "Fiber and med",
            info: "Here is some information about Fiber and med"
        }
    };//end of info object

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
            if (relationshipObj[firstChoice][i][0] === choiceArr[1]) {
                var test = relationshipObj[firstChoice][i][1];
                $.each(infoObj, function (key, valueObj) {
                    if (key === test) {
                        var infoDiv = $("<div>" + valueObj.title + ":" + " " + valueObj.info + "</div>");
                        var button = $("<button>");
                        button.html("reset");
                        button.on("click", function () {
                            reset();
                        });
                        $("#info").append(infoDiv);
                        $("#info").append(button);
                    }//end of inner conditional
                });//end of inner loop
            }//end of  outter conditional
        }//end of loop
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