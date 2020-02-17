export class SMD{

    constructor(){
        
    }

    createNode(element) {
        return document.createElement(element);
    }

    append(parent, element) {
        return parent.appendChild(element);
    }

    collapse(element){

       return element.classList.contains('show') ? element.classList.remove('show') : element.classList.add('show');
       
    }

    modal(){
        return element.classList.contains('show') ? element.classList.remove('show') : element.classList.add('show');
    }

    
}


//new SMD().createNode('button').append('body', 'div');