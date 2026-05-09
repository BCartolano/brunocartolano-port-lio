# Portfólio · Bruno Cartolano

Site one-page pessoal, dark, com identidade humana e madura. Construído com **HTML, CSS e JavaScript puros** — sem framework, sem build, deploy em qualquer hospedagem grátis.

Em destaque: **Sophia — apoio e informação para mães no puerpério** (Next.js, Prisma, autenticação completa, LGPD).

**Recursos:**
- 4 idiomas com troca instantânea: 🇧🇷 PT · 🇬🇧 EN · 🇮🇹 IT · 🇫🇷 FR (preferência salva no `localStorage`)
- Totalmente responsivo: testado em 360, 390, 430, 768 e desktop
- Menu hambúrguer acessível no mobile (com `aria-expanded` e fechamento por `Esc`)
- Acessibilidade: foco visível, contraste adequado, `prefers-reduced-motion`

---

## Estrutura

```
.
├── index.html              estrutura e conteúdo
├── README.md
├── assets/
│   ├── css/style.css       design system completo
│   ├── js/script.js        interações suaves
│   └── img/
│       └── sophia-mae-bebe.png   capa do projeto Sophia
└── public/
    └── README.md           onde colocar bruno.jpg (sua foto)
```

---

## Como rodar localmente

### Forma 1 — duplo clique
Abra `index.html` direto no navegador.

### Forma 2 — servidor local com Python
```bash
python -m http.server 8000
```
Abra <http://localhost:8000>.

### Forma 3 — servidor local com Node
```bash
npx serve .
```

---

## Adicionar/trocar a foto pessoal

A foto atual está em `public/bruno.png`.

Para trocar:
- substitua o arquivo `public/bruno.png` mantendo o mesmo nome, **ou**
- coloque outra com nome diferente e ajuste o `src` da tag `<img class="profile__img">` em `index.html`.

Recomendações:
- formato quadrado (1:1), 800×800px de preferência
- abaixo de 300 KB (use [squoosh.app](https://squoosh.app) para otimizar)

Caso a imagem seja removida ou dê erro, o site mostra automaticamente um placeholder elegante com as iniciais **BC**. O layout não quebra.

---

## Identidade visual

- **Tipografia:** Manrope (títulos) + Inter (corpo)
- **Paleta:**
  - Fundo principal: `#0F172A`
  - Cards: `#111827` / `#162033`
  - Borda: `#24304A`
  - Texto: `#F8FAFC` / `#CBD5E1` / `#94A3B8`
  - Primária (azul): `#60A5FA`
  - Acento humano (coral): `#FB7185`
  - Acento quente (âmbar): `#F59E0B`

Microinterações discretas: hover suave em cards, fade in ao rolar, foco visível em links e botões.

---

## Como subir online (de graça)

### Vercel (recomendado)
1. Crie conta em <https://vercel.com> com login do GitHub
2. Suba esta pasta para um repositório no GitHub
3. No Vercel: **Add New → Project**, selecione o repo, **Deploy**
4. URL pronta: `https://bruno-cartolano.vercel.app`

### Netlify (sem GitHub, drag-and-drop)
1. Crie conta em <https://app.netlify.com>
2. **Sites → Add new site → Deploy manually**
3. Arraste a pasta inteira para a área indicada
4. URL pronta: `https://bruno-cartolano.netlify.app`

### GitHub Pages
1. Suba para um repositório público no GitHub
2. **Settings → Pages → Branch: main → Save**
3. URL: `https://bcartolano.github.io/nome-do-repo`

---

## Acessibilidade e responsividade

- Contraste adequado em texto e botões
- Foco visível em todos os links e botões interativos
- `aria-label` em elementos sem texto visível
- `alt` descritivo nas imagens
- Respeita `prefers-reduced-motion`
- Layout testado em desktop, tablet e mobile (até 360px)

---

## Dados de contato (já configurados no site)

- WhatsApp: [+55 (12) 99601-0949](https://wa.me/5512996010949)
- E-mail: [bruno.santos.cartolano@gmail.com](mailto:bruno.santos.cartolano@gmail.com)
- Instagram: [@cartolano.bruno](https://www.instagram.com/cartolano.bruno/)
- GitHub: [BCartolano](https://github.com/BCartolano)
- LinkedIn: [bcartolano](https://www.linkedin.com/in/bcartolano/)

---

© 2026 Bruno Cartolano dos Santos.
