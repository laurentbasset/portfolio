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


//scrolling
// document.addEventListener('scroll', function(event){
//     let v = document.documentElement.scrollTop;
//     console.log(v);
// });

let A = document.getElementById('A');
let B = document.getElementById('B');
A.addEventListener('mouseover', function(){
    A.classList.remove('mask');
    A.classList.add('active');
    B.classList.add('mask');
    B.classList.remove('active');
});
B.addEventListener('mouseover', function(){
    B.classList.remove('mask');
    B.classList.add('active');
    A.classList.add('mask');
    A.classList.remove('active');
});