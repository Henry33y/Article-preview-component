var shareBtn=document.querySelector('#shareBtn');
var shareSVG=document.getElementById('shareSvg');
var shareContainer=document.querySelector('.share-container');
var icon=document.querySelectorAll('.icon');
shareContainer.style.display='none';
shareBtn.addEventListener('click',function(){
    if(shareContainer.style.display==='none'){
        shareContainer.style.display='flex';
        shareBtn.style.backgroundColor='hsl(214, 17%, 51%)';
        shareSVG.style.fill='white';
    }
    else if(shareContainer.style.display==='flex'){
        shareContainer.style.display='none';
        shareBtn.style.backgroundColor='hsl(210, 46%, 95%)';
        shareSVG.style.fill='#6E8098';
    }
})
window.addEventListener('click',function(event){
    if(shareContainer.style.display==='flex' && event.target!==shareBtn && event.target!==shareContainer && event.target!==shareSVG && !shareContainer.contains(event.target)){
        shareContainer.style.display='none';
        shareBtn.style.backgroundColor='hsl(210, 46%, 95%)';
        shareSVG.style.fill='#6E8098';
    }
})
