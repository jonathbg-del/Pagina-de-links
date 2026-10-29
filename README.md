# Página de Links — PS Sex Shop

Página de links (estilo "link na bio") com visual sensual, para usar no Instagram, TikTok e outras redes.
Tem botões para **Site da loja**, **Instagram**, **WhatsApp** e **Canal no Telegram**, e tudo pode ser personalizado:
cores, degradê, foto, imagem de fundo, ícones, fontes, tamanhos, formato dos botões, partículas animadas e aviso de +18.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `config.js` | **Tudo o que você personaliza fica aqui** (textos, links, cores, fontes, tamanhos…) |
| `editor.html` | Editor visual com prévia ao vivo — muda tudo sem mexer em código |
| `img/` | Coloque aqui suas fotos (perfil, fundo, ícones) |
| `index.html`, `style.css`, `app.js` | A página em si (não precisa mexer) |

## 1. Colocar no ar (GitHub Pages — grátis)

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Em **Branch**, escolha o branch onde estão os arquivos (ex.: `main`) e a pasta **/ (root)** → **Save**.
4. Em 1–2 minutos aparece o endereço do site, algo como:
   `https://jonathbg-del.github.io/Pagina-de-links/`

Esse é o link que você coloca na bio do Instagram, TikTok, etc.

> Quer um endereço próprio (ex.: `links.sualoja.com.br`)? Em **Settings → Pages → Custom domain** dá para usar um domínio seu.

## 2. Personalizar

### Jeito fácil: editor visual
1. Abra `https://SEU-ENDERECO/editor.html`.
2. Mude o que quiser — a prévia do celular atualiza na hora. Dá para enviar fotos direto do celular/computador.
3. Clique em **Baixar config.js**.
4. No GitHub: **Add file → Upload files** → arraste o `config.js` baixado → **Commit changes**.
   O site atualiza sozinho em 1–2 minutos.

### Jeito direto: editar o `config.js`
No GitHub, abra `config.js`, clique no lápis ✏️, altere e clique em **Commit changes**. O arquivo é comentado em português.

## 3. Primeiros ajustes obrigatórios

Troque os links de exemplo no `config.js` (ou no editor, seção **Links**):

- **Site:** `https://SEU-SITE.com.br`
- **Instagram:** `https://instagram.com/SEU_USUARIO`
- **WhatsApp:** `https://wa.me/55DDDNUMERO` — só números, com 55 + DDD. Ex.: `https://wa.me/5511999998888`.
  Para já abrir com mensagem: `https://wa.me/5511999998888?text=Olá!`
- **Telegram:** `https://t.me/NOME_DO_CANAL`

E troque a foto: envie sua imagem para a pasta `img/` (ex.: `img/logo.jpg`) e coloque `foto: "img/logo.jpg"`.

## Dicas

- **Ícones:** use qualquer ícone gratuito do [Font Awesome](https://fontawesome.com/search?ic=free) (ex.: `fa-solid fa-heart`), um emoji (`💋`) ou uma imagem (`img/icone.png`).
- **Fontes:** qualquer fonte do [Google Fonts](https://fonts.google.com) — basta escrever o nome (ex.: `Great Vibes`).
- **Mais botões:** no editor, clique em **Adicionar botão**; no `config.js`, copie um bloco `{ ... }` da lista `links`.
- **Esconder um botão sem apagar:** `ativo: false`.
- **Prévia ao compartilhar o link:** o título e a imagem que aparecem quando o link é enviado no WhatsApp ficam nas tags `og:` no topo do `index.html`. Use uma imagem JPG/PNG (ex.: `img/capa.jpg`) — redes sociais não mostram SVG.
- **Aviso +18:** ativado por padrão; quem confirma não vê de novo naquele aparelho.
