# Ayurjess GSAP Motion Refactor Design

## Objective

Refinar a primeira versao do site da Ayurjess para que a experiencia visual fique mais serena, sofisticada e consistente, sem depender de animacoes rapidas ou chamativas. A base continua em `Next.js` hospedada na `Vercel`, mas a camada atual de interacao sera substituida por uma implementacao com `GSAP` focada em tipografia, ritmo e legibilidade.

## Why This Refactor Exists

O refinamento anterior adicionou vida ao site, mas nao entregou a sensacao premium desejada. As microinteracoes ficaram aceleradas demais e a moldura de imagem/video passou uma sensacao de efeito improvisado. O objetivo desta refatoracao nao e aumentar o volume de animacao, e sim melhorar a qualidade dela.

## Experience Goals

- A experiencia deve parecer calma e bem acabada.
- O movimento deve servir a leitura, nao competir com ela.
- Titulo, subtitulo e espacos em branco devem sustentar a identidade visual.
- Videos e imagens devem apoiar a composicao de forma discreta.
- Hover, entrada de secoes e CTA devem responder com suavidade e previsibilidade.

## Chosen Approach

Usar `GSAP` apenas para entradas e hovers estruturais, sem construir uma narrativa pesada de scroll.

Essa abordagem foi escolhida porque:

- mantem o codigo mais simples e facil de ajustar
- funciona muito bem dentro de `Next.js` na `Vercel`
- permite um acabamento visual superior sem depender de efeitos exagerados
- reduz o risco de poluir mobile ou cansar quem navega

## Scope

Esta refatoracao cobre:

- hero principal
- navegacao
- secoes editoriais
- grade de destaques
- CTA de WhatsApp
- linguagem de hover nos links e botoes
- sistema de entrada de blocos no viewport

Esta refatoracao nao cobre:

- troca de textos finais
- troca de fotos e videos reais
- area de blog, catalogo ou CMS
- efeitos 3D, parallax pesado ou scroll storytelling

## Visual Direction

### Typography First

O foco principal da experiencia passa a ser a tipografia. Os titulos devem entrar com mais presenca, respiro e ritmo. A sensacao desejada e editorial e sofisticada, com movimento lento e intencional.

### Media as Support

Os paineis de video e imagem continuam importantes, mas deixam de ser a parte mais animada da tela. Eles entram como suporte visual, com moldura mais limpa, menos zoom e menos resposta agressiva ao hover.

### Motion Tone

O tom da animacao deve ser:

- lento
- limpo
- elegante
- previsivel
- consistente entre secoes

O tom da animacao nao deve ser:

- rapido
- saltitante
- excessivamente reativo
- diferente em cada componente

## Interaction System

### Hero

O hero sera o ponto de maior refinamento:

- o titulo entra primeiro
- o texto de apoio entra em seguida, com pequeno atraso
- o CTA entra por ultimo
- o painel de video pode entrar com um reveal suave, sem competir com o texto

O hero deve parecer estavel e confiante, nao dramatico.

### Navigation

O header deve ter microinteracoes discretas:

- hover lateral minimo nos links
- realce visual limpo
- sem underline agressivo
- sem movimentos bruscos

### Section Reveals

Cada bloco principal recebe reveal simples usando a mesma familia de movimento:

- `opacity` de baixo para cima
- deslocamento curto
- easing suave
- tempos consistentes

Nao deve haver coreografias diferentes por secao nesta etapa.

### Cards and CTA

Cards e botoes devem responder com tato, nao com exibicao:

- elevacao leve
- sombra suave
- duracao controlada
- sem pulo perceptivel

### Media Panels

Imagem e video devem manter moldura mais contida:

- borda e sombra editoriais
- overlay discreto
- hover muito suave ou inexistente, dependendo do resultado visual

## Technical Design

### Stack

- `Next.js` permanece como framework base
- `GSAP` sera adicionado como unica biblioteca principal de animacao

### Code Organization

Criar uma camada pequena e organizada para motion:

- um wrapper ou utilitario para reveals de viewport
- um ponto central para tempos, easing e configuracao base
- componentes visuais mantendo responsabilidade principal de layout
- animacao isolada da maior parte do conteudo

O objetivo e evitar espalhar `GSAP` por todos os arquivos sem criterio.

### Client Boundaries

Somente componentes que realmente precisarem de `GSAP` devem virar client components. O restante deve permanecer o mais estatico possivel, preservando simplicidade e clareza.

### Accessibility and Performance

- respeitar `prefers-reduced-motion`
- evitar loops visuais desnecessarios
- manter tempos suaves sem degradar leitura
- nao depender de scroll pesado para a pagina funcionar

## Implementation Outline

1. Remover a camada atual de reveal/hover que ficou acelerada demais.
2. Instalar `GSAP` e definir um pequeno sistema de easing e duracoes.
3. Reescrever o hero com foco em entrada tipografica refinada.
4. Reaplicar interacoes em header, secoes, cards e CTA com menos intensidade.
5. Simplificar o tratamento visual de imagem e video para que a tipografia lidere.
6. Validar visualmente desktop e mobile.

## Testing Strategy

- manter os testes atuais passando
- garantir `lint`, `test` e `build`
- validar que componentes com `GSAP` nao quebrem em ambiente sem `IntersectionObserver`
- confirmar degradacao adequada para `prefers-reduced-motion`

## Success Criteria

Esta refatoracao sera considerada bem-sucedida se:

- o site parecer mais calmo e premium
- o texto ganhar protagonismo claro
- os movimentos deixarem de parecer rapidos ou improvisados
- a estrutura continuar simples de manter
- o codigo de animacao ficar centralizado e legivel

## Risks and Guardrails

### Risks

- adicionar `GSAP` em excesso e voltar a poluir a experiencia
- transformar componentes simples em client components sem necessidade
- tentar melhorar tudo ao mesmo tempo e perder consistencia

### Guardrails

- aplicar animacao apenas onde ela melhora leitura e presenca
- manter uma unica linguagem de timing
- revisar desktop e mobile antes de considerar a etapa concluida
- evitar refazer conteudo ou arquitetura junto com motion
