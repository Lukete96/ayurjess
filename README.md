# AyurVeda Jessica

Este diretorio reune a base documental do projeto de Ayurveda da Jessica em um formato de spec modular por camada.

O objetivo nao e guardar notas soltas. A ideia aqui e consolidar conhecimento, encontros, materiais conceituais e organizacao do projeto em poucos arquivos grandes, claros e faceis de manter.

## Estrutura

- `spec/00-spec-mestra.md`
Visao geral consolidada do projeto.
- `spec/01-fundamentos-e-conhecimento.md`
Base conceitual sobre ayurveda, autocuidado, sazonalidade e linguagem.
- `spec/02-massagem-e-experiencias.md`
Camada dedicada a massagem, toque, experiencia e ofertas relacionadas.
- `spec/03-encontros-e-evolucao.md`
Linha do tempo e leitura evolutiva dos encontros.
- `spec/04-sintese-estrutural-do-projeto.md`
Consolidacao das estruturas, frentes, produtos e logica do projeto.
- `spec/05-fontes-e-rastreabilidade.md`
Mapa das fontes usadas no Drive e no Notion.
- `dist/ayurveda-jessica-dossie-compartilhavel.md`
Versao linear pensada para compartilhamento.
- `dist/ayurveda-jessica-dossie-compartilhavel.pdf`
Versao em PDF para envio externo.
- `scripts/build_pdf.py`
Script simples para regenerar o PDF a partir do dossie compartilhavel.

## Regra editorial

- Poucos arquivos com responsabilidade clara.
- Nada de fragmentacao excessiva.
- Se um arquivo ultrapassar cerca de 500 linhas, ele pode ser dividido por blocos naturais.
- O PDF compartilhavel nasce da consolidacao do material documental, nao de notas avulsas.

## Observacao

O material consolidado aqui mistura duas camadas de origem:

- a camada operacional do projeto `AyurJess` no Notion, com reunioes, direcao editorial e estrutura de trabalho
- a camada conceitual e de produto no Google Drive, com materiais longos sobre ayurveda, culinaria ayurvedica, rituais, massagem e posicionamento de ebook

Essas duas camadas foram reunidas como um mesmo dossie para servir de base de alinhamento entre socios e de continuidade futura do projeto.

## Como atualizar o PDF

1. Ajuste os arquivos em `spec/` e, se necessario, o arquivo `dist/ayurveda-jessica-dossie-compartilhavel.md`.
2. Rode `scripts/build_pdf.py`.
3. O PDF sera regravado em `dist/ayurveda-jessica-dossie-compartilhavel.pdf`.

## Site institucional

O front-end do site fica em `site/`.

Objetivo desta primeira versao:

- replicar o formato editorial aprovado
- usar placeholders de plantas
- destacar a massagem e o contato por WhatsApp

Fluxo basico:

1. Entrar em `site/`
2. Rodar `npm install` se necessario
3. Rodar `npm run dev`
