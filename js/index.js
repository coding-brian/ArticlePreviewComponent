function getShareLinkContainer(){

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

shareLinkContainer.appendChild(shareText)
shareLinkContainer.appendChild(shareLinkGroup)

return shareLinkContainer
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

let sharedbutton=document.querySelector('.share-container')

sharedbutton.addEventListener('click',(event)=>{  
    event.currentTarget.classList.toggle('active')
    const sharedIcon=document.getElementById('sharedIcon')
    if(event.currentTarget.classList.contains('active')){
        sharedIcon.src="./images/icon-white-share.svg"
        event.currentTarget.append(getShareLinkContainer(event.currentTarget))
    }
    else{
        sharedIcon.src="./images/icon-share.svg"
        removeElementByClassName(event.currentTarget,'share-link-container')
    }
})

sharedbutton.addEventListener('blur',(event)=>{
    event.currentTarget.classList.remove('active')
    const sharedIcon=document.getElementById('sharedIcon')
    sharedIcon.src="./images/icon-share.svg"
    removeElementByClassName(event.currentTarget,'share-link-container')
})
