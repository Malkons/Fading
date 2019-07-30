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

     var choiceArr = [];

    $(".routecard").on("click", function () {
        var clickedId = $(this).attr("id");
        for (var i = 0; i < hideMe[clickedId].length; i++) {
            $(hideMe[clickedId][i]).hide("fast");
        }//end of loop
    
        choiceArr.push(clickedId);

        if (choiceArr.length === 2) {
                var div = $("<div>" + choiceArr[0] + " " + choiceArr[1] + "</div>");
                
                $("#info").append(div);
            console.log(choiceArr);
        };//end of conditional

    });//end of OnClick

});//end of ready function