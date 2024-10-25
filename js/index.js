function isMobile() {
    return window.innerWidth <= 375;
}

function removeElementByClassName(node,className){
    if(node===null){
        return node
    }
    
    const htmlCollection=node.getElementsByClassName(className)
    
    if(htmlCollection){
        for(let i=0;i<htmlCollection.length;i++){
            htmlCollection[i].remove()
        }
        return node
    }
    
    return node
    }

function getShareLinkContainer(){

let dev=document.createElement('div');
dev.style="display: flex;"

let shareLinkContainer=document.createElement('div');
shareLinkContainer.classList.add('share-link-container')


let shareText=document.createElement('span');
shareText.classList.add('share-text')
shareText.innerText="SHARE"


let shareLinkGroup=document.createElement('div');
shareLinkGroup.classList.add('share-link-group')

const shareLinkImgSrcs=[
    './images/icon-facebook.svg',
    './images/icon-twitter.svg',
    './images/icon-pinterest.svg',
];


for(let src of shareLinkImgSrcs){
    let a=document.createElement('a');
    a.href="#"

    let img=document.createElement('img');
    img.src=src

    a.appendChild(img)
    shareLinkGroup.append(a);
}



dev.append(shareText)
dev.append(shareLinkGroup)

shareLinkContainer.appendChild(dev)

if(isMobile()){
    const shareConatiner=document.querySelector('.share-container')
    shareConatiner.removeEventListener('blur',handleBlur)
    const shareConatinerCloneNode=document.querySelector('.share-container').cloneNode(true)
    shareConatinerCloneNode.classList.add('test')
    shareConatinerCloneNode.addEventListener('click',handleClick)
    shareConatinerCloneNode.addEventListener('blur',handleBlur)
    shareLinkContainer.append(shareConatinerCloneNode)
}

return shareLinkContainer
}

function appendShareLinkContainer(){
    const shareLinkContainer=getShareLinkContainer()
    
    if(isMobile()){
        const container=document.querySelector('.container')
        container.insertAdjacentElement('afterend',shareLinkContainer)
        shareLinkContainer.querySelector('.share-container').focus()
    }
    else{
        const shareContainer=document.querySelector('.share-container') 
        shareContainer.append(shareLinkContainer)
    }

    return true
}

function removeShareLinkContainer(){
    if(isMobile()){
        const main=document.querySelector('main')
        main.querySelector('.share-link-container').querySelector('.share-container').removeEventListener('blur',handleBlur)
        removeElementByClassName(main,'share-link-container')
        
    }
    else
    {
        const shareContainer=document.querySelector('.share-container') 
        removeElementByClassName(shareContainer,'share-link-container')
            
    }

    return true
}



const shareConatiner=document.querySelector('.share-container')

function handleClick(event){
    
    event.currentTarget.classList.toggle('active')
    const sharedIcon=event.currentTarget.querySelector('#sharedIcon')

    if(event.currentTarget.classList.contains('active')){
        sharedIcon.src="./images/icon-white-share.svg"
        appendShareLinkContainer()

        if(isMobile()){
            const author=document.querySelector('.author')
            author.style="display:none;"
        } 

        

    }
    else{
    
        handleBlur()
        
    }
}

function handleBlur(event){ 
    removeShareLinkContainer()

    if(isMobile()){
        const author=document.querySelector('.author')
        author.style="display:flex"
    }

    document.querySelector('.share-container').classList.remove('active')
    document.querySelector('#sharedIcon').src="./images/icon-share.svg"
}

shareConatiner.addEventListener('click',handleClick)

shareConatiner.addEventListener('blur',handleBlur)
