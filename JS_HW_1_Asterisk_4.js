// let item1 = 5
// console.log(item1)
// let item2 = 3
// // console.log(item2)
// let item3 = item1 + item2
// console.log(item3)
// let item4 = "Yolochka"
// console.log(item4)
// console.log(item3 + item4)
// console.log(item3*item4)
// let item5 = item3
// let item6
// let item6_type
// item6 = 15
// item6_type = typeof(item6)
// console.log("-- item6 ==",item6+ ", item6_type ==", item6_type, "--")
// let item7 = String(item6)
// let item7_type
// item7_type = typeof(item7)
// console.log("-- item7 ==",item7 + ", item7_type ==", item7_type, "--")
// // let age_1 = 18
// // let age_2 = 18
// // let age_3 = 60
// // if(age_1 < age_2) {
// //     console.log('29 - 33. ' + 'You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 +'.');
// // } else if(age_1 >= age_2 && age_1 < age_3) {
// //     console.log('29 - 33. ' + 'Welcome  !');
// // } else if(age_1 > age_3) {
// //     console.log('29 - 33. ' + 'Keep calm and look Culture channel');
// // } else {
// //     console.log('29 - 33. ' + 'Technical work');
// // }

// // HW_1* 
// // Задания с разным количеством звездочек:)
// // 1*:
// // Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// // Пример: const checkAge = function(age) {
// // Ваши преобразования
// // }

// let age_2 = 18;
// let age_3 = 60;
// const checkAge = function (age_1) {

//     if (age_1 < age_2) {
//         console.log('You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 + '.');

//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log('Welcome!');

//     } else if (age_1 > age_3) {
//         console.log('Keep calm and look Culture channel!');

//     } else {
//         console.log('Technical work');
//     }
// }
// console.log('Function for checking HW_1*:');
// checkAge(17);
// checkAge(18);
// checkAge(61);


// // 2*:
// // Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// const checkAge2 = function (age_1) {

//     if (typeof (age_1) === 'number' && typeof (age_2) === 'number' && typeof (age_3) === 'number') {
//         if (age_1 < age_2) {
//             console.log('You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 + '.');

//         } else if (age_1 >= age_2 && age_1 < age_3) {
//             console.log('Welcome!');

//         } else if (age_1 > age_3) {
//             console.log('Keep calm and look Culture channel!');

//         } else {
//             console.log('Technical work');
//         }

//     }
//     else
//         console.log('You have a problem with params of your function. The type of each parameter must be number ');


// }
// console.log('Function for checking HW_2*:');
// checkAge2(17);
// checkAge2(18);
// checkAge2(61);
// checkAge2('1d');


// // 3**:
// // Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
// const checkAge3 = function (age_1){ 
  
//      age_2 = parseInt(age_1);
   
//     if (typeof (age_1) === 'number' && typeof (age_2) === 'number' && typeof (age_3) === 'number') {
//         if (age_1 < age_2) {
//             console.log('You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 + '.');

//         } else if (age_1 >= age_2 && age_1 < age_3) {
//             console.log('Welcome!');

//         } else if (age_1 > age_3) {
//             console.log('Keep calm and look Culture channel!');

//         } else {
//             console.log('Technical work');
//         }

//     }
//     else
//         // console.log(age_2);
//         console.log("You have a problem with params of your function. The type of each parameter must be number");
        


// }
// console.log('Function for checking HW_3*:');
// checkAge3('2')


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age_2 = 18;
let age_3 = 60;
const checkAge3 = function (age_1){ 
  
         age_2 = parseInt(age_1);
       
        if (typeof (age_1) === 'number' && typeof (age_2) === 'number' && typeof (age_3) === 'number') {
            if (age_1 < age_2) {
                console.log('You don\'t have access cause your age is ' + age_1 + '. It\'s less then ' + age_2 + '.');
    
            } else if (age_1 >= age_2 && age_1 < age_3) {
                console.log('Welcome!');
    
            } else if (age_1 > age_3) {
                console.log('Keep calm and look Culture channel!');
    
            } else {
                console.log('Technical work');
            }
    
        }
        else
            // console.log(age_2);
            console.log("You have a problem with params of your function. The type of each parameter must be number");
            
    
    
    }
    console.log('Function for checking HW_3*:');
    checkAge3('2')
    
    