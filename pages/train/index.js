import axios from "axios";

let base_url = 'http://localhost:3000/arr'
let temp, um;
let choose = 1;
let choose_arr = [];
let doc = document;
let btns = doc.querySelectorAll('.header .btn');
let p = doc.querySelector('p');
let input = doc.querySelector('.inputs input');
let btn = doc.querySelector('.enter');
let view__go = doc.querySelector('.view__go');
let view = view__go.parentElement;
let train = doc.querySelector('.train-st');
let count = doc.querySelector('.count')
let arr;
await axios.get(base_url)
    .then(res => {
        arr = res.data;
    })
btns.forEach(btn => {
    btn.onclick = e => {
        choose = +btn.innerHTML.split('').at(0);
    }
})

view__go.onclick = e => {
    view.style.display = 'none';
    train.style.display = 'block';
    um = 59;
    choose_arr = arr.splice(choose - 1 * 60, choose * 60 - 1);
    repeat_rl();
}
function repeat_rl() {
    let r = Math.round(Math.random() * um)
    um--;
    temp = choose_arr[r];
    console.log(temp);
    p.innerText = temp.trn;
    choose_arr = choose_arr.filter(item => choose_arr.indexOf(item) !== r);
    count.innerHTML = choose_arr.length;
}
btn.onclick = e => {
    console.log( temp.eng);
    if (input.value.toLowerCase().trim() !== temp.eng.toLowerCase().trim())
        alert("Ответ:" + temp.eng + '=' + temp.trn)
    repeat_rl();
}