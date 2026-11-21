const $ = s => document.querySelector(s);
const MES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const TIPO = { Note:"Nota", Transcript:"Transcripción", Letter:"Carta" };
const TIPO_D = { Note:"Texto escrito a mano o reporte de investigación.", Transcript:"Grabación en cinta transcrita.", Letter:"Dirigida a un destinatario concreto." };
const state = { w:"Delilah", type:"all", q:"", id:null, page:0, all:false };

const words = n => n.p.join(" ").split(/\s+/).filter(Boolean).length;
const parse = d => { if(!d) return null; const [m,dd,y]=d.split("/").map(Number); return {m,d:dd,y}; };
const fecha = d => { const p=parse(d); return p ? `${p.d} de ${MES[p.m-1]} de ${p.y}` : "Sin fecha"; };
const el = (tag, cls, html) => { const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; };
const esc = s => s.replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const mine = () => NOTES.filter(n => n.w === state.w);

function visible(){
  const q = state.q.trim().toLowerCase();
  return mine().filter(n =>
    (state.type==="all" || n.t===state.type) &&
    (!q || (n.ti+" "+n.p.join(" ")).toLowerCase().includes(q)));
}

function renderStats(){
  const L = mine(), ys = L.map(n=>parse(n.d)?.y).filter(Boolean);
  const piezas = L.reduce((a,n)=>a+n.p.length,0), pal = L.reduce((a,n)=>a+words(n),0);
  const rango = ys.length ? `${Math.min(...ys)}–${Math.max(...ys)}` : "—";
  const sin = L.filter(n=>!n.d).length;
  const data = [[L.length,"escritos"],[piezas,"fragmentos"],[pal.toLocaleString("es"),"palabras"],[rango,"años"],[sin,"sin fecha"]];
  $("#stats").innerHTML = data.map(([a,b])=>`<div class="stat"><b>${a}</b><span>${b}</span></div>`).join("");
}

function renderFilters(){
  const tipos = ["all", ...new Set(mine().map(n=>n.t))];
  const f = $("#filters"); f.innerHTML="";
  tipos.forEach(t=>{
    const c = el("button","chip"+(state.type===t?" on":""), t==="all"?"Todo":TIPO[t]+"s");
    c.onclick=()=>{state.type=t;renderFilters();renderList();};
    f.append(c);
  });
}

function renderList(){
  const ul = $("#list"); ul.innerHTML="";
  const v = visible();
  if(!v.length){ ul.append(el("li","empty","Nada coincide. Prueba otra palabra o quita el filtro.")); return; }
  v.forEach(n=>{
    const li = el("li"), b = el("button","item"+(n.id===state.id?" on":""),
      `<h3>${esc(n.ti)}</h3><small>${TIPO[n.t]} · ${n.d?fecha(n.d):"Sin fecha"} · ${n.p.length} frag.</small>`);
    b.onclick=()=>open(n.id,true);
    li.append(b); ul.append(li);
  });
}

function open(id, scroll){
  state.id=id; state.page=0; state.all=false;
  renderList(); renderReader();
  if(scroll && innerWidth<=820) $("#reader").scrollIntoView();
}

function renderReader(){
  const r = $("#reader"), n = NOTES.find(x=>x.id===state.id);
  if(!n){ r.innerHTML=`<div class="paper"><h2>Elige un escrito</h2><p class="text">Selecciona una nota de la lista para leerla y ver sus datos.</p></div>`; return; }
  const total = n.p.length, w = words(n);
  const same = mine().filter(x=>x.id!==n.id && parse(x.d) && parse(n.d) && parse(x.d).y===parse(n.d).y);
  r.innerHTML = `
  <div class="paper ${n.t}${n.stain?" stain":""}">
    <span class="badge">${TIPO[n.t]}</span>
    <h2>${esc(n.ti)}</h2>
    <p class="meta">${fecha(n.d)} · escrito por ${n.w}</p>
    ${n.to?`<p class="to">Para: <b>${esc(n.to)}</b></p>`:""}
    <div class="text">${n.p.map((t,i)=>`<div class="piece" data-i="${i}">${t.split("\n\n").map(s=>`<p>${esc(s)}</p>`).join("")}</div>`).join("")}</div>
    <div class="pager">
      <button id="prev">Anterior</button><span class="pos" id="pos"></span><button id="next">Siguiente</button>
      <button class="all" id="all"></button>
    </div>
    ${n.t==="Letter"?`<p class="sign">— ${n.w}</p>`:""}
  </div>
  <section class="data"><h3>Datos extra</h3><dl>
    <div><dt>Escritor</dt><dd>${n.w}</dd></div>
    <div><dt>Tipo</dt><dd>${TIPO[n.t]}</dd></div>
    <div><dt>Qué significa</dt><dd>${TIPO_D[n.t]}</dd></div>
    <div><dt>Fecha</dt><dd>${fecha(n.d)}</dd></div>
    ${n.to?`<div><dt>Destinatario</dt><dd>${esc(n.to)}</dd></div>`:""}
    <div><dt>Fragmentos (IDs)</dt><dd>${total} (${n.id}.1${total>1?` a ${n.id}.${total}`:""})</dd></div>
    <div><dt>Palabras</dt><dd>${w} · ~${Math.max(1,Math.round(w/200))} min</dd></div>
    <div><dt>Mancha de Ichor</dt><dd>${n.stain?"Sí, la carta está manchada":"No"}</dd></div>
    <div><dt>Número de nota</dt><dd>#${n.id} de ${NOTES.length}</dd></div>
  </dl>
  ${same.length?`<div class="rel" id="rel"><span class="meta">Mismo año:</span></div>`:""}
  </section>`;
  $("#prev").onclick=()=>{state.page--;state.all=false;sync(n)};
  $("#next").onclick=()=>{state.page++;state.all=false;sync(n)};
  $("#all").onclick=()=>{state.all=!state.all;sync(n)};
  same.forEach(x=>{const b=el("button","",esc(x.ti)); b.onclick=()=>open(x.id,true); $("#rel").append(b);});
  sync(n);
}

function sync(n){
  const t=n.p.length;
  document.querySelectorAll(".piece").forEach(p=>p.classList.toggle("show", state.all || +p.dataset.i===state.page));
  $("#pos").textContent = state.all ? `${t} de ${t} fragmentos` : `Fragmento ${state.page+1} de ${t}`;
  $("#prev").disabled = state.all || state.page===0;
  $("#next").disabled = state.all || state.page===t-1;
  $("#all").textContent = state.all ? "Ver de a uno" : "Ver todo";
  $("#all").hidden = t===1; $("#prev").hidden = $("#next").hidden = t===1;
}

document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{
  state.w=b.dataset.w; state.type="all"; state.q=""; $("#q").value="";
  document.body.dataset.writer=state.w;
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("on",t===b));
  renderStats(); renderFilters(); open(mine()[0].id,false);
});
$("#q").oninput=e=>{state.q=e.target.value;renderList();};
renderStats(); renderFilters(); open(mine()[0].id,false);
