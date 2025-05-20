import fruit, {apple, grape} from './export.js'
console.log('apple:', apple)
console.log('grape:', grape)
console.log('orange:', orange)
console.log('키위는 안됨')

import orange, * as fruits from './export.js'
console.log('fruits:',fruits)
console.log('fruits.apple:',fruits.apple)
console.log('fruits.grape:',fruits.grape)
console.log('fruits.kiwi:',fruits.kiwi)
console.log('fruits.default:',fruits.default)