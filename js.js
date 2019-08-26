$(document).ready(function () {

    var hideMe = {
        gauss: ["#surfaceCol", "#fiberCol", "#machineCol", "#ledCol", "#sedCol", "#medCol"],
        surface: ["#gaussCol", "#fiberCol", "#machineCol"],
        fiber: ["#gaussCol", "#surfaceCol", "#machineCol"],
        machine: ["#gaussCol", "#surfaceCol", "#fiberCol", "#temCol", "#medCol"],
        tem: ["#machineCol", "#ledCol", "#sedCol", "#medCol", "#exploreCol"],
        led: ["#gaussCol", "#temCol", "#sedCol", "#medCol", "#exploreCol"],
        sed: ["#gaussCol", "#temCol", "#ledCol", "#medCol", "#exploreCol"],
        med: ["#gaussCol", "#machineCol", "#temCol", "#ledCol", "#sedCol", "#exploreCol"],
        explore: ["#temCol", "#ledCol", "#sedCol", "#medCol"]
    }//end of hideMe object

    var relationshipObj = {
        gauss: [["tem", "details1"],
                ["explore", "details14"]
    ],

        surface: [
            ["tem", "details2"],
            ["led", "details5"],
            ["sed", "details8"],
            ["med", "details11"],
            ["explore", "details15"]
        ],

        fiber: [
            ["tem", "details3"],
            ["led", "details6"],
            ["sed", "details9"],
            ["med", "details12"],
            ["explore", "details16"]
        ],

        machine: [
            ["led", "details7"],
            ["sed", "details10"],
            ["explore", "details17"]
        ],

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
        explore: [
            ["gauss", "details1"],
            ["surface", "details15"],
            ["fiber", "details16"],
            ["machine", "details17"]]
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
            info: "Here is some information about Gauss and Tem"
        },
        details5: {
            title: "Surface and LED",
            info: "Here is some information about Surface and LED"
        },
        details6: {
            title: "Fiber and LED",
            info: "Here is some information about Fiber and LED"
        },
        details7: {
            title: "Machine and LED",
            info: "Here is some information about Machine and LED"
        },
        details8: {
            title: "Surface and SED",
            info: "Here is some information about Surface and SED"
        },
        details9: {
            title: "Fiber and SED",
            info: "Here is some information about Fiber and SED"
        },
        details10: {
            title: "Machine and SED",
            info: "Here is some information about Machine and SED"
        },
        details11: {
            title: "Fiber and MED",
            info: "Here is some information about Fiber and MED"
        },
        details12: {
            title: "Fiber and MED",
            info: "Here is some information about Fiber and MED"
        },
        details14: {
            title: "Gauss and Explore",
            info: "Here is some information about Surface and Explore"
        },
        details15: {
            title: "Surface and Explore",
            info: "Here is some information about Surface and Explore"
        },
        details16: {
            title: "Fiber and Explore",
            info: "Here is some information about Fiber and Explore"
        },
        details17: {
            title: "Machine and Explore",
            info: "Here is some information about Machine and Explore"
        }
    };//end of info object

    var choiceArr = [];

    function reset() {
        choiceArr = [];
        var showMeArray = [
            "#gaussCol",
            "#surfaceCol",
            "#fiberCol",
            "#machineCol",
            "#temCol",
            "#ledCol",
            "#sedCol",
            "#medCol",
            "#exploreCol",
        ];//end of showMeArray
        for (j = 0; j < showMeArray.length; j++) {
            $(showMeArray[j]).show("fast");
        }//end of loop
        $("#info").empty();
    }//end of reset function

    function explore() {

    }

    function infoPanel() {
        var firstChoice = choiceArr[0];
        for (var i = 0; i < relationshipObj[firstChoice].length; i++) {
            if (relationshipObj[firstChoice][i][0] === choiceArr[1]) {
                var test = relationshipObj[firstChoice][i][1];
                $.each(infoObj, function (key, valueObj) {
                    if (key === test) {
                        var infoDiv = $("<div id='innerInfo' class='card-body shadow-lg'><div class='card-header'>" + "<h3>" + valueObj.title + "</h3>" + "</div><br><div class='card-text text-center'>" + valueObj.info + "</div></div>");
                        var button = $("<button>");
                        button.html("Reset");
                        button.on("click", function () {
                            reset();
                        });
                        $("#info").append(infoDiv);
                        $("#innerInfo").append(button);
                    }//end of inner conditional
                });//end of inner loop
            }//end of  outter conditional
        }//end of outter loop
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
            explore();
        } else if (choiceArr.indexOf(clickedId) === choiceArr[0] || choiceArr[1]) {
            reset();
        }//end of conditional
    });//end of OnClick
});//end of ready function