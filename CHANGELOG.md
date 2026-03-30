# EvoCAM Landing Page - Changelog

## Redesign Tech com Paleta Cobre (2026-03-30)

### Visao Geral
Redesign completo da landing page com estetica tech/cyberpunk mantendo a identidade visual do logo EVO (paleta cobre/navy).

---

### Paleta de Cores (baseada no logo EVO)
- **Background**: `#0c1a28` (navy escuro do logo)
- **Cards**: `#11232f`
- **Bordas**: `#1e3344`
- **Accent (cobre)**: `#c06a28`
- **Accent glow**: `#d47830`
- **Accent dim**: `#9a5420`
- **Texto principal**: `#ddd0c4` (creme quente do logo)
- **Texto muted**: `#94a3b4`
- **Texto dim**: `#506878`
- **Verde funcional**: `#3ddc84`
- **Vermelho funcional**: `#ef4444`
- **Cor do CAM/ticker**: `#cc6d2e`

### Tipografia
- **Orbitron**: Logo "EvoCAM" (navbar, hero, footer), numeros dos stats/steps
- **Rajdhani**: Titulos de secao, cards h3, headers comparativo, ticker LED
- **JetBrains Mono**: Labels estilo terminal (com prefixo `//`), captions, badges, precos
- **Inter**: Corpo do texto, paragrafos, descricoes

### Fontes Google importadas
```
Orbitron:wght@700;800;900
Rajdhani:wght@400;500;600;700
Inter:wght@400;500;600;700;800;900
JetBrains+Mono:wght@400;500;700
```

### Efeitos Visuais Tech
- **Grid pattern**: Background com linhas de grade sutis no hero e secoes alternadas (cor cobre 0.03 opacidade)
- **Scanline**: Animacao sutil no hero com linhas horizontais que descem lentamente (8s loop)
- **Glow neon**: Box-shadow com brilho cobre nos cards, botoes e mockup ao hover
- **Bordas animadas**: Pricing card featured com animacao `border-glow` pulsando (3s loop)
- **Gradient lines**: Linhas de 2px com gradiente cobre no topo de cards e secoes
- **Selection**: Selecao de texto em tom cobre

### Variaveis de Glow
```css
--glow-sm: 0 0 15px rgba(196, 136, 74, 0.15);
--glow-md: 0 0 30px rgba(196, 136, 74, 0.12), 0 0 60px rgba(196, 136, 74, 0.06);
--glow-lg: 0 0 40px rgba(196, 136, 74, 0.2), 0 0 80px rgba(196, 136, 74, 0.1);
```

### Componentes Modificados

#### Navbar
- Altura: 80px desktop, 64px mobile
- Background: transparente com blur 20px
- Logo "CAM": italico, cor `#cc6d2e`, contorno preto (`-webkit-text-stroke: 1px #000`)
- CTA: borda cobre com hover glow
- Menu hamburger: spans com cor cobre

#### LED Ticker (novo)
- Posicao: fixo abaixo da navbar no desktop, relativo no mobile
- Duas linhas: "Programacao CNC pensada para o chao de fabrica" + "Feito por programadores para programadores"
- Fonte Rajdhani, uppercase, cor `#cc6d2e`
- Desktop: 1.6rem + 1.3rem, sem fundo
- Mobile: 1.15rem + 1rem, com fundo escuro e borda cobre
- Some ao rolar (JS toggle classe `.hidden` apos 80px scroll)

#### Hero
- Padding top: 190px (desktop), 145px (mobile) para compensar navbar + ticker
- Min-height: 100vh desktop
- Grid: 1fr 1.4fr (desktop), 1 coluna (mobile)
- h1 "EvoCAM": Orbitron 4.5rem, "CAM" em italico com contorno preto
- Descricao com borda esquerda cobre
- Highlights com background sutil e borda ao hover
- Mockup com borda cobre, linha gradient no topo, dots com glow

#### Cards (icon-card)
- Background: `--bg-card` com borda `--border`
- Hover: translateY(-4px), glow radial sutil (::after), borda cobre
- Icones: 56x56px com borda e background cobre sutil
- Variantes: `.pain` (vermelho), `.benefit` (verde), `.feature` (cobre)
- h3: Rajdhani 1.05rem uppercase

#### Section Labels
- Estilo terminal: JetBrains Mono com `::before { content: '//' }`
- Background cobre 0.06, borda cobre 0.15
- Radius 4px

#### Comparativo (Versus)
- Headers: Rajdhani 1.1rem
- VS badge: retangular (8px radius) com glow cobre
- Cores: vermelho para "antes", verde para "depois"

#### Pricing
- Card featured: borda animada pulsando, gradiente cobre+escuro no topo
- Badges: JetBrains Mono estilo terminal
- Precos: Orbitron bold

#### Botoes
- Primary: background cobre, Orbitron uppercase, hover com glow forte
- Secondary: borda transparente, hover com borda cobre e glow
- WhatsApp: background verde sutil com borda, hover com glow verde

#### FAQ
- Item aberto: borda cobre com glow
- Sinal +/-: JetBrains Mono

#### Formulario
- Inputs: background escuro, foco com borda cobre e glow
- Labels: JetBrains Mono uppercase

#### Footer
- Linha gradient cobre no topo (::before)
- Titulos: Rajdhani
- Copyright: JetBrains Mono

### Responsivo Mobile (768px)
- Navbar: 64px, hamburger visivel
- Ticker: position relative (nao fixo), fundo escuro, fontes 1.15rem/1rem
- Hero: 1 coluna, h1 2.5rem
- Cards: 1 coluna
- Comparativo: empilhado
- Planos: 1 coluna
- Formulario: 1 coluna
- Botoes: full width empilhados
- Fontes gerais aumentadas: body 1.05rem, paragrafos 1.05rem, cards h3 1.1rem

### Responsivo Small (400px)
- Hero h1: 2.2rem
- Section title: 1.4rem

### JavaScript
- Ticker hide/show no scroll (classe `.hidden` apos 80px)
- Navbar classe `.scrolled` apos 50px

### Arquivos Modificados
- `index.html`: fonte Orbitron/Rajdhani, hero com h1 e pitch, ticker LED
- `css/style.css`: redesign completo com paleta cobre e efeitos tech
- `js/main.js`: ticker hide on scroll

### Repositorios
- `github.com/Edsonjanke/Landingpagedocam`
- `github.com/Edsonjanke/evocam-landing` (site online)
