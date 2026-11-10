# Landing Page — Advocacia Caresia (Dr. Iago Caresia Rodrigues)

> Planejamento completo + prompt de execução. Stack: **HTML, CSS e JS puros** (sem framework, sem build).
> Pesquisa feita em 10/11/2026 no Instagram @adv.iagocaresia, no site Canva atual e nos dois sites de referência.

---

## 1. Briefing do cliente (dados levantados)

| Campo | Valor | Fonte |
|---|---|---|
| Nome profissional | **Dr. Iago Caresia Rodrigues** | posts IG / parede da recepção |
| Marca | **Advocacia Caresia** (também aparece "Caresia Advocacia" e "Escritório de Advocacia Iago Caresia") | IG + Canva |
| OAB | **OAB/SP 482.856** | Canva + IG |
| Especialização | **MBA em Gestão Tributária — USP/ESALQ** (troféu Pecege recebido em set/2025). Bio: "Especialista em Direito Tributário – USP" | IG |
| Áreas (oficial) | **Tributário · Cível · Trabalhista** (está assim na placa da fachada) | fachada + Canva + IG |
| Endereço | **R. Santa Cruz, 1188, Centro, Tatuí/SP, CEP 18275-130** | IG + Canva |
| Região | Tatuí e cidades da região de Sorocaba | Canva |
| WhatsApp / Tel. | **(15) 98819-8826** → `https://wa.me/5515988198826` | briefing |
| E-mail | `iagocaresia@adv.oabsp.org.br` (Canva) **ou** `iagocaresia@adv.oab.org.br` (post de estágio) → **confirmar** | Canva / IG |
| Instagram | @adv.iagocaresia (5.594 seguidores, 136 posts). O Canva cita @advocacia_caresia (antigo?) | IG |
| Linktree | linktr.ee/iagocaresia.advocacia: "Soluções jurídicas 360° · Compliance e Contencioso · Atendimento Online/Presencial" | Linktree |
| Atendimento | Online e presencial. Estrutura digital, **atualizações semanais** sobre temas jurídicos e **relatórios mensais** sobre os processos | Canva + Linktree |
| Citação usada por ele | Rudolf von Ihering: "O direito não é um simples conceito, mas uma força viva." | Canva |
| Avaliações | Google, todas **5★** (destaque "Avaliações" no IG) | IG stories |
| Valores pessoais | Cristão (CCB), muitos posts de fé. **Sugestão:** no site, só um toque discreto ("ética, dedicação e responsabilidade"), sem versículos | IG |
| Aviso anti-golpe | "A Caresia Advocacia nunca solicita pagamentos via PIX ou transferências para liberar valores" | post fixado IG |

> ⚠️ O link **instagram.com/adv.carrielvieira** é de **outro escritório** (Carriel Vieira Advogados, Itapetininga, área agrária/imobiliária). Ficou fora do planejamento.

### Depoimentos reais (Google, 5★) que podem entrar no site
- **David Oliveira:** "Esse é fera, honesto, atencioso, paciencioso, um excelente advogado 👍"
- **Ana Ribeiro:** "Ótimo advogado, conseguiu minha pensão depois que meu marido faleceu…"
- **Ana Carolina Ribeiro:** "Advogado atencioso, competente, justo!"
- **Cristiano Ribeiro:** "Recomendo os serviços… responsabilidade, ética, comprometimento, honestidade e respeito com o cliente…"
- **Tide:** "…esse homem devolveu minha vida de volta…" (o texto aparece cortado no story; pedir o texto completo)
- Outro: "Muito atencioso, educado e excelente profissional." (nome cortado)
- Outras notas 5★ sem texto: Alzira Coelho, Alexandra Guimarães, Ana Maria Barbosa, Francine Alana, Hugo, Liz Angel, Tadeu Siqueira, Amanda Rafaela.

