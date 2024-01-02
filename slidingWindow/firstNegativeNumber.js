// https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1

const arr = [12, -1, -7, 8, -15, 30, 16, 28]

const k = 2

let l = 0
let r = 0
let answer = []
let negList = []

while (r < arr.length) {

    if (arr[r] < 0) negList.push(arr[r])

    if (r - l + 1 !== k) {

        r++

    } else if (r - l + 1 === k) {
        if (negList.length === 0) answer.push(0)

        if (negList.length > 0) answer.push(negList[0])

        if (negList[0] === arr[l]) negList.shift()

        l++
        r++
    }

}

console.log(answer);
