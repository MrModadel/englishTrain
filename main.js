import axios from "axios";
let doc = document;
let base_url = 'http://localhost:3000/arr'
let close = doc.querySelector('.modal__close');
let modal = doc.querySelector('.modal');
let open = doc.querySelector('.btn_add');
let form = doc.forms.newWords;
open.onclick = e => {
  modal.style.display = 'flex';
  setTimeout(() => modal.style.opacity = 1, 300);
}
close.onclick = e => {
  modal.style.display = 'none';
}
form.onsubmit = e => {
  e.preventDefault();
  let items = form.querySelectorAll('.item');
  items.forEach(item => {
    let in_1 = item.children.eng;
    if (in_1.value.length > 0) {
      let obj = {};
      axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=ru&q=${in_1.value}`)
        .then(trn => {
          obj = {
            eng: in_1.value,
            trn: trn.data[0][0][0]
          };
          axios.get(base_url + '/?eng=' + in_1.value).then(res_i => {
            if (res_i.data.length === 0) {
              axios.post(base_url, obj)
                .then(res => console.log(res))
            }
          })
        })
    }
  });
}