> Sugestão: mostrar o nome como "David O." e linkar para o perfil do Google.
> Evitar frases como "o melhor advogado de Tatuí" por causa do Provimento 205/2021 da OAB.

---

## 2. Fotos (já baixadas em `assets/img/`)

| Arquivo | Uso sugerido | Avaliação |
|---|---|---|
| `iago-sentado-notebook.jpg` (1049×1413) | **Foto principal (Hero / Sobre).** Foto real, terno navy, painel ripado de madeira, quadros da Themis e de um tribunal ao fundo | ⭐ Melhor foto disponível |
| `recepcao-parede-logo-ac.jpg` (422×1282, recorte) | Faixa vertical na seção Sobre / Contato. Monograma AC dourado + "Advocacia Caresia — Dr. Iago Caresia Rodrigues" | ⭐ Ótima prova de marca |
| `fachada-escritorio.jpg` (1440×1471) | Seção Contato/Localização ("Venha nos visitar") | ✅ Real, boa |
| `trofeu-mba-usp.jpg` (1440×1920) | Bloco "Especialização" (MBA USP/ESALQ). Mostra também a carteira da OAB emoldurada | ✅ Ótima prova de autoridade |
| `textura-themis-escura.jpg` (1066×1599) | Imagem de banco do Canva (Themis). Fundo/textura com overlay, ou no bloco da citação | ✅ Usar como textura |
| `recepcao-vidro-com-texto.jpg` | Original do recorte acima (tem texto escrito no vidro) | ➖ Só o recorte |
| `_descartadas/*` | Retratos do Canva **gerados por IA** (um tem a marca "Remini – Generated with AI") e a foto do elevador coberta de texto | ❌ Não usar |

**Lacuna:** não existe um **retrato frontal de alta qualidade** dele. No Instagram, as fotos com rosto são montagens com texto ou artes geradas por IA. O ideal é pedir 1–2 fotos profissionais (meio corpo, fundo neutro ou escritório). Até lá, o hero usa `iago-sentado-notebook.jpg`.

**Tratamento:** converter para **WebP/AVIF** em 3 larguras (640/1024/1600). Aplicar um leve *color grade* quente para casar com o dourado e o preto. Usar `object-position` para enquadrar o rosto.

---

## 3. Identidade visual (extraída do Instagram oficial)

A marca do IG **não** é o marrom/cobre do Canva antigo. É **preto profundo + dourado**, com navy em alguns carrosséis, serifas clássicas e luz "de palco" dourada vinda de cima (vários posts têm um feixe de luz no topo do fundo preto).

### Paleta (CSS custom properties)
```css
:root{
  /* base escura */
  --ink-950:#07070A;   /* fundo principal (preto dos posts) */
  --ink-900:#0E0F13;   /* superfícies/cards */
  --ink-800:#17181E;   /* bordas sutis, hover */
  --navy-900:#0B1A33;  /* seções alternadas (posts navy+dourado) */

  /* dourado — amostrado do monograma AC da recepção (#C99450) e das artes do IG (#C9A84C) */
  --gold-500:#C99A52;  /* cor principal da marca */
  --gold-300:#E6C68A;  /* highlights, texto dourado sobre preto */
  --gold-700:#8C6A2E;  /* sombras do gradiente, texto dourado sobre claro */
  --gold-grad:linear-gradient(135deg,#E6C68A 0%,#C99A52 45%,#8C6A2E 100%);

  /* claros */
  --ivory-50:#F6F1E8;  /* seções claras (estilo Heitor Leal / GF "paper") */
  --ivory-100:#ECE5D8;
  --text-on-dark:#F2EDE4;
  --muted-on-dark:rgba(242,237,228,.68);
  --text-on-light:#1A1712;
  --muted-on-light:#6B6358;
}
```
Ritmo de seções: **escura → clara (marfim) → escura → navy → clara…**, igual às duas referências.

