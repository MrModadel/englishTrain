import axios from "axios";
let doc = document;
let base_url = 'http://localhost:3000/arr';
let close = doc.querySelector('.modal__close');
let btn_start = doc.querySelector('.btn_start');
let modal = doc.querySelector('.modal');
let open = doc.querySelector('.btn_add');
let form = doc.forms.newWords;
let main_arr = [];
let keys = [];
await axios.get(base_url).then(res_i => {
  main_arr = res_i.data
})
for (let el of main_arr) {
  keys.push(el.eng);
}
open.onclick = e => {
  modal.style.display = 'flex';
  setTimeout(() => modal.style.opacity = 1, 300);
}
close.onclick = e => {
  modal.style.display = 'none';
}

let or = 1;
let prt = {
  0: 0,
  1: -116,
  2: 116
}
let items = form.querySelectorAll('.item');
form.onsubmit = e => {
  e.preventDefault();
  let item = items[or];
  let in_1 = item.children.eng;
  console.log(item);
  if (in_1.value.length > 0) {
    let obj = {};
    axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=ru&q=${in_1.value}`)
      .then(trn => {
        obj = {
          eng: in_1.value,
          trn: trn.data[0][0][0]
        };

        axios.post(base_url, obj)
          .then(res => {
            items.forEach(element => {
              element.style.translate = `${prt[or]}% 0 `;
            });
            or++;
            or = or % 3;
            in_1.value = ''
          })
      })
  }
}

btn_start.onclick = e => {
  location.assign('/pages/train/')
}
