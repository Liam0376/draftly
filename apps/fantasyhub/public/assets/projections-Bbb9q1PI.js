import{k as Pe,z as Be,e as Ae,c as Re,h as M,A as Fe,r as ze,B as Te,t as X,p as qe,i as De,v as Ue,C as He,D as Ie,j as We,o as Ye,E as Ve,F as Ge,G as Ke}from"./index-D6X8Mu62.js";import{p as Oe}from"./playerCard-Dy3xyBd-.js";import{i as I}from"./intervals-BMgcr8bT.js";import{b as Qe,r as ye,a as ve}from"./relevance-C3SYLMeE.js";import{v as Xe,a as Ze,b as Je}from"./viewMode-B4epi5Wn.js";let x=[],b=new Map,c="",l=1,d=!0,_="ALL",Z=new Set,g=!1,w=null;const J=50;function ge(o,s){const[p,f]=I(s,o);return(f-p)/2}function fe(o){return o==="BUY"?'<span class="badge" style="background:var(--emerald-dim); color:var(--emerald); border:1px solid rgba(16,185,129,0.22)">▲ BUY</span>':o==="SELL"?'<span class="badge" style="background:var(--crimson-dim); color:var(--crimson); border:1px solid rgba(239,68,68,0.22)">▼ SELL</span>':'<span class="badge" style="background:rgba(var(--text-rgb,0,0,0),0.05); color:var(--text-faint); border:1px solid var(--border)">—</span>'}function et(o){if(o==null)return'<span class="mono" style="color:var(--text-faint)">—</span>';const s=Number(o),p=s>.5?"var(--emerald)":s<-.5?"var(--crimson)":"var(--text-muted)",f=s>.5?"↑":s<-.5?"↓":"·",S=s>0?"+":"";return`<span class="mono" style="color:${p}; font-weight:700">${f} ${S}${s.toFixed(1)}</span>`}function tt(o){if(o==null)return'<span class="mono" style="color:var(--text-faint)">—</span>';const s=Number(o),p=s>=12?"var(--emerald)":s<=-12?"var(--crimson)":"var(--text-muted)",f=s>0?"↑":s<0?"↓":"·",S=s>0?"+":"";return`<span class="mono" style="color:${p}; font-weight:700">${f} ${S}${s}</span>`}function at(o,s,p){if(s==null)return`<span class="mono" style="color:var(--text-faint); font-size:11px">${o!=null&&o.toFixed?o.toFixed(1):o} <span style="color:var(--text-faint)">· market —</span></span>`;const f=Math.max(Math.abs(o),Math.abs(s),10),S=Math.round(Math.abs(o)/f*100),P=Math.round(Math.abs(s)/f*100),q=p>0?"var(--emerald)":p<0?"var(--crimson)":"var(--text-faint)";return`<div style="display:flex; align-items:center; gap:6px; min-width:160px"><span class="mono" style="font-size:11px; min-width:44px; text-align:right">${o.toFixed(1)}</span><div style="flex:1; height:4px; background:rgba(var(--text-rgb,0,0,0),0.06); border-radius:999px; position:relative; overflow:hidden"><div style="position:absolute; left:0; top:0; bottom:0; width:${S}%; background:var(--amber); opacity:0.9; border-radius:999px"></div><div style="position:absolute; left:0; top:0; bottom:0; width:${P}%; background:var(--sky); opacity:0.35; border-radius:999px"></div></div><span class="mono" style="font-size:11px; color:var(--text-muted); min-width:36px">${s.toFixed(1)}</span><span class="mono" style="font-size:11px; color:${q}; font-weight:700; min-width:36px; text-align:right">${p>0?"+":""}${p.toFixed(1)}</span></div>`}async function ee(o){var se,ne;const s=new URLSearchParams(location.hash.split("?")[1]||""),p=s.get("week");p!=null&&p!==""&&Number.isFinite(Number(p))&&(w=Number(p)),c=s.get("q")||((se=document.getElementById("globalSearch"))==null?void 0:se.value)||"",l=1;const f=Number(s.get("limit")||800),S=Number.isFinite(f)?Math.max(10,Math.min(2e3,Math.floor(f))):800,P=e=>String(e||"").toLowerCase().replace(/\b(jr\.?|sr\.?|ii|iii|iv|v)\b/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ").trim();let q=new Map;Z=new Set;try{const e=await Pe({}),a=[].concat(e.starters||[],e.bench||[],e.reserve||[]).map(r=>({player_id:r.player_id,team_name:r.team_name||""}));for(const r of a)if(r.player_id&&(Z.add(String(r.player_id)),r.player_name)){const n=`${P(r.player_name)}|${(r.position||"").toUpperCase()}`;q.set(n,String(r.player_id))}}catch{}const W=g?await Ve({limit:S}):await Be({week:w,limit:S});x=g?(W.players||[]).map(e=>{const a=Math.max(1,Number(e.remaining_games)||1),r=ge(e.position,Number(e.per_game_neutral)||0),n=Number((r*Math.sqrt(a)).toFixed(2));return{...e,projected_points:e.ros_points,point_estimate:e.ros_points,player_name:e.player_name||e.player_display_name,position_group:e.position,width:n,projection_lower:Math.max(0,Number((e.ros_points-n).toFixed(2))),projection_upper:Number((e.ros_points+n).toFixed(2))}}):W.players||[];const B=W.meta||{};!g&&w==null&&B.week!=null&&(w=B.week);let A={players:[],count:0,meta:{},fetched_at:null};try{A=await Ae({limit:2e3})}catch{A={players:[],count:0,meta:{},fetched_at:null}}b=new Map((A.players||[]).map(e=>[String(e.player_id),e]));for(const e of x){const a=`${P(e.player_name||"")}|${(e.position||"").toUpperCase()}`;!e.sleeper_id&&q.has(a)&&(e.sleeper_id=q.get(a))}const te=new Set(x.map(e=>String(e.player_id)));for(const e of A.players||[]){const a=String(e.player_id||"");a&&!te.has(a)&&(te.add(a),x.push({player_id:a,sleeper_id:e.sleeper_id||(/^\d+$/.test(a)?a:null),espn_id:e.espn_id||null,player_name:e.player_name||e.full_name||a,position:(e.position||"UNK").toUpperCase(),team:(e.team||"").toUpperCase(),projected_points:e.model_points??e.projected_points??0,point_estimate:e.model_points??e.projected_points??0,projection_lower:e.projection_lower??I(e.model_points??0,e.position)[0],projection_upper:e.projection_upper??I(e.model_points??0,e.position)[1],width:e.width??ge(e.position,e.model_points??0),injury_status:e.injury_status||null,market_points:e.market_points,delta_points:e.delta_points,model_overall_rank:e.model_overall_rank,model_pos_rank:e.model_pos_rank,fp_ecr:e.fp_ecr,fp_ecr_pos:e.fp_ecr_pos,fp_adp:e.fp_adp,fp_tier:e.fp_tier,delta_rank:e.delta_rank,delta_pos_rank:e.delta_pos_rank,edge:e.edge||"NEUTRAL",edge_score:e.edge_score||0,stat_deltas:e.stat_deltas||[]}))}const y=b.size>0;for(const e of x){e.player_id&&/^\d+$/.test(String(e.player_id))&&(e.sleeper_id=e.player_id);const a=b.get(String(e.player_id));if(a?(a.sleeper_id&&(e.sleeper_id=a.sleeper_id),a.espn_id&&(e.espn_id=a.espn_id),e.market_points=a.market_points,e.delta_points=a.delta_points,e.model_overall_rank=a.model_overall_rank,e.model_pos_rank=a.model_pos_rank,e.fp_ecr=a.fp_ecr,e.fp_ecr_pos=a.fp_ecr_pos,e.fp_adp=a.fp_adp,e.fp_tier=a.fp_tier,e.delta_rank=a.delta_rank,e.delta_pos_rank=a.delta_pos_rank,e.edge=a.edge,e.edge_score=a.edge_score,e.stat_deltas=a.stat_deltas,e.market_season_stats=a.market_season_stats||null,e.auction=a.auction,e.modelAuction=a.auction,e.marketAuction=a.marketAuction,e.vor=a.vor):(e.market_points=null,e.delta_points=null,e.edge="NEUTRAL",e.stat_deltas=[]),g){e.weekly=Number(e.per_game_neutral)||0,e.lower=e.projection_lower,e.upper=e.projection_upper;const r=a&&a.market_season_points!=null&&Number(a.market_season_points)>0?Number(a.market_season_points):null;e.market_points=r,e.delta_points=r!=null?Number((e.projected_points-r).toFixed(2)):null}else{const r=a&&a.model_points!=null&&Number(a.model_points)>0?Number(a.model_points):null,n=e.projected_points!=null&&Number(e.projected_points)>0?Number(e.projected_points):null,i=a&&a.market_season_points!=null&&Number(a.market_season_points)>0?Number(a.market_season_points)/17:null,j=r??n??i??0;e.projected_points=Number(j.toFixed(2)),e.point_estimate=Number(j.toFixed(2)),e.weekly=Number(j.toFixed(2));const[z,T]=I(j,e.position);e.projection_lower=Number(z.toFixed(2)),e.projection_upper=Number(T.toFixed(2)),e.width=Number(((T-z)/2).toFixed(2)),e.lower=e.projection_lower,e.upper=e.projection_upper}e.ecr=e.fp_ecr,e.adp=e.fp_adp,e.tier=e.fp_tier}try{const e=await Re().catch(()=>null),a=(e==null?void 0:e.trending_adds)||[],r=new Set(a.map(i=>String(i.player_id||""))),n=new Set(a.map(i=>`${P(i.player_name)}|${(i.position||"").toUpperCase()}`));for(const i of x)i.trending=r.has(String(i.player_id||""))||r.has(String(i.sleeper_id||""))||n.has(`${P(i.player_name||"")}|${(i.position||"").toUpperCase()}`)}catch{}const L=document.getElementById("globalSearch");L&&!L.dataset.bound&&(L.dataset.bound="1",L.addEventListener("input",be(()=>{c=L.value,l=1;const e=o.querySelector("#localSearch");e&&(e.value=c),k(),O()},150)),L.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==L&&(e.preventDefault(),L.focus())}));const Y=[...b.values()].filter(e=>e.edge==="BUY").length,V=[...b.values()].filter(e=>e.edge==="SELL").length,G=[...b.values()].filter(e=>e.market_points!=null).length,$=G>0||[...b.values()].some(e=>e.fp_ecr!=null||e.fp_adp!=null);$||(d=!1),o.innerHTML=`
    <div class="hero reveal in">
      <h1>Projections</h1>
      <p>Weekly projections. Bars show floor–ceiling: 1-in-5 bad week to 1-in-5 good week (P20–P80, fit on 2024-25 results).</p>
      <p class="micro faint" style="margin-top:4px">Each week's projections are calculated after the previous week's games complete, from season-to-date stats blended with last season — early weeks lean on last season, later weeks on current form. Data refreshes daily.</p>
    </div>
    ${!g&&B.stale?`<div class="alert alert-warn reveal in" role="status" style="margin-top:12px">${M(B.note||`No precomputed projections for week ${w??B.week} — showing nearest available data.`)}</div>`:""}

    ${y?`
    <div class="kpi-row reveal in" style="margin-top:4px">
      <div class="kpi-card" style="border-top:1px solid var(--emerald)">
        <div class="kpi-label" style="color:var(--emerald)">BUY edges${$?": market sleeping":""}</div>
        <div class="kpi-value" style="color:var(--emerald)">${Y}</div>
        <div class="kpi-bar"><div class="kpi-bar-fill good" style="width:${Math.min(100,Math.round(Y/Math.max(1,Math.min(40,b.size/6))*100))}%"></div></div>
        <div class="mono" style="font-size:11px; color:var(--text-muted); margin-top:6px">${$?"Model rank ≥12 better than FP ECR or +3.0 pts vs Sleeper market":"Model $/VOR ≥15% below pool average"}</div>
      </div>
      <div class="kpi-card" style="border-top:1px solid var(--crimson)">
        <div class="kpi-label" style="color:var(--crimson)">SELL flags${$?": market overvalued":""}</div>
        <div class="kpi-value" style="color:var(--crimson)">${V}</div>
        <div class="kpi-bar"><div class="kpi-bar-fill bad" style="width:${Math.min(100,Math.round(V/Math.max(1,Math.min(40,b.size/6))*100))}%"></div></div>
        <div class="mono" style="font-size:11px; color:var(--text-muted); margin-top:6px">${$?"Market rank ≥12 higher or −3.0 pts vs model":"Model $/VOR ≥15% above pool average"}</div>
      </div>
      ${$?`
      <div class="kpi-card" style="border-top:1px solid var(--sky)">
        <div class="kpi-label" style="color:var(--sky)">Market coverage: Sleeper + FantasyPros</div>
        <div class="kpi-value" style="color:var(--sky)">${G} / ${b.size}</div>
        <div class="kpi-bar"><div class="kpi-bar-fill" style="background:var(--sky); width:${Math.round(G/Math.max(1,b.size)*100)}%"></div></div>
        <div class="mono" style="font-size:11px; color:var(--text-muted); margin-top:6px">Sleeper pts+stats keyed by gsis_id · FP ECR/ADP via name+team+pos</div>
      </div>
      `:""}
      <div class="kpi-card" style="border-top:1px solid var(--amber)">
        <div class="kpi-label" style="color:var(--amber)">Comparison source</div>
        <div class="kpi-value" style="font-size:14px; line-height:1.3">${$?"Model vs Market":"Model values"}<br><span style="font:600 11px "Helvetica Neue", Helvetica,sans-serif; color:var(--text-muted); letter-spacing:0.04em; text-transform:uppercase">${A.fetched_at?new Date(A.fetched_at).toLocaleString():"DB snapshot"} · ${b.size} ranked</span></div>
        <div class="mono" style="font-size:11px; color:var(--text-muted); margin-top:6px">${$?"Free, local: Sleeper projections + FP free ECR/ADP":"VBD auction values from league scoring"}</div>
      </div>
    </div>
    <div class="card reveal in" style="margin-top:8px; border-top:1px solid var(--amber)">
      <div class="card-body" style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; justify-content:space-between">
        <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center">
          ${$?`<span class="kicker">Compare vs Market</span>
          <button class="chip ${d?"active":""}" id="toggleCompare" title="Toggle market comparison">${d?"Market + ECR on":"Show Market & ECR"}</button>`:'<span class="kicker">Value edges</span>'}
          <div style="display:flex; gap:6px; margin-left:8px; flex-wrap:wrap">
            <button class="chip ${_==="ALL"?"active":""}" data-edge="ALL">All (${b.size})</button>
            <button class="chip ${_==="BUY"?"active":""}" data-edge="BUY" style="${_==="BUY"?"background:var(--emerald-dim); border-color:rgba(16,185,129,0.35); color:var(--emerald)":""}">▲ BUY (${Y})</button>
            <button class="chip ${_==="SELL"?"active":""}" data-edge="SELL" style="${_==="SELL"?"background:var(--crimson-dim); border-color:rgba(239,68,68,0.35); color:var(--crimson)":""}">▼ SELL (${V})</button>
          </div>
        </div>
        <span class="mono" style="font-size:11px; color:var(--text-faint)">Click row ▶ to see stat deltas (pass/rush/rec yds, TDs). Preseason: Sleeper pts empty until Week 1 publish: rank delta (ECR) works now.</span>
      </div>
    </div>
    `:'<div class="alert alert-info reveal in" style="margin-top:8px">Market comparison not loaded. Showing model only.</div>'}

    <div class="card reveal in" style="margin-top:12px">
      <div class="card-body" style="display:flex; flex-direction:column; gap:12px">
        ${g?"":`
        <div class="row" style="gap:8px">
          <span class="kicker">Week</span>
          <div class="filters week-picker-scroll" style="overflow-x:auto; flex-wrap:nowrap; max-width:100%; padding-bottom:4px">
            ${Array.from({length:18},(e,a)=>a+1).map(e=>`<button class="chip ${e===Number(w)?"active":""}" data-proj-week="${e}" title="Show week ${e} projections" style="flex-shrink:0">${e}</button>`).join("")}
          </div>
        </div>
        `}
        <div class="row">
          <label class="search-mini" style="flex:1; min-width:260px">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input id="localSearch" placeholder="pos:WR healthy:true" autocomplete="off" />
          </label>
          <span class="kicker" id="countLabel" style="white-space:nowrap"></span>
          <button class="chip" id="toggleProjSortDir" title="Flip sorting: highest ↔ lowest">↕ Highest → Lowest</button>
          <button class="chip ${g?"active":""}" id="toggleRos" title="Switch between weekly and rest-of-season projections" style="${g?"background:var(--amber-dim); border-color:rgba(245,158,11,0.35); color:var(--amber)":""}">${g?"📅 RoS (×17)":"📊 Weekly"}</button>
          ${Xe()}
        </div>
        <div class="filters" id="quickChips">
          <button class="chip" data-chip="pos:QB">QB</button>
          <button class="chip" data-chip="pos:RB">RB</button>
          <button class="chip" data-chip="pos:WR">WR</button>
          <button class="chip" data-chip="pos:TE">TE</button>
          <button class="chip" data-chip="pos:DEF">DEF</button>
          <button class="chip" data-chip="flex:true">FLEX</button>
          <button class="chip" data-chip="healthy:true">Healthy</button>
          <button class="chip" data-chip="trending:true">Trending</button>
          <button class="chip" data-chip="roster:true">My Roster</button>
          <button class="chip" data-chip="interval<4">Tight (±&lt;4)</button>
        </div>
        ${B.cold?'<div class="alert alert-warn">No fresh data. Refresh to populate.</div>':""}
        ${x.length?"":'<div class="alert alert-info">No projections yet. Search works once data loads.</div>'}
      </div>
    </div>

    <div class="responsive-view">
    ${d&&y?`
    <details style="padding:8px 12px; background:var(--surface-raised); border:1px solid var(--border); border-radius:8px; margin-bottom:10px; font:500 11px "Helvetica Neue", Helvetica,sans-serif; line-height:1.4" aria-label="Projections legend: Model vs Market, BUY and SELL">
      <summary style="cursor:pointer; font-weight:700" title="Toggle legend">Legend: Model vs Market, BUY/SELL</summary>
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:8px">
      <span style="display:flex; align-items:center; gap:6px"><span style="width:10px; height:10px; background:var(--amber); border-radius:2px; display:inline-block"></span> <strong style="color:var(--amber)">Model</strong> <span>weekly PPR (×17 for Auction)</span></span>
      <span style="display:flex; align-items:center; gap:6px"><span style="width:10px; height:10px; background:var(--sky); border-radius:2px; display:inline-block"></span> <strong style="color:var(--sky)">Sleeper</strong> <span>Market: free Sleeper projections</span></span>
      </div>
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:6px">
      <span style="display:flex; align-items:center; gap:6px"><span style="width:10px; height:10px; background:var(--emerald); border-radius:2px; display:inline-block"></span> BUY = Model ≥ +3 pts / ≥12 ranks better</span>
      <span style="display:flex; align-items:center; gap:6px"><span style="width:10px; height:10px; background:var(--crimson); border-radius:2px; display:inline-block"></span> SELL = Market ≥ +3 / 12 better</span>
      <span class="mono" style="color:var(--text-faint); margin-left:auto">FP ECR/ADP sparse on free tier: Market pts primary</span>
      </div>
    </details>
    `:""}
    <div class="table-wrap sticky-player reveal in" style="margin-top:16px; overflow-x:auto; max-width:100%">
      <table id="projTable" style="min-width:${d&&y?"1180px":"760px"}">
        <thead>
          <tr>
            <th data-sort="player_name" tabindex="0" role="button" aria-label="Sort by Player">Player</th>
            <th data-sort="position" tabindex="0" role="button" aria-label="Sort by Position">Pos</th>
            <th data-sort="team" tabindex="0" role="button" aria-label="Sort by Team">Team</th>
            <th data-sort="projected_points" tabindex="0" role="button" aria-label="Sort by Model Points" style="${d&&y?"color:var(--amber); border-bottom:2px solid var(--amber)":""}">${g?"RoS":"Model"}<br><span style="font:600 10px "Helvetica Neue", Helvetica,sans-serif; color:${d&&y?"var(--amber)":"var(--text-faint)"}; opacity:0.7">${g?"total":"proj"}</span></th>
            ${d&&y?`
            <th data-sort="market_points" tabindex="0" role="button" aria-label="Sort by Sleeper Market Points" style="color:var(--sky); border-bottom:2px solid var(--sky)">Market<br><span style="font:600 10px "Helvetica Neue", Helvetica,sans-serif; color:var(--sky); opacity:0.7">${g?"Sleeper season":"Sleeper"}</span></th>
            <th data-sort="delta_points" tabindex="0" role="button" aria-label="Sort by Points Delta" style="border-bottom:2px solid var(--border)">Δ<br><span style="font:600 10px "Helvetica Neue", Helvetica,sans-serif; color:var(--text-faint)">Grid−Mkt</span></th>
            <th data-sort="fp_ecr" tabindex="0" role="button" aria-label="Sort by FantasyPros ECR">ECR</th>
            <th data-sort="delta_rank" tabindex="0" role="button" aria-label="Sort by Rank Delta">Δ Rk</th>
            <th data-sort="fp_adp" tabindex="0" role="button" aria-label="Sort by ADP">ADP</th>
            <th data-sort="edge_score" tabindex="0" role="button" aria-label="Sort by Edge">Edge</th>
            `:""}
            <th>Interval</th>
            <th data-sort="opponent_team" tabindex="0" role="button" aria-label="Sort by Matchup">Matchup</th>
            <th data-sort="width" tabindex="0" role="button" aria-label="Sort by Confidence Width">Conf</th>
            <th>Injury</th>
            ${d&&y?'<th style="width:28px"></th>':""}
          </tr>
        </thead>
        <tbody id="projBody"></tbody>
      </table>
    </div>
    <div class="player-cards-grid" id="projCards"></div>
    </div>
    <div id="paginationControls" style="display:flex; justify:space-between; align-items:center; margin-top:16px; flex-wrap:wrap; gap:8px"></div>
  `,Ze(o),Je(o);const ae=o.querySelector("#toggleCompare");ae&&ae.addEventListener("click",()=>{d=!d,ee(o)});const re=o.querySelector("#toggleRos");re&&re.addEventListener("click",()=>{g=!g,ee(o)}),o.querySelectorAll("[data-proj-week]").forEach(e=>{e.addEventListener("click",()=>{const a=Number(e.getAttribute("data-proj-week"));w=a===w?null:a,l=1,ee(o)})}),o.querySelectorAll("[data-edge]").forEach(e=>{e.addEventListener("click",()=>{_=e.getAttribute("data-edge"),l=1,k(),o.querySelectorAll("[data-edge]").forEach(a=>{const r=a.getAttribute("data-edge");r===_?(a.classList.add("active"),r==="BUY"?(a.style.background="var(--emerald-dim)",a.style.borderColor="rgba(16,185,129,0.35)",a.style.color="var(--emerald)"):r==="SELL"?(a.style.background="var(--crimson-dim)",a.style.borderColor="rgba(239,68,68,0.35)",a.style.color="var(--crimson)"):(a.style.background="",a.style.borderColor="",a.style.color="")):(a.classList.remove("active"),a.style.background="",a.style.borderColor="",a.style.color="")})})});const R=o.querySelector("#localSearch");R&&(R.value=c,R.addEventListener("input",be(()=>{c=R.value,l=1,k(),O()},150)));function _e(){o.querySelectorAll("[data-chip]").forEach(e=>{e.classList.toggle("active",Ke(c,e.getAttribute("data-chip")))})}o.querySelectorAll("[data-chip]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-chip"),r=a.match(/^pos:(.+)$/i);r?c=Fe(c,"pos",r[1]):c=c.includes(a)?c.replace(a,"").replace(/\s{2,}/g," ").trim():c?`${c} ${a}`:a,l=1,R&&(R.value=c),k(),O()})});let F="projected_points",E=-1,U=!1;o.querySelectorAll("th[data-sort]").forEach(e=>{e.style.cursor="pointer";const a=()=>{const r=e.getAttribute("data-sort");F===r?E*=-1:(F=r,E=r==="player_name"?1:-1),U=!0,l=1,k(),K()};e.addEventListener("click",a),e.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),a())})});function K(){const e=o.querySelector("#toggleProjSortDir");if(!e)return;const a=E===-1?"Highest → Lowest":"Lowest → Highest";e.textContent=`↕ ${a}`,e.title=`Currently ${a} by ${F}: click to flip`}(ne=o.querySelector("#toggleProjSortDir"))==null||ne.addEventListener("click",()=>{E*=-1,U=!0,l=1,k(),K()}),K();function he(e){for(const r of e)r._onRoster=Z.has(String(r.player_id));let a=Ge(e,c);return y&&_!=="ALL"&&(d||!$)&&(a=a.filter(r=>(r.edge||"NEUTRAL")===_)),a}function oe(e,a){let r=e[a];if((r==null||r===""||r==="—")&&a==="projected_points"&&(r=e.point_estimate),r==null||r===""||r==="—"||r==="–"||r==="-")return null;if(typeof r=="number")return isNaN(r)?null:r;const n=String(r).trim(),i=Number(n);return!isNaN(i)&&n!==""?i:n.toLowerCase()}function k(){var de,pe,ce,ue;let e=he(x);const a=U?null:Qe(x);e=[...e].sort((t,v)=>{if(!U){const h=ye(t,{},a)-ye(v,{},a);if(h!==0)return h;const D=ve(t,{},a)-ve(v,{},a);if(D!==0)return D}const u=oe(t,F),m=oe(v,F);return u===null&&m===null?0:u===null?1:m===null?-1:typeof u=="number"&&typeof m=="number"?(u-m)*E:String(u).localeCompare(String(m))*E}),o.querySelectorAll("th[data-sort]").forEach(t=>{t.getAttribute("data-sort")===F?t.setAttribute("aria-sort",E===1?"ascending":"descending"):t.removeAttribute("aria-sort")});const r=e.length,n=Math.max(1,Math.ceil(r/J));l>n&&(l=n);const i=(l-1)*J,j=Math.min(i+J,r),z=e.slice(i,j),T=o.querySelector("#countLabel");T&&(r===0?T.textContent="0 players":T.textContent=`Showing ${i+1}–${j} of ${r} players${r!==x.length?` (filtered from ${x.length})`:""}${y&&_!=="ALL"?` · ${_} only`:""}`);const H=o.querySelector("#projBody"),le=d&&y?15:9;z.length?(H.innerHTML=z.map(t=>{const v=t.position||t.position_group||"UNK",u=Number(t.projected_points??t.point_estimate??0),m=Number(t.projection_lower??t.lower_bound??Math.max(0,u-(t.width??5))),h=Number(t.projection_upper??t.upper_bound??u+(t.width??5)),D=Number(t.width??t.projection_width??(h-m)/2),xe=t.market_points!=null?Number(t.market_points).toFixed(1):"—",ke=t.fp_ecr!=null?`#${t.fp_ecr}${t.fp_ecr_pos?` (#${t.fp_ecr_pos} ${v})`:""}${t.fp_tier?` <span style="background:var(--violet-dim); color:var(--violet); border:1px solid rgba(168,85,247,0.18); border-radius:999px; padding:1px 5px; font:700 10px ui-monospace, SFMono-Regular,monospace">T${t.fp_tier}</span>`:""}`:"—",$e=t.fp_adp!=null?`#${t.fp_adp}`:"—",we=d&&y?fe(t.edge):"",Se=ze(t.team),Q=Te(t.team),Le=t.team?`<span class="badge" style="background:${Q}1f; color:${Q}; border:1px solid ${Q}3d; font-weight:700">${X(t.team,14)} ${M(t.team)}</span>`:"—",Me=t.opponent_team?`<span class="mono" style="font-size:11px; color:var(--text-faint)">vs</span> ${X(t.opponent_team,14)} <span class="mono" style="font-size:11px; font-weight:700">${M(t.opponent_team)}</span>`:'<span class="mono" style="color:var(--text-faint)">—</span>',Ee=t.edge==="BUY"?"var(--emerald)":t.edge==="SELL"?"var(--crimson)":Se,je=d&&y?`<button class="chip" data-expand="${t.player_id}" aria-label="Show stat deltas for ${M(t.player_name)}" style="padding:4px 8px; font-size:11px">▶</button>`:"",me=`
          <tr data-team="${t.team||""}" data-pid="${t.player_id}" class="clickable-row" style="cursor:pointer; --team-accent:${Ee}; ${t.edge==="BUY"?"background:rgba(16,185,129,0.04)":t.edge==="SELL"?"background:rgba(239,68,68,0.04)":""}">
            <td><div class="player-cell">${qe(t,32)}<div class="player-cell-info"><div class="player-cell-name">${M(t.player_name||t.player_id)}</div><div class="player-cell-sub">${X(t.team,14)} ${M(t.team||"—")} ${t.model_pos_rank?`<span style="color:var(--text-faint)">· #${t.model_pos_rank} ${v}</span>`:""}</div></div></div></td>
            <td>${De(v)}</td>
            <td>${Le}</td>
            <td class="mono" style="font-weight:700; color:var(--amber)">${u.toFixed(1)}</td>
            ${d&&y?`
            <td class="mono" style="color:var(--sky)">${xe}</td>
            <td>${et(t.delta_points)}</td>
            <td class="mono" style="font-size:11px; color:var(--text-muted)">${ke}</td>
            <td>${tt(t.delta_rank)}</td>
            <td class="mono" style="font-size:11px; color:var(--text-muted)">${$e}</td>
            <td>${we}</td>
            `:""}
            <td>${Ue({point:u,low:m,high:h,width:D,min:0,max:35})}</td>
            <td>${Me}${He(t.matchup_difficulty,t.matchup_rank,t.matchup_pts_allowed)}</td>
            <td>${Ie(D)}</td>
            <td>${We(t.injury_status)} ${t.trending?'<span class="badge" style="background:var(--sky-dim); color:var(--sky); margin-left:6px">↗ trending</span>':""}</td>
            ${d&&y?`<td>${je}</td>`:""}
          </tr>
        `;if(d&&y&&t.stat_deltas&&t.stat_deltas.length){const Ne=t.stat_deltas.filter(C=>C.market!=null||C.model!=null).slice(0,7).map(C=>`
            <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; padding:4px 0; border-bottom:1px solid rgba(var(--text-rgb,0,0,0),0.06)">
              <span class="mono" style="font-size:11px; color:var(--text-muted); min-width:64px">${C.label}</span>
              ${at(C.model,C.market,C.delta)}
            </div>
          `).join(""),Ce=t.opponent_team?`vs ${t.opponent_team}`:"";return me+`<tr class="expand-panel" data-expand-panel="${t.player_id}" style="display:none; background:var(--surface-raised)"><td colspan="${le}" style="padding:12px 12px 12px 48px"><div style="display:flex; flex-direction:column; gap:6px"><div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap"><span class="kicker">Stat deltas: Model vs Market</span><span class="mono" style="font-size:11px; color:var(--text-faint)">${M(t.player_name)} ${Ce} · <span style="color:var(--amber)">amber=Model</span> <span style="color:var(--sky)">, blue=Market</span></span></div>${Ne||'<span class="mono" style="font-size:11px; color:var(--text-faint)">No market stats for this player yet (preseason).</span>'}<div class="mono" style="font-size:11px; color:var(--text-faint); margin-top:6px">${t.fp_ecr!=null||t.fp_adp!=null?`FP ECR #${t.fp_ecr??"—"} ${t.fp_ecr_pos?`(pos #${t.fp_ecr_pos})`:""} · ADP #${t.fp_adp??"—"} · `:""}Model #${t.model_overall_rank??"—"} (pos #${t.model_pos_rank??"—"})${t.delta_rank!=null?` · ΔRk ${(t.delta_rank>0?"+":"")+t.delta_rank}`:""}${t.search_rank!=null||t.depth_order!=null?` · Sleeper #${t.search_rank??"—"}${t.depth_order!=null?` (${t.depth_position||t.position} ${t.depth_order})`:""}`:""}</div></div></td></tr>`}return me}).join(""),H.querySelectorAll("[data-expand]").forEach(t=>{t.addEventListener("click",v=>{v.stopPropagation();const u=t.getAttribute("data-expand"),m=H.querySelector(`[data-expand-panel="${u}"]`);if(!m)return;const h=m.style.display!=="none";m.style.display=h?"none":"table-row",t.textContent=h?"▶":"▼"})})):H.innerHTML=`<tr><td colspan="${le}"><div class="empty">No matches for <code class="inline">${M(c||"—")}</code>${_!=="ALL"?` with edge ${_}`:""}. Try <code class="inline">pos:WR</code> or clear filters.</div></td></tr>`;const ie=o.querySelector("#projCards");ie&&(ie.innerHTML=z.map(t=>{const v=Oe(t,{showInterval:!0,showTeamLogo:!0,statWeek:w??void 0});if(!d||!y)return v;const u=t.market_points!=null?`<span class="mono" style="font-size:11px; color:var(--text-muted)">Market ${Number(t.market_points).toFixed(1)} · <span style="color:${Number(t.delta_points)>.5?"var(--emerald)":Number(t.delta_points)<-.5?"var(--crimson)":"var(--text-muted)"}">${t.delta_points>0?"+":""}${Number(t.delta_points).toFixed(1)}</span></span>`:"",m=t.fp_ecr?`ECR #${t.fp_ecr} · Δ ${t.delta_rank!=null?(t.delta_rank>0?"+":"")+t.delta_rank:"—"}`:t.search_rank!=null||t.depth_order!=null?`Sleeper #${t.search_rank??"—"}${t.depth_order!=null?` (${t.depth_position||t.position} ${t.depth_order})`:""}`:"ECR —",h=fe(t.edge);return v.replace(`</div>
`,`  <div style="margin-top:8px; display:flex; gap:8px; align-items:center; flex-wrap:wrap; padding-top:8px; border-top:1px solid var(--border)">${u?`<span class="mono" style="font-size:11px; color:var(--text-muted)">${u}</span>`:""}<span class="mono" style="font-size:11px; color:var(--text-muted)">${m}</span><span class="spacer"></span>${h}</div></div>
`)}).join("")),o.querySelectorAll("[data-pid]").forEach(t=>{t.classList.contains("expand-panel")||(t.style.cursor="pointer",t.addEventListener("click",v=>{if(v.target.closest("[data-expand]"))return;const u=t.getAttribute("data-pid"),m=x.find(h=>String(h.player_id)===String(u));m&&Ye(m,o,w??void 0)}))});const N=o.querySelector("#paginationControls");N&&(n<=1?N.innerHTML="":(N.innerHTML=`
          <div style="font:400 13px "Helvetica Neue", Helvetica,sans-serif; color:var(--text-muted)">
            Page <strong>${l}</strong> of <strong>${n}</strong>
          </div>
          <div style="display:flex; gap:6px">
            <button class="chip" id="firstPageBtn" ${l===1?'disabled style="opacity:0.4; cursor:not-allowed"':""}>« First</button>
            <button class="chip" id="prevPageBtn" ${l===1?'disabled style="opacity:0.4; cursor:not-allowed"':""}>‹ Prev</button>
            <button class="chip" id="nextPageBtn" ${l===n?'disabled style="opacity:0.4; cursor:not-allowed"':""}>Next ›</button>
            <button class="chip" id="lastPageBtn" ${l===n?'disabled style="opacity:0.4; cursor:not-allowed"':""}>Last »</button>
          </div>
        `,(de=N.querySelector("#firstPageBtn"))==null||de.addEventListener("click",()=>{l>1&&(l=1,k())}),(pe=N.querySelector("#prevPageBtn"))==null||pe.addEventListener("click",()=>{l>1&&(l--,k())}),(ce=N.querySelector("#nextPageBtn"))==null||ce.addEventListener("click",()=>{l<n&&(l++,k())}),(ue=N.querySelector("#lastPageBtn"))==null||ue.addEventListener("click",()=>{l<n&&(l=n,k())}))),_e()}function O(){const e="projections";location.hash=c?`${e}?q=${encodeURIComponent(c)}`:e}k()}function be(o,s=150){let p;return(...f)=>{clearTimeout(p),p=setTimeout(()=>o(...f),s)}}export{ee as renderProjections};
