var relationshipObj = {
    gauss: ["tem"],
    surface: ["tem", "led", "sed", "med"],
    fiber: ["tem", "led", "sed", "med"],
    machine: ["led", "sed", "med"],
    tem: ["gauss", "surface", "fiber"],
    led: ["surface", "fiber", "machine"],
    sed: ["surface", "fiber", "machine"],
    med: ["surface", "fiber"]
};

var choiceArr = ["sed", "surface"];

var firstChoice = choiceArr[0];

for (var i = 0; i < relationshipObj[firstChoice].length; i++) {
     
    if (relationshipObj[firstChoice][i] === choiceArr[1]) {
        alert(firstChoice + " " + choiceArr[1]);
    }//end of conditional
}//end of loop