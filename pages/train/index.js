import axios from "axios";

let base_url = 'http://localhost:3000/arr'

let choose = 1;
let choose_arr = [];
let doc = document;
let btns = doc.querySelectorAll('.header .btn');
let p = doc.querySelector('p');
let inputs = doc.querySelector('.inputs');
let btn = doc.querySelector('.enter');
let view__go = doc.querySelector('.view__go');
let view = view__go.parentElement;
let train = doc.querySelector('.train-st')
let arr
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

    choose_arr = arr.splice(choose - 1 * 60, choose * 60 - 1);
    
}
