document.addEventListener('DOMContentLoaded', init, false);
function init(){
  var toggleBtn = document.getElementById('toggleBtn');  

  toggleBtn.addEventListener('click', function() {
  
    var noScroll = document.body;

    if(noScroll.classList.contains('uNoScroll')) {
      noScroll.classList.remove('uNoScroll')
    }else {
      noScroll.classList.add('uNoScroll');
    }

  });

};

