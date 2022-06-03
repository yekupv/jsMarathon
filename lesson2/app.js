const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}


    function dragstart(e){
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    
    
}
function dragend(e){
    e.target.classList.remove('hide')
    e.target.classList.remove('hold') 
}

function dragover(e){
    e.preventDefault()

}

function dragenter(e){
    console.log(e.target)
    if(e.target.classList.contains('1')){
        e.target.classList.add('hovered1');
        document.querySelector('.item').style.background = 'linear-gradient(90deg, #ff85e4 0%, #229efd 179.25%)'
    } 
    else if(e.target.classList.contains('2')){
        e.target.classList.add('hovered2')
        document.querySelector('.item').style.background = 'linear-gradient(90deg, #209cff 0%, #68e0cf 100%)'
    }
    else if(e.target.classList.contains('3')){
        document.querySelector('.item').style.background = 'linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)'
        e.target.classList.add('hovered3')
    }


}

function dragleave(e){
    
    if(e.target.classList.contains('1')){
        e.target.classList.remove('hovered1')
    } 
    else if(e.target.classList.contains('2')){
        
        e.target.classList.remove('hovered2')
    }
    else if(e.target.classList.contains('3')){
        e.target.classList.remove('hovered3')
    }
}

function dragdrop(e){
    
    if(e.target.classList.contains('1')){
        e.target.classList.remove('hovered1')
    } 
    else if(e.target.classList.contains('2')){
        e.target.classList.remove('hovered2')
    }
    else if(e.target.classList.contains('3')){
        e.target.classList.remove('hovered3')
    }
    e.target.append(item)
}
