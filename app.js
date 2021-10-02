//task1 
// cities=()=> ['LA', 'new york', 'karachi','islamabad']

// let [ city_1 , city_2, city_3 , city_4 ] =cities()

// console.log(city_1)
// console.log(city_2)
// console.log(city_3)
// console.log(city_4)

//task1 


// let student = {
//     my_name :'jaweria alam',
//     age: 22,
//     contact :6453
// }

// let { name ,age, rollno} = student

// console.log(my_name);
// console.log(age);
// console.log(contact);


// task 3
// function arr(a, b, c , d ,e) {
//     console.log(a);
//     console.log(b);
//     console.log(c); 
//     console.log(d); 
//     console.log(e); 

//   }
  
//   const num_arry = ['1', '2', '3' , '4' , '5'];

  
  
//   arr(... num_arry);


//task4
// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

// if (firstNames.length == lastNames.length){


   
//     //  let newarray = firstNames[i].concat(lastNames[i])
//     //  console.log(newarray)

//     let a = firstNames.map((c,o)=>
//     {
//         return firstNames[o].concat(lastNames[o])
    
//     })

//     console.log(a)

// }




//task5
// let arr = [1,2,3,4,5]
// let x = arr.map((i)=>i*2)
// console.log(` double is ${x}`);


//task6
// square fuction
// const sqr = num => {
//     return num*num;
// };
// console.log(sqr(5));





//task7
// var authenticated=true;
// var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed'))

//answer : you r allowed 

//task8
// var ageee = 12;
// var canDrive = ageee > 18 ? 'yes' : 'no';
// console.log(canDrive)

//answer : no

//task9
// const dog='snickers'
// logdog(dog);
// function logdog(dog){
// console.log(dog)
//         }
// function go(){
// const dog='sunny';
// logdog(dog)
//          }
//answer: snickers

//task10

// let text= `He's often called "Johnny"`;
// console.log(text)// answer : He's often called "Johnny"

//task11
// function welcomeMsg(name = "Everyone") {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
// welcomeMsg("Faiza")
// welcomeMsg()

//answer: 
//Welcome Faiza
//Welcome Everyone

//task 12
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('resolve');
//     }, 5000);
//   });


// myPromise
//    .then(res=> console.log(res))
//    .catch(err=> console.log(err))
