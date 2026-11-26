# Revisa — Plataforma de Estudos

Site estático (HTML + CSS + JS puro, sem build) para estudar e revisar para a prova:
**SIG**, **Contabilidade**, **Teorias da Administração** e **Estatística/Probabilidade**.

Cada matéria tem:
- **Temas** com: em uma frase · entenda · principais funções · fórmulas · conceitos-chave · comparativos · exemplo · “cai na prova” · teste rápido
- **Exercícios** resolvidos passo a passo (contábeis: lançamentos → razonetes → balancete → resultado → balanço, no nível básico da aula, calculados automaticamente)
- **Revisão relâmpago** (uma página com o essencial, pode imprimir)
- **Flashcards** (marque “sei esse” e revise só os pendentes)
- **Quiz** com explicação em cada resposta
- Ferramentas: simulador What-if/Goal-seeking (SIG T9), calculadora de VPL/TIR/IL/Payback/ROI (SIG T10), calculadora de assimetria (Estatística)
- Busca global (atalho: tecla `/`), modo claro/escuro e progresso salvo no navegador

## Estrutura

```
index.html
assets/
  styles.css      → visual (cores, claro/escuro, layout)
  app.js          → telas, quiz, flashcards, exercícios, ferramentas
data/
  sig.js          → conteúdo de SIG
  contabilidade.js→ conteúdo + exercícios contábeis (e o plano de contas)
  administracao.js→ conteúdo de Administração
  estatistica.js  → conteúdo + exercícios de probabilidade/assimetria
```

## Publicar na Vercel (via GitHub)

1. Crie um repositório no GitHub (ex.: `plataforma-estudos`) e envie **todos os arquivos desta pasta** para a raiz dele
   (pelo site: *Add file → Upload files* e arraste as pastas `assets`, `data` e os arquivos `index.html` e `README.md`).
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Framework Preset: **Other**. Build Command: vazio. Output Directory: vazio (raiz).
4. **Deploy**. Cada novo commit no GitHub atualiza o site sozinho.

Para testar no computador, basta abrir o `index.html` no navegador.

## Adicionar uma matéria nova

1. Copie um arquivo de `data/` (ex.: `administracao.js`) com outro nome.
2. Troque `id`, `nome`, `curto`, `cor` (`indigo`, `emerald`, `amber` ou `rose`) e os `temas`.
3. Inclua o arquivo no final do `index.html`, junto dos outros `<script src="data/...">`.

Formato de um tema (campos opcionais podem ser omitidos):

```js
{
  id: "t1", num: 1, grupo: "g1",
  titulo: "Título", sub: "Subtítulo",
  frase: "Ideia central com **negrito**.",
  resumo: ["Parágrafo 1", "Parágrafo 2"],
  funcoes: [["Função", "Explicação"]],
  formulas: [["Nome", "Fórmula", "Observação"]],
  conceitos: [["Termo", "Definição"]],
  tabela: { titulo: "", cols: ["A", "B"], rows: [["a", "b"]] },
  exemplo: { titulo: "", texto: "" },
  atencao: ["Pegadinha 1"],
  flash: [["Frente", "Verso"]],
  quiz: [{ q: "Pergunta", o: ["A", "B", "C"], c: 1, e: "Explicação" }]
}
```

Exercício contábil: cada fato tem `l: [["D", "Conta", valor], ["C", "Conta", valor]]`.
Se usar uma conta nova, cadastre-a em `window.PLANO_CONTAS` (em `data/contabilidade.js`) com o grupo
`A` (Ativo), `P` (Passivo), `PL` (Patrimônio Líquido), `R` (Receita) ou `D` (Despesa).
