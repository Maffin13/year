 let a = prompt(' Введите свое имя ');
 let year = +prompt(' Введите свой год рождения ');
 let nowYear = +prompt(' Введите нынешний год ');



function sum(nowYear, year){
    let num = nowYear - year;
    return num;
}
console.log(a);
console.log(sum(nowYear, year));
alert(a + ' Вам ' + sum(nowYear, year) + ' лет ' )
