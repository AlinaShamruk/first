// Task A

let message ='Hello';
message='world';
alert(message);


//Task B

let a = 'string';
let b = 1;
let c = false;
let d = {x: 'Я объект и я хочу быть в Алерте',
            y:'А я хочу быть законодателем мод!'};
let e = undefined;
let f = null;


alert(a);
alert(b);
alert(c);
console.log(d);
alert(e);
alert(f);

// Task C

let n = prompt('Сколько вам лет?');
alert(`Вам ${n} лет`);

let a = 0;
for (i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        a += i;
    }
}
console.log(a);


let count = 1;
let fact = 5;
for (let i = 1; i <= fact; i++) {
    count = count * i;
}
console.log(count)



let a = 9;
for (i = 0; i >=0; i++) {
    console.log(a);
    if (a % 2==0){
        a = a/ 2;
    }else {
        a = a * 3 + 1;
    } if (a==1) break;
}

function haes(){
    let x = prompt("Введите число");
    let verh = 0;
    let i = 0;
    let pos = [];
    for (i = verh; i >=0; i++){
     if (i == 0) pos.push(x);
     if (x % 2 == 0) x /= 2;
     else x = x * 3 + 1;
     if (x > verh) verh = x;
     pos.push(x);
     if (x == 1) break;
    }
    alert(`Результат:
    Последовательность: ${pos.join(" ")}  
    Шагов:   ${(i + 1)}  
    Вершина:  ${verh}`);
    };
haes();

// let a = ;
// for (i = 0; i >= 0; i++) {

//     if (a <= 0) {
//         a= a+10;
//         console.log(-a)
//     } else {
//         a = a-9;
//         console.log(a)
//     }
//     if (a == 5) break;
// } console.log(a)


