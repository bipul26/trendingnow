const videos=[
 {cat:"Music",icon:"♫",title:"Chill Lo-fi Mix — Study & Relax",meta:"Lofi Beats • 3.4M views"},
 {cat:"Gaming",icon:"🎮",title:"Best Gaming Setup for Beginners",meta:"Tech Zone • 1.2M views"},
 {cat:"Tech",icon:"💻",title:"Web Development: HTML, CSS & JS",meta:"Code With Jay • 3.1M views"},
 {cat:"Comedy",icon:"😄",title:"Funny Moments That Make You Laugh",meta:"Bong Comedy • 1.8M views"},
 {cat:"Vlog",icon:"📹",title:"Beautiful Places in Bangladesh",meta:"Travel With Me • 1.9M views"},
 {cat:"Education",icon:"🎓",title:"Learn Something New Every Day",meta:"Study Hub • 892K views"},
 {cat:"Music",icon:"🎧",title:"Night Drive Music Mix",meta:"Neon Beats • 2.7M views"},
 {cat:"Gaming",icon:"🕹️",title:"Top Tips for Better Gameplay",meta:"Game Lab • 980K views"}
];

const grid=document.querySelector("#videoGrid");
function render(list){
 grid.innerHTML=list.length?list.map(v=>`<article class="card"><div class="thumb">${v.icon}</div><div class="card-body"><h3>${v.title}</h3><div class="meta">${v.meta}</div></div></article>`).join(""):`<div class="empty">কোনো ভিডিও পাওয়া যায়নি।</div>`;
}
render(videos);

document.querySelectorAll(".categories button").forEach(btn=>{
 btn.onclick=()=>{
   document.querySelectorAll(".categories button").forEach(b=>b.classList.remove("active"));
   btn.classList.add("active");
   const cat=btn.dataset.cat;
   render(cat==="All"?videos:videos.filter(v=>v.cat===cat));
 };
});

document.querySelector("#search").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase().trim();
 render(videos.filter(v=>(v.title+" "+v.meta+" "+v.cat).toLowerCase().includes(q)));
});

document.querySelector("#menuBtn").onclick=()=>alert("Menu: Home • Trending • Live • Categories • About • Contact");