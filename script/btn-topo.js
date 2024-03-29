const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadeWindow = window.innerHeight*5;

function animarScroll(){
    const topoItem = scrollAnima.getBoundingClientRect().top;
    const itemVisivel = topoItem - metadeWindow<0;
    
    if(itemVisivel){
        scrollAnima.classList.add('showBtnTopo');
    }
    else{
        scrollAnima.classList.remove('showBtnTopo');
    }
}
if(metadeWindow == 0){
    animarScroll();
}

window.addEventListener('scroll', animarScroll);