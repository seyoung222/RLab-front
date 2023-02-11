let ul = document.querySelector('ul');

const checkClick = (i) => {
   if(ul.children[i].querySelector('span').style.textDecorationLine === "line-through"){
      ul.children[i].querySelector('span').style.textDecorationLine = '';
   } else {
      ul.children[i].querySelector('span').style.textDecorationLine = "line-through"
   }
}

for(let i = 0; i < ul.childElementCount; i++){
   ul.children[i].querySelector('input').value = i
   ul.children[i].querySelector('input').setAttribute('onClick', `checkClick(${i})`);
}