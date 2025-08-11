// ===== Starfield background (lightweight) =====
  const starCanvas = document.getElementById('stars');
  const sctx = starCanvas.getContext('2d');
  let stars = [], w = 0, h = 0, scale = devicePixelRatio || 1;
  function resizeStars(){ w = starCanvas.width = innerWidth * scale; h = starCanvas.height = innerHeight * scale; stars = Array.from({length: Math.min(220, Math.floor(w*h/4000))}, () => ({ x: Math.random()*w, y: Math.random()*h, z: Math.random()*1+0.5 })) }
  function drawStars(){ sctx.clearRect(0,0,w,h); for(const s of stars){ const size = s.z * (scale>1? 2:1); sctx.fillStyle = Math.random() < .002 ? '#ffdd57' : (Math.random()<.004 ? '#ff7ad6' : '#5df2d6'); sctx.fillRect(s.x, s.y, size, size); s.y += s.z * 0.35; if(s.y>h){ s.y = -2; s.x = Math.random()*w; } } requestAnimationFrame(drawStars) }
  addEventListener('resize', resizeStars, {passive:true}); resizeStars(); drawStars();

  let apps = [];

  // ===== App directory (edit here to add new apps) =====
  fetch('/apps.json')
    .then(r=>r.json())
    .then(list=>{
      apps = list;
      render(apps);
      q.addEventListener('input', () => doFilter(apps));
    });

  // ===== Build grid =====
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const count = document.getElementById('count');
  function render(items){
    grid.innerHTML = items.map((a,i)=>`<article class="card scanlines" role="listitem" tabindex="0" data-index="${i}">
        <div style="font-size:28px">${a.icon.startsWith('<img') ? a.icon : (a.icon || '🧩')}</div>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <div class="tagbar">${(a.tags||[]).map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
        <a class="go" href="${a.url}" aria-label="Open ${a.title}">Open →</a>
      </article>`).join('');
    empty.style.display = items.length? 'none':'block';
    count.textContent = `${items.length} app${items.length!==1?'s':''}`;
  }

  // ===== Search / keyboard nav =====
  const q = document.getElementById('q');
  function doFilter(apps){
    const term = (q.value||'').toLowerCase().trim();
    const filtered = term? apps.filter(a => [a.title, a.description, ...(a.tags||[])].join(' ').toLowerCase().includes(term)) : apps;
    render(filtered);
  }
  
  addEventListener('keydown', (e)=>{
    if(e.key === '/' && document.activeElement !== q){ q.focus(); e.preventDefault(); }
    if(['ArrowRight','ArrowLeft','ArrowDown','ArrowUp'].includes(e.key)){
      const cards = [...grid.querySelectorAll('.card')];
      const idx = Math.max(0, cards.indexOf(document.activeElement));
      let next = idx + (e.key==='ArrowRight'||e.key==='ArrowDown'?1:-1);
      next = (next + cards.length) % cards.length;
      cards[next]?.focus();
    }
    if(e.key === 'Enter' && document.activeElement?.classList.contains('card')){
      const link = document.activeElement.querySelector('.go'); if(link) window.location = link.href;
    }
  });

  // ===== Simple pageview ping (optional; replace with GA if needed) =====
  // console.log('Pixel Lab loaded', new Date().toISOString());