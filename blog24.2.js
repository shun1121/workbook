function isFilledArray(arr, val) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
    return false
    }
    }
    return true
    }
    const arr0 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    ]
    const arr1 = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
    ]
    const arr2 = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    ]
    const arr3 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    ]
    const arr4 = [
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    ]
    function isBingo(arr, val) {
    if (arr.length !== arr[0].length) {
    console.error('this is not square')
    return false
    }
    const length = arr.length
    let check = []
    for (let a = 0; a < length; a++) {
    check = []
    for (let b = 0; b < length; b++) {
    check.push(arr[a][b])
    }
    if (isFilledArray(check, val)) {
    return true
    }
    }
    for (let a = 0; a < length; a++) {
    check = []
    for (let b = 0; b < length; b++) {
    check.push(arr[b][a])
    }
    if (isFilledArray(check, val)) {
    return true
    }
    }
    check = []
    for (let i = 0; i < length; i++) {
    check.push(arr[i][i])
    }
    if (isFilledArray(check, val)) {
    return true
    }
    check = []
    for (let i = 0; i < length; i++) {
    check.push(arr[length - i - 1][i])
    }
    if (isFilledArray(check, val)) {
    return true
    }
    return false
    }
    console.log(isBingo(arr0, 1))
    console.log(isBingo(arr0, 1))
    console.log(isBingo(arr1, 1))
    console.log(isBingo(arr1, -1))
    console.log(isBingo(arr2, 1))
    console.log(isBingo(arr2, -1))
    console.log(isBingo(arr3, 1))
    console.log(isBingo(arr3, -1))
    console.log(isBingo(arr4, 1))
    console.log(isBingo(arr4, -1))