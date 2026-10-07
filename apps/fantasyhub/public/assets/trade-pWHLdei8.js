import{k as xe,h as c,N as Fe,r as ke,p as ne,i as ie,j as Ee,t as we,J as ze}from"./index-BX6oRTrX.js";const Ce=(a,v,_)=>Math.min(_,Math.max(v,a));function je(...a){const v=a.flat().map(Number).filter(Number.isFinite);return Math.max(1,...v)}function V(a,v,_,w,f){if(!a||!v||!a.length||a.length!==v.length)return"";const u=a.length,h=R=>u===1?50:R/(u-1)*100,m=R=>29-Ce(Number(R)||0,0,_)/_*27,g=R=>R.map((F,E)=>`${h(E).toFixed(2)},${m(F).toFixed(2)}`).join(" "),I=Number(f||15),M=(w||[]).findIndex(R=>Number(R)>=I);return`<svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">${M>0&&M<u?`<rect x="${h(M).toFixed(2)}" y="0" width="${(100-h(M)).toFixed(2)}" height="30" class="po-shade"></rect>`:""}<polyline class="ln-before" vector-effect="non-scaling-stroke" points="${g(a)}"></polyline><polyline class="ln-after" vector-effect="non-scaling-stroke" points="${g(v)}"></polyline></svg>`}function O(a,v){if(!a)return"";const _=["QB","RB","WR","TE","DEF","K"],w=m=>{const g=_.indexOf(m);return g<0?99:g},f=Array.isArray(v)&&v.length?new Set(v.map(m=>String(m).toUpperCase())):null,u=Object.entries(a).map(([m,g])=>[m,Number(g)||0]).filter(([m,g])=>Math.abs(g)>=.05&&(!f||f.has(String(m).toUpperCase()))).sort((m,g)=>w(m[0])-w(g[0]));if(!u.length)return"";const h=Math.max(...u.map(([,m])=>Math.abs(m)),1);return`<div class="gd-block">${u.map(([m,g])=>`
    <div class="gd-row"><span class="gd-lab">${m}</span>
      <div class="gd-track"><div class="gd-fill ${g>=0?"pos":"neg"}" style="width:${(Math.abs(g)/h*50).toFixed(1)}%"></div></div>
      <span class="gd-val ${g>=0?"pos":"neg"}">${g>0?"+":""}${g.toFixed(1)}</span>
    </div>`).join("")}</div>`}if(typeof process<"u"&&process.argv[1]&&import.meta.url===new URL(`file://${process.argv[1]}`).href){const a=(h,m)=>{if(!h)throw new Error(`tradeViz: ${m}`)},v=je([100,110,120],[110,120,130]);a(v===130,"sharedMax takes the top of every series");const _=V([100,110,120],[110,120,130],v,[4,5,6],15);a(_.includes("ln-before")&&_.includes("ln-after"),"both lines render"),a(!_.includes("po-shade"),"no playoff shade outside the playoff window");const w=V([100,110,120],[100,110,120],130,[14,15,16],15);a(w.includes("po-shade"),"shade starts at the first playoff week"),a(V([1],[2,3],10,[],15)==="","length mismatch hides the chart"),a(V([],[],10,[],15)==="","empty input hides the chart");const f=O({RB:15.3,WR:-7.8,QB:0});a(f.includes("gd-fill pos")&&f.includes("gd-fill neg"),"bars go both ways"),a(!f.includes(">QB<"),"zero deltas drop out"),a(O({})===""&&O(null)==="","empty deltas render nothing");const u=O({TE:6.7,RB:3,WR:-10.1},["RB","WR"]);a(!u.includes(">TE<"),"untraded groups filter out"),a(u.includes(">RB<")&&u.includes(">WR<"),"traded groups keep bars"),a(O({TE:6.7},[]).includes(">TE<"),"empty allowed keeps full output"),console.log("tradeViz self-check ok")}async function qe(a){const v=new URLSearchParams(location.hash.split("?")[1]||"");let _=v.get("team_a")||"1",w=v.get("team_b")||"2";a.innerHTML=`
    <div class="hero reveal in">
      <h1>Trade</h1>
      <p>Select two teams, pick the players being traded on each side, and analyze Model weekly &amp; ROS trade impact.</p>
    </div>

    <div class="card reveal in" style="margin-top:16px">
      <div class="card-body row align-center" style="gap:16px; flex-wrap:wrap">
        <div style="flex:1; min-width:220px">
          <label class="micro faint" style="display:block; margin-bottom:6px">Team A (Sending Package)</label>
          <select id="selectTeamA" class="search-mini" title="Select Team A" style="width:100%; padding:8px 12px; font:500 13px "Helvetica Neue", Helvetica, sans-serif; background:var(--surface); color:var(--text); border:1px solid var(--border); border-radius:8px">
            <option value="">Loading teams…</option>
          </select>
        </div>
        
        <div class="mono faint" style="font-size:18px; font-weight:700; padding-top:16px">⇄</div>

        <div style="flex:1; min-width:220px">
          <label class="micro faint" style="display:block; margin-bottom:6px">Team B (Receiving Package)</label>
          <select id="selectTeamB" class="search-mini" title="Select Team B" style="width:100%; padding:8px 12px; font:500 13px "Helvetica Neue", Helvetica, sans-serif; background:var(--surface); color:var(--text); border:1px solid var(--border); border-radius:8px">
            <option value="">Loading teams…</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Live Trade Analysis Banner -->
    <div id="tradeSummaryBanner" class="reveal in" style="margin-top:16px"></div>

    <!-- Dual Roster Columns — always side by side, internal scroll -->
    <div class="trade-cols reveal in" style="margin-top:16px">
      <div class="card">
        <div class="card-header row align-between">
          <h3 id="teamAHeader">Team A Roster</h3>
          <span class="micro faint" id="teamASub">0 players selected</span>
        </div>
        <div class="card-body" id="teamARoster" style="padding:0">
          <div class="empty">Loading roster…</div>
        </div>
      </div>

      <div class="card">
        <div class="card-header row align-between">
          <h3 id="teamBHeader">Team B Roster</h3>
          <span class="micro faint" id="teamBSub">0 players selected</span>
        </div>
        <div class="card-body" id="teamBRoster" style="padding:0">
          <div class="empty">Loading roster…</div>
        </div>
      </div>
    </div>

    <!-- Post-trade depth (position groups after the hypothetical swap) -->
    <div id="tradeDepth" class="reveal in" style="margin-top:16px"></div>
  `;const f=a.querySelector("#selectTeamA"),u=a.querySelector("#selectTeamB"),h=a.querySelector("#tradeSummaryBanner"),m=a.querySelector("#teamARoster"),g=a.querySelector("#teamBRoster"),I=a.querySelector("#teamAHeader"),M=a.querySelector("#teamBHeader"),oe=a.querySelector("#teamASub"),R=a.querySelector("#teamBSub"),F=a.querySelector("#tradeDepth"),E=new Map;let j=null,S=null;const T=new Set,A=new Set,Y=new Set;let z=null,G=!1,W=!1,J=!1;const b=e=>{const r=Number(e);return Number.isFinite(r)?r:0};function de(e){return e.proj_pass_yd!=null||e.proj_rush_yd!=null||e.proj_rec_yd!=null||e.proj_rec!=null?{proj_pass_yd:b(e.proj_pass_yd),proj_pass_td:b(e.proj_pass_td),proj_rush_yd:b(e.proj_rush_yd),proj_rush_td:b(e.proj_rush_td),proj_rec:b(e.proj_rec),proj_rec_yd:b(e.proj_rec_yd),proj_rec_td:b(e.proj_rec_td)}:{proj_pass_yd:b(e.pass_yds)/17,proj_pass_td:b(e.pass_tds)/17,proj_rush_yd:b(e.rush_yds)/17,proj_rush_td:b(e.rush_tds)/17,proj_rec:b(e.receptions)/17,proj_rec_yd:b(e.rec_yds)/17,proj_rec_td:b(e.rec_tds)/17}}function Se(e){const r=(e.position||"").toUpperCase(),t=de(e),p=n=>(Math.round(n*10)/10).toFixed(1),s=n=>(Math.round(n*100)/100).toFixed(2);return r==="QB"?`${p(t.proj_pass_yd)} PaYd · ${s(t.proj_pass_td)} PaTD · ${p(t.proj_rush_yd)} RuYd avg`:r==="RB"?`${p(t.proj_rush_yd)} RuYd · ${s(t.proj_rush_td)} RuTD · ${p(t.proj_rec)} Rec avg`:r==="WR"||r==="TE"?`${p(t.proj_rec)} Rec · ${p(t.proj_rec_yd)} RecYd avg`:""}function Te(e){const r=(e.position||"").toUpperCase(),t=de(e),p=ze(r,{proj_pass_yd:t.proj_pass_yd||null,proj_pass_td:t.proj_pass_td||null,proj_rush_yd:t.proj_rush_yd||null,proj_rush_td:t.proj_rush_td||null,proj_rec:t.proj_rec||null,proj_rec_yd:t.proj_rec_yd||null,proj_rec_td:t.proj_rec_td||null,proj_fgm:null,proj_xpm:null}),s=Number(e.model_points??e.projected_points??e.weekly??0),n=Number(e.projection_lower??e.lower??Math.max(0,s-5)),i=Number(e.projection_upper??e.upper??s+5),o=Number(e.width??(i-n)/2),x=e.opponent_team?`vs ${c(String(e.opponent_team))}`:"no game",k=e.injury_status?` · ${c(String(e.injury_status))}`:"",l=e.remaining_games==null?"sched unknown":`${c(String(e.remaining_games))} games left`;return`${p}<div class="micro mono faint" style="margin-top:8px; text-align:center">Range ${n.toFixed(1)} – ${i.toFixed(1)} (width ${o.toFixed(1)}) · ${x}${k} · ${l}</div>`}try{const e=await xe(),r=(e==null?void 0:e.allTeams)||(e==null?void 0:e.leagueRosters)||[];r.length>0&&(f.innerHTML=r.map(t=>`<option value="${t.roster_id||t.owner_id}" ${String(t.roster_id||t.owner_id)===String(_)?"selected":""}>${c(t.team_name||t.display_name||`Team ${t.roster_id}`)} (${c(t.owner_name||t.display_name||"")})</option>`).join(""),u.innerHTML=r.map(t=>`<option value="${t.roster_id||t.owner_id}" ${String(t.roster_id||t.owner_id)===String(w)?"selected":""}>${c(t.team_name||t.display_name||`Team ${t.roster_id}`)} (${c(t.owner_name||t.display_name||"")})</option>`).join(""))}catch(e){console.error("Failed to load team list:",e)}async function Ae(e){const r=String(e);if(E.has(r))return E.get(r);const t=await xe({roster_id:r});return E.set(r,t),t}async function X(e){var x,k;const r=e==="A",t=r?f.value:u.value,p=r?m:g,s=r?I:M,n=r?T:A;if(!t)return;E.has(String(t))||(p.innerHTML='<div class="empty">Loading team roster…</div>');const i=await Ae(t);r?j=i:S=i;const o=((x=i==null?void 0:i.teamMeta)==null?void 0:x.team_name)||((k=i==null?void 0:i.teamMeta)==null?void 0:k.owner_name)||`Team ${t}`;s.textContent=`${o} (${r?"Sending":"Receiving"})`,Be(p,Q(i),e,n),le(),z=null,W=!1,J=!1,C(),ue()}function le(){oe.textContent=`${T.size} player${T.size===1?"":"s"} selected`,R.textContent=`${A.size} player${A.size===1?"":"s"} selected`}function Be(e,r,t,p){if(!r||r.length===0){e.innerHTML='<div class="empty">No roster players found</div>';return}e.innerHTML=`
      <div style="display:flex; flex-direction:column">
        ${r.map(s=>{const n=String(s.player_id||s.id),i=p.has(n),o=Number(s.model_points??s.projected_points??s.weekly??0).toFixed(1),x=Number(s.model_season_points??s.ros??o*17).toFixed(0),k=s.auction_price_paid??s.auction??s.marketAuction??0,l=Se(s),$=`${t}:${n}`,B=Y.has($);return`
            <label class="row align-between" style="padding:10px 14px; cursor:pointer; background:${i?"var(--surface-raised)":"transparent"}; border-bottom:1px solid var(--border); transition:background 0.15s; border-top:1px solid ${ke((s.team||"").toUpperCase())}">
              <div class="row align-center" style="gap:10px">
                <input type="checkbox" class="trade-check" data-side="${t}" data-pid="${n}" ${i?"checked":""} title="Select ${c(s.player_name||s.full_name||n)} for trade" style="width:16px; height:16px; cursor:pointer" />
                <span style="width:8px; height:8px; border-radius:50%; background:${ke((s.team||"").toUpperCase())}; flex-shrink:0" aria-hidden="true"></span>
                ${ne(s,28)}
                <div>
                  <div class="row align-center" style="gap:6px">
                    <strong style="font-size:13px">${c(s.player_name||s.full_name||n)}</strong>
                    ${ie(s.position)}
                    ${s.injury_status?Ee(s.injury_status):""}
                  </div>
                  <div class="micro faint" style="margin-top:2px; display:flex; align-items:center; gap:4px">
                    <span class="slot-tag" style="font-size:10px; font-weight:700; letter-spacing:0.3px; padding:1px 5px; border-radius:4px; background:${s.slot&&s.slot!=="BENCH"&&s.slot!=="IR"?"rgba(56,189,248,0.12); color:var(--sky); border:1px solid rgba(56,189,248,0.25)":s.slot==="IR"?"rgba(244,63,94,0.12); color:var(--crimson); border:1px solid rgba(244,63,94,0.25)":"rgba(148,163,184,0.12); color:var(--text-muted); border:1px solid rgba(148,163,184,0.2)"}">${c(s.slot||(s.position&&!s.team?"IR":"BENCH"))}</span>
                    <span>Draft Cost: $${k}</span> · ${we(s.team,14)} <span>${s.team||"FA"} ${s.opponent_team?`vs ${s.opponent_team}`:""}</span>
                  </div>
                  ${l?`<div class="micro mono faint" style="margin-top:2px">${c(l)}</div>`:""}
                </div>
              </div>
              <div style="text-align:right">
                <div class="mono" style="font-weight:700; font-size:13px; color:var(--accent)">${o} <span class="micro faint">pts/wk</span></div>
                <div class="micro faint mono">${x} pts ROS</div>
                <button class="trade-expand" data-side="${t}" data-pid="${c(n)}" title="Show projected stats" style="margin-top:4px; font-size:11px; background:transparent; color:var(--text-muted); border:1px solid var(--border); border-radius:6px; padding:1px 8px; cursor:pointer">${B?"▾ stats":"▸ stats"}</button>
              </div>
            </label>
            <div class="trade-detail" data-side="${t}" data-pid="${c(n)}" style="display:${B?"block":"none"}; padding:10px 14px; border-bottom:1px solid var(--border); background:var(--surface-raised)">
              ${Te(s)}
            </div>
          `}).join("")}
      </div>
    `,e.querySelectorAll(".trade-check").forEach(s=>{s.addEventListener("change",n=>{const i=n.target.dataset.pid,o=n.target.dataset.side==="A"?T:A;n.target.checked?o.add(i):o.delete(i),le(),z&&(J=!0),z=null,W=!1,C(),ue()})}),e.querySelectorAll(".trade-expand").forEach(s=>{s.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation();const i=`${s.dataset.side}:${s.dataset.pid}`,o=e.querySelector(`.trade-detail[data-side="${s.dataset.side}"][data-pid="${s.dataset.pid}"]`);Y.has(i)?(Y.delete(i),s.innerHTML="▸ stats",o&&(o.style.display="none")):(Y.add(i),s.innerHTML="▾ stats",o&&(o.style.display="block"))})})}const ce=["QB","RB","WR","TE","FLEX","K","DEF"];function pe(e,r,t,p){if(!e)return"";const s=l=>{const $=Number(l.model_points??l.projected_points??l.weekly??0);return Number.isFinite($)?$:0},n=r||new Set,i=new Set((t||[]).map(l=>String(l.player_id||l.id))),o={};for(const l of Q(e)){const $=(l.position||"UNK").toUpperCase();(o[$]=o[$]||[]).push(l)}for(const l of t||[]){const $=(l.position||"UNK").toUpperCase();(o[$]=o[$]||[]).push({...l,_incoming:!0})}const k=Object.keys(o).sort((l,$)=>{const B=ce.indexOf(l),P=ce.indexOf($);return(B<0?99:B)-(P<0?99:P)}).map(l=>{const $=o[l].slice().sort((y,N)=>s(N)-s(y)),B=$.filter(y=>!y._incoming&&!n.has(String(y.player_id||y.id))),P=B.reduce((y,N)=>y+s(N),0),D=$.map(y=>{const N=String(y.player_id||y.id),K=y._incoming||i.has(N),ee=!K&&n.has(N);return`<div class="depth-card depth-${K?"in":ee?"out":"kept"}">
          ${ne(y,34)}
          <div style="flex:1; min-width:0">
            <div class="depth-name">${c(y.player_name||N)}</div>
            <div class="micro faint">${ie(l)} · <span class="mono">${s(y).toFixed(1)}</span></div>
          </div>
          <span class="depth-tag">${K?"IN":ee?"OUT":""}</span>
        </div>`}).join("");return`<div class="depth-group">
        <div class="depth-group-head"><strong>${c(l)}</strong><span class="faint"> · ${B.length} kept · ${P.toFixed(1)}/wk</span></div>
        <div class="depth-cards">${D}</div>
      </div>`}).join("");return`<div><div class="depth-team">${c(p)} <span class="faint">post-trade</span></div>${k}</div>`}function ue(){var s,n;if(!F)return;if(!j&&!S){F.innerHTML="";return}const e=Q(j).filter(i=>T.has(String(i.player_id||i.id))),r=Q(S).filter(i=>A.has(String(i.player_id||i.id)));if(!e.length&&!r.length){F.innerHTML="";return}const t=((s=j==null?void 0:j.teamMeta)==null?void 0:s.team_name)||"Team A",p=((n=S==null?void 0:S.teamMeta)==null?void 0:n.team_name)||"Team B";F.innerHTML='<div class="card"><div class="card-body"><div class="micro faint" style="text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px">Post-trade depth by position</div><div class="grid grid-2" style="font-size:12px">'+pe(j,T,r,t)+pe(S,A,e,p)+"</div></div></div>"}function Z(e){const r=e==="A"?j:S,t=e==="A"?T:A;return Q(r).filter(p=>t.has(String(p.player_id||p.id)))}function me(e){return e.map(r=>c(r.player_name||r.full_name||"?")).join(", ")}function C(){if(G){h.innerHTML='<div class="card"><div class="card-body"><div class="empty" style="padding:8px">Grading trade…</div></div></div>';return}if(z){const t=z;h.innerHTML=Ne(t.data,t.nameA,t.nameB,t.listA,t.listB);return}const e=Z("A"),r=Z("B");if(!e.length&&!r.length){h.innerHTML='<div class="alert alert-info" style="font-size:13px">Tick players on both sides to grade the trade.</div>';return}h.innerHTML=`
      ${W?'<div class="alert alert-warn" style="font-size:13px">Couldn’t grade this trade right now.</div>':""}
      <div class="alert alert-info" style="font-size:13px">
        <div><strong>Send:</strong> ${me(e)||"—"} · <strong>Receive:</strong> ${me(r)||"—"}</div>
        ${J?'<div class="faint" style="margin-top:4px">Selection changed — review the picks, then analyze again.</div>':""}
        <div style="margin-top:8px"><button class="btn btn-primary" id="tradeAnalyzeBtn">Analyze trade</button></div>
      </div>`}async function Re(){var o,x;if(G)return;const e=((o=j==null?void 0:j.teamMeta)==null?void 0:o.team_name)||"Team A",r=((x=S==null?void 0:S.teamMeta)==null?void 0:x.team_name)||"Team B",t=[f.value,u.value,[...T].join(","),[...A].join(",")].join("\0"),p=Z("A"),s=Z("B");G=!0,W=!1,J=!1,C();let n=null;try{n=await Fe(f.value,u.value,{tradedA:[...T],tradedB:[...A]})}catch{}if(G=!1,[f.value,u.value,[...T].join(","),[...A].join(",")].join("\0")!==t){C();return}if(!n||n.cold){W=!0,C();return}z={data:n,nameA:e,nameB:r,listA:p,listB:s},C()}h.addEventListener("click",e=>{e.target.closest("#tradeAnalyzeBtn")&&Re()});function Ne(e,r,t,p=[],s=[]){var _e,ye,fe,he,$e,be;const n=e.winner==="Even"?"Fair trade":`${e.winner} wins the trade`,i=e.market_a!=null?Number(e.market_a).toLocaleString("en-US"):null,o=e.market_b!=null?Number(e.market_b).toLocaleString("en-US"):null,x=d=>({player_id:d.player_id||d.id,sleeper_id:d.sleeper_id||null,player_name:d.player_name||d.full_name,position:d.position,team:d.team,weekly:Number(d.model_points??d.projected_points??d.weekly??0),market:d.auction??d.marketAuction??null}),k=(ye=(_e=e.packages)==null?void 0:_e.a)!=null&&ye.length?e.packages.a:p.map(x),l=(he=(fe=e.packages)==null?void 0:fe.b)!=null&&he.length?e.packages.b:s.map(x),$=d=>d.reduce((H,U)=>H+Number(U.weekly??0),0),B=$(k).toFixed(1),P=$(l).toFixed(1),D=Number(e.value_difference??0),y=i!=null&&o!=null?Number(e.market_b)-Number(e.market_a):null,N=y!=null&&Number(e.market_a)+Number(e.market_b)>0?Math.abs(y)/(Number(e.market_a)+Number(e.market_b)):0,K=y!=null&&Math.abs(D)>=20&&N>=.1&&D>0!=y>0,ee=d=>`
      <div class="pcard">
        ${ne(d,36)}
        <div class="pcard-main">
          <div class="pcard-name">${c(d.player_name||"")}</div>
          <div class="micro faint">${ie(d.position)} ${we(d.team,12)}</div>
        </div>
        <div style="text-align:right">
          <div class="pcard-pts">${Number(d.weekly??0).toFixed(1)}<span class="micro faint">/wk</span></div>
          ${d.market!=null?`<div class="micro faint">mkt ${Number(d.market).toLocaleString("en-US")}</div>`:""}
        </div>
      </div>`,L=e.slots,ge=(d,H,U,q)=>{if(!H)return"";const re=q&&q.length?` — adds ${q.map(He=>c(String(He))).join(", ")}`:"";return`<div class="micro" style="margin-top:4px">+${H} bench spot${H>1?"s":""} for ${c(d)}${re} <span class="faint">(+${Number(U).toFixed(0)} ROS)</span></div>`},te=e.team_a||null,se=e.team_b||null,ae=e.calendar||{},Me=Array.isArray(ae.weeks_left)?ae.weeks_left:[],Le=je(te?(te.lineup_before||[]).concat(te.lineup_after||[]):[],se?(se.lineup_before||[]).concat(se.lineup_after||[]):[]),ve=(d,H,U,q)=>`
      <div>
        <div class="kicker" style="margin-bottom:6px">${c(d)} gives</div>
        <div class="pcards">${H.map(ee).join("")||'<div class="empty">—</div>'}</div>
        ${U?Pe(U,Le,Me,ae):""}
        ${(q||[]).length?`
          <div class="kicker" style="margin:10px 0 4px">What ${c(d)} wins</div>
          <ul class="win-list">${q.map(re=>`<li>${c(re)}</li>`).join("")}</ul>`:""}
      </div>`;return`<div class="card"><div class="card-body">
      <div class="kicker">Trade verdict</div>
      <h2 class="verdict-headline">${c(n)}</h2>
      <div class="micro faint" style="margin-bottom:8px">${c(r)} gives ${B}/wk · gets ${P}/wk${i&&o?` · market ${i} vs ${o}`:""}</div>
      ${K?`<div class="alert alert-warn" style="font-size:12px; margin-bottom:8px">Model and market disagree here — the model likes the ${D>0?"incoming":"outgoing"} side, real leagues pay more for the other. Trust the market on stars, the model on depth.</div>`:""}
      <div class="signal-cols" style="margin-top:10px">
        ${ve(r,k,te,($e=e.analysis)==null?void 0:$e.a)}
        ${ve(t,l,se,(be=e.analysis)==null?void 0:be.b)}
      </div>
      ${L?ge(r,L.gained_a,L.credit_a_ros,L.fill_a)+ge(t,L.gained_b,L.credit_b_ros,L.fill_b):""}
    </div></div>`}f.addEventListener("change",()=>{T.clear(),X("A")}),u.addEventListener("change",()=>{A.clear(),X("B")}),await Promise.all([X("A"),X("B")])}function Pe(a,v,_,w){const f=V(a.lineup_before||[],a.lineup_after||[],v,_,w.playoff_week_start);if(!f)return"";const u=a.gains||{},h=Number(u.raw_per_week??u.gain_per_week??0)||0,m=h>.05?"pos":h<-.05?"neg":"",g=_.findIndex(M=>Number(M)>=Number(w.playoff_week_start||15)),I=_.length?`weeks ${_[0]}–${_[_.length-1]}`:"";return`
    <div class="row align-between" style="margin:10px 0 4px">
      <div class="kicker">Weekly impact</div>
      <span class="delta-badge ${m}">${h>0?"+":""}${h.toFixed(1)}/wk</span>
    </div>
    <div class="impact">${f}</div>
    <div class="impact-legend micro faint">
      <span><i class="lg lg-before"></i>before&nbsp;<i class="lg lg-after"></i>after</span>
      <span>${I}${g>0?" · shaded = playoffs":""}</span>
    </div>
    ${O(a.group_delta,a.traded_positions)}`}function Q(a){return a?[...a.starters||[],...Array.isArray(a.bench)?a.bench:[],...Array.isArray(a.reserve)?a.reserve:[]]:[]}export{qe as renderTrade};
