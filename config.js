/* =====================================================================
   CONFIGURAÇÃO DA PÁGINA DE LINKS
   ---------------------------------------------------------------------
   Tudo o que aparece na página é definido aqui. Você pode:
   1) editar este arquivo direto no GitHub (ícone de lápis), ou
   2) abrir  editor.html  no seu site, mudar tudo visualmente e baixar
      um novo config.js para substituir este.

   Dicas rápidas:
   - Cores: use o formato "#RRGGBB" (ex.: "#ff2e7e").
   - Fotos: coloque o arquivo na pasta img/ e use "img/nome-da-foto.jpg",
     ou cole um link completo "https://...".
   - Ícones: use um ícone do Font Awesome (ex.: "fa-brands fa-whatsapp"),
     um emoji (ex.: "🔥") ou uma imagem (ex.: "img/icone.png").
     Lista de ícones: https://fontawesome.com/search?ic=free
   - Fontes: qualquer nome do Google Fonts (https://fonts.google.com).
   ===================================================================== */

window.CONFIG = {
  pagina: {
    titulo: "Sua Galega RS",
    favicon: "img/favicon.svg"
  },

  aviso18: {
    ativo: true,
    titulo: "Conteúdo para maiores de 18 anos",
    texto: "Esta página contém produtos e conteúdos adultos. Confirme que você tem 18 anos ou mais para continuar.",
    botaoSim: "Tenho 18 anos ou mais",
    botaoNao: "Sair",
    linkSair: "https://www.google.com"
  },

  perfil: {
    foto: "img/perfil.svg",
    formatoFoto: "circulo",      // circulo | arredondado | quadrado
    tamanhoFoto: 120,            // px
    bordaFoto: 3,                // px (0 = sem borda)
    nome: "Sua Galega RS",
    subtitulo: "Prazer, sedução e discrição 🔥\nEntrega sigilosa para todo o Brasil",
    verificado: true
  },

  cores: {
    fundoTopo: "#1a0010",
    fundoMeio: "#5a0631",
    fundoBase: "#0b0005",
    anguloGradiente: 165,        // graus
    texto: "#fff1f6",
    textoSecundario: "#f2a9c6",
    destaque: "#ff2e7e",
    botaoFundo: "#2b0618",
    botaoOpacidade: 0.55,        // 0 a 1
    botaoTexto: "#ffffff",
    botaoBorda: "#ff2e7e",
    botaoHover: "#ff2e7e"
  },

  fundo: {
    imagem: "",                  // ex.: "img/fundo.jpg" (vazio = só o degradê)
    escurecerImagem: 0.6,        // 0 a 1
    desfoqueImagem: 0,           // px
    brilhoAnimado: true          // luzes suaves se movendo no fundo
  },

  fontes: {
    titulo: "Playfair Display",
    texto: "Montserrat",
    tamanhoTitulo: 30,           // px
    tamanhoSubtitulo: 15,        // px
    tamanhoBotao: 16,            // px
    tamanhoSubtextoBotao: 12,    // px
    pesoBotao: 600,              // 300 a 800
    maiusculasBotao: false,
    espacamentoLetras: 0.3       // px
  },

  botoes: {
    estilo: "vidro",             // vidro | solido | contorno
    arredondamento: 18,          // px (999 = formato pílula)
    altura: 64,                  // px
    espacamento: 14,             // px entre os botões
    larguraMaxima: 480,          // px
    larguraBorda: 1,             // px
    brilho: true,                // sombra brilhante
    animacaoEntrada: true,
    mostrarSeta: true,
    alinhamentoTexto: "centro"   // centro | esquerda
  },

  efeitos: {
    particulas: true,
    simbolo: "♥",                // pode ser emoji: "💋", "✨", "🔥"
    quantidade: 18,
    cor: "#ff2e7e",
    tamanhoMaximo: 22            // px
  },

  links: [
    {
      ativo: true,
      texto: "Site da loja",
      subtexto: "Confira todos os produtos",
      url: "https://SEU-SITE.com.br",
      icone: "fa-solid fa-bag-shopping",
      destaque: true,
      corFundo: "",
      corTexto: ""
    },
    {
      ativo: true,
      texto: "Instagram",
      subtexto: "@suaLoja",
      url: "https://instagram.com/SEU_USUARIO",
      icone: "fa-brands fa-instagram",
      destaque: false,
      corFundo: "",
      corTexto: ""
    },
    {
      ativo: true,
      texto: "WhatsApp",
      subtexto: "Atendimento discreto",
      url: "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20links",
      icone: "fa-brands fa-whatsapp",
      destaque: false,
      corFundo: "",
      corTexto: ""
    },
    {
      ativo: true,
      texto: "Canal no Telegram",
      subtexto: "Promoções e novidades exclusivas",
      url: "https://t.me/SEU_CANAL",
      icone: "fa-brands fa-telegram",
      destaque: false,
      corFundo: "",
      corTexto: ""
    }
  ],

  rodape: {
    texto: "© Sua Galega RS • Venda proibida para menores de 18 anos",
    tamanho: 12
  }
};
