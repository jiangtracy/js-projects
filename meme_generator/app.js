const imgMeme = document.querySelector('#image');
const l1 = document.querySelector('#line-1');
const l2 = document.querySelector('#line-2');
const parentTag = document.querySelector('div[class="containerMeme"]');
const formInfo = document.querySelector('form')
let lineTop, lineBottom, newMeme, text, contain, remBtn, deleteBtn;


const init = function(){
  imgMeme.value = '';
  l1.value = '';
  l2.value = '';
  newTag();
  createMeme();
}

const createMeme = function(){
  
  imgMeme.addEventListener('input', function(e){
    newMeme.src = e.target.value;
  })

  l1.addEventListener('input', function(e){;
    textTop.innerHTML = e.target.value;
  })

  l2.addEventListener('input', function(e){
    textBot.innerHTML = e.target.value;
  })

  remBtn.innerText = 'Delete';

  addClass();

  deleteBtn = document.querySelectorAll('.delete');

  deleteBtn.forEach((ele) => {
    ele.addEventListener('click', function(){
      ele.closest('.cust-container').remove();
    });
  })
  
  
  formInfo.addEventListener('submit', function(e){
      e.preventDefault();
      remBtn.classList.remove('hidden');
      removeEmptyTag();
      init();
  })
}

const addClass = function(){
  contain.classList.add('cust-container')
  text_img_con.classList.add('combined-container')
  imgCon.classList.add('img-container');
  textTop.classList.add('top');
  textBot.classList.add('bot');
  remBtn.classList.add('delete');
  remBtn.classList.add('hidden');
}

const newTag = function(){
  contain = document.createElement('div');
  text_img_con = document.createElement('div');
  imgCon = document.createElement('div');
  newMeme = document.createElement('img');
  textTop = document.createElement('div');
  textBot = document.createElement('div');
  remBtn = document.createElement('button');

  parentTag.append(contain);
  contain.append(text_img_con);
  text_img_con.append(imgCon);
  imgCon.append(newMeme);
  text_img_con.append(textTop);
  text_img_con.append(textBot);
  contain.append(remBtn);
}

const removeEmptyTag = function(){
  if(!newMeme.src){
    newMeme.closest('.cust-container').remove();
  }
}

const removeMeme = function(){
  remBtn.closest('.cust-container').remove();
}

init();