### Tipografia (Google Fonts)
- **Cinzel** (500/600): só no wordmark "CARESIA" e nos *eyebrows* em caixa alta com tracking largo. É a fonte da placa e da parede.
- **Cormorant Garamond** (500/600, itálico): títulos H1–H3. A palavra-chave vai em *itálico dourado*, como o "*justiça*" e o "*clara*" do Heitor Leal.
- **Inter Tight** (400/500): corpo, botões e UI. Mesmo papel que tem no site do Gabriel Filemon.
- Escala fluida com `clamp()`: H1 `clamp(2.6rem, 6vw, 5.6rem)`, H2 `clamp(2rem, 4vw, 3.4rem)`, corpo 1.0625rem/1.65.

### Elementos gráficos
- **Monograma "AC"** em SVG (A e C entrelaçados, serifado). Não temos o vetor → **pedir ao cliente** ou recriar em SVG a partir da foto da parede.
- Linhas finas douradas (1px, `--gold-500` a 40%) como divisórias e molduras deslocadas atrás das fotos.
- "Feixe de luz" dourado: `radial-gradient` no topo de seções escuras, imitando os posts.
- Ruído/grão sutil (`.tex` como no GF): SVG noise com 3–4% de opacidade.
- Ícones: **Lucide** (traço fino) em dourado.
- Numeração editorial "01 / 02 / 03" nos eyebrows (padrão do GF).

---

## 4. O que aproveitar das referências

**Gabriel Filemon (previalowna…vercel.app)**
- Hero com headline gigante em sans e foto à esquerda com gradiente para navy.
- Header minimalista com CTA em pílula dourada; menu fullscreen numerado no mobile.
- Seções numeradas "01 Prevenção", "02 Direito Médico"…
- **Áreas em abas** (Consultoria preventiva / Defesa / Responsabilidade civil) com card de "checklist" ao lado.
- Grid de **"Situações que pedem um especialista"**, com tags em mono no canto do card.
- **Metodologia** em cards escalonados, sendo o primeiro dourado.
- Footer com **relógio "Atendimento aberto agora"** e horário de atendimento.

**Heitor Leal (heitorleal.adv.br)**
- Serifa clássica + palavra em *itálico dourado*.
- Hero com foto recortada à direita, em moldura.
- **Faixa de números** em fundo marfim.
- "Sobre" com foto + citação em itálico sobreposta + checklist de valores.
- Grid de áreas em **cards escuros sobre fundo marfim**.
- **"Como funciona"**: timeline horizontal de 5 passos.
- **"Como podemos ajudar?"**: botões de triagem que abrem o WhatsApp com mensagem pronta. É o melhor achado de conversão das duas referências.
- Botão flutuante do WhatsApp + banner LGPD discreto.

---

## 5. Arquitetura da página (seção por seção)

> Âncoras: `#inicio #sobre #areas #situacoes #metodo #avaliacoes #contato`

### 0. Header fixo (`<header class="nav">`)
- Esquerda: monograma AC + "ADVOCACIA **CARESIA**" (Cinzel) e, abaixo, "OAB/SP 482.856" em micro texto.
- Centro: Sobre · Áreas · Como funciona · Avaliações · Contato.
- Direita: botão pílula dourado **"Falar no WhatsApp"**.
- Comportamento: transparente sobre o hero; ao rolar, vira `backdrop-filter: blur` com fundo `--ink-950/80` e borda dourada fina. Some ao rolar para baixo e volta ao rolar para cima.
- Mobile: hambúrguer abre um overlay fullscreen com links numerados (01–05), telefone, endereço e Instagram.

### 1. Hero (`#inicio`, fundo `--ink-950` com feixe de luz dourado)
- Grid 12 colunas: texto em 7 colunas, foto em 5.
- Eyebrow: `ADVOCACIA CARESIA · TATUÍ/SP`
- **H1 (proposta):** "Estratégia jurídica *com rigor técnico* e atendimento próximo."
  - Alternativas: "Direito tributário, cível e trabalhista *com clareza* em cada etapa." / "Seu direito tratado como *força viva*."
