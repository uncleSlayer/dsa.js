const txt = 'eaylnlfdxf'
const pat = 'irc'

const txtMap = {}

for (let i = 0; i < pat.length; i++) {

    if (txtMap[pat[i]]) {
        txtMap[pat[i]]++
    } else {
        txtMap[pat[i]] = 1
    }

}

let l = 0
let r = 0
let ans = 0
let tryMap = {}

while (r < txt.length) {

    if (tryMap[txt[r]]) {
        tryMap[txt[r]]++
    } else {
        tryMap[txt[r]] = 1
    }

    if (r - l + 1 !== pat.length) {
        r++
    } else {
        if (compareMaps(tryMap, txtMap)) ans++
        if (tryMap[txt[l]] > 1) {
            tryMap[txt[l]]--
        } else {
            delete tryMap[txt[l]]
        }
        l++
        r++
    }

}

console.log(ans);

function compareMaps(mapOne, mapTwo) {
    if (Object.keys(mapOne).length === Object.keys(mapTwo).length) {

        for (let keyOne of Object.keys(mapOne)) {
            if (mapOne[keyOne] !== mapTwo[keyOne]) return false
        }

    } else {
        return false
    }

    return true
}
