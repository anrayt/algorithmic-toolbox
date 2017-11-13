var testDataSet = getTestData();

testDataSet.map((testData) => doTest(testData));

function doTest(testData) {
    var actual = calculate(testData.initial, testData.arr);

    var isCorrect = checkResult(testData.expected, actual);

    isCorrect ? console.log("Caluclation correct") : showDiff(testData.expected, actual);
}

function showDiff(expected, actual) {
    console.log('Calculation failed');
    console.log('------expected------');
    logResult(expected);
    console.log('------actual------');
    logResult(actual);
}

function logResult(result) {
    console.log('res ----- ' + result.res);
    console.log('first num ----- ' + result.f);
    console.log('second num ----- ' + result.s);
}

function checkResult(expected, actual) {
    return expected.res === actual.res &&
        expected.f === actual.f &&
        expected.s === actual.s;
}

function calculate(initial, arr) {
    var firstNum = -1,
        secondNum = -1;
    for (var i = 0; i < arr.length; i++) {
        var localNum = arr[i];
        if (localNum > secondNum) {
            var tmpSec = secondNum;
            secondNum = localNum;
            localNum = tmpSec;
        }
        if (localNum > firstNum) {
            firstNum = localNum;
        }
    }
    if (initial > firstNum && initial !== secondNum) {
        firstNum = initial;
    }

    return {
        f: secondNum > firstNum ? firstNum : secondNum,
        s: secondNum > firstNum ? secondNum : firstNum,
        res: firstNum * secondNum
    };
}

function getTestData() {
    return [{
            initial: 1,
            arr: [1, 2],
            expected: {
                f: 1,
                s: 2,
                res: 2
            }
        },
        {
            initial: 11,
            arr: [1, 2, 3, 4, 11],
            expected: {
                f: 4,
                s: 11,
                res: 44
            }
        },
        {
            initial: 4,
            arr: [1, 2, 3, 4, 11],
            expected: {
                f: 4,
                s: 11,
                res: 44
            }
        },
        {
            initial: 9,
            arr: [1, 2, 3, 11, 11],
            expected: {
                f: 11,
                s: 11,
                res: 121
            }
        },
        {
            initial: 13,
            arr: [1, 2, 3, 11, 11],
            expected: {
                f: 11,
                s: 13,
                res: 143
            }
        },
        {
            initial: 5,
            arr: [4, 6, 2, 6, 1],
            expected: {
                f: 6,
                s: 6,
                res: 36
            }
        },
        {
            initial: 10,
            arr: [7, 5, 14, 2, 8, 8, 10, 1, 2, 3],
            expected: {
                f: 10,
                s: 14,
                res: 140
            }
        },
        {
            initial: 3,
            arr: [1, 2, 3],
            expected: {
                f: 2,
                s: 3,
                res: 6
            }
        }
    ];
}