- Subtítulo: "Escritório especializado em Direito Tributário (MBA USP/ESALQ), com atuação cível e trabalhista para pessoas e empresas de Tatuí e região de Sorocaba. Atendimento presencial e online."
- CTAs: **[Agendar pelo WhatsApp →]** (dourado) e **[Conhecer as áreas ↓]** (outline).
- Foto: `iago-sentado-notebook` numa moldura com borda dourada deslocada 16px. Selo flutuante "Especialista em Direito Tributário · USP/ESALQ" em glass card.
- Rodapé do hero: 3 micro-itens com divisória fina: "Tributário · Cível · Trabalhista" · "Presencial e online" · "★★★★★ no Google".

### 2. Faixa de credenciais (fundo `--ivory-50`)
Quatro blocos, **sem inventar números**:
`MBA USP/ESALQ — Gestão Tributária` · `3 áreas de atuação` · `Relatórios mensais do seu processo` · `5,0★ — avaliações no Google`.
(Se ele informar ano de início ou nº de clientes, trocar por contadores animados no estilo do Heitor Leal.)

### 3. Sobre (`#sobre`, escuro)
- Esquerda: `recepcao-parede-logo-ac.jpg` vertical + citação de Ihering sobreposta em glass card: *"O direito não é um simples conceito, mas uma força viva."*
- Direita:
  - Eyebrow "01 — O escritório"
  - H2 "Uma advocacia *estruturada* para acompanhar você."
  - Texto adaptado do Canva: estrutura digital, atendimento personalizado, atualizações semanais, relatórios mensais claros.
  - Checklist (ícone check dourado):
    - Atendimento presencial em Tatuí e online
    - Relatórios mensais do andamento
    - Comunicação direta com o advogado
    - Ética, dedicação e responsabilidade
  - Assinatura: "Dr. Iago Caresia Rodrigues — OAB/SP 482.856".

### 4. Especialização (sub-bloco ou faixa navy)
- `trofeu-mba-usp.jpg` à esquerda, texto à direita.
- "MBA em Gestão Tributária pela USP/ESALQ: visão estratégica aplicada a empresas e pessoas físicas."
- Pode virar um carrossel curto de credenciais se ele mandar diploma, OAB e cursos.

### 5. Áreas de atuação (`#areas`, fundo marfim, abas no estilo GF + cards no estilo HL)
Abas: **Tributário | Cível & Consumidor | Trabalhista**. Cada aba tem descrição e uma lista de serviços. Os serviços vêm dos temas que ele já posta:

- **Direito Tributário** *(carro-chefe)*
  - Planejamento tributário e escolha de regime (Simples, Presumido, Real)
  - Recuperação de créditos (PIS/COFINS monofásico, ICMS-ST)
  - Defesa em execução fiscal e prescrição de dívidas fiscais
  - Negociação de dívida ativa (PGFN / PGE-SP)
  - Reforma Tributária: IBS, CBS e Imposto Seletivo
  - Isenção e restituição de IR por doença grave
  - IPTU, ITBI e holdings patrimoniais
- **Direito Cível & do Consumidor**
  - Revisão de contratos bancários e juros abusivos
  - Consignado indevido, negativação e dívida prescrita
  - Planos de saúde (negativas e reajustes abusivos) e erro médico
  - Golpes via PIX e falhas bancárias
  - Imobiliário: usucapião, regularização, compra e venda
  - Família e sucessões: inventário, divórcio, união estável
- **Direito Trabalhista**
  - Consultoria preventiva para empresas
  - Acidente de trabalho, indenização e pensão
  - Verbas rescisórias, horas extras, assédio

Cada aba termina com o CTA "Falar sobre [área] →", que abre o WhatsApp com a mensagem da área.

