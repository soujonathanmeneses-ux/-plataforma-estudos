/* =========================================================
   ESTATÍSTICA — Probabilidade e Assimetria
   ========================================================= */
window.MATERIAS = window.MATERIAS || [];
window.MATERIAS.push({
  id: "estat",
  nome: "Estatística e Probabilidade",
  curto: "Estatística",
  cor: "rose",
  descricao: "Experimentos aleatórios, eventos, união, independência, condicional e medidas de assimetria.",
  grupos: [
    { id: "e1", nome: "Probabilidade" },
    { id: "e2", nome: "Medidas de assimetria" }
  ],
  mapa: {
    titulo: "Qual fórmula usar? (perguntas-chave)",
    passos: [
      ["“Qual a chance de…?”", "P(E) = casos favoráveis ÷ casos possíveis = n(E) ÷ n(S)."],
      ["“NÃO acontecer”", "Complementar: P(Eᶜ) = 1 − P(E)."],
      ["“A OU B” / “pelo menos um”", "União: P(A) + P(B) − P(A∩B)."],
      ["“A E B” independentes", "Multiplica: P(A) × P(B)."],
      ["“A, DADO QUE B”", "Condicional: P(A∩B) ÷ P(B) — olhe só a linha/coluna de B na tabela."],
      ["Cauda da distribuição", "Compare média, mediana e moda; calcule o coeficiente de Pearson."]
    ]
  },
  temas: [
    {
      id: "e-base", num: 1, grupo: "e1",
      titulo: "Experimento aleatório, espaço amostral e eventos",
      sub: "A linguagem da probabilidade",
      frase: "Experimento aleatório é aquele cujo resultado **não dá para prever com certeza**, mesmo repetido nas mesmas condições. O conjunto de todos os resultados é o **espaço amostral (S ou Ω)**; cada subconjunto é um **evento**.",
      resumo: [
        "Exemplos: lançar um dado, tirar uma carta, sortear uma peça de um lote, verificar o tipo sanguíneo de uma pessoa ao acaso.",
        "Os pioneiros da probabilidade foram **Girolamo Cardano** (que estudou jogos de dados), **Pascal, Fermat, Bernoulli e Laplace**. Hoje ela é usada em seguros, medicina, genética, esportes e gestão."
      ],
      conceitos: [
        ["Espaço amostral (S ou Ω)", "Todos os resultados possíveis. Dado: S = {1, 2, 3, 4, 5, 6}."],
        ["Ponto amostral", "Cada elemento do espaço amostral."],
        ["Evento (E)", "Qualquer subconjunto de S. “Sair par” = {2, 4, 6}."],
        ["Evento certo", "E = S. Sempre ocorre (ex.: sair número menor que 8 no dado). P = 1."],
        ["Evento impossível", "E = ∅. Nunca ocorre (ex.: sair número maior que 10). P = 0."],
        ["Evento simples (elementar)", "Tem um único resultado. Ex.: {6}."],
        ["Mutuamente exclusivos (disjuntos)", "Não podem ocorrer juntos: A ∩ B = ∅ e P(A∩B) = 0."],
        ["União A ∪ B", "Ocorre se **pelo menos um** ocorrer (“A ou B”)."],
        ["Interseção A ∩ B", "Ocorre se **os dois** ocorrerem (“A e B”)."],
        ["Diferença A − B", "Ocorre A, mas não B."],
        ["Complementar Aᶜ (ou Ā)", "Tudo o que não está em A."]
      ],
      tabela: {
        titulo: "Exemplos de espaço amostral e evento",
        cols: ["Experimento", "Espaço amostral", "Evento"],
        rows: [
          ["Lançar um dado", "{1, 2, 3, 4, 5, 6}", "Par = {2, 4, 6}"],
          ["Lançar uma moeda", "{cara, coroa}", "Cara = {cara}"],
          ["Tipo sanguíneo", "{A, B, AB, O}", "AB = {AB}"],
          ["Naipe de uma carta", "{ouros, copas, paus, espadas}", "Paus = {paus}"],
          ["Bola de urna 1 a 50", "{1, 2, …, 50}", "Acima de 45 = {46, 47, 48, 49, 50}"]
        ]
      },
      atencao: [
        "Evento é **subconjunto** do espaço amostral.",
        "Mutuamente exclusivos: **não acontecem juntos** (ex.: sair 5 e sair 2 no mesmo lance).",
        "“Ou” = união (∪). “E” = interseção (∩)."
      ],
      flash: [
        ["O que é espaço amostral?", "O conjunto de todos os resultados possíveis de um experimento aleatório."],
        ["Evento certo × impossível", "Certo: E = S (P = 1). Impossível: E = ∅ (P = 0)."],
        ["Quando dois eventos são mutuamente exclusivos?", "Quando não podem ocorrer ao mesmo tempo: A ∩ B = ∅."],
        ["O que representa A ∪ B?", "Que pelo menos um dos eventos ocorre (“A ou B”)."],
        ["O que representa A ∩ B?", "Que os dois eventos ocorrem ao mesmo tempo (“A e B”)."]
      ],
      quiz: [
        { q: "No lançamento de um dado, “sair um número maior que 4” e “sair um número menor que 2” são:", o: ["Independentes", "Mutuamente exclusivos", "Complementares", "Certos"], c: 1, e: "{5,6} e {1} não têm elementos em comum." },
        { q: "“Sair um número menor que 7” num dado comum é um evento:", o: ["Impossível", "Certo", "Simples", "Complementar"], c: 1, e: "Todos os resultados satisfazem: E = S." },
        { q: "O evento {6} no lançamento de um dado é:", o: ["Simples (elementar)", "Certo", "Impossível", "Composto"], c: 0, e: "Um único ponto amostral." }
      ]
    },
    {
      id: "e-calc", num: 2, grupo: "e1",
      titulo: "Calculando probabilidades",
      sub: "Frequência relativa, probabilidade clássica e complementar",
      frase: "Em espaço **equiprovável** (todos os resultados com a mesma chance): **P(E) = n(E) ÷ n(S)**, sempre entre 0 e 1.",
      resumo: [
        "**Frequência relativa**: se o experimento foi repetido N vezes e o evento ocorreu m vezes, f(E) = m ÷ N. Ela só se aproxima da probabilidade real com **muitas repetições** (lei dos grandes números).",
        "Exemplos históricos com moeda: **Buffon** (4.040 lançamentos, 2.048 caras ≈ 50,69%), **Pearson** (24.000, 12.012 ≈ 50,05%) e **Kerrich** (10.000, 5.067 ≈ 50,67%) — todos perto de 50%."
      ],
      formulas: [
        ["Probabilidade clássica", "P(E) = n(E) ÷ n(S)", "Casos favoráveis ÷ casos possíveis. 0 ≤ P(E) ≤ 1."],
        ["Frequência relativa", "f(E) = m ÷ N", "m = vezes que E ocorreu; N = repetições."],
        ["Complementar", "P(Eᶜ) = 1 − P(E)", "“Não acontecer” ou “pelo menos um” costuma ser mais fácil pelo complementar."]
      ],
      exemplo: {
        titulo: "Controle de qualidade",
        texto: "Lote de 500 peças com 15 defeituosas. P(defeituosa) = 15 ÷ 500 = **0,03 = 3%**. P(não defeituosa) = 1 − 0,03 = **0,97 = 97%**.\n**Leitura gerencial:** a cada 100 peças, espera-se em média 3 defeituosas. Se um lote ficar muito acima de 3%, a linha deve ser investigada."
      },
      atencao: [
        "Sempre apresente o resultado também em **porcentagem** (é o que o gestor entende).",
        "Probabilidade **não é previsão**: 11% ao dia não garante falha a cada 9 dias — é média de longo prazo.",
        "Use só os dados do enunciado; não invente “dias úteis”, “por mês” etc. sem avisar."
      ],
      flash: [
        ["Fórmula da probabilidade clássica", "P(E) = n(E) ÷ n(S)."],
        ["Fórmula do complementar", "P(Eᶜ) = 1 − P(E)."],
        ["Por que a frequência relativa precisa de muitas repetições?", "Porque ela só se estabiliza perto da probabilidade real com um número grande de repetições."],
        ["Qual o intervalo possível de uma probabilidade?", "De 0 (impossível) a 1 (certo), ou 0% a 100%."]
      ],
      quiz: [
        { q: "Num baralho de 52 cartas, a probabilidade de sair um rei é:", o: ["1/52", "1/13", "1/4", "4/13"], c: 1, e: "4 reis ÷ 52 = 1/13 ≈ 7,69%." },
        { q: "Se P(chover) = 0,35, então P(não chover) é:", o: ["0,35", "0,65", "1,35", "0,50"], c: 1, e: "1 − 0,35." },
        { q: "Num dado de 8 faces, a probabilidade de sair ímpar é:", o: ["1/8", "1/4", "1/2", "3/8"], c: 2, e: "{1,3,5,7} = 4 de 8." }
      ]
    },
    {
      id: "e-uniao", num: 3, grupo: "e1",
      titulo: "União de eventos e eventos mutuamente exclusivos",
      sub: "A regra do “OU”",
      frase: "**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**. Subtrai-se a interseção para **não contar duas vezes** o que está nos dois.",
      formulas: [
        ["União (geral)", "P(A∪B) = P(A) + P(B) − P(A∩B)", "Vale sempre."],
        ["União (mutuamente exclusivos)", "P(A∪B) = P(A) + P(B)", "Porque P(A∩B) = 0."]
      ],
      exemplo: {
        titulo: "Dois canais de atendimento",
        texto: "P(chat falhar) = 0,08; P(telefone falhar) = 0,05; P(os dois falharem) = 0,02.\nP(pelo menos um falhar) = 0,08 + 0,05 − 0,02 = **0,11 = 11%**.\n**Leitura:** em média uma ocorrência a cada ~9 dias (1 ÷ 0,11) — média, não prazo garantido. Como a falha conjunta é só 2%, o risco está nas falhas isoladas → plano de contingência com encaminhamento entre canais."
      },
      conceitos: [
        ["Mutuamente exclusivos", "A ∩ B = ∅ → P(A∩B) = 0 → basta somar."],
        ["Exemplo de exclusivos", "Cliente do plano A ou do plano B (cada cliente tem um único plano): 0,60 + 0,40 = 100%."],
        ["Exemplo de não exclusivos", "Nota fiscal com erro de valor OU de cadastro: 0,06 + 0,04 − 0,015 = 8,5%."]
      ],
      atencao: [
        "“Pelo menos um” = união.",
        "Esqueceu de subtrair a interseção? Você contou em dobro quem está nos dois grupos.",
        "Não confunda: **mutuamente exclusivo ≠ independente**. Exclusivos não ocorrem juntos; independentes não se influenciam."
      ],
      flash: [
        ["Fórmula da união", "P(A∪B) = P(A) + P(B) − P(A∩B)."],
        ["Se A e B são mutuamente exclusivos, P(A∪B) = ?", "P(A) + P(B), pois P(A∩B) = 0."],
        ["Por que se subtrai a interseção na união?", "Para não contar duas vezes os casos em que A e B ocorrem juntos."]
      ],
      quiz: [
        { q: "Num baralho de 52 cartas, P(copas ou ouros) é:", o: ["1/4", "1/2", "1/13", "26/13"], c: 1, e: "13/52 + 13/52 = 26/52 (naipes são exclusivos)." },
        { q: "P(A) = 0,4, P(B) = 0,3 e P(A∩B) = 0,1. Então P(A∪B) é:", o: ["0,7", "0,6", "0,8", "0,12"], c: 1, e: "0,4 + 0,3 − 0,1." },
        { q: "Eventos mutuamente exclusivos têm:", o: ["P(A∩B) = P(A)·P(B)", "P(A∩B) = 0", "P(A∪B) = 0", "P(A) = P(B)"], c: 1, e: "Não ocorrem juntos." }
      ]
    },
    {
      id: "e-cond", num: 4, grupo: "e1",
      titulo: "Independência, probabilidade condicional e total",
      sub: "A regra do “E”, o “dado que” e as tabelas de contingência",
      frase: "Independentes: **P(A∩B) = P(A) × P(B)**. Condicional: **P(A|B) = P(A∩B) ÷ P(B)** — a chance de A **sabendo que** B ocorreu.",
      formulas: [
        ["Eventos independentes", "P(A∩B) = P(A) × P(B)", "Um não altera a chance do outro (ex.: dois fornecedores independentes, dois dados)."],
        ["Probabilidade condicional", "P(A|B) = P(A∩B) ÷ P(B)", "Na tabela: divida pela linha/coluna de B, não pelo total geral."],
        ["Teste de independência", "P(A∩B) = P(A)·P(B)?", "Se der diferente, os eventos são dependentes (associados)."],
        ["Probabilidade total", "P(A) = Σ P(Bᵢ) × P(A|Bᵢ)", "Média ponderada pelas proporções. Ex.: avaria = 0,60×0,02 + 0,40×0,04."]
      ],
      exemplo: {
        titulo: "Triagem de candidatos",
        texto: "200 candidatos: 120 com experiência (60 aprovados) e 80 sem (30 aprovados).\nP(aprovado) = 90/200 = **45%**. P(aprovado | com exp.) = 60/120 = **50%**. P(aprovado | sem exp.) = 30/80 = **37,5%**.\n**Leitura:** experiência está associada a mais aprovação. Atenção: P(aprovado | com exp.) ≠ P(com exp. | aprovado) = 60/90 ≈ 66,7%. São perguntas diferentes!"
      },
      conceitos: [
        ["Tabela de contingência", "Tabela de dupla entrada (linhas × colunas) com totais — base para condicionais."],
        ["“Dado que”", "Restringe o espaço amostral ao grupo da condição."],
        ["Fornecedores independentes", "P(A no prazo) = 0,90 e P(B no prazo) = 0,80 → ambos = 0,72; pelo menos um atrasar = 1 − 0,72 = 0,28."],
        ["Multiplicação de riscos", "Depender de várias entregas independentes reduz a chance de tudo dar certo."]
      ],
      atencao: [
        "Na condicional, o **denominador é o total da condição** (linha ou coluna), não o total geral.",
        "P(A|B) normalmente ≠ P(B|A).",
        "“Pelo menos um atrasar” = 1 − P(nenhum atrasar)."
      ],
      flash: [
        ["Fórmula de eventos independentes", "P(A∩B) = P(A) × P(B)."],
        ["Fórmula da probabilidade condicional", "P(A|B) = P(A∩B) ÷ P(B)."],
        ["Como testar se A e B são independentes?", "Verifique se P(A∩B) = P(A) × P(B)."],
        ["Probabilidade total", "P(A) = Σ P(Bᵢ)·P(A|Bᵢ) — média ponderada pelas proporções de cada grupo."]
      ],
      quiz: [
        { q: "Dois fornecedores independentes entregam no prazo com 0,9 e 0,8. P(ambos no prazo) é:", o: ["1,7", "0,72", "0,85", "0,10"], c: 1, e: "0,9 × 0,8." },
        { q: "Na tabela, 25 de 250 homens usam o hospital. P(usa | homem) é:", o: ["0,05", "0,10", "0,25", "0,50"], c: 1, e: "25 ÷ 250 — o denominador é o total de homens." },
        { q: "Se P(A∩B) ≠ P(A)·P(B), os eventos são:", o: ["Independentes", "Dependentes", "Mutuamente exclusivos obrigatoriamente", "Impossíveis"], c: 1, e: "A ocorrência de um altera a chance do outro." }
      ]
    },
    {
      id: "e-assim", num: 5, grupo: "e2",
      titulo: "Medidas de assimetria",
      sub: "Média, mediana e moda em dados agrupados + coeficientes de Pearson",
      frase: "A assimetria indica **para onde vai a cauda** da distribuição, comparando **média, mediana e moda**.",
      resumo: [
        "Numa distribuição **simétrica** (curva normal), média = mediana = moda. Se a cauda é longa à **direita**, a média é “puxada” para cima (**assimetria positiva**). Se a cauda é longa à **esquerda**, a média é puxada para baixo (**assimetria negativa**).",
        "Para dados agrupados em classes, monte primeiro a **tabela de apoio**: ponto médio (xᵢ), fᵢ·xᵢ e frequência acumulada (Fᵢ)."
      ],
      formulas: [
        ["Ponto médio", "xᵢ = (limite inferior + limite superior) ÷ 2", ""],
        ["Média (agrupados)", "x̄ = Σ(fᵢ·xᵢ) ÷ Σfᵢ", ""],
        ["Mediana (agrupados)", "Md = Li + [(n/2 − Fant) ÷ fmd] · h", "Li: limite inferior da classe mediana; Fant: freq. acumulada da classe anterior; fmd: freq. da classe mediana; h: amplitude."],
        ["Moda de Czuber", "Mo = Li + [Δ₁ ÷ (Δ₁ + Δ₂)] · h", "Δ₁ = fmodal − fanterior; Δ₂ = fmodal − fposterior."],
        ["Desvio padrão (populacional)", "σ = √[Σfᵢ(xᵢ − x̄)² ÷ n]", ""],
        ["1º coef. de Pearson", "A₁ = (x̄ − Mo) ÷ s", "Baseado na moda."],
        ["2º coef. de Pearson", "A₂ = 3·(x̄ − Md) ÷ s", "Baseado na mediana."]
      ],
      tabela: {
        titulo: "Direção e intensidade",
        cols: ["Situação", "Relação", "Coeficiente"],
        rows: [
          ["Simétrica", "Média = Mediana = Moda", "A = 0"],
          ["Assimetria positiva (cauda à direita)", "Moda < Mediana < Média", "A > 0"],
          ["Assimetria negativa (cauda à esquerda)", "Média < Mediana < Moda", "A < 0"],
          ["Intensidade fraca", "|A| < 0,15", "Quase simétrica"],
          ["Intensidade moderada", "0,15 ≤ |A| ≤ 1", ""],
          ["Intensidade forte", "|A| > 1", ""]
        ]
      },
      exemplo: {
        titulo: "Exemplo da aula (n = 40)",
        texto: "Classes 2⊢4 (4), 4⊢6 (10), 6⊢8 (18), 8⊢10 (8).\n• Média = 260 ÷ 40 = **6,50**\n• Mediana: posição 20 → classe 6⊢8; Md = 6 + (20 − 14)/18 · 2 = **6,67**\n• Moda (Czuber): Δ₁ = 18 − 10 = 8; Δ₂ = 18 − 8 = 10 → Mo = 6 + 8/18 · 2 = **6,89**\n• σ² = 126 ÷ 40 = 3,15 → σ = **1,7748**\n• A₁ = (6,50 − 6,89) ÷ 1,7748 = **−0,2191**; A₂ = 3·(6,50 − 6,67) ÷ 1,7748 = **−0,2817**\n**Conclusão:** média < mediana < moda e coeficientes negativos → **assimetria negativa, intensidade moderada**. Confira na calculadora abaixo."
      },
      ferramenta: "calc-assimetria",
      atencao: [
        "A **média** é a que mais se desloca para o lado da cauda.",
        "Positiva: Mo < Md < x̄. Negativa: x̄ < Md < Mo. (A cauda “puxa” a média.)",
        "O sinal do coeficiente diz a direção; o valor absoluto diz a intensidade."
      ],
      flash: [
        ["Assimetria positiva: ordem das medidas", "Moda < Mediana < Média (cauda à direita)."],
        ["Assimetria negativa: ordem das medidas", "Média < Mediana < Moda (cauda à esquerda)."],
        ["1º coeficiente de Pearson", "A₁ = (x̄ − Mo) ÷ s."],
        ["2º coeficiente de Pearson", "A₂ = 3(x̄ − Md) ÷ s."],
        ["Intensidade moderada", "0,15 ≤ |A| ≤ 1."],
        ["Fórmula da moda de Czuber", "Mo = Li + [Δ₁ ÷ (Δ₁ + Δ₂)]·h."]
      ],
      quiz: [
        { q: "Se média = 50, mediana = 45 e moda = 40, a distribuição tem assimetria:", o: ["Negativa", "Positiva", "Nula", "Impossível dizer"], c: 1, e: "Moda < Mediana < Média → cauda à direita." },
        { q: "Um coeficiente de Pearson de −0,08 indica:", o: ["Assimetria forte negativa", "Assimetria fraca (quase simétrica)", "Assimetria moderada positiva", "Erro de cálculo"], c: 1, e: "|A| < 0,15." },
        { q: "Na fórmula de Czuber, Δ₁ é:", o: ["fmodal − fposterior", "fmodal − fanterior", "Amplitude da classe", "Frequência acumulada"], c: 1, e: "Diferença para a classe anterior." }
      ]
    }
  ],

  exercicios: [
    {
      id: "lista", tipo: "questoes", origem: "Professor",
      titulo: "Lista de exercícios de probabilidade",
      intro: "As 10 questões da lista, com resolução passo a passo. Tente resolver antes de abrir.",
      itens: [
        { q: "1) Qual a probabilidade de sair um rei quando retiramos uma carta de um baralho de 52 cartas?",
          r: "Há 4 reis em 52 cartas. P = 4/52 = 1/13.", resp: "1/13 ≈ 0,0769 ≈ 7,69%" },
        { q: "2) Em um lote de 12 peças, quatro são defeituosas. Sendo retirada uma peça, calcule: a) a probabilidade de ser defeituosa; b) de não ser defeituosa.",
          r: "a) 4/12 = 1/3. b) Complementar: 1 − 1/3 = 2/3 (ou 8/12).", resp: "a) 1/3 ≈ 33,3% · b) 2/3 ≈ 66,7%" },
        { q: "3) No lançamento de dois dados, calcule a probabilidade de se obter soma igual a 5.",
          r: "n(S) = 6 × 6 = 36 pares. Soma 5: (1,4), (2,3), (3,2), (4,1) = 4 casos. P = 4/36 = 1/9.", resp: "1/9 ≈ 11,1%" },
        { q: "4) De dois baralhos de 52 cartas retira-se uma carta de cada. Qual a probabilidade de a do primeiro ser um rei e a do segundo ser o 5 de paus?",
          r: "Eventos independentes (baralhos diferentes). P(rei) = 4/52 = 1/13; P(5 de paus) = 1/52. P = 1/13 × 1/52 = 1/676.", resp: "1/676 ≈ 0,148%" },
        { q: "5) Urna A: 3 brancas, 4 pretas, 2 verdes. Urna B: 5 brancas, 2 pretas, 1 verde. Urna C: 2 brancas, 3 pretas, 4 verdes. Uma bola de cada urna. Qual a probabilidade de saírem, respectivamente, branca, preta e verde?",
          r: "A tem 9 bolas, B tem 8 e C tem 9. P(branca em A) = 3/9; P(preta em B) = 2/8; P(verde em C) = 4/9. Independentes → multiplica: 3/9 × 2/8 × 4/9 = 24/648 = 1/27.", resp: "1/27 ≈ 3,7%" },
        { q: "6) Qual a probabilidade de sair uma carta de copas ou de ouros de um baralho de 52 cartas?",
          r: "Naipes são mutuamente exclusivos. P = 13/52 + 13/52 = 26/52.", resp: "1/2 = 50%" },
        { q: "7) P(A) = 0,3; P(A ∪ B) = 0,8 e P(B) = p. Para quais valores de p, A e B serão: a) mutuamente exclusivos; b) independentes?",
          r: "a) Exclusivos: P(A∪B) = P(A) + P(B) → 0,8 = 0,3 + p → p = 0,5.\nb) Independentes: P(A∩B) = 0,3p. P(A∪B) = 0,3 + p − 0,3p → 0,8 = 0,3 + 0,7p → 0,7p = 0,5 → p = 5/7.", resp: "a) p = 0,5 · b) p = 5/7 ≈ 0,714" },
        { q: "8) Seguradora com 500 segurados. Usa hospital: Sim — 25 homens, 40 mulheres (65); Não — 225 homens, 210 mulheres (435). Total: 250 homens, 250 mulheres. A = usa o hospital; B = masculino; C = feminino. Determine P(A), P(B), P(C), P(A∩B), P(A∩C), P(A|B), P(A|C).",
          r: "P(A) = 65/500 = 0,13 · P(B) = 250/500 = 0,5 · P(C) = 0,5\nP(A∩B) = 25/500 = 0,05 · P(A∩C) = 40/500 = 0,08\nP(A|B) = 25/250 = 0,10 · P(A|C) = 40/250 = 0,16\n(Confere: P(A|B) = P(A∩B)/P(B) = 0,05/0,5 = 0,10.)", resp: "0,13 · 0,5 · 0,5 · 0,05 · 0,08 · 0,10 · 0,16" },
        { q: "9) Pesquisa com 500 pessoas: 300 preferem SUMOBOM, 250 preferem SOSUMO, 100 consomem os dois e 50 nenhum. Probabilidade de um entrevistado ser: a) consumidor de SOSUMO e SUMOBOM; b) de SOSUMO ou SUMOBOM.",
          r: "a) Interseção: 100/500 = 0,2.\nb) União: 250 + 300 − 100 = 450 → 450/500 = 0,9. (Confere: 450 + 50 de nenhum = 500.)", resp: "a) 20% · b) 90%" },
        { q: "10) Turma de 30 alunos: 12 gostam de vôlei, 13 de futebol, 5 dos dois e 10 de nenhum. Probabilidade de um aluno gostar de vôlei ou futebol?",
          r: "União: 12 + 13 − 5 = 20 alunos. P = 20/30. (Confere: 20 + 10 = 30.)", resp: "2/3 ≈ 66,7%" }
      ]
    },
    {
      id: "caso1", tipo: "questoes", origem: "Professor",
      titulo: "Estudo de caso 1 — Rede Bom Preço",
      intro: "400 clientes de 3 lojas semelhantes. Fornecedor A: avaria em 2% dos lotes; B: 4%. 60% das compras vêm de A e 40% de B.",
      tabela: { cols: ["Gasto mensal", "Frequente", "Ocasional", "Total"], rows: [["Até R$ 200", "90", "110", "200"], ["Acima de R$ 200", "140", "60", "200"], ["Total", "230", "170", "400"]] },
      itens: [
        { q: "1) Probabilidade de um cliente ter gasto mensal de até R$ 200.", r: "200/400.", resp: "0,50 = 50%" },
        { q: "2) Probabilidade de o cliente ser frequentador.", r: "230/400.", resp: "0,575 = 57,5%" },
        { q: "3) Probabilidade de gastar acima de R$ 200 E ser frequente. Os eventos são independentes?",
          r: "P(acima ∩ frequente) = 140/400 = 0,35.\nTeste: P(acima) × P(frequente) = 0,50 × 0,575 = 0,2875.\nComo 0,35 ≠ 0,2875, **não são independentes**: quem gasta mais tende a ser mais frequente.", resp: "0,35 = 35% · dependentes" },
        { q: "4) Probabilidade de gastar acima de R$ 200 OU ser frequente.", r: "0,50 + 0,575 − 0,35 = 0,725. (Confere pela tabela: 400 − 110 que são “até 200 e ocasional” = 290 → 290/400.)", resp: "0,725 = 72,5%" },
        { q: "5) P(frequente | acima de R$ 200).", r: "Olhe só a linha “acima de R$ 200”: 140/200.", resp: "0,70 = 70%" },
        { q: "6) Probabilidade de um lote de A chegar sem avaria; e de B.", r: "Complementar: A = 1 − 0,02 = 0,98; B = 1 − 0,04 = 0,96.", resp: "A: 98% · B: 96%" },
        { q: "7) Probabilidade de um lote qualquer chegar com avaria.", r: "Probabilidade total: 0,60 × 0,02 + 0,40 × 0,04 = 0,012 + 0,016 = 0,028.\n**Interpretação:** em média, 2,8% dos lotes chegam avariados — cerca de 3 a cada 100. Mesmo sendo só 40% das compras, B responde por mais da metade das avarias (0,016 de 0,028 ≈ 57%).", resp: "0,028 = 2,8%" },
        { q: "8) DECISÃO: qual fornecedor priorizar e por quê? (3 a 4 linhas)",
          r: "**Modelo de resposta:** Recomendo priorizar o fornecedor A. Sua taxa de avaria (2%) é metade da de B (4%), e B, com só 40% das compras, gera cerca de 57% das avarias. Como 70% dos clientes que gastam acima de R$ 200 são frequentes, o público de maior valor exige prateleira abastecida e sem produto danificado — a confiabilidade de A protege essa receita.", resp: "Fornecedor A" }
      ]
    },
    {
      id: "caso2", tipo: "questoes", origem: "Professor",
      titulo: "Estudo de caso 2 — Clínica Vida Plena",
      intro: "800 agendamentos no mês: 560 comparecimentos e 240 faltas. Dra. Ana tem 70% de retorno no prazo e Dr. Bruno 55%, independentes.",
      tabela: { cols: ["", "Compareceu", "Faltou", "Total"], rows: [["Com confirmação (WhatsApp)", "320", "60", "380"], ["Sem confirmação", "240", "180", "420"], ["Total", "560", "240", "800"]] },
      itens: [
        { q: "1) Probabilidade de um agendamento resultar em falta.", r: "240/800.", resp: "0,30 = 30%" },
        { q: "2) P(falta | confirmou).", r: "Só a linha “com confirmação”: 60/380.", resp: "≈ 0,158 = 15,8%" },
        { q: "3) P(falta | não confirmou).", r: "Só a linha “sem confirmação”: 180/420.", resp: "≈ 0,429 = 42,9%" },
        { q: "4) A confirmação por WhatsApp é eficaz?", r: "**Modelo:** Sim. Entre quem confirmou, a falta é de 15,8%; entre quem não confirmou, 42,9% — cerca de 2,7 vezes maior. A confirmação está fortemente associada a menos faltas (associação, não prova definitiva de causa, mas um sinal forte).", resp: "Sim — reduz de 42,9% para 15,8%" },
        { q: "5) Probabilidade de a Dra. Ana ter um dia sem retorno do paciente.", r: "Complementar: 1 − 0,70.", resp: "0,30 = 30%" },
        { q: "6) Probabilidade de ambos terem retorno no mesmo dia.", r: "Independentes: 0,70 × 0,55.", resp: "0,385 = 38,5%" },
        { q: "7) Probabilidade de pelo menos um não ter retorno.", r: "Complementar do item 6: 1 − 0,385.", resp: "0,615 = 61,5%" },
        { q: "8) RECOMENDAÇÃO GERENCIAL (3 a 4 linhas).", r: "**Modelo:** Estender a confirmação por WhatsApp a todos os pacientes. Hoje 420 dos 800 agendamentos não são confirmados e respondem por 180 das 240 faltas (75%). Se esse grupo faltasse na taxa de quem confirma (15,8%), seriam cerca de 66 faltas em vez de 180 — mais de 100 consultas recuperadas por mês. Complementar com overbooking leve nos horários de quem não confirmou.", resp: "Confirmação para 100% dos pacientes" }
      ]
    },
    {
      id: "extras-prob", tipo: "questoes", origem: "Extra",
      titulo: "Exercícios extras no estilo da professora",
      intro: "Novos problemas aplicados à gestão, com resolução e leitura gerencial.",
      itens: [
        { q: "1) Um estoque tem 2.000 itens, dos quais 60 estão com a validade vencida. Sorteando um item, qual a probabilidade de estar vencido? E de estar dentro da validade?",
          r: "P(vencido) = 60/2.000 = 0,03. P(válido) = 1 − 0,03 = 0,97.\n**Leitura:** 3 em cada 100 itens estão vencidos — sinal de falha no giro (método PEPS) a investigar.", resp: "3% vencido · 97% válido" },
        { q: "2) Num escritório contábil, P(erro de conciliação) = 0,10, P(atraso na entrega) = 0,07 e P(os dois no mesmo cliente) = 0,03. Qual a probabilidade de um cliente ter erro OU atraso?",
          r: "União: 0,10 + 0,07 − 0,03 = 0,14.\n**Leitura:** 14% dos clientes têm algum problema; esse é o volume de retrabalho a planejar.", resp: "14%" },
        { q: "3) Carteira de 300 clientes. Simples Nacional: 180 (30 inadimplentes). Lucro Presumido: 120 (10 inadimplentes). Calcule P(inadimplente), P(inadimplente | Simples), P(inadimplente | Presumido). Os eventos “Simples” e “inadimplente” são independentes?",
          r: "P(inad.) = 40/300 ≈ 0,133. P(inad. | Simples) = 30/180 ≈ 0,167. P(inad. | Presumido) = 10/120 ≈ 0,083.\nTeste: P(Simples ∩ inad.) = 30/300 = 0,10; P(Simples) × P(inad.) = 0,6 × 0,133 = 0,08. Diferentes → **dependentes**.\n**Leitura:** clientes do Simples têm o dobro da inadimplência — vale cobrança preventiva nesse grupo.", resp: "13,3% · 16,7% · 8,3% · dependentes" },
        { q: "4) Dois servidores independentes ficam no ar com probabilidade 0,95 e 0,90. Qual a probabilidade de ambos estarem no ar? E de pelo menos um estar no ar?",
          r: "Ambos: 0,95 × 0,90 = 0,855.\nPelo menos um: 1 − P(os dois fora) = 1 − (0,05 × 0,10) = 1 − 0,005 = 0,995.\n**Leitura:** com redundância, o sistema fica disponível 99,5% do tempo.", resp: "85,5% · 99,5%" },
        { q: "5) Uma fábrica tem 3 turnos que produzem 50%, 30% e 20% das peças, com defeito de 1%, 2% e 3%. Qual a probabilidade de uma peça qualquer ser defeituosa?",
          r: "Probabilidade total: 0,50 × 0,01 + 0,30 × 0,02 + 0,20 × 0,03 = 0,005 + 0,006 + 0,006 = 0,017.\n**Leitura:** 1,7% de defeitos no total; o 3º turno produz só 20% mas gera mais de 1/3 dos defeitos.", resp: "1,7%" },
        { q: "6) No lançamento de dois dados, qual a probabilidade de a soma ser 7? E de ser maior ou igual a 10?",
          r: "Soma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6/36 = 1/6.\nSoma ≥ 10: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) = 6/36 = 1/6.", resp: "1/6 ≈ 16,7% em ambos" },
        { q: "7) P(A) = 0,5 e P(B) = 0,4. Calcule P(A∪B) se A e B forem: a) mutuamente exclusivos; b) independentes.",
          r: "a) 0,5 + 0,4 = 0,9.\nb) P(A∩B) = 0,5 × 0,4 = 0,2 → P(A∪B) = 0,5 + 0,4 − 0,2 = 0,7.", resp: "a) 0,9 · b) 0,7" },
        { q: "8) Assimetria: classes 0⊢10 (12), 10⊢20 (18), 20⊢30 (6), 30⊢40 (4). Calcule média, mediana, moda, σ, A₁, A₂ e classifique.",
          r: "Pontos médios 5, 15, 25, 35; n = 40; Σfx = 620 → **x̄ = 15,5**.\nMediana: posição 20 → classe 10⊢20 (Fant = 12, f = 18): Md = 10 + (20 − 12)/18 · 10 = **14,44**.\nModa: Δ₁ = 18 − 12 = 6; Δ₂ = 18 − 6 = 12 → Mo = 10 + 6/18 · 10 = **13,33**.\nσ² = 3.390/40 = 84,75 → **σ ≈ 9,206**.\nA₁ = (15,5 − 13,33)/9,206 ≈ **0,235**; A₂ = 3(15,5 − 14,44)/9,206 ≈ **0,344**.\nMo < Md < x̄ e A > 0 → **assimetria positiva, moderada**.", resp: "Assimetria positiva moderada" }
      ]
    }
  ]
});
