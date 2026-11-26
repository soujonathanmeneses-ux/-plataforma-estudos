/* =========================================================
   CONTABILIDADE — nível básico (como o professor trabalhou)
   Lançamentos, razonetes, balancete, balanço e introdução à DRE
   ========================================================= */
window.MATERIAS = window.MATERIAS || [];

/* Plano de contas simples usado nos exercícios.
   g = grupo: A (Ativo), P (Passivo), PL (Patrimônio Líquido), R (Receita), D (Despesa) */
window.PLANO_CONTAS = {
  "Caixa": { g: "A" },
  "Bancos": { g: "A" },
  "Contas a Receber": { g: "A" },
  "Mercadorias": { g: "A" },
  "Imóveis": { g: "A" },
  "Terrenos": { g: "A" },
  "Veículos": { g: "A" },
  "Móveis e Utensílios": { g: "A" },
  "Computadores": { g: "A" },
  "Fornecedores": { g: "P" },
  "Financiamentos a Pagar": { g: "P" },
  "Empréstimos a Pagar": { g: "P" },
  "Contas a Pagar": { g: "P" },
  "Salários a Pagar": { g: "P" },
  "Capital Social": { g: "PL" },
  "Receita de Vendas": { g: "R" },
  "Receita de Serviços": { g: "R" },
  "Despesa com Aluguel": { g: "D" },
  "Despesa com Salários": { g: "D" },
  "Despesa com Energia": { g: "D" },
  "Despesa com Internet": { g: "D" }
};

