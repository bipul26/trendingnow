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
const count=document.querySelector("#resultCount");
let currentCategory="All";

function render(list){
  count.textContent=`${list.length} video${list.length===1?'':'s'}`;
  grid.innerHTML=list.length?list.map(v=>`<article class="card" tabindex="0" onclick="showToast('Opening: ${escapeHtml(v.title)}')"><div class="thumb">${v.icon}</div><div class="card-body"><h3>${v.title}</h3><div class="meta">${v.meta}</div></div></article>`).join(""):`<div class="empty">কোনো ভিডিও পাওয়া যায়নি। অন্য কিছু search করে দেখুন।</div>`;
}
function escapeHtml(text){return text.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function filtered(){
  const q=document.querySelector("#search").value.toLowerCase().trim();
  return videos.filter(v=>(currentCategory==="All"||v.cat===currentCategory) && (v.title+" "+v.meta+" "+v.cat).toLowerCase().includes(q));
}
function update(){render(filtered());}
render(videos);

document.querySelectorAll(".categories button").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".categories button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory=btn.dataset.cat;
    update();
  };
});

document.querySelector("#search").addEventListener("input",update);
document.querySelector("#watchNow").onclick=()=>document.querySelector("#trending").scrollIntoView({behavior:"smooth"});
document.querySelector("#goLive").onclick=()=>document.querySelector("#live").scrollIntoView({behavior:"smooth"});
document.querySelector("#menuBtn").onclick=()=>showToast("Home • Trending • Live • Categories • About");

let toastTimer;
function showToast(message){
  const toast=document.querySelector("#toast");
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove("show"),2200);
}
window.showToast=showToast;