### 6. Situações que pedem um advogado (`#situacoes`, escuro, grid estilo GF)
Toggle **"Para você" / "Para sua empresa"**. Cada card tem ícone, título, uma linha de descrição, tag mono e é clicável para o WhatsApp.
- **Pessoa física:** Banco cobrando juros abusivos · Nome negativado por dívida antiga · Plano de saúde negou tratamento · Doença grave e IR · Acidente de trabalho · Inventário
- **Empresa:** Execução fiscal / dívida ativa · Planejamento tributário · Ex-funcionário concorrente · Adaptação à Reforma Tributária / NFS-e · Recuperação de créditos · Contratos

### 7. Como funciona (`#metodo`, marfim, timeline de 5 passos estilo HL com cards escalonados estilo GF)
1. **Primeiro contato:** você conta sua situação pelo WhatsApp ou presencialmente.
2. **Análise:** estudo de documentos e viabilidade.
3. **Estratégia:** caminho jurídico claro, com riscos explicados.
4. **Atuação:** execução técnica, judicial ou extrajudicial.
5. **Acompanhamento:** relatórios mensais e atualizações.

Uma linha dourada vai se desenhando conforme o scroll (SVG `stroke-dashoffset`).

### 8. Avaliações (`#avaliacoes`, escuro)
- Cabeçalho: "5,0 ★★★★★ — avaliações reais no Google" + link "Ver no Google".
- Carrossel com scroll-snap nativo (sem lib) e setas: cards com avatar de inicial, nome abreviado, estrelas e texto.
- Disclaimer pequeno: "Depoimentos espontâneos publicados no Google."

### 9. Como podemos ajudar? (CTA de triagem, navy, estilo HL)
H2 "Como podemos *ajudar*?". Grid de 6 botões, cada um abre `wa.me` com texto pré-preenchido:
- "Quero agendar uma consulta"
- "Tenho uma dívida com banco"
- "Minha empresa tem débito fiscal"
- "Sofri um acidente de trabalho"
- "Tenho doença grave e pago IR"
- "Outro assunto"

### 10. Contato (`#contato`, escuro)
- Esquerda: `fachada-escritorio.jpg`, endereço, telefone, e-mail, Instagram e horário.
- Direita: **mapa do Google** (iframe com lazy loading e filtro escuro via CSS) **ou** um formulário curto (nome, telefone, área, mensagem) que só **monta a mensagem e abre o WhatsApp**, sem backend.
- Faixa de aviso anti-golpe com ícone de escudo: "Atenção: a Advocacia Caresia nunca solicita pagamentos via PIX para liberar valores de processos. Em caso de dúvida, ligue (15) 98819-8826."

### 11. Footer (`--ink-950`)
- Monograma + frase curta, coluna de navegação, coluna de áreas e coluna de contato.
- **Relógio "Atendimento aberto agora / fechado"** (JS + horário de Brasília), herdado do GF.
- Linha final: © 2026 Advocacia Caresia · OAB/SP 482.856 · Política de Privacidade · "Conteúdo meramente informativo, em conformidade com o Provimento 205/2021 da OAB".

### 12. Elementos globais
- Botão **WhatsApp flutuante** (verde discreto ou dourado) com pulso suave e tooltip "Fale com o Dr. Iago".
- Banner LGPD simples (localStorage) só se for usar Analytics/Pixel.
- Barra de progresso de scroll dourada de 2px no topo (opcional).

---