window.MATERIAS.push({
  id: "contabil",
  nome: "Contabilidade",
  curto: "Contábeis",
  cor: "emerald",
  descricao: "O básico: partidas dobradas, razonetes, balancete, balanço e uma introdução à DRE.",
  grupos: [
    { id: "g1", nome: "Fundamentos" },
    { id: "g2", nome: "Do lançamento ao balanço" }
  ],
  mapa: {
    titulo: "O caminho do exercício (sempre nessa ordem)",
    passos: [
      ["1 · Fato", "Leia o fato e pergunte: quais contas mudaram? Aumentaram ou diminuíram?"],
      ["2 · Lançamento", "Todo débito tem um crédito de mesmo valor."],
      ["3 · Razonetes", "Leve cada valor para o “T” da conta: débito à esquerda, crédito à direita."],
      ["4 · Balancete", "Liste os saldos. Total devedor = total credor."],
      ["5 · Balanço", "Ativo de um lado, Passivo + PL do outro. Os dois totais são iguais."]
    ]
  },
  temas: [
    {
      id: "c1", num: 1, grupo: "g1",
      titulo: "Patrimônio: Ativo, Passivo e PL",
      sub: "O que a empresa tem, o que deve e o que é dos sócios",
      frase: "**Ativo** é o que a empresa tem (bens e direitos). **Passivo** é o que ela deve. **Patrimônio Líquido** é o que é dos sócios. Sempre: **Ativo = Passivo + PL**.",
      resumo: [
        "**Ativo:** dinheiro no caixa e no banco, mercadorias, imóveis, veículos, computadores, valores a receber.",
        "**Passivo:** dívidas com terceiros — fornecedores, financiamentos, contas a pagar.",
        "**Patrimônio Líquido (PL):** o dinheiro que os sócios colocaram (Capital Social) e, mais tarde, os lucros."
      ],
      tabela: {
        titulo: "Onde fica cada conta",
        cols: ["Ativo (tem / vai receber)", "Passivo (deve)", "Patrimônio Líquido (dos sócios)"],
        rows: [
          ["Caixa, Bancos", "Fornecedores", "Capital Social"],
          ["Mercadorias", "Financiamentos a Pagar", ""],
          ["Imóveis, Veículos, Computadores, Móveis", "Contas a Pagar", ""],
          ["Contas a Receber", "", ""]
        ]
      },
      exemplo: {
        titulo: "Exemplo rápido",
        texto: "Os sócios abrem a empresa com R$ 100.000 no banco: Ativo (Bancos) 100.000 = PL (Capital) 100.000.\nDepois compram mercadorias de R$ 30.000 a prazo: o Ativo vai para 130.000 (Bancos 100.000 + Mercadorias 30.000) e aparece uma dívida (Fornecedores 30.000).\n130.000 = 30.000 + 100.000 ✓"
      },
      atencao: [
        "Comprou algo → entra no **Ativo**. Ficou devendo → entra no **Passivo**.",
        "Dinheiro dos sócios → **Capital Social** (PL).",
        "A conta tem que fechar: Ativo = Passivo + PL."
      ],
      flash: [
        ["Equação do patrimônio", "Ativo = Passivo + Patrimônio Líquido."],
        ["O que é Ativo?", "O que a empresa tem: bens (caixa, banco, mercadorias, imóveis) e direitos (valores a receber)."],
        ["O que é Passivo?", "O que a empresa deve a terceiros: fornecedores, financiamentos, contas a pagar."],
        ["Onde fica o Capital Social?", "No Patrimônio Líquido."]
      ],
      quiz: [
        { q: "Uma moto comprada pela empresa fica no:", o: ["Ativo", "Passivo", "Patrimônio Líquido", "Não é registrada"], c: 0, e: "É um bem da empresa." },
        { q: "O valor que a empresa deve ao banco por um financiamento fica no:", o: ["Ativo", "Passivo", "Patrimônio Líquido", "Caixa"], c: 1, e: "É uma dívida." },
        { q: "Se o Ativo é R$ 200.000 e o Passivo é R$ 80.000, o PL é:", o: ["R$ 280.000", "R$ 120.000", "R$ 80.000", "R$ 200.000"], c: 1, e: "PL = Ativo − Passivo." }
      ]
    },
    {
      id: "c2", num: 2, grupo: "g1",
      titulo: "Partidas dobradas: débito e crédito",
      sub: "Como montar o lançamento",
      frase: "**Não há débito sem crédito de mesmo valor.** A conta que **recebe** o recurso é debitada; a conta de onde o recurso **sai** é creditada.",
      resumo: [
        "Todo fato mexe em pelo menos duas contas, e o total debitado é sempre igual ao total creditado.",
        "Débito e crédito não significam bom ou ruim — são só **lados**: débito à esquerda, crédito à direita."
      ],
      tabela: {
        titulo: "Regra do débito e crédito",
        cols: ["Grupo", "Aumenta com", "Diminui com"],
        rows: [
          ["Ativo", "**Débito**", "Crédito"],
          ["Passivo", "**Crédito**", "Débito"],
          ["Patrimônio Líquido", "**Crédito**", "Débito"],
          ["Despesas", "**Débito**", "Crédito"],
          ["Receitas", "**Crédito**", "Débito"]
        ]
      },
      exemplo: {
        titulo: "Truque mental",
        texto: "Pergunte: **para onde foi o recurso?** → essa conta é **debitada**. **De onde saiu?** → essa conta é **creditada**.\nComprou uma moto financiada: o recurso foi para **Veículos (D)** e veio de um **Financiamento (C)**."
      },
      atencao: [
        "Pagar uma dívida: **D** na dívida (Fornecedores) e **C** no Caixa ou Bancos.",
        "Receber um valor: **D** no Caixa ou Bancos e **C** em Contas a Receber.",
        "Confira sempre: total de débitos = total de créditos."
      ],
      flash: [
        ["Conta do Ativo aumenta com…", "Débito."],
        ["Conta do Passivo aumenta com…", "Crédito."],
        ["Pagamento a fornecedor em dinheiro", "D Fornecedores / C Caixa."],
        ["Compra de mercadorias pelo banco", "D Mercadorias / C Bancos."]
      ],
      quiz: [
        { q: "Compra de mercadorias à vista pelo banco: qual o lançamento?", o: ["D Bancos / C Mercadorias", "D Mercadorias / C Bancos", "D Mercadorias / C Fornecedores", "D Fornecedores / C Bancos"], c: 1, e: "O recurso foi para Mercadorias (D) e saiu do Banco (C)." },
        { q: "Compra de mercadorias a prazo:", o: ["D Mercadorias / C Fornecedores", "D Fornecedores / C Mercadorias", "D Mercadorias / C Caixa", "D Caixa / C Fornecedores"], c: 0, e: "Entra mercadoria (D) e surge a dívida com o fornecedor (C)." },
        { q: "Constituição com capital de R$ 100 mil, sendo 40 mil em caixa e 60 mil no banco:", o: ["D Capital / C Caixa e C Bancos", "D Caixa 40 mil e D Bancos 60 mil / C Capital 100 mil", "D Bancos 100 mil / C Capital 100 mil", "D Caixa 100 mil / C Bancos 100 mil"], c: 1, e: "O dinheiro foi para Caixa e Bancos (D) e veio dos sócios (C Capital)." }
      ]
    },
    {
      id: "c3", num: 3, grupo: "g2",
      titulo: "Razonetes",
      sub: "O “T” de cada conta",
      frase: "O razonete é um **T** para cada conta: **débitos à esquerda, créditos à direita**. No final, a diferença entre os lados é o **saldo**.",
      resumo: [
        "Depois dos lançamentos, cada valor vai para o razonete da sua conta. Some cada lado: se o lado do débito é maior, o saldo é **devedor**; se o do crédito é maior, o saldo é **credor**."
      ],
      exemplo: {
        titulo: "Exemplo: razonete do Caixa",
        texto: "Caixa recebe 40.000 (débito) e paga 21.000 (crédito).\n40.000 − 21.000 = **saldo devedor de 19.000**.\nVeja todos os razonetes montados nos exercícios."
      },
      atencao: [
        "Anote a data ou o número do fato ao lado de cada valor para não se perder.",
        "Caixa e Bancos nunca ficam com saldo credor (não dá para gastar mais do que tem)."
      ],
      flash: [
        ["Em que lado do razonete vai o débito?", "Lado esquerdo."],
        ["Como se acha o saldo?", "Soma de cada lado; o saldo é a diferença, do lado que for maior."]
      ],
      quiz: [
        { q: "Débitos de 60.000 e créditos de 14.000. O saldo é:", o: ["Credor de 46.000", "Devedor de 46.000", "Devedor de 74.000", "Zero"], c: 1, e: "60.000 − 14.000, do lado do débito." }
      ]
    },
    {
      id: "c4", num: 4, grupo: "g2",
      titulo: "Balancete de verificação",
      sub: "A conferência dos lançamentos",
      frase: "Lista de **todas as contas com seus saldos**. Se os lançamentos estão certos, **total devedor = total credor**.",
      resumo: [
        "Pegue o saldo final de cada razonete e coloque numa tabela: saldos devedores numa coluna, credores na outra. Some as duas. Se der igual, os débitos e créditos estão equilibrados."
      ],
      tabela: {
        titulo: "Modelo",
        cols: ["Conta", "Saldo devedor", "Saldo credor"],
        rows: [
          ["Caixa", "19.000", ""],
          ["Bancos", "46.000", ""],
          ["Capital Social", "", "100.000"],
          ["…", "…", "…"],
          ["**Totais**", "**iguais**", "**iguais**"]
        ]
      },
      atencao: [
        "Contas do Ativo ficam na coluna **devedora**; Passivo e Capital na **credora**.",
        "Não fechou? Procure valor esquecido, lançado duas vezes ou no lado errado."
      ],
      flash: [
        ["Para que serve o balancete?", "Conferir se o total de débitos é igual ao total de créditos."]
      ],
      quiz: [
        { q: "No balancete, a conta Caixa aparece na coluna:", o: ["Devedora", "Credora", "Nas duas", "Não aparece"], c: 0, e: "Ativo tem saldo devedor." }
      ]
    },
    {
      id: "c5", num: 5, grupo: "g2",
      titulo: "Balanço Patrimonial",
      sub: "A foto do patrimônio",
      frase: "Mostra, numa data, **o Ativo de um lado e o Passivo + PL do outro** — e os dois totais são **sempre iguais**.",
      resumo: [
        "Com os saldos do balancete, monte duas colunas: à esquerda o **Ativo** (o que a empresa tem); à direita o **Passivo** (o que deve) e o **Patrimônio Líquido** (o que é dos sócios).",
        "Se houve receitas e despesas no período, o lucro (ou prejuízo) entra no PL."
      ],
      tabela: {
        titulo: "Formato",
        cols: ["ATIVO", "PASSIVO + PL"],
        rows: [
          ["Caixa, Bancos, Mercadorias, Imóveis, Veículos…", "**Passivo:** Fornecedores, Financiamentos…"],
          ["", "**Patrimônio Líquido:** Capital Social (+ lucro do período)"],
          ["**Total do Ativo**", "**Total do Passivo + PL** (igual)"]
        ]
      },
      atencao: [
        "Balanço não fechou = algum saldo foi esquecido ou ficou do lado errado.",
        "Conta com saldo zero (ex.: fornecedor já pago) não precisa aparecer."
      ],
      flash: [
        ["O que vai do lado esquerdo do balanço?", "O Ativo."],
        ["O que vai do lado direito do balanço?", "O Passivo e o Patrimônio Líquido."]
      ],
      quiz: [
        { q: "No balanço, Fornecedores fica:", o: ["No Ativo", "No Passivo", "No PL", "Fora do balanço"], c: 1, e: "É uma dívida." },
        { q: "Ativo de R$ 238.000 e Passivo de R$ 138.000. O PL é:", o: ["R$ 100.000", "R$ 376.000", "R$ 138.000", "R$ 238.000"], c: 0, e: "238.000 − 138.000." }
      ]
    },
    {
      id: "c6", num: 6, grupo: "g2",
      titulo: "Introdução à DRE",
      sub: "Demonstração do Resultado do Exercício",
      frase: "A DRE mostra se a empresa teve **lucro ou prejuízo** no período: **Receitas − Despesas = Resultado**.",
      resumo: [
        "O Balanço é uma **foto** (o patrimônio numa data). A DRE é um **filme**: mostra o que a empresa ganhou e gastou durante o período.",
        "**Receita** é o que a empresa ganha vendendo ou prestando serviço. **Despesa** é o gasto para funcionar: aluguel, salários, energia. O resultado vai para o **PL** no Balanço."
      ],
      tabela: {
        titulo: "DRE simplificada",
        cols: ["Linha", "Exemplo"],
        rows: [
          ["**Receitas**", "Receita de serviços: 8.000"],
          ["(−) Despesas", "Salários 2.500 · Energia 600 · Internet 400"],
          ["**= Lucro (ou Prejuízo)**", "8.000 − 3.500 = **4.500**"]
        ]
      },
      exemplo: {
        titulo: "O que NÃO é despesa",
        texto: "Comprar um computador, uma moto ou mercadorias **não é despesa**: a empresa ganhou um bem (Ativo).\nPagar uma dívida **não é despesa**: só diminuiu o que ela devia.\nDespesa é o gasto que “some”, como aluguel, salário e energia."
      },
      atencao: [
        "Receita aumenta o lucro; despesa diminui.",
        "Venda a prazo já é receita no dia da venda, mesmo recebendo depois.",
        "O lucro da DRE vai para o Patrimônio Líquido do Balanço."
      ],
      flash: [
        ["Fórmula da DRE (simples)", "Receitas − Despesas = Lucro ou Prejuízo."],
        ["DRE × Balanço", "DRE mostra o resultado do período (filme); Balanço mostra o patrimônio numa data (foto)."],
        ["Comprar um computador é despesa?", "Não. É um bem da empresa (Ativo)."]
      ],
      quiz: [
        { q: "Receitas de R$ 8.000 e despesas de R$ 3.500. O resultado é:", o: ["Prejuízo de 4.500", "Lucro de 4.500", "Lucro de 11.500", "Lucro de 8.000"], c: 1, e: "8.000 − 3.500." },
        { q: "Qual destes é despesa?", o: ["Compra de uma moto", "Pagamento de fornecedor", "Aluguel do mês", "Compra de mercadorias"], c: 2, e: "Os outros são bens ou pagamento de dívida." }
      ]
    }
  ],

  /* ---------------- EXERCÍCIOS ---------------- */
  exercicios: [
    {
      id: "gama", tipo: "contabil", origem: "Professor",
      titulo: "Gama Comércio e Serviços Ltda.",
      periodo: "Janeiro",
      fatos: [
        { d: "15/01", t: "Constituição da empresa com capital social de R$ 100.000,00, sendo R$ 40.000,00 em dinheiro e R$ 60.000,00 depositados em conta bancária.",
          l: [["D", "Caixa", 40000], ["D", "Bancos", 60000], ["C", "Capital Social", 100000]],
          dica: "O dinheiro foi para o Caixa e o Banco (débito) e veio dos sócios (crédito no Capital)." },
        { d: "16/01", t: "Compra de mercadorias para revenda no valor total de R$ 35.000,00, sendo pago 40% à vista via banco e o restante (60%) a prazo.",
          l: [["D", "Mercadorias", 35000], ["C", "Bancos", 14000], ["C", "Fornecedores", 21000]],
          dica: "40% de 35.000 = 14.000 saiu do banco. Os outros 60% = 21.000 ficaram devendo ao fornecedor." },
        { d: "18/01", t: "Aquisição de um imóvel (terreno e edificação) para uso administrativo por R$ 120.000,00, financiado em longo prazo junto a uma instituição financeira.",
          l: [["D", "Imóveis", 120000], ["C", "Financiamentos a Pagar", 120000]],
          dica: "Entrou o imóvel (débito) e surgiu a dívida do financiamento (crédito)." },
        { d: "22/01", t: "Compra de uma moto no valor de R$ 18.000,00, financiada junto ao banco em 12 parcelas.",
          l: [["D", "Veículos", 18000], ["C", "Financiamentos a Pagar", 18000]],
          dica: "Entrou a moto (débito) e aumentou a dívida de financiamento (crédito)." },
        { d: "26/01", t: "Pagamento referente à compra do dia 16, à vista em dinheiro.",
          l: [["D", "Fornecedores", 21000], ["C", "Caixa", 21000]],
          dica: "Paga o que ficou devendo no dia 16 (21.000): a dívida diminui (débito) e o dinheiro sai do Caixa (crédito)." }
      ]
    },
    {
      id: "delta", tipo: "contabil", origem: "Professor",
      titulo: "Delta Distribuidora Ltda.",
      periodo: "Fevereiro",
      fatos: [
        { d: "03/02", t: "Constituição da empresa com capital social de R$ 150.000,00, integralizados totalmente na conta corrente bancária.",
          l: [["D", "Bancos", 150000], ["C", "Capital Social", 150000]] },
        { d: "07/02", t: "Compra de mercadorias a prazo no valor de R$ 50.000,00.",
          l: [["D", "Mercadorias", 50000], ["C", "Fornecedores", 50000]] },
        { d: "07/02", t: "Venda de mercadorias por R$ 10.000,00, recebidos a prazo em 30 e 60 dias.",
          l: [["D", "Contas a Receber", 10000], ["C", "Receita de Vendas", 10000]],
          dica: "Vendeu e vai receber depois: o valor fica em Contas a Receber (débito) e a venda é uma receita (crédito). O enunciado não informa o custo da mercadoria, então lançamos só a venda." },
        { d: "10/02", t: "Compra de três notebooks para o setor de vendas, no valor de R$ 1.000,00 cada um, sendo pago à vista R$ 600,00 e o restante financiado diretamente com a loja.",
          l: [["D", "Computadores", 3000], ["C", "Bancos", 600], ["C", "Contas a Pagar", 2400]],
          dica: "3 × 1.000 = 3.000. A empresa só tem dinheiro no banco, então os 600 saem de Bancos. O restante (2.400) fica devendo à loja." },
        { d: "11/02", t: "Recebimento da primeira parcela da venda ocorrida no dia 07/02.",
          l: [["D", "Bancos", 5000], ["C", "Contas a Receber", 5000]],
          dica: "A venda de 10.000 foi em 2 parcelas, então a primeira é 5.000: entra no banco e diminui o que há para receber." }
      ],
      nota: "Como houve uma venda (receita), a empresa teve lucro de R$ 10.000 no período. Esse valor aparece no Patrimônio Líquido do balanço."
    },
    {
      id: "alfa", tipo: "contabil", origem: "Extra",
      titulo: "Alfa Comércio Ltda.",
      periodo: "Março",
      fatos: [
        { d: "01/03", t: "Constituição da empresa com capital social de R$ 80.000,00: R$ 30.000,00 em dinheiro e R$ 50.000,00 depositados no banco.",
          l: [["D", "Caixa", 30000], ["D", "Bancos", 50000], ["C", "Capital Social", 80000]] },
        { d: "03/03", t: "Compra de mercadorias a prazo por R$ 24.000,00.",
          l: [["D", "Mercadorias", 24000], ["C", "Fornecedores", 24000]] },
        { d: "05/03", t: "Compra de móveis para o escritório por R$ 6.000,00, pagos pelo banco.",
          l: [["D", "Móveis e Utensílios", 6000], ["C", "Bancos", 6000]] },
        { d: "12/03", t: "Compra de um computador por R$ 4.000,00: R$ 1.000,00 em dinheiro e o restante a prazo com a loja.",
          l: [["D", "Computadores", 4000], ["C", "Caixa", 1000], ["C", "Contas a Pagar", 3000]] },
        { d: "20/03", t: "Pagamento de metade da dívida com fornecedores, pelo banco.",
          l: [["D", "Fornecedores", 12000], ["C", "Bancos", 12000]],
          dica: "Metade de 24.000 = 12.000." }
      ]
    },
    {
      id: "beta", tipo: "contabil", origem: "Extra",
      titulo: "Beta Serviços Ltda.",
      periodo: "Abril",
      fatos: [
        { d: "02/04", t: "Constituição da empresa com capital de R$ 60.000,00: R$ 50.000,00 depositados no banco e um veículo de R$ 10.000,00 entregue por um sócio.",
          l: [["D", "Bancos", 50000], ["D", "Veículos", 10000], ["C", "Capital Social", 60000]],
          dica: "O sócio também pode entrar com um bem no lugar de dinheiro." },
        { d: "05/04", t: "Compra de computadores por R$ 4.500,00: R$ 1.500,00 à vista pelo banco e o restante a prazo.",
          l: [["D", "Computadores", 4500], ["C", "Bancos", 1500], ["C", "Contas a Pagar", 3000]] },
        { d: "10/04", t: "Prestação de serviços a um cliente por R$ 8.000,00, para receber em 30 dias.",
          l: [["D", "Contas a Receber", 8000], ["C", "Receita de Serviços", 8000]] },
        { d: "15/04", t: "Empréstimo bancário de R$ 20.000,00, depositado na conta da empresa.",
          l: [["D", "Bancos", 20000], ["C", "Empréstimos a Pagar", 20000]] },
        { d: "20/04", t: "Recebimento de R$ 5.000,00 do cliente, no banco.",
          l: [["D", "Bancos", 5000], ["C", "Contas a Receber", 5000]] },
        { d: "25/04", t: "Pagamento de energia (R$ 600,00) e internet (R$ 400,00) pelo banco.",
          l: [["D", "Despesa com Energia", 600], ["D", "Despesa com Internet", 400], ["C", "Bancos", 1000]] },
        { d: "30/04", t: "Salários do mês, R$ 2.500,00, que serão pagos no começo do mês seguinte.",
          l: [["D", "Despesa com Salários", 2500], ["C", "Salários a Pagar", 2500]],
          dica: "O salário é despesa de abril, mesmo sendo pago em maio. Por enquanto, fica como dívida." }
      ]
    },
    {
      id: "omega", tipo: "contabil", origem: "Extra",
      titulo: "Comercial Ômega Ltda.",
      periodo: "Maio",
      fatos: [
        { d: "02/05", t: "Constituição da empresa com capital de R$ 120.000,00, depositados no banco.",
          l: [["D", "Bancos", 120000], ["C", "Capital Social", 120000]] },
        { d: "04/05", t: "Compra de mercadorias por R$ 40.000,00: metade à vista pelo banco e metade a prazo.",
          l: [["D", "Mercadorias", 40000], ["C", "Bancos", 20000], ["C", "Fornecedores", 20000]] },
        { d: "06/05", t: "Compra de um terreno por R$ 70.000,00: R$ 20.000,00 pagos pelo banco e R$ 50.000,00 financiados.",
          l: [["D", "Terrenos", 70000], ["C", "Bancos", 20000], ["C", "Financiamentos a Pagar", 50000]] },
        { d: "12/05", t: "Saque de R$ 3.000,00 do banco para o caixa da empresa.",
          l: [["D", "Caixa", 3000], ["C", "Bancos", 3000]],
          dica: "O dinheiro só mudou de lugar: entra no Caixa e sai do Banco." },
        { d: "18/05", t: "Pagamento de R$ 10.000,00 aos fornecedores, pelo banco.",
          l: [["D", "Fornecedores", 10000], ["C", "Bancos", 10000]] },
        { d: "25/05", t: "Pagamento da primeira parcela do financiamento do terreno, R$ 5.000,00, pelo banco.",
          l: [["D", "Financiamentos a Pagar", 5000], ["C", "Bancos", 5000]] }
      ]
    }
  ]
});
