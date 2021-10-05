btnAdd.onclick = function() {
  console.log('click and add');
};

document.querySelector('input').addEventListener('keyup', function(e) {
  if(e.key === 'Enter') {
    console.log('press enter');
  }
});