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
};

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
};



var choiceArr = ["surface", "sed"];

var firstChoice = choiceArr[0];

for (var i = 0; i < relationshipObj[firstChoice].length; i++) {
    if (relationshipObj[firstChoice][i][0] === choiceArr[1]) {
        var test = relationshipObj[firstChoice][i][1];
        $.each(infoObj, function (key, valueObj) {
            if (key === test) {
                console.log(valueObj.title);
                console.log(valueObj.info);
            }//end of inner conditional
        });//end of inner loop
    }//end of  outter conditional
}//end of loop




