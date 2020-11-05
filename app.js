(function (){
  'use strict';
 
  var btnSetItem = document.querySelector('.btnSetItem')
 
  function setLocalStorage(){
     btnSetItem.addEventListener('click', () => {
      localStorage.setItem('name','ponny')
    })
  }
  setLocalStorage()
 
}());


function getLocalStorage() {
  btnGetItem.addEventListener('click', () => {
      console.log(localStorage.getItem('name'))
    })
}

function removeLocalStorage() {
  btnRemoveItem.addEventListener('click', () => {
      localStorage.removeItem('name')
    })
}

btnSetItem.addEventListener('click', () => {
      localStorage.setItem('name','ponny')
    })