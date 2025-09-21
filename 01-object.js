//1
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
}
console.log(car.year)
//2
let person = {
    name: 'Thịnh',
    adress: {
        street: 'KDT',
        city: 'Hà Nội',
        country: 'Việt Nam'

    }

}
console.log(person.adress.street)
//3
let student = {
    name: 'An',
    grades: {
        Math: 6.5,
        English: 7.5
    }
}
console.log(student.grades.Math)
//4
let setting = {
    volume: 50,
    brightness: 60,
}
setting.volume = 80;
console.log(setting)
//5
let bike = {
    year: 2023,

}
bike.colour = 'Blue'
console.log(bike)
//6
let employee = {
    name: 'Ngân',
    age: 23,
}
delete employee.age;
console.log(employee)
//7
const school = {
    classA: ['AN', 'Bình', 'Châu'],
    classB: ['Đào, Hương, Giang'],

}
