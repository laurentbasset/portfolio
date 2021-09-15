let cheatCode = '       ';
let colors = ['purple', 'blue', 'green', 'yellow', 'orange','red', 'violet'];
let rainbow = new String();
//const str = document.getElementById('csg').innerText;
let texts = Array.from(document.getElementsByTagName('p'));
let titles1 = Array.from(document.getElementsByTagName('h1'));
let titles2 = Array.from(document.getElementsByTagName('h2'));
let titles3 = Array.from(document.getElementsByTagName('h3'));
let spans = Array.from(document.getElementsByTagName('spans'));
//let links = Array.from(document.getElementsByTagName('a'));
let allTxt = new Array();
allTxt = texts.concat(titles1).concat(titles2).concat(titles3).concat(spans);

let j = 0;
let easterEgg;


document.addEventListener('keydown', (event) => {
    const ltr = event.key;
    //console.log(ltr);
    if(ltr == 'Control') { clearInterval(easterEgg); }
    //////////////////// Rainbow
    cheatCode = cheatCode.concat(ltr);
    cheatCode = cheatCode.slice(1);
    console.log(cheatCode);

    // launching the rainbow
    if(cheatCode == 'rainbow') {  easterEgg = setInterval(Rainbow, 120); }
    if (cheatCode == 'backtoclassic') { backToClassic(); }
});

function Rainbow() {
    console.log(allTxt.length);

    for (let h = 0; h<allTxt.length; h++){
        
        let str = allTxt[h].innerText;
        for (let i=0; i<str.length; i++) {
             rainbow += setLetterColor(str.charAt(i));
        }
        allTxt[h].innerHTML = rainbow;
        rainbow = ''; 
    }
}

// change each letter as a span with color style
function setLetterColor(ltrP) {
    if(ltrP != ' '){
        j++;
        let span = '<span style="color:'+getColor()+'">'+ltrP+'</span>';
        return span;
    }else{
        return ' ';
    }
}

// pick a color in the list of rainbow's colors
function getColor(){
    if(j == 7) { j = 0; }
    return (colors[j]);
}

// back to sad classic style
function backToClassic() {
    cheatCode = '       ';
    //document.getElementById('csg').innerHTML = str;
}