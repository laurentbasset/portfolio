let gallery = document.querySelector('#gallery');
let projects = gallery.getElementsByClassName('project');

gallery.addEventListener('click',function(e){
    let t = e.target;
   
    if(t.classList.contains('imgProj')){
        let par = t.parentNode;
        toogleProject(par.parentNode);
    }
    if(t.classList.contains('titleProj')){
        toogleProject(t.parentNode);
    }
});

function toogleProject(project){
//close all others opened projects
   for(let j=0; j<projects.length; j++){
        if(projects[j] != project && projects[j].classList.contains("column") ){
            closeProject(projects[j]);
        }
}

// open/close project
    if(project.classList.contains("column")){
        setTimeout(function(){ project.classList.toggle('column'); }, 300);
    }else{
        project.classList.toggle('column');
    }

    let childs = project.childNodes;
    let img = childs[1];
    let txt = childs[5];
    img.classList.toggle('thumb');
    setTimeout(function(){ txt.classList.toggle('visible'); }, 300);
    
}

function closeProject(project){
    setTimeout(function(){ project.classList.toggle('column'); }, 300);
    let childs = project.childNodes;
    let img = childs[1];
    let txt = childs[5];
    img.classList.toggle('thumb');
    setTimeout(function(){ txt.classList.toggle('visible'); }, 300); 
}


//location.hash = "#"+project.id;