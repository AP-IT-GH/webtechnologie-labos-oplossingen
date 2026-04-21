function modifyString(inputString, callback) {
    const length = inputString.length;
    callback(length);
}

function printToConsole(result) {
    console.log(result);
}

modifyString("Hello, World!", printToConsole);
