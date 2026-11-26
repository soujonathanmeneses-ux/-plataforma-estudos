/* =========================================================
   Revisa — aplicação (sem build, sem dependências)
   Rotas por hash:
     #/                         início
     #/m/:materia               temas da matéria
     #/m/:materia/t/:tema       página do tema
     #/m/:materia/exercicios    lista de exercícios
     #/m/:materia/ex/:id        exercício
     #/m/:materia/revisao       revisão relâmpago
     #/m/:materia/flash         flashcards
     #/m/:materia/quiz          quiz
     #/busca                    busca
   ========================================================= */
(function () {
  "use strict";

  var MATS = window.MATERIAS || [];
  var PLANO = window.PLANO_CONTAS || {};
  var app = document.getElementById("app");

  /* ---------------- armazenamento (opcional, por navegador) ---------------- */
  var KEY = "revisa.v1";
  var state = { lidos: {}, quiz: {}, sabe: {} };
  try { var raw = localStorage.getItem(KEY); if (raw) state = Object.assign(state, JSON.parse(raw)); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* ---------------- utilitários ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>"); }
  function plain(s) { return String(s || "").replace(/\*\*/g, ""); }
  function money(v) { return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function num(v, d) { return Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function pct(v, d) { return num(v * 100, d == null ? 2 : d) + "%"; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function findMat(id) { for (var i = 0; i < MATS.length; i++) if (MATS[i].id === id) return MATS[i]; return null; }
  function temaKey(m, t) { return m.id + "/" + t.id; }
  function progresso(m) { var n = m.temas.length, d = 0; m.temas.forEach(function (t) { if (state.lidos[temaKey(m, t)]) d++; }); return { n: n, d: d, p: n ? d / n : 0 }; }
  function countQuiz(m) { return m.temas.reduce(function (a, t) { return a + (t.quiz ? t.quiz.length : 0); }, 0); }
  function countFlash(m) { return m.temas.reduce(function (a, t) { return a + (t.flash ? t.flash.length : 0); }, 0); }

  var I = {
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5v-2zM8 7h7"/></svg>',
    list: '<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
    cards: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/></svg>',
    quiz: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    gear: '<svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    tag: '<svg viewBox="0 0 24 24"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01"/></svg>',
    table: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M10 4v16"/></svg>',
    bulb: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/></svg>',
    alert: '<svg viewBox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
    sigma: '<svg viewBox="0 0 24 24"><path d="M18 7V4H6l6 8-6 8h12v-3"/></svg>',
    calc: '<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h4"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    redo: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>'
  };

  /* ---------------- tema claro/escuro ---------------- */
  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  document.getElementById("themeBtn").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("revisa.tema", next); } catch (e) {}
  });

  /* ---------------- navegação do topo ---------------- */
  function renderNav(mid) {
    document.getElementById("topnav").innerHTML = MATS.map(function (m) {
      return '<a class="c-' + m.cor + (m.id === mid ? " on" : "") + '" href="#/m/' + m.id + '"><span class="dot"></span>' + esc(m.curto) + "</a>";
    }).join("");
  }

  /* =========================================================
     INÍCIO
     ========================================================= */
  function viewHome() {
    var totalT = 0, lidos = 0, totalQ = 0, totalEx = 0;
    MATS.forEach(function (m) { var p = progresso(m); totalT += p.n; lidos += p.d; totalQ += countQuiz(m); totalEx += (m.exercicios || []).length; });
    var h = '<div class="view">';
    h += '<section class="hero">' +
      '<div class="card pad" style="padding:30px">' +
        '<span class="eyebrow" style="color:var(--muted)">Estudo e revisão para prova</span>' +
        '<h1 style="margin-top:10px">Revise com <em>calma</em>,<br>chegue na prova seguro.</h1>' +
        '<p class="lead">Resumos diretos por tema, exercícios resolvidos passo a passo, flashcards e quiz — tudo num lugar só.</p>' +
        '<div class="row"><a class="btn primary" href="#/m/' + (MATS[0] ? MATS[0].id : "") + '">' + I.book + 'Começar a estudar</a><a class="btn" href="#/busca">' + I.search + 'Buscar um conceito</a></div>' +
      "</div>" +
      '<div class="stats">' +
        stat(lidos + "/" + totalT, "temas estudados") +
        stat(MATS.length, "matérias") +
        stat(totalQ, "questões de quiz") +
        stat(totalEx, "exercícios resolvidos") +
      "</div>" +
    "</section>";
    h += '<div class="section-title"><h2>Suas matérias</h2><span class="muted small">Escolha por onde começar</span></div>';
    h += '<div class="subjects">' + MATS.map(function (m) {
      var p = progresso(m);
      return '<a class="card subject c-' + m.cor + '" href="#/m/' + m.id + '">' +
        '<span class="go">' + I.arrow + "</span>" +
        '<div><span class="eyebrow">' + esc(m.curto) + '</span><h3 style="margin-top:6px;padding-right:44px">' + esc(m.nome) + "</h3></div>" +
        '<p class="desc">' + esc(m.descricao) + "</p>" +
        '<div class="meta"><span class="chip">' + m.temas.length + " temas</span>" +
          ((m.exercicios || []).length ? '<span class="chip">' + m.exercicios.length + " exercícios</span>" : "") +
          '<span class="chip">' + countFlash(m) + " flashcards</span></div>" +
        '<div><div class="row small muted" style="justify-content:space-between;margin-bottom:6px"><span>Progresso</span><span>' + p.d + "/" + p.n + '</span></div><div class="bar"><i style="width:' + Math.round(p.p * 100) + '%"></i></div></div>' +
      "</a>";
    }).join("") + "</div>";
    h += "</div>";
    return h;
    function stat(b, s) { return '<div class="card stat"><b>' + b + "</b><span>" + s + "</span></div>"; }
  }

  /* =========================================================
     MATÉRIA — cabeçalho e abas
     ========================================================= */
  function head(m, aba) {
    var p = progresso(m);
    var tabs = [
      ["", I.grid, "Temas"],
      (m.exercicios && m.exercicios.length) ? ["exercicios", I.pen, "Exercícios"] : null,
      ["revisao", I.bolt, "Revisão relâmpago"],
      ["flash", I.cards, "Flashcards"],
      ["quiz", I.quiz, "Quiz"]
    ].filter(Boolean);
    var h = '<div class="crumbs"><a href="#/">Início</a>' + I.chev + "<span>" + esc(m.curto) + "</span></div>";
    h += '<div class="page-head"><div style="flex:1;min-width:260px"><span class="eyebrow">' + esc(m.curto) + "</span><h1>" + esc(m.nome) + '</h1><p class="sub">' + esc(m.descricao) + "</p></div>" +
      '<div class="prog"><small><span>Temas estudados</span><span>' + p.d + "/" + p.n + '</span></small><div class="bar"><i style="width:' + Math.round(p.p * 100) + '%"></i></div></div></div>';
    h += '<nav class="tabs" aria-label="Seções da matéria">' + tabs.map(function (t) {
      return '<a href="#/m/' + m.id + (t[0] ? "/" + t[0] : "") + '" class="' + (aba === t[0] ? "on" : "") + '">' + t[1] + t[2] + "</a>";
    }).join("") + "</nav>";
    return h;
  }

  function viewMateria(m) {
    var h = '<div class="view c-' + m.cor + '">' + head(m, "");
    if (m.mapa) {
      h += '<div class="card journey"><h3>' + esc(m.mapa.titulo) + '</h3><div class="steps">' +
        m.mapa.passos.map(function (s) { return '<div class="step"><b>' + esc(s[0]) + "</b><p>" + md(s[1]) + "</p></div>"; }).join("") + "</div></div>";
    }
    (m.grupos || [{ id: null, nome: "" }]).forEach(function (g) {
      var ts = m.temas.filter(function (t) { return !g.id || t.grupo === g.id; });
      if (!ts.length) return;
      if (g.nome) h += '<div class="group-label">' + esc(g.nome) + "</div>";
      h += '<div class="topics">' + ts.map(function (t) {
        var done = state.lidos[temaKey(m, t)];
        return '<a class="card topic' + (done ? " done" : "") + '" href="#/m/' + m.id + "/t/" + t.id + '">' +
          '<span class="n">' + (done ? I.check : String(t.num).padStart(2, "0")) + "</span>" +
          "<div><h4>" + esc(t.titulo) + "</h4><p>" + esc(t.sub || "") + "</p></div></a>";
      }).join("") + "</div>";
    });
    return h + "</div>";
  }

  /* =========================================================
     TEMA
     ========================================================= */
  function viewTema(m, t) {
    var idx = m.temas.indexOf(t), prev = m.temas[idx - 1], next = m.temas[idx + 1];
    var secs = [];
    var body = "";

    body += '<div class="oneliner"><span class="eyebrow">Em uma frase</span>' + md(t.frase) + "</div>";

    if (t.resumo) { secs.push(["resumo", "Entenda"]); body += sec("resumo", I.book, "Entenda", '<div class="prose">' + t.resumo.map(function (p) { return "<p>" + md(p) + "</p>"; }).join("") + "</div>"); }
    if (t.funcoes) { secs.push(["funcoes", "Principais funções"]); body += sec("funcoes", I.list, "Principais funções", '<div class="fn-grid">' + t.funcoes.map(function (f, i) { return '<div class="fn"><b><i>' + (i + 1) + "</i>" + md(f[0]) + "</b><p>" + md(f[1]) + "</p></div>"; }).join("") + "</div>"); }
    if (t.formulas) { secs.push(["formulas", "Fórmulas"]); body += sec("formulas", I.sigma, "Fórmulas", '<div class="formulas">' + t.formulas.map(function (f) { return '<div class="formula"><b>' + esc(f[0]) + "</b><code>" + esc(f[1]) + "</code>" + (f[2] ? "<p>" + md(f[2]) + "</p>" : "") + "</div>"; }).join("") + "</div>"); }
    if (t.conceitos) { secs.push(["conceitos", "Conceitos-chave"]); body += sec("conceitos", I.tag, "Conceitos-chave", '<dl class="terms">' + t.conceitos.map(function (c) { return '<div class="term"><dt>' + md(c[0]) + "</dt><dd>" + md(c[1]) + "</dd></div>"; }).join("") + "</dl>"); }
    if (t.tabela) { secs.push(["tabela", "Comparativo"]); body += sec("tabela", I.table, t.tabela.titulo || "Comparativo", tabela(t.tabela)); }
    [t.extra, t.extra2].forEach(function (x, k) {
      if (!x) return; var id = "extra" + k; secs.push([id, x.titulo]);
      body += sec(id, I.bulb, x.titulo, '<div class="callout"><ul>' + x.itens.map(function (i) { return "<li>" + md(i) + "</li>"; }).join("") + "</ul></div>");
    });
    if (t.exemplo) { secs.push(["exemplo", "Exemplo"]); body += sec("exemplo", I.eye, t.exemplo.titulo, '<div class="callout example"><p>' + md(t.exemplo.texto) + "</p></div>"); }
    if (t.ferramenta) { secs.push(["ferramenta", "Pratique"]); body += sec("ferramenta", I.calc, "Pratique", '<div id="toolHost"></div>'); }
    if (t.atencao) { secs.push(["atencao", "Cai na prova"]); body += sec("atencao", I.alert, "Cai na prova", '<div class="callout warn"><h3>' + I.alert + 'Atenção a estes pontos</h3><ul>' + t.atencao.map(function (a) { return "<li>" + md(a) + "</li>"; }).join("") + "</ul></div>"); }
    if (t.quiz && t.quiz.length) { secs.push(["teste", "Teste rápido"]); body += sec("teste", I.quiz, "Teste rápido (" + t.quiz.length + " questões)", '<div id="quizHost"></div>'); }

    var done = !!state.lidos[temaKey(m, t)];
    body += '<div class="card done-bar"><div style="flex:1;min-width:200px"><b>' + (done ? "Tema estudado ✓" : "Terminou de estudar?") + '</b><div class="small muted">' + (done ? "Ele aparece como concluído na lista." : "Marque para acompanhar seu progresso.") + "</div></div>" +
      '<button class="btn ' + (done ? "" : "primary") + '" id="markBtn" type="button">' + I.check + (done ? "Desmarcar" : "Marcar como estudado") + "</button></div>";
    body += '<div class="pager">' +
      (prev ? '<a class="card" href="#/m/' + m.id + "/t/" + prev.id + '"><small>← Anterior</small><b>' + esc(prev.titulo) + "</b></a>" : "<span></span>") +
      (next ? '<a class="card nx" href="#/m/' + m.id + "/t/" + next.id + '"><small>Próximo →</small><b>' + esc(next.titulo) + "</b></a>" : '<a class="card nx" href="#/m/' + m.id + '/quiz"><small>Fechou os temas →</small><b>Fazer o quiz da matéria</b></a>') +
    "</div>";

    var h = '<div class="view c-' + m.cor + '">';
    h += '<div class="crumbs"><a href="#/">Início</a>' + I.chev + '<a href="#/m/' + m.id + '">' + esc(m.curto) + "</a>" + I.chev + "<span>Tema " + t.num + "</span></div>";
    h += '<div class="page-head"><div><span class="eyebrow">Tema ' + t.num + "</span><h1>" + esc(t.titulo) + '</h1><p class="sub">' + esc(t.sub || "") + "</p></div></div>";
    h += '<div class="topic-layout"><aside class="toc" aria-label="Nesta página"><b>Nesta página</b>' + secs.map(function (s) { return '<a href="#" data-goto="' + s[0] + '">' + esc(s[1]) + "</a>"; }).join("") + '</aside><article class="article">' + body + "</article></div>";
    h += "</div>";

    return { html: h, after: function () {
      document.getElementById("markBtn").addEventListener("click", function () {
        var k = temaKey(m, t); if (state.lidos[k]) delete state.lidos[k]; else state.lidos[k] = true; save(); route();
      });
      if (t.quiz && t.quiz.length) mountQuiz(document.getElementById("quizHost"), t.quiz.map(function (q) { return Object.assign({ from: "" }, q); }), m.id + "/" + t.id, true);
      if (t.ferramenta && TOOLS[t.ferramenta]) TOOLS[t.ferramenta](document.getElementById("toolHost"));
      wireToc();
    } };

    function sec(id, icon, title, inner) { return '<section id="' + id + '"><h2><span class="ico">' + icon + "</span>" + esc(title) + "</h2>" + inner + "</section>"; }
  }

  function tabela(tb) {
    return '<div class="tbl-wrap"><table><thead><tr>' + tb.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      tb.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + md(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }

  function wireToc() {
    var links = [].slice.call(document.querySelectorAll(".toc a[data-goto]"));
    links.forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); var el = document.getElementById(a.getAttribute("data-goto")); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); });
    });
    if (!("IntersectionObserver" in window) || !links.length) return;
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-goto") === en.target.id); });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    links.forEach(function (a) { var el = document.getElementById(a.getAttribute("data-goto")); if (el) io.observe(el); });
  }

  /* =========================================================
     QUIZ
     ========================================================= */
  function mountQuiz(host, qs, key, inline) {
    var order = inline ? qs : shuffle(qs), i = 0, acertos = 0, answered = false;
    function draw() {
      if (i >= order.length) return end();
      var q = order[i];
      var h = '<div class="quiz' + (inline ? "" : " card pad") + '">' +
        '<div class="top"><span class="chip acc">' + (i + 1) + " de " + order.length + '</span><div class="bar"><i style="width:' + (i / order.length * 100) + '%"></i></div><span class="chip ok">' + acertos + " ✓</span></div>" +
        (q.from ? '<div class="q-from">' + esc(q.from) + "</div>" : "") +
        '<div class="q-text">' + md(q.q) + '</div><div class="opts">' +
        q.o.map(function (o, k) { return '<button type="button" class="opt" data-k="' + k + '"><span class="k">' + "ABCDE"[k] + "</span><span>" + md(o) + "</span></button>"; }).join("") +
        '</div><div id="fb"></div></div>';
      host.innerHTML = h; answered = false;
      [].forEach.call(host.querySelectorAll(".opt"), function (b) { b.addEventListener("click", function () { pick(+b.getAttribute("data-k")); }); });
    }
    function pick(k) {
      if (answered) return; answered = true;
      var q = order[i], ok = k === q.c; if (ok) acertos++;
      [].forEach.call(host.querySelectorAll(".opt"), function (b) {
        var kk = +b.getAttribute("data-k"); b.disabled = true;
        if (kk === q.c) b.classList.add("right"); else if (kk === k) b.classList.add("wrong");
      });
      host.querySelector("#fb").innerHTML = '<div class="feedback ' + (ok ? "ok" : "no") + '"><b>' + (ok ? "Isso aí!" : "Quase — a correta é a " + "ABCDE"[q.c] + ".") + "</b>" + md(q.e || "") + "</div>" +
        '<div class="row" style="margin-top:14px"><span class="spacer"></span><button class="btn primary" type="button" id="nextQ">' + (i + 1 < order.length ? "Próxima" : "Ver resultado") + I.arrow + "</button></div>";
      var nb = host.querySelector("#nextQ"); nb.addEventListener("click", function () { i++; draw(); }); nb.focus({ preventScroll: true });
    }
    function end() {
      var p = acertos / order.length;
      var best = state.quiz[key] || 0; if (p > best) { state.quiz[key] = p; save(); }
      var msg = p >= .8 ? "Excelente! Você está pronto para esse conteúdo." : p >= .6 ? "Bom! Revise os pontos de “Cai na prova” e tente de novo." : "Vale reler os temas e refazer — a repetição fixa.";
      host.innerHTML = '<div class="card score"><div class="eyebrow">Resultado</div><div class="big">' + acertos + "/" + order.length + '</div><p class="muted" style="margin:6px 0 18px">' + msg + (best && !inline ? " Melhor marca anterior: " + Math.round(best * 100) + "%." : "") + '</p><button class="btn primary" type="button" id="again">' + I.redo + "Refazer</button></div>";
      host.querySelector("#again").addEventListener("click", function () { order = inline ? qs : shuffle(qs); i = 0; acertos = 0; draw(); });
    }
    draw();
  }

  function viewQuiz(m) {
    var qs = [];
    m.temas.forEach(function (t) { (t.quiz || []).forEach(function (q) { qs.push(Object.assign({ from: "Tema " + t.num + " · " + t.titulo }, q)); }); });
    var h = '<div class="view c-' + m.cor + '">' + head(m, "quiz") +
      '<p class="muted" style="margin-bottom:16px">' + qs.length + " questões de todos os temas, em ordem aleatória. Cada resposta mostra a explicação.</p>" +
      '<div id="quizHost"></div></div>';
    return { html: h, after: function () { mountQuiz(document.getElementById("quizHost"), qs, m.id, false); } };
  }

  /* =========================================================
     FLASHCARDS
     ========================================================= */
  function viewFlash(m) {
    var all = [];
    m.temas.forEach(function (t) { (t.flash || []).forEach(function (f, k) { all.push({ f: f[0], v: f[1], t: t, id: m.id + "/" + t.id + "/" + k }); }); });
    var h = '<div class="view c-' + m.cor + '">' + head(m, "flash") + '<div class="flash-wrap" id="fl"></div></div>';
    return { html: h, after: function () {
      var host = document.getElementById("fl"), deck = all.slice(), i = 0, flipped = false, soPend = false;
      function rebuild() { deck = soPend ? all.filter(function (c) { return !state.sabe[c.id]; }) : all.slice(); i = 0; }
      function draw() {
        var known = all.filter(function (c) { return state.sabe[c.id]; }).length;
        if (!deck.length) { host.innerHTML = '<div class="card empty"><b>Você marcou todos como “sei”.</b><p style="margin-top:8px">Ótimo! Mostre todos de novo para revisar.</p><button class="btn" style="margin-top:14px" id="all" type="button">Mostrar todos</button></div>'; host.querySelector("#all").onclick = function () { soPend = false; rebuild(); draw(); }; return; }
        var c = deck[i]; flipped = false;
        host.innerHTML =
          '<div class="row"><span class="chip acc">' + (i + 1) + " / " + deck.length + '</span><span class="chip ok">' + known + " que você já sabe</span><span class=\"spacer\"></span>" +
            '<button class="btn sm ghost" id="shf" type="button">' + I.shuffle + 'Embaralhar</button><button class="btn sm ' + (soPend ? "primary" : "") + '" id="pend" type="button">' + (soPend ? "Só pendentes ✓" : "Só pendentes") + "</button></div>" +
          '<div class="flash" id="card" role="button" tabindex="0" aria-label="Virar cartão"><div class="flash-in">' +
            '<div class="face front"><small>Tema ' + c.t.num + " · " + esc(c.t.titulo) + '</small><div class="ft">' + md(c.f) + '</div><span class="hint">Clique ou espaço para virar</span></div>' +
            '<div class="face back"><small>Resposta</small><div class="bt">' + md(c.v) + "</div></div>" +
          "</div></div>" +
          '<div class="flash-ctrl"><button class="btn" id="prv" type="button">' + I.back + 'Anterior</button><button class="btn" id="rev" type="button">Revisar depois</button><button class="btn primary" id="ok" type="button">' + I.check + 'Sei esse</button><button class="btn" id="nxt" type="button">Próximo' + I.arrow + "</button></div>";
        var card = host.querySelector("#card");
        function flip() { flipped = !flipped; card.classList.toggle("flip", flipped); }
        card.onclick = flip;
        card.onkeydown = function (e) { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } };
        host.querySelector("#prv").onclick = function () { i = (i - 1 + deck.length) % deck.length; draw(); };
        host.querySelector("#nxt").onclick = function () { i = (i + 1) % deck.length; draw(); };
        host.querySelector("#ok").onclick = function () { state.sabe[c.id] = true; save(); if (soPend) { deck.splice(i, 1); if (i >= deck.length) i = 0; } else i = (i + 1) % deck.length; draw(); };
        host.querySelector("#rev").onclick = function () { delete state.sabe[c.id]; save(); i = (i + 1) % deck.length; draw(); };
        host.querySelector("#shf").onclick = function () { deck = shuffle(deck); i = 0; draw(); };
        host.querySelector("#pend").onclick = function () { soPend = !soPend; rebuild(); draw(); };
      }
      draw();
      keyHandler = function (e) {
        if (e.target.tagName === "INPUT") return;
        if (e.key === "ArrowRight") { var b = document.getElementById("nxt"); if (b) b.click(); }
        if (e.key === "ArrowLeft") { var p = document.getElementById("prv"); if (p) p.click(); }
      };
    } };
  }

  /* =========================================================
     REVISÃO RELÂMPAGO
     ========================================================= */
  function viewRevisao(m) {
    var h = '<div class="view c-' + m.cor + '">' + head(m, "revisao");
    h += '<div class="row" style="margin-bottom:16px"><p class="muted" style="flex:1;min-width:240px">O essencial de cada tema numa página: a ideia central, as fórmulas e o que mais cai. Ideal para a véspera da prova.</p><button class="btn sm" type="button" onclick="window.print()">Imprimir</button></div>';
    m.temas.forEach(function (t) {
      h += '<div class="card rev"><h3><span class="n">' + String(t.num).padStart(2, "0") + '</span><a href="#/m/' + m.id + "/t/" + t.id + '">' + esc(t.titulo) + '</a></h3><p class="f">' + md(t.frase) + "</p>";
      if (t.formulas) h += '<div class="fx">' + t.formulas.map(function (f) { return "<code>" + esc(f[1]) + "</code>"; }).join("") + "</div>";
      if (t.atencao) h += "<ul>" + t.atencao.map(function (a) { return "<li>" + md(a) + "</li>"; }).join("") + "</ul>";
      h += "</div>";
    });
    return h + "</div>";
  }

  /* =========================================================
     EXERCÍCIOS
     ========================================================= */
  function viewExercicios(m) {
    var h = '<div class="view c-' + m.cor + '">' + head(m, "exercicios");
    ["Professor", "Extra"].forEach(function (o) {
      var xs = (m.exercicios || []).filter(function (x) { return x.origem === o; });
      if (!xs.length) return;
      h += '<div class="group-label">' + (o === "Professor" ? "Do material da aula" : "Extras para treinar") + "</div><div class=\"ex-list\">";
      h += xs.map(function (x) {
        var info = x.tipo === "contabil" ? x.fatos.length + " fatos · razonetes, balancete" + (temResultado(x) ? ", resultado" : "") + " e balanço" : x.itens.length + " questões resolvidas";
        return '<a class="card ex-item" href="#/m/' + m.id + "/ex/" + x.id + '"><div class="row"><span class="chip ' + (o === "Extra" ? "acc" : "") + '">' + (o === "Extra" ? "Extra" : "Aula") + "</span>" + (x.periodo ? '<span class="chip">' + esc(x.periodo) + "</span>" : "") + "</div><h4>" + esc(x.titulo) + '</h4><p class="small muted">' + info + "</p></a>";
      }).join("") + "</div>";
    });
    return h + "</div>";
  }

  function viewExercicio(m, x) {
    var h = '<div class="view c-' + m.cor + '">';
    h += '<div class="crumbs"><a href="#/">Início</a>' + I.chev + '<a href="#/m/' + m.id + '">' + esc(m.curto) + "</a>" + I.chev + '<a href="#/m/' + m.id + '/exercicios">Exercícios</a>' + I.chev + "<span>" + esc(x.titulo) + "</span></div>";
    h += '<div class="page-head"><div><span class="eyebrow">' + (x.origem === "Extra" ? "Exercício extra" : "Exercício da aula") + "</span><h1>" + esc(x.titulo) + "</h1>" + (x.intro ? '<p class="sub">' + md(x.intro) + "</p>" : x.periodo ? '<p class="sub">Fatos contábeis de ' + esc(x.periodo.toLowerCase()) + "</p>" : "") + "</div></div>";
    if (x.tipo === "contabil") { h += '<div id="exHost"></div></div>'; return { html: h, after: function () { mountContabil(document.getElementById("exHost"), x); } }; }
    if (x.tabela) h += '<div style="margin-bottom:16px">' + tabela(x.tabela) + "</div>";
    h += '<div class="row" style="margin-bottom:12px"><span class="spacer"></span><button class="btn sm" id="openAll" type="button">' + I.eye + "Mostrar todas as resoluções</button></div>";
    h += x.itens.map(function (it, k) {
      return '<div class="card qitem"><div class="qq">' + md(it.q) + '</div><div class="row" style="margin-top:12px"><button class="btn sm" data-sol="' + k + '" type="button">' + I.eye + 'Ver resolução</button></div><div class="sol-wrap" id="sol' + k + '" hidden><div class="sol">' + md(it.r) + '</div><div class="ans">' + I.check + md(it.resp) + "</div></div></div>";
    }).join("");
    h += "</div>";
    return { html: h, after: function () {
      [].forEach.call(document.querySelectorAll("[data-sol]"), function (b) {
        b.addEventListener("click", function () { var el = document.getElementById("sol" + b.getAttribute("data-sol")); el.hidden = !el.hidden; b.innerHTML = I.eye + (el.hidden ? "Ver resolução" : "Esconder resolução"); });
      });
      document.getElementById("openAll").addEventListener("click", function () { [].forEach.call(document.querySelectorAll(".sol-wrap"), function (el) { el.hidden = false; }); [].forEach.call(document.querySelectorAll("[data-sol]"), function (b) { b.innerHTML = I.eye + "Esconder resolução"; }); });
    } };
  }

  /* ---------- motor contábil ---------- */
  var ORDEM = ["A", "P", "PL", "R", "D"];
  var NOME_G = { A: "Ativo", P: "Passivo", PL: "Patrimônio Líquido", R: "Receita", D: "Despesa" };
  function grupo(c) { return (PLANO[c] && PLANO[c].g) || "A"; }
  function devedora(g) { return g === "A" || g === "D"; }
  function temResultado(x) { return x.fatos.some(function (f) { return f.l.some(function (l) { var g = grupo(l[1]); return g === "R" || g === "D"; }); }); }

  function razao(x) {
    var contas = {}, ordem = [];
    x.fatos.forEach(function (f, fi) {
      f.l.forEach(function (l) {
        var c = l[1]; if (!contas[c]) { contas[c] = { nome: c, g: grupo(c), D: [], C: [] }; ordem.push(c); }
        contas[c][l[0]].push({ d: f.d, v: l[2], n: fi + 1 });
      });
    });
    var planoKeys = Object.keys(PLANO);
    ordem.sort(function (a, b) {
      var ga = ORDEM.indexOf(contas[a].g), gb = ORDEM.indexOf(contas[b].g);
      return ga !== gb ? ga - gb : planoKeys.indexOf(a) - planoKeys.indexOf(b);
    });
    return ordem.map(function (c) {
      var k = contas[c], td = sum(k.D), tc = sum(k.C);
      k.td = td; k.tc = tc; k.saldo = td - tc; return k;
    });
    function sum(a) { return a.reduce(function (s, e) { return s + e.v; }, 0); }
  }

  function mountContabil(host, x) {
    var contas = razao(x), res = temResultado(x);
    var passos = [["lanc", "1 · Lançamentos"], ["raz", "2 · Razonetes"], ["bal", "3 · Balancete"]];
    if (res) passos.push(["dre", "4 · Resultado (DRE)"]);
    passos.push(["bp", (res ? "5" : "4") + " · Balanço"]);
    var atual = "lanc", shown = {};

    function draw() {
      var h = '<div class="seg" role="tablist" style="margin-bottom:18px">' + passos.map(function (p) { return '<button type="button" role="tab" data-p="' + p[0] + '" class="' + (p[0] === atual ? "on" : "") + '">' + p[1] + "</button>"; }).join("") + "</div>";
      if (atual === "lanc") h += lanc();
      if (atual === "raz") h += raz();
      if (atual === "bal") h += bal();
      if (atual === "dre") h += dre();
      if (atual === "bp") h += bp();
      var i = passos.findIndex(function (p) { return p[0] === atual; });
      h += '<div class="row" style="margin-top:20px">' + (i > 0 ? '<button class="btn" type="button" data-p="' + passos[i - 1][0] + '">' + I.back + passos[i - 1][1] + "</button>" : "") + '<span class="spacer"></span>' + (i < passos.length - 1 ? '<button class="btn primary" type="button" data-p="' + passos[i + 1][0] + '">' + passos[i + 1][1] + I.arrow + "</button>" : "") + "</div>";
      host.innerHTML = h;
      [].forEach.call(host.querySelectorAll("[data-p]"), function (b) { b.addEventListener("click", function () { atual = b.getAttribute("data-p"); draw(); host.scrollIntoView({ behavior: "smooth", block: "start" }); }); });
      [].forEach.call(host.querySelectorAll("[data-f]"), function (b) { b.addEventListener("click", function () { var k = b.getAttribute("data-f"); shown[k] = !shown[k]; draw(); }); });
      var all = host.querySelector("#showAll"); if (all) all.addEventListener("click", function () { var v = !x.fatos.every(function (f, k) { return shown[k]; }); x.fatos.forEach(function (f, k) { shown[k] = v; }); draw(); });
    }

    function lanc() {
      var allOpen = x.fatos.every(function (f, k) { return shown[k]; });
      var h = '<div class="row" style="margin-bottom:12px"><p class="muted small" style="flex:1;min-width:220px">Leia cada fato, tente montar o lançamento (débito e crédito) e só depois confira.</p><button class="btn sm" id="showAll" type="button">' + I.eye + (allOpen ? "Esconder todos" : "Mostrar todos") + "</button></div>";
      h += x.fatos.map(function (f, k) {
        var o = '<div class="card fact"><div class="row"><span class="d">' + esc(f.d) + '</span><span class="spacer"></span><button class="btn sm ' + (shown[k] ? "ghost" : "") + '" type="button" data-f="' + k + '">' + (shown[k] ? "Esconder" : "Ver lançamento") + '</button></div><p class="t">' + md(f.t) + "</p>";
        if (shown[k]) {
          var ls = f.l; // ordem do conteúdo (débitos antes dos créditos; receita e CMV em blocos)
          o +='<div class="entry">' + ls.map(function (l) { return '<div class="ln ' + (l[0] === "D" ? "d" : "c") + '"><b>' + l[0] + "</b><span>" + esc(l[1]) + '</span><span class="v">' + money(l[2]) + "</span></div>"; }).join("") + "</div>";
          if (f.dica) o += '<div class="tip">' + I.bulb + "<span>" + md(f.dica) + "</span></div>";
        }
        return o + "</div>";
      }).join("");
      if (x.nota) h += '<div class="callout" style="margin-top:14px"><p class="small">' + md(x.nota) + "</p></div>";
      return h;
    }

    function raz() {
      return '<p class="muted small" style="margin-bottom:14px">Débitos à esquerda, créditos à direita. O número entre parênteses é o fato que originou o valor.</p><div class="tees">' + contas.map(function (k) {
        var dev = k.saldo > 0, z = Math.abs(k.saldo) < 0.005;
        var side = function (arr) { return arr.map(function (e) { return "<div><span>(" + e.n + ")</span>" + money(e.v) + "</div>"; }).join(""); };
        return '<div class="card tee"><h5>' + esc(k.nome) + '</h5><span class="grp">' + NOME_G[k.g] + '</span><div class="tgrid"><div class="side l">' + side(k.D) + '</div><div class="side">' + side(k.C) + '</div></div><div class="tot"><div>' + money(k.td) + "</div><div>" + money(k.tc) + "</div></div>" +
          '<div class="saldo' + (z ? " zero" : "") + '">' + (z ? "Saldo zero" : "Saldo " + (dev ? "devedor " : "credor ") + money(Math.abs(k.saldo))) + "</div></div>";
      }).join("") + "</div>";
    }

    function bal() {
      var td = 0, tc = 0;
      var rows = contas.map(function (k) {
        var d = k.saldo > 0 ? k.saldo : 0, c = k.saldo < 0 ? -k.saldo : 0; td += d; tc += c;
        return "<tr><td>" + esc(k.nome) + '<div class="small muted">' + NOME_G[k.g] + '</div></td><td class="r">' + (d ? money(d) : "—") + '</td><td class="r">' + (c ? money(c) : (Math.abs(k.saldo) < .005 ? "0,00" : "—")) + "</td></tr>";
      }).join("");
      var ok = Math.abs(td - tc) < 0.005;
      return '<p class="muted small" style="margin-bottom:14px">Saldos finais de cada razonete. A soma dos saldos devedores deve ser igual à dos credores.</p><div class="tbl-wrap"><table><thead><tr><th>Conta</th><th class="r">Saldo devedor</th><th class="r">Saldo credor</th></tr></thead><tbody>' + rows +
        '<tr class="total"><td>Totais</td><td class="r">' + money(td) + '</td><td class="r">' + money(tc) + "</td></tr></tbody></table></div>" +
        '<div class="check' + (ok ? "" : " no") + '">' + (ok ? I.check + "Balancete fechado: débitos = créditos (" + money(td) + ")" : I.x + "Diferença de " + money(Math.abs(td - tc))) + "</div>";
    }

    function resultado() {
      var rec = contas.filter(function (k) { return k.g === "R"; }), desp = contas.filter(function (k) { return k.g === "D"; });
      var cmv = desp.filter(function (k) { return PLANO[k.nome] && PLANO[k.nome].tipo === "custo"; });
      var ops = desp.filter(function (k) { return cmv.indexOf(k) < 0; });
      var R = rec.reduce(function (s, k) { return s - k.saldo; }, 0);
      var C = cmv.reduce(function (s, k) { return s + k.saldo; }, 0);
      var O = ops.reduce(function (s, k) { return s + k.saldo; }, 0);
      return { rec: rec, cmv: cmv, ops: ops, R: R, C: C, O: O, LB: R - C, LL: R - C - O };
    }

    function dre() {
      var r = resultado();
      var h = '<p class="muted small" style="margin-bottom:14px">Receitas menos despesas do período. O resultado vai para o Patrimônio Líquido.</p><div class="tbl-wrap"><table><tbody>';
      h += r.rec.map(function (k) { return "<tr><td>" + esc(k.nome) + '</td><td class="r">' + money(-k.saldo) + "</td></tr>"; }).join("");
      h += '<tr class="total"><td>= Total de Receitas</td><td class="r">' + money(r.R) + "</td></tr>";
      var desp = r.cmv.concat(r.ops);
      if (desp.length) {
        h += desp.map(function (k) { return "<tr><td>(−) " + esc(k.nome) + '</td><td class="r">(' + money(k.saldo) + ")</td></tr>"; }).join("");
        h += '<tr class="total"><td>= Total de Despesas</td><td class="r">(' + money(r.C + r.O) + ")</td></tr>";
      } else {
        h += '<tr><td class="muted">(−) Despesas — nenhuma no período</td><td class="r muted">—</td></tr>';
      }
      h += '<tr class="total"><td>= ' + (r.LL >= 0 ? "Lucro do Período" : "Prejuízo do Período") + '</td><td class="r">' + money(r.LL) + "</td></tr></tbody></table></div>";
      h += '<div class="callout" style="margin-top:14px"><p class="small">Esse ' + (r.LL >= 0 ? "lucro" : "prejuízo") + ' de <strong>' + money(r.LL) + "</strong> aparece no Patrimônio Líquido do Balanço, como <strong>" + (r.LL >= 0 ? "Lucros Acumulados" : "Prejuízos Acumulados") + "</strong>.</p></div>";
      return h;
    }

    function bp() {
      var r = res ? resultado() : null;
      function bloco(gs) {
        var total = 0, out = "";
        gs.forEach(function (g) {
          var ks = contas.filter(function (k) { return k.g === g && Math.abs(k.saldo) > 0.005; });
          var extraPL = g === "PL" && r ? [{ nome: r.LL >= 0 ? "Lucros Acumulados" : "Prejuízos Acumulados", v: r.LL }] : [];
          var vals = ks.map(function (k) { return { nome: k.nome, v: devedora(g) ? k.saldo : -k.saldo }; }).concat(extraPL);
          if (!vals.length) return;
          var sub = vals.reduce(function (s, a) { return s + a.v; }, 0); total += sub;
          out += (g === "A" ? "" : '<div class="grp"><span>' + NOME_G[g] + "</span><span>" + money(sub) + "</span></div>") +
            vals.map(function (a) { return '<div class="acc"><span>' + esc(a.nome) + "</span><span>" + money(a.v) + "</span></div>"; }).join("");
        });
        return { html: out, total: total };
      }
      var A = bloco(["A"]), P = bloco(["P", "PL"]);
      var ok = Math.abs(A.total - P.total) < 0.005;
      var zeradas = contas.filter(function (k) { return Math.abs(k.saldo) < 0.005 && k.g !== "R" && k.g !== "D"; });
      var h = '<p class="muted small" style="margin-bottom:14px">Ativo à esquerda; Passivo e Patrimônio Líquido à direita' + (r ? ". O lucro da DRE entra no PL" : "") + ".</p>";
      h += '<div class="bp"><div class="card col"><h4>Ativo</h4>' + A.html + '<div class="tot"><span>Total do Ativo</span><span>' + money(A.total) + '</span></div></div><div class="card col"><h4>Passivo + Patrimônio Líquido</h4>' + P.html + '<div class="tot"><span>Total do Passivo + PL</span><span>' + money(P.total) + "</span></div></div></div>";
      h += '<div class="check' + (ok ? "" : " no") + '">' + (ok ? I.check + "Balanço fechado: Ativo = Passivo + PL = " + money(A.total) : I.x + "Não fechou: diferença de " + money(Math.abs(A.total - P.total))) + "</div>";
      if (zeradas.length) h += '<p class="small muted" style="margin-top:10px">Contas com saldo zero (não aparecem no balanço): ' + zeradas.map(function (k) { return esc(k.nome); }).join(", ") + ".</p>";
      return h;
    }

    draw();
  }

  /* =========================================================
     FERRAMENTAS INTERATIVAS
     ========================================================= */
  var TOOLS = {
    "simulador-sad": function (host) {
      host.innerHTML = '<div class="card tool"><h3>' + I.calc + 'Simulador What-if × Goal-seeking</h3><p class="small muted">Mexa nas entradas (what-if) ou defina a margem desejada e veja o preço necessário (goal-seeking).</p>' +
        '<div class="grid"><div class="field"><label for="sPreco">Preço de venda (R$)</label><input id="sPreco" type="number" value="100" step="1"></div>' +
        '<div class="field"><label for="sCusto">Custo unitário (R$)</label><input id="sCusto" type="number" value="70" step="1"></div>' +
        '<div class="field"><label for="sVol">Volume (unidades/mês)</label><input id="sVol" type="number" value="1000" step="10"></div></div>' +
        '<div class="grid" style="grid-template-columns:1fr 1fr"><div class="field"><label for="sVar">What-if: variação do custo <span id="sVarL" class="mono"></span></label><input id="sVar" type="range" min="-30" max="50" value="10" step="1"></div>' +
        '<div class="field"><label for="sMeta">Goal-seeking: margem desejada (%)</label><input id="sMeta" type="number" value="30" step="1"></div></div>' +
        '<div class="results" id="sRes"></div><p class="verdict" id="sTxt"></p></div>';
      var $ = function (id) { return document.getElementById(id); };
      function calc() {
        var p = +$("sPreco").value || 0, c = +$("sCusto").value || 0, v = +$("sVol").value || 0, d = +$("sVar").value || 0, meta = (+$("sMeta").value || 0) / 100;
        $("sVarL").textContent = (d > 0 ? "+" : "") + d + "%";
        var c2 = c * (1 + d / 100), m1 = p ? (p - c) / p : 0, m2 = p ? (p - c2) / p : 0, preco = meta < 1 ? c2 / (1 - meta) : NaN;
        $("sRes").innerHTML =
          box("Margem atual", pct(m1, 1)) +
          box("Novo custo (what-if)", "R$ " + money(c2)) +
          box("Nova margem", pct(m2, 1), m2 < m1 ? "badv" : "good") +
          box("Lucro mensal", "R$ " + money((p - c2) * v), (p - c2) < 0 ? "badv" : "") +
          box("Preço p/ " + Math.round(meta * 100) + "% de margem", isFinite(preco) ? "R$ " + money(preco) : "—", "good");
        $("sTxt").innerHTML = "<strong>What-if:</strong> se o custo variar " + (d > 0 ? "+" : "") + d + "%, a margem vai de " + pct(m1, 1) + " para " + pct(m2, 1) + ". <strong>Goal-seeking:</strong> para ter " + Math.round(meta * 100) + "% de margem com custo de R$ " + money(c2) + ", o preço precisa ser R$ " + (isFinite(preco) ? money(preco) : "—") + " (custo ÷ (1 − margem)).";
      }
      function box(l, v, cl) { return '<div class="res ' + (cl || "") + '"><small>' + l + "</small><b>" + v + "</b></div>"; }
      ["sPreco", "sCusto", "sVol", "sVar", "sMeta"].forEach(function (id) { $(id).addEventListener("input", calc); });
      calc();
    },

    "calc-kpi": function (host) {
      host.innerHTML = '<div class="card tool"><h3>' + I.calc + 'Calculadora de viabilidade</h3><p class="small muted">Informe o investimento, a TMA e os fluxos de cada ano separados por ponto e vírgula.</p>' +
        '<div class="grid"><div class="field"><label for="kI">Investimento inicial (R$)</label><input id="kI" type="number" value="100000" step="1000"></div>' +
        '<div class="field"><label for="kT">TMA (% ao ano)</label><input id="kT" type="number" value="10" step="0.5"></div>' +
        '<div class="field"><label for="kF">Fluxos anuais (R$)</label><input id="kF" type="text" value="40000; 40000; 40000"></div></div>' +
        '<div class="results" id="kRes"></div><p class="verdict" id="kTxt"></p></div>';
      var $ = function (id) { return document.getElementById(id); };
      function calc() {
        var I0 = +$("kI").value || 0, i = (+$("kT").value || 0) / 100;
        var F = $("kF").value.split(/[;\n]/).map(function (s) { return parseFloat(s.replace(/\./g, "").replace(",", ".")); }).filter(function (n) { return isFinite(n); });
        if (!F.length || !I0) { $("kRes").innerHTML = ""; $("kTxt").textContent = "Preencha os campos."; return; }
        var vp = 0, acc = 0, accD = 0, pb = null, pbd = null;
        F.forEach(function (f, t) {
          var d = f / Math.pow(1 + i, t + 1); vp += d;
          if (pb === null && acc + f >= I0) pb = t + (I0 - acc) / f; acc += f;
          if (pbd === null && accD + d >= I0) pbd = t + (I0 - accD) / d; accD += d;
        });
        var vpl = vp - I0, il = vp / I0, roi = (acc - I0) / I0, tir = irr(I0, F);
        $("kRes").innerHTML =
          box("Payback simples", pb === null ? "não recupera" : num(pb, 2) + " anos") +
          box("Payback descontado", pbd === null ? "não recupera" : num(pbd, 2) + " anos") +
          box("ROI", pct(roi, 1), roi >= 0 ? "good" : "badv") +
          box("VPL", "R$ " + money(vpl), vpl >= 0 ? "good" : "badv") +
          box("IL", num(il, 3), il >= 1 ? "good" : "badv") +
          box("TIR", tir === null ? "—" : pct(tir, 2), tir !== null && tir >= i ? "good" : "badv");
        $("kTxt").innerHTML = vpl >= 0
          ? "<strong>Viável:</strong> VPL ≥ 0, IL ≥ 1 e TIR ≥ TMA — o projeto gera valor acima da taxa mínima."
          : "<strong>Inviável à TMA informada:</strong> VPL < 0, IL < 1 e TIR < TMA" + (roi > 0 ? " — mesmo com ROI positivo, porque o ROI ignora o valor do dinheiro no tempo." : ".");
      }
      function irr(I0, F) {
        function npv(r) { return F.reduce(function (s, f, t) { return s + f / Math.pow(1 + r, t + 1); }, 0) - I0; }
        var lo = -0.99, hi = 10; if (npv(lo) * npv(hi) > 0) return null;
        for (var k = 0; k < 200; k++) { var mid = (lo + hi) / 2; if (npv(lo) * npv(mid) <= 0) hi = mid; else lo = mid; }
        return (lo + hi) / 2;
      }
      function box(l, v, cl) { return '<div class="res ' + (cl || "") + '"><small>' + l + "</small><b>" + v + "</b></div>"; }
      ["kI", "kT", "kF"].forEach(function (id) { $(id).addEventListener("input", calc); });
      calc();
    },

    "calc-assimetria": function (host) {
      var rows = [[2, 4, 4], [4, 6, 10], [6, 8, 18], [8, 10, 8]];
      function draw() {
        host.innerHTML = '<div class="card tool"><h3>' + I.calc + 'Calculadora de assimetria (dados agrupados)</h3><p class="small muted">Edite as classes (limite inferior, superior e frequência). Já vem com o exemplo da aula.</p>' +
          '<div class="cls-row small muted" style="margin-top:14px"><span>Lim. inferior</span><span>Lim. superior</span><span>fᵢ</span><span></span></div>' +
          rows.map(function (r, k) { return '<div class="cls-row field">' + [0, 1, 2].map(function (j) { return '<input type="number" data-r="' + k + '" data-j="' + j + '" value="' + r[j] + '" aria-label="' + ["Limite inferior", "Limite superior", "Frequência"][j] + " da classe " + (k + 1) + '">'; }).join("") + '<button class="icon-btn" type="button" data-del="' + k + '" aria-label="Remover classe">' + I.x + "</button></div>"; }).join("") +
          '<div class="row" style="margin-top:10px"><button class="btn sm" type="button" id="aAdd">+ Classe</button><button class="btn sm ghost" type="button" id="aEx2">Carregar exercício extra</button></div>' +
          '<div id="aTbl" style="margin-top:16px"></div><div class="results" id="aRes"></div><p class="verdict" id="aTxt"></p></div>';
        [].forEach.call(host.querySelectorAll("input[data-r]"), function (inp) { inp.addEventListener("input", function () { rows[+inp.dataset.r][+inp.dataset.j] = parseFloat(inp.value) || 0; calc(); }); });
        [].forEach.call(host.querySelectorAll("[data-del]"), function (b) { b.addEventListener("click", function () { if (rows.length > 2) { rows.splice(+b.dataset.del, 1); draw(); } }); });
        host.querySelector("#aAdd").onclick = function () { var l = rows[rows.length - 1], h = l[1] - l[0]; rows.push([l[1], l[1] + h, 1]); draw(); };
        host.querySelector("#aEx2").onclick = function () { rows = [[0, 10, 12], [10, 20, 18], [20, 30, 6], [30, 40, 4]]; draw(); };
        calc();
      }
      function calc() {
        var n = 0, sfx = 0, F = 0, tb = "";
        rows.forEach(function (r) { n += r[2]; });
        var cum = 0;
        rows.forEach(function (r) { var x = (r[0] + r[1]) / 2; sfx += r[2] * x; cum += r[2]; tb += "<tr><td>" + num(r[0], 0) + " ⊢ " + num(r[1], 0) + '</td><td class="r">' + r[2] + '</td><td class="r">' + num(x, 1) + '</td><td class="r">' + num(r[2] * x, 1) + '</td><td class="r">' + cum + "</td></tr>"; });
        if (!n) return;
        var mean = sfx / n, md = NaN, mo = NaN;
        for (var k = 0; k < rows.length; k++) { var r = rows[k]; if (F + r[2] >= n / 2) { md = r[0] + (n / 2 - F) / r[2] * (r[1] - r[0]); break; } F += r[2]; }
        var mk = 0; rows.forEach(function (r, k2) { if (r[2] > rows[mk][2]) mk = k2; });
        var d1 = rows[mk][2] - (mk > 0 ? rows[mk - 1][2] : 0), d2 = rows[mk][2] - (mk < rows.length - 1 ? rows[mk + 1][2] : 0);
        mo = rows[mk][0] + (d1 + d2 ? d1 / (d1 + d2) : 0.5) * (rows[mk][1] - rows[mk][0]);
        var ss = rows.reduce(function (s, r) { var x = (r[0] + r[1]) / 2; return s + r[2] * Math.pow(x - mean, 2); }, 0), sd = Math.sqrt(ss / n);
        var a1 = sd ? (mean - mo) / sd : 0, a2 = sd ? 3 * (mean - md) / sd : 0;
        document.getElementById("aTbl").innerHTML = '<div class="tbl-wrap"><table><thead><tr><th>Classe</th><th class="r">fᵢ</th><th class="r">xᵢ</th><th class="r">fᵢ·xᵢ</th><th class="r">Fᵢ</th></tr></thead><tbody>' + tb + '<tr class="total"><td>Σ</td><td class="r">' + n + '</td><td></td><td class="r">' + num(sfx, 1) + "</td><td></td></tr></tbody></table></div>";
        document.getElementById("aRes").innerHTML = box("Média x̄", num(mean, 2)) + box("Mediana Md", num(md, 2)) + box("Moda Mo", num(mo, 2)) + box("Desvio padrão σ", num(sd, 4)) + box("A₁ (moda)", num(a1, 4)) + box("A₂ (mediana)", num(a2, 4));
        var a = Math.abs(a2), dir = Math.abs(a1) < 1e-9 && Math.abs(a2) < 1e-9 ? "simétrica" : a2 > 0 ? "assimetria positiva (cauda à direita)" : "assimetria negativa (cauda à esquerda)";
        var int = a < 0.15 ? "fraca" : a <= 1 ? "moderada" : "forte";
        document.getElementById("aTxt").innerHTML = "<strong>Conclusão:</strong> distribuição " + dir + (dir === "simétrica" ? "" : ", intensidade " + int) + ". Ordem: " + ordem(mean, md, mo) + ".";
      }
      function ordem(a, b, c) { var L = [["Média", a], ["Mediana", b], ["Moda", c]].sort(function (x, y) { return x[1] - y[1]; }); return L.map(function (x) { return x[0] + " (" + num(x[1], 2) + ")"; }).join(" ≤ "); }
      function box(l, v) { return '<div class="res"><small>' + l + "</small><b>" + v + "</b></div>"; }
      draw();
    }
  };

  /* =========================================================
     BUSCA
     ========================================================= */
  function norm(s) { return plain(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function viewBusca(q) {
    var h = '<div class="view"><div class="crumbs"><a href="#/">Início</a>' + I.chev + '<span>Buscar</span></div>' +
      '<div class="card search-box">' + I.search + '<input id="q" type="search" placeholder="Ex.: ACID, Herzberg, razonete, Pearson…" value="' + esc(q || "") + '" aria-label="Buscar"></div><div id="hits"></div></div>';
    return { html: h, after: function () {
      var inp = document.getElementById("q"); inp.focus();
      function run() {
        var term = norm(inp.value.trim()), out = [];
        if (term.length < 2) { document.getElementById("hits").innerHTML = '<p class="muted">Digite pelo menos 2 letras. A busca olha títulos, conceitos, fórmulas e flashcards de todas as matérias.</p>'; return; }
        MATS.forEach(function (m) {
          m.temas.forEach(function (t) {
            var cands = [[t.titulo, t.frase]];
            (t.conceitos || []).forEach(function (c) { cands.push([c[0], c[1]]); });
            (t.formulas || []).forEach(function (f) { cands.push([f[0], f[1]]); });
            (t.flash || []).forEach(function (f) { cands.push([f[0], f[1]]); });
            cands.forEach(function (c) { if (norm(c[0] + " " + c[1]).indexOf(term) >= 0) out.push({ m: m, t: t, a: c[0], b: c[1] }); });
          });
        });
        document.getElementById("hits").innerHTML = out.length ? '<p class="small muted" style="margin-bottom:10px">' + out.length + " resultado(s)</p>" + out.slice(0, 60).map(function (r) {
          return '<a class="card hit c-' + r.m.cor + '" href="#/m/' + r.m.id + "/t/" + r.t.id + '"><small>' + esc(r.m.curto) + " · Tema " + r.t.num + " · " + esc(r.t.titulo) + "</small><div><b>" + hl(r.a) + '</b></div><div class="small muted">' + hl(r.b) + "</div></a>";
        }).join("") : '<div class="card empty">Nada encontrado para “' + esc(inp.value) + "”.</div>";
        try { history.replaceState(null, "", "#/busca?q=" + encodeURIComponent(inp.value)); } catch (e) {}
      }
      function hl(s) {
        var p = plain(s), n = norm(p), t = norm(inp.value.trim()), i = n.indexOf(t);
        if (i < 0) return esc(p);
        return esc(p.slice(0, i)) + "<mark>" + esc(p.slice(i, i + t.length)) + "</mark>" + esc(p.slice(i + t.length));
      }
      inp.addEventListener("input", run); run();
    } };
  }

  /* =========================================================
     ROTEADOR
     ========================================================= */
  var keyHandler = null;
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && !/INPUT|TEXTAREA/.test(e.target.tagName)) { e.preventDefault(); location.hash = "#/busca"; return; }
    if (keyHandler) keyHandler(e);
  });

  function route() {
    keyHandler = null;
    var hash = location.hash.replace(/^#\/?/, ""), parts = hash.split("?")[0].split("/").filter(Boolean);
    var qs = (hash.split("?")[1] || "").match(/q=([^&]*)/);
    var out, m = null;
    if (!parts.length) out = viewHome();
    else if (parts[0] === "busca") out = viewBusca(qs ? decodeURIComponent(qs[1]) : "");
    else if (parts[0] === "m" && (m = findMat(parts[1]))) {
      var sub = parts[2];
      if (!sub) out = viewMateria(m);
      else if (sub === "t") { var t = m.temas.filter(function (x) { return x.id === parts[3]; })[0]; out = t ? viewTema(m, t) : viewMateria(m); }
      else if (sub === "quiz") out = viewQuiz(m);
      else if (sub === "flash") out = viewFlash(m);
      else if (sub === "revisao") out = viewRevisao(m);
      else if (sub === "exercicios") out = viewExercicios(m);
      else if (sub === "ex") { var x = (m.exercicios || []).filter(function (e) { return e.id === parts[3]; })[0]; out = x ? viewExercicio(m, x) : viewExercicios(m); }
      else out = viewMateria(m);
    } else out = viewHome();

    renderNav(m ? m.id : null);
    if (typeof out === "string") out = { html: out };
    app.innerHTML = out.html;
    if (out.after) out.after();
    if (parts[0] !== "busca" || !app.dataset.wasSearch) window.scrollTo(0, 0);
    app.dataset.wasSearch = parts[0] === "busca" ? "1" : "";
    document.title = (m ? m.curto + " · " : "") + "Revisa";
  }

  window.addEventListener("hashchange", route);
  route();
})();
