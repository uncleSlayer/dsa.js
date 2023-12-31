const arr = [100, 200, 300, 400]
const k = 2
let i = 0
let j = 0
let sum = 0
let answer = 0

while (j < arr.length) {
    sum = sum + arr[j]

    if (j - i + 1 < k) {
        j++
    } else if (j - i + 1 === k) {
        answer = Math.max(answer, sum)
        sum -= arr[i]
        i++
        j++
    }
}

console.log(answer);