## 6. Estrutura de arquivos
```
adv-iagocaresia/
├── index.html
├── politica-de-privacidade.html
├── assets/
│   ├── css/
│   │   ├── tokens.css      # variáveis (cores, tipografia, espaçamentos, raios, sombras)
│   │   ├── base.css        # reset moderno, tipografia, utilitários (.container, .eyebrow, .btn)
│   │   ├── components.css  # nav, botões, cards, tabs, carousel, badge, toggle, float-wa
│   │   └── sections.css    # estilos por seção (hero, sobre, areas, ...)
│   ├── js/
│   │   ├── main.js         # init + imports (type="module")
│   │   ├── nav.js          # header hide/show, menu mobile, scroll-spy
│   │   ├── reveal.js       # IntersectionObserver para animações de entrada
│   │   ├── tabs.js         # abas de áreas (ARIA tablist)
│   │   ├── carousel.js     # avaliações (scroll-snap + setas + dots)
│   │   ├── whatsapp.js     # gera links wa.me com mensagens por data-attribute
│   │   └── hours.js        # status "aberto agora"
│   ├── img/               # fotos (.webp + fallback .jpg), og-image.jpg
│   ├── icons/             # monograma-ac.svg, favicon.svg, apple-touch-icon.png
│   └── fonts/             # (opcional) self-host de Cinzel/Cormorant/Inter Tight
└── PLANEJAMENTO.md
```
CSS com `@layer tokens, base, components, sections;` e mobile-first com breakpoints 640 / 960 / 1280.

## 7. Bibliotecas (todas opcionais, via CDN com `defer`)
| Lib | Para quê | Alternativa nativa |
|---|---|---|
| **GSAP 3 + ScrollTrigger** | Timeline do hero, linha do "Como funciona", parallax suave nas fotos | IntersectionObserver + CSS transitions (padrão) |
| **Lenis** | Scroll suave, igual à sensação das referências | `scroll-behavior:smooth` |
| **Lucide** (`lucide.min.js` ou SVG inline) | Ícones | SVG inline (recomendado: zero JS) |

Recomendação: **SVG inline + IntersectionObserver** como base, com **GSAP só no hero e na timeline**. Carrossel e abas em JS próprio, sem Swiper.

## 8. Animações / microinterações
- Hero: H1 entra palavra por palavra (`clip-path` reveal), a moldura dourada desliza, o selo faz *fade + scale*.
- Reveal genérico `.reveal` (opacity 0→1, translateY 24→0, 700ms, `cubic-bezier(.2,.7,.2,1)`) com stagger por `--i`.
- Botões: brilho dourado que atravessa no hover (`::after` com gradiente) e seta que desliza 4px.
- Cards: borda dourada que acende no hover e leve *lift*.
- `@media (prefers-reduced-motion: reduce)` desliga tudo.

## 9. SEO, performance e acessibilidade
- `<title>Advocacia Caresia | Advogado em Tatuí/SP | Direito Tributário, Cível e Trabalhista</title>`
- Meta description, Open Graph e Twitter Card (og-image 1200×630 com monograma + foto).
- **JSON-LD** `LegalService` + `Attorney`: nome, endereço, geo, telefone, `areaServed` (Tatuí, Sorocaba, Itapetininga, Boituva, Cerquilho, Cesário Lange…), `sameAs` (Instagram) e `aggregateRating` (só se ele autorizar).
- HTML semântico (`header/nav/main/section/footer`), H1 único, `alt` descritivo, contraste AA (dourado `#E6C68A` sobre `#07070A` passa; `#C99A52` sobre marfim **não** passa para texto → usar `--gold-700`).
- Fontes com `preconnect` + `display=swap`; hero com `fetchpriority="high"`; demais imagens com `loading="lazy"` e `decoding="async"`.
- Meta Lighthouse ≥ 95 em todas as categorias. Sem jQuery.

## 10. Conformidade OAB (Provimento 205/2021)
- Sem promessa de resultado, sem preços, sem "o melhor", sem captação agressiva.
- CTAs informativos: "Agendar consulta" e "Falar com o escritório".
- Depoimentos: confirmar com o cliente se ele quer exibir (as regras da OAB sobre isso são restritivas). Se não quiser, a seção vira "Compromissos" (Ética · Transparência · Proximidade · Técnica).

---

