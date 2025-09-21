function mutiply(a, b) {
    return a * b
}
//2
function findMin(a, b, c) { //a<b<c =(a<b)<c
    if (a < b & a < c) {
        return a

    }
    if (b < a & b < c) {
        return b


    } else {
        return c
    }
}
console.log(findMin(5, 3, 2))



function getTopstudent(student, thrhore) {
    let result = []
    for (let i = 0; i < student.length; i++) {
        if (student[i].score >= thrhore) {
            result.push(student[i].name)
        }
    }
    return result
}
let student = [
    { name: 'An', score: 8.6 },
    { name: 'Bình', score: 8.7 }
]
console.log(getTopstudent(student, 8.0))
//4
//4
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100
    return total;

}
console.log(calculateInterest(1000,6,3))
