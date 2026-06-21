let zoomLevel=1;
const data={
testis:{title:'Testis Tikus',subtitle:'Preparat reproduksi jantan',image:'https://via.placeholder.com/900x600/222/fff?text=Testis+Tikus',description:'Testis tikus menghasilkan sperma.',structures:[{name:'Tubulus Seminiferus',x:150,y:200}]},
ovarium:{title:'Ovarium Katak',subtitle:'Preparat reproduksi betina',image:'https://via.placeholder.com/900x600/333/fff?text=Ovarium+Katak',description:'Ovarium mengandung folikel.',structures:[{name:'Folikel',x:250,y:160}]},
embrio:{title:'Embrio Ayam',subtitle:'Tahap perkembangan embrio',image:'https://via.placeholder.com/900x600/444/fff?text=Embrio+Ayam',description:'Preparat perkembangan embrio ayam.',structures:[{name:'Blastoderm',x:180,y:140}]}
};

function loadData(key){
const item=data[key];
document.getElementById('title').innerText=item.title;
document.getElementById('subtitle').innerText=item.subtitle;
document.getElementById('mainImage').src=item.image;
document.getElementById('description').innerText=item.description;

const list=document.getElementById('structureList');
list.innerHTML='';
const markers=document.getElementById('markers');
markers.innerHTML='';

item.structures.forEach(s=>{
const li=document.createElement('li');
li.innerText=s.name;
list.appendChild(li);

const marker=document.createElement('div');
marker.className='marker';
marker.style.left=s.x+'px';
marker.style.top=s.y+'px';

marker.onclick=()=>{
document.getElementById('description').innerText=s.name;
};

markers.appendChild(marker);
});
}

function zoomIn(){
zoomLevel+=0.1;
document.getElementById('mainImage').style.transform=`scale(${zoomLevel})`;
}

function zoomOut(){
zoomLevel-=0.1;
if(zoomLevel<1)zoomLevel=1;
document.getElementById('mainImage').style.transform=`scale(${zoomLevel})`;
}