## 11. Pendências para o cliente (ver no chat)
1. **Logo em vetor** (monograma AC + wordmark). Se não houver, recrio em SVG.
2. **E-mail correto:** `@adv.oabsp.org.br` ou `@adv.oab.org.br`?
3. **Horário de atendimento** (para o relógio "aberto agora").
4. **Foto profissional** de rosto em alta. Hoje só existe a foto sentada com notebook.
5. **Quais áreas destacar**: só as 3 oficiais ou também Consumidor/Bancário, Família e Previdenciário/IR?
6. Pode exibir **depoimentos do Google**? Link do perfil Google Meu Negócio?
7. Ano de início / formação (faculdade) para o "Sobre" e para eventuais números.
8. Domínio pretendido (para canonical/OG).

---

## 12. PROMPT DE EXECUÇÃO (copiar e colar para gerar o site)

```
Crie a landing page one-page da "Advocacia Caresia" (Dr. Iago Caresia Rodrigues, OAB/SP 482.856,
Tatuí/SP) em HTML, CSS e JavaScript puros (ES modules, sem framework e sem build), seguindo
EXATAMENTE o arquivo PLANEJAMENTO.md desta pasta (seções 1 a 10).

Requisitos-chave:
- Estrutura de arquivos da seção 6; CSS em @layer com os tokens da seção 3 (preto #07070A,
  dourado #C99A52/#E6C68A/#8C6A2E, marfim #F6F1E8, navy #0B1A33).
- Fontes Google: Cinzel (wordmark/eyebrows), Cormorant Garamond (títulos, palavra-chave em
  itálico dourado), Inter Tight (texto/UI).
- Seções na ordem da seção 5: Header fixo → Hero → Faixa de credenciais → Sobre (+ Especialização
  USP/ESALQ) → Áreas em abas (Tributário | Cível & Consumidor | Trabalhista) → Situações com toggle
  Pessoa/Empresa → Como funciona (5 passos) → Avaliações Google (carrossel scroll-snap) →
  "Como podemos ajudar?" (botões que abrem WhatsApp com mensagem pronta) → Contato (fachada, mapa,
  aviso anti-golpe PIX) → Footer com relógio "aberto agora" → botão WhatsApp flutuante.
- Imagens: assets/img/iago-sentado-notebook.jpg (hero), recepcao-parede-logo-ac.jpg (sobre),
  trofeu-mba-usp.jpg (especialização), fachada-escritorio.jpg (contato),
  textura-themis-escura.jpg (textura da citação). NÃO usar nada de assets/img/_descartadas.
- WhatsApp: https://wa.me/5515988198826?text=<encodeURIComponent(mensagem)> gerado por data-wa-msg.
- Visual premium e sóbrio inspirado em previalowna-gabrielfilemonadv.vercel.app (seções numeradas,
  abas, cards de situações, metodologia escalonada, footer com relógio) e heitorleal.adv.br
  (serifa + itálico dourado, faixa de números, timeline de 5 passos, triagem por WhatsApp).
  Alternar seções escuras/marfim/navy; feixe de luz dourado radial no topo das seções escuras;
  grão sutil; molduras douradas finas deslocadas atrás das fotos.
- Monograma "AC" como SVG inline (placeholder elegante até receber o vetor oficial).
- Animações com IntersectionObserver (+ GSAP/ScrollTrigger opcional só no hero e na timeline);
  respeitar prefers-reduced-motion.
- Acessibilidade AA, HTML semântico, ARIA nas abas/carrossel/menu, foco visível dourado.
- SEO: title/description/OG, JSON-LD LegalService+Attorney com endereço R. Santa Cruz, 1188,
  Centro, Tatuí/SP 18275-130 e telefone +55 15 98819-8826.
- Textos em PT-BR, tom técnico e próximo, sem promessas de resultado (Provimento 205/2021 OAB).
- Responsivo mobile-first (640/960/1280), menu mobile fullscreen numerado.
Onde faltar dado (e-mail definitivo, horário, logo vetorial), deixe um comentário
<!-- TODO: confirmar --> e um placeholder plausível.
```
