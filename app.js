/* Monta a página a partir do window.CONFIG (config.js).
   Para mudar o conteúdo ou o visual, edite o config.js ou use o editor.html. */
(function () {
  "use strict";

  var isPreview = new URLSearchParams(location.search).has("preview");
  var loadedFonts = {};
  var root = document.documentElement;

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function hexToRgba(hex, alpha) {
    var h = String(hex || "").replace("#", "");
    if (h.length === 3) h = h.replace(/(.)/g, "$1$1");
    if (!/^[0-9a-f]{6}$/i.test(h)) return hex;
    var n = parseInt(h, 16);
    return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + alpha + ")";
  }

  // Carrega qualquer fonte do Google Fonts pelo nome
  function loadFont(family) {
    if (!family || loadedFonts[family]) return;
    loadedFonts[family] = true;
    var base = "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(family).replace(/%20/g, "+");
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = base + ":wght@300;400;500;600;700;800&display=swap";
    // Algumas fontes só têm um peso; nesse caso carrega sem pesos
    link.onerror = function () { link.href = base + "&display=swap"; link.onerror = null; };
    document.head.appendChild(link);
  }

  function isImagePath(s) {
    return /^(https?:|data:|\.{0,2}\/)|\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(s);
  }

  function iconHTML(icon) {
    if (!icon) return "";
    if (/(^|\s)fa-/.test(icon)) return '<i class="' + esc(icon) + '" aria-hidden="true"></i>';
    if (isImagePath(icon)) return '<img src="' + esc(icon) + '" alt="">';
    return '<span aria-hidden="true">' + esc(icon) + "</span>";
  }

  function setVars(vars) {
    Object.keys(vars).forEach(function (k) { root.style.setProperty(k, vars[k]); });
  }

  function render(cfg) {
    var p = cfg.pagina || {}, perfil = cfg.perfil || {}, c = cfg.cores || {}, f = cfg.fontes || {},
        b = cfg.botoes || {}, fundo = cfg.fundo || {}, ef = cfg.efeitos || {}, rod = cfg.rodape || {};

    if (p.titulo) document.title = p.titulo;
    if (p.favicon) $("favicon").href = p.favicon;
    var theme = document.querySelector('meta[name="theme-color"]');
    if (theme && c.fundoTopo) theme.content = c.fundoTopo;

    loadFont(f.titulo);
    loadFont(f.texto);

    var raios = { circulo: "50%", arredondado: "22%", quadrado: "6px" };
    setVars({
      "--fundo-topo": c.fundoTopo,
      "--fundo-meio": c.fundoMeio,
      "--fundo-base": c.fundoBase,
      "--angulo": (c.anguloGradiente || 0) + "deg",
      "--texto": c.texto,
      "--texto-2": c.textoSecundario,
      "--destaque": c.destaque,
      "--btn-fundo": hexToRgba(c.botaoFundo, c.botaoOpacidade == null ? 1 : c.botaoOpacidade),
      "--btn-texto": c.botaoTexto,
      "--btn-borda": c.botaoBorda,
      "--btn-hover": c.botaoHover,
      "--btn-raio": b.arredondamento + "px",
      "--btn-altura": b.altura + "px",
      "--btn-gap": b.espacamento + "px",
      "--btn-borda-largura": (b.larguraBorda || 0) + "px",
      "--largura": b.larguraMaxima + "px",
      "--fonte-titulo": '"' + f.titulo + '", Georgia, serif',
      "--fonte-texto": '"' + f.texto + '", system-ui, sans-serif',
      "--tam-titulo": f.tamanhoTitulo + "px",
      "--tam-sub": f.tamanhoSubtitulo + "px",
      "--tam-btn": f.tamanhoBotao + "px",
      "--tam-btn-sub": f.tamanhoSubtextoBotao + "px",
      "--peso-btn": f.pesoBotao,
      "--letras": f.espacamentoLetras + "px",
      "--foto-tam": perfil.tamanhoFoto + "px",
      "--foto-raio": raios[perfil.formatoFoto] || "50%",
      "--foto-borda": (perfil.bordaFoto || 0) + "px",
      "--img-escurecer": fundo.escurecerImagem,
      "--img-desfoque": (fundo.desfoqueImagem || 0) + "px",
      "--rodape-tam": (rod.tamanho || 12) + "px"
    });

    // Fundo
    $("bg").classList.toggle("animated", !!fundo.brilhoAnimado);
    var bgImg = $("bgImage");
    bgImg.style.backgroundImage = fundo.imagem ? 'url("' + fundo.imagem.replace(/"/g, "%22") + '")' : "";
    bgImg.style.display = fundo.imagem ? "" : "none";

    // Perfil
    var avatar = $("avatar");
    avatar.parentNode.style.display = perfil.foto ? "" : "none";
    if (perfil.foto) avatar.src = perfil.foto;
    avatar.alt = perfil.nome || "";
    var oldBadge = avatar.parentNode.querySelector(".verified");
    if (oldBadge) oldBadge.remove();
    if (perfil.verificado) {
      avatar.insertAdjacentHTML("afterend", '<span class="verified" title="Perfil oficial"><i class="fa-solid fa-check"></i></span>');
    }
    $("name").textContent = perfil.nome || "";
    $("bio").textContent = perfil.subtitulo || "";

    // Botões
    var nav = $("links");
    nav.className = "links style-" + (b.estilo || "vidro") +
      (b.brilho ? " glow-on" : "") +
      (b.animacaoEntrada && !isPreview ? " enter" : "") +
      (f.maiusculasBotao ? " upper" : "") +
      " align-" + (b.alinhamentoTexto || "centro");
    nav.innerHTML = (cfg.links || []).filter(function (l) { return l.ativo !== false; }).map(function (l, i) {
      var style = "animation-delay:" + (i * 0.09) + "s;";
      if (l.corFundo) style += "--btn-fundo:" + l.corFundo + ";--btn-hover:" + l.corFundo + ";";
      if (l.corTexto) style += "--btn-texto:" + l.corTexto + ";";
      var external = /^https?:/i.test(l.url || "");
      return '<a class="link-btn' + (l.destaque ? " featured" : "") + '" href="' + esc(l.url || "#") + '"' +
        (external ? ' target="_blank" rel="noopener"' : "") + ' style="' + esc(style) + '">' +
        (l.icone ? '<span class="link-icon">' + iconHTML(l.icone) + "</span>" : "") +
        '<span class="link-text"><span class="link-title">' + esc(l.texto) + "</span>" +
        (l.subtexto ? '<span class="link-sub">' + esc(l.subtexto) + "</span>" : "") + "</span>" +
        (b.mostrarSeta ? '<span class="link-arrow"><i class="fa-solid fa-chevron-right"></i></span>' : "") +
        "</a>";
    }).join("");

    // Rodapé
    $("footer").textContent = rod.texto || "";

    // Partículas
    var box = $("particles");
    box.innerHTML = "";
    if (ef.particulas) {
      var qtd = Math.min(Number(ef.quantidade) || 0, 80);
      var max = Number(ef.tamanhoMaximo) || 22;
      for (var k = 0; k < qtd; k++) {
        var s = document.createElement("span");
        s.className = "particle";
        s.textContent = ef.simbolo || "♥";
        var size = 8 + Math.random() * Math.max(max - 8, 2);
        s.style.cssText = "left:" + (Math.random() * 100) + "%;font-size:" + size + "px;color:" + ef.cor +
          ";animation-duration:" + (9 + Math.random() * 12) + "s;animation-delay:" + (-Math.random() * 20) + "s;" +
          "--p-op:" + (0.25 + Math.random() * 0.5) + ";--p-drift:" + (Math.random() * 120 - 60) + "px;";
        box.appendChild(s);
      }
    }

    // Aviso 18+
    var gate = $("ageGate"), a = cfg.aviso18 || {};
    var accepted = false;
    try { accepted = localStorage.getItem("idade-confirmada") === "1"; } catch (e) {}
    if (a.ativo && !accepted && !isPreview) {
      $("ageTitle").textContent = a.titulo || "";
      $("ageText").textContent = a.texto || "";
      $("ageYes").textContent = a.botaoSim || "Entrar";
      $("ageNo").textContent = a.botaoNao || "Sair";
      $("ageNo").href = a.linkSair || "https://www.google.com";
      gate.hidden = false;
      document.body.style.overflow = "hidden";
    } else {
      gate.hidden = true;
      document.body.style.overflow = "";
    }
  }

  $("ageYes").addEventListener("click", function () {
    try { localStorage.setItem("idade-confirmada", "1"); } catch (e) {}
    $("ageGate").hidden = true;
    document.body.style.overflow = "";
  });

  // O editor.html envia a configuração para a pré-visualização ao vivo
  window.addEventListener("message", function (e) {
    if (e.data && e.data.tipo === "config-preview" && e.source === window.parent) render(e.data.config);
  });

  render(window.CONFIG || {});
})();
