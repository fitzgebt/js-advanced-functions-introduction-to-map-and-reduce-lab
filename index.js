// Your code here
let test = [1,2,3,4]
let test2 = [1,2,-3,4]

function mapToNegativize(sourceArray) {
    const newArray = []
    for (let num of sourceArray) {
        const n = num * -1
        newArray.push(n)
    }
    return newArray
};

function mapToNoChange(sourceArray) {
    const newArray = []
    for (let num of sourceArray) {
        newArray.push(num)
    }
    return newArray
};

function mapToDouble(sourceArray) {
    const newArray = []
    for (let num of sourceArray) {
        const n = num * 2
        newArray.push(n)
    }
    return newArray
};

function mapToSquare(sourceArray) {
    const newArray = []
    for (let num of sourceArray) {
        const n = num * num
        newArray.push(n)
    }
    return newArray
};

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let num of sourceArray) {
        total = total + num
    }
    return total
};

function reduceToAllTrue(sourceArray) {
    let status = true
    for (let num of sourceArray) {
        // debugger
        if (num === false) {
            status = false;
        }
    }
    return status
};

function reduceToAnyTrue(sourceArray) {
    let status = false
    for (let num of sourceArray) {
        // debugger
        if (num === true) {
            status = true;
        }
    }
    return status
};

