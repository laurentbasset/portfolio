let plus = document.getElementById('Aplus');
let wraps = document.getElementsByClassName('wrap');
plus.addEventListener('click', function(){
    wraps[0].classList.toggle('full');
    
    if(wraps[0].classList.contains('full')){ 
        setTimeout( function(){ plus.innerHTML ='réduire'; }, 800);
    }else{
        setTimeout( function(){ plus.innerHTML ='+ d\'infos'; }, 800);
    }
});


let A = document.getElementById('A');
let B = document.getElementById('B');
A.addEventListener('mouseover', function(){
    A.classList.remove('unactive');
    A.classList.add('active');
    B.classList.add('unactive');
    B.classList.remove('active');
});
B.addEventListener('mouseover', function(){
    B.classList.remove('unactive');
    B.classList.add('active');
    A.classList.add('unactive');
    A.classList.remove('active');
});