function getShareLinkContainer(node){
if (node===null) {
    return node;
}

let shareLinkContainer=document.createElement('div');
shareLinkContainer.classList.add('share-link-container')


let shareText=document.createElement('span');
shareText.classList.add('share-text')
shareText.innerText="SHARE"


let shareLinkGroup=document.createElement('div');
shareLinkGroup.classList.add('share-link-group')

const itemImageSrcs=[
    './images/icon-facebook.svg',
    './images/icon-twitter.svg',
    './images/icon-pinterest.svg',
];

for(let src of itemImageSrcs){
    let a=document.createElement('a');
    let img=document.createElement('img');
    a.href="#"
    a.style="display: flex"
    img.src=src
    a.appendChild(img)
    shareLinkGroup.append(a);
}

shareLinkContainer.appendChild(shareText)
shareLinkContainer.appendChild(shareLinkGroup)

node.append(shareLinkContainer)
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
        getShareLinkContainer(event.currentTarget)
    }
    else{
        sharedIcon.src="./images/icon-share.svg"
        removeElementByClassName(event.currentTarget,'share-link-container')
    }
})
