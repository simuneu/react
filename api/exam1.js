// mutation{
//   createProfile(
//     name:"lee ring"
//     age:12
//     school:"happt highschool"
//   ){
//     message
//   }
// }

// query{
//   fetchProfile(name :"lee ring"){
//     name
//     age
//     school
//   }
// }

// mutation{
//   createBoard(
//     writer:"lee",
//     title:"hi tom",
//     contents:"welcome"
//   ) {
//     _id
//     number
//     message
//   }
// }

// 조회
// query{
//   fetchBoard(number:116) {
//     number
//     writer
//     title
//     contents
//     like
//     createdAt
//   }
// }

// mutation{
//  	createProduct(
//     seller:"lee"
//     createProductInput:{
//       name:"phone"
//       detail:"good"
//       price:10000
//     }
//   ){
//     _id
//     number
//     message
//   }
// }
