var item= document.querySelector('ul')
item.addEventListener('click',complete)

function complete(e) {
  if (e.target.tagName=='SPAN'){ console.log(e.target.parentNode)
    fetch('messages', {
        method:'put', 
        headers:{'Content-Type': 'application/json'}, 
        body:JSON.stringify({
        toDoList:e.target.innerText, 
        completed:e.target.parentNode.classList.contains  ('completed')
      })
    })
      .then(function(res){
        window.location.reload()
      })
}
};

document.querySelector(".deletedCompletedItems").addEventListener('click', function () {
    fetch('completed', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      window.location.reload()
    })
});

document.querySelector(".clearAll").addEventListener('click', function () {
  fetch('clear', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    window.location.reload()
  })
});

// Array.from(trash).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const toDoList = this.parentNode.parentNode.childNodes[1].innerText
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'toDoList': toDoList
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });