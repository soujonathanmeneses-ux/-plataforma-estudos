/* =========================================================
   ADMINISTRAÇÃO — Teorias da Administração (Aulas 6 a 11)
   ========================================================= */
window.MATERIAS = window.MATERIAS || [];
window.MATERIAS.push({
  id: "adm",
  nome: "Teorias da Administração",
  curto: "Administração",
  cor: "amber",
  descricao: "Relações Humanas, Teoria Comportamental, Sistêmica, Contingencial, funções, habilidades e competências.",
  grupos: [
    { id: "a1", nome: "Aulas 6 e 7 · Relações Humanas e Comportamental" },
    { id: "a2", nome: "Aulas 8 e 9 · Teoria Sistêmica e Contingencial" },
    { id: "a3", nome: "Aulas 10 e 11 · Funções, Habilidades e Competências" }
  ],
  mapa: {
    titulo: "Linha do tempo das teorias",
    passos: [
      ["Clássica · 1900–1916", "Taylor e Fayol: eficiência, tarefas e estrutura. Homem econômico."],
      ["Relações Humanas · 1930", "Elton Mayo e Hawthorne: o fator humano e os grupos. Homem social."],
      ["Comportamental · 1950–60", "Simon, Maslow, Herzberg, McGregor, Likert: motivação e decisão."],
      ["Sistêmica · 1950–70", "Bertalanffy, Katz e Kahn: a empresa como sistema aberto."],
      ["Contingencial · 1960–70", "Burns & Stalker, Lawrence & Lorsch, Woodward: depende da situação."]
    ]
  },
  temas: [
    {
      id: "a-rh", num: 1, grupo: "a1",
      titulo: "Teoria das Relações Humanas",
      sub: "Elton Mayo e a Experiência de Hawthorne",
      frase: "Reação à rigidez da Teoria Clássica: o trabalhador deixa de ser visto como **máquina (homem econômico)** e passa a ser visto como **ser social**, motivado por reconhecimento e pertencimento.",
      resumo: [
        "Surgiu por volta de **1930, nos EUA**, a partir das experiências conduzidas por **Elton Mayo** e equipe na fábrica **Western Electric (Hawthorne Works), em Chicago** (1927–1932).",
        "Mostrou que **fatores psicológicos e sociais** — reconhecimento, bons relacionamentos, grupos informais, atenção da chefia — influenciam a produtividade tanto quanto (ou mais que) as condições físicas e o salário."
      ],
      funcoes: [
        ["Valorizar o fator humano", "Pessoas têm necessidades, virtudes e defeitos; não são peças de engrenagem."],
        ["Reconhecer os grupos informais", "As relações dentro dos grupos influenciam o comportamento e a produção."],
        ["Destacar motivação e reconhecimento", "Necessidades de estima e aprovação social motivam."],
        ["Redefinir o papel do administrador", "Comunicar, liderar, motivar e conduzir as pessoas a um ambiente cooperativo."]
      ],
      conceitos: [
        ["Homem econômico (homo economicus)", "Visão clássica: o trabalhador só é motivado por dinheiro."],
        ["Homem social", "Visão das Relações Humanas: motivado por reconhecimento, aprovação e pertencimento ao grupo."],
        ["Experiência de Hawthorne", "Estudo na Western Electric que começou testando iluminação × produtividade e descobriu o peso dos fatores sociais."],
        ["Efeito Hawthorne", "As pessoas mudam o comportamento (e produzem mais) quando se sentem observadas/valorizadas."],
        ["Grupos informais", "Relações espontâneas entre colegas, com normas próprias, fora do organograma."]
      ],
      tabela: {
        titulo: "As fases da Experiência de Hawthorne",
        cols: ["Fase", "O que se testou", "O que se concluiu"],
        rows: [
          ["1ª · Iluminação", "Variação da luz × produtividade", "A produção subia mesmo com menos luz → fator psicológico pesa mais que o físico."],
          ["2ª · Sala de montagem de relés", "Grupo pequeno com pausas, horários e lanches diferentes", "Produtividade subiu por causa da atenção, do clima e da integração do grupo."],
          ["3ª · Programa de entrevistas", "Milhares de entrevistas com funcionários", "Revelou a organização informal e os sentimentos dos trabalhadores."],
          ["4ª · Sala de observação (montagem de terminais)", "Grupo com pagamento por produção do grupo", "O grupo cria normas próprias e controla o ritmo (nem demais, nem de menos)."]
        ]
      },
      extra: {
        titulo: "Críticas à Teoria das Relações Humanas",
        itens: [
          "Negação total (oposição radical) às outras teorias, especialmente a Clássica.",
          "Desvio do principal problema das indústrias.",
          "Visão romântica / ingênua do trabalhador.",
          "Baixo nível de amostragem nos estudos (poucos grupos estudados).",
          "Foco excessivo na motivação e nos grupos informais."
        ]
      },
      exemplo: {
        titulo: "Hoje, na prática",
        texto: "Empresas que fazem pesquisa de clima, reconhecem publicamente bons resultados, escutam o funcionário e usam avaliação de desempenho com feedback estão aplicando ideias das Relações Humanas."
      },
      atencao: [
        "Autor-chave: **Elton Mayo**. Local: **Western Electric, Hawthorne, Chicago**. Época: **década de 1930**.",
        "Ênfase nas **pessoas** (Clássica tinha ênfase em tarefas e estrutura).",
        "Contribuições que continuam atuais: valorizar o colaborador, escutá-lo e usar avaliação de desempenho."
      ],
      flash: [
        ["Quem liderou a Teoria das Relações Humanas?", "Elton Mayo."],
        ["Onde foi a Experiência de Hawthorne?", "Na fábrica da Western Electric (Hawthorne Works), em Chicago."],
        ["Homem econômico × homem social", "Econômico: motivado só por dinheiro (Clássica). Social: motivado por reconhecimento e pertencimento (Relações Humanas)."],
        ["Principal conclusão de Hawthorne", "Fatores psicológicos e sociais influenciam a produtividade mais que as condições físicas."],
        ["Cite 3 críticas à Teoria das Relações Humanas", "Visão romântica do trabalhador, baixa amostragem e oposição radical à Teoria Clássica (também: foco excessivo na motivação)."]
      ],
      quiz: [
        { q: "A Teoria das Relações Humanas surgiu como reação à:", o: ["Teoria Contingencial", "Teoria Clássica / Científica", "Teoria Sistêmica", "Teoria X e Y"], c: 1, e: "Reagiu à rigidez de Taylor e Fayol." },
        { q: "Na 1ª fase de Hawthorne, a produtividade aumentou mesmo com menos iluminação. Isso indicou que:", o: ["A luz não importa nunca", "Fatores psicológicos pesavam mais que os físicos", "O salário era o único motivador", "Os dados estavam errados"], c: 1, e: "Foi a primeira pista do fator humano." },
        { q: "Para as Relações Humanas, o trabalhador é visto como:", o: ["Homem econômico", "Homem social", "Homem máquina", "Homem administrativo"], c: 1, e: "Ser social, que busca aceitação e reconhecimento." }
      ]
    },
    {
      id: "a-comp", num: 2, grupo: "a1",
      titulo: "Teoria Comportamental (Behaviorista)",
      sub: "Origem na psicologia e chegada à Administração",
      frase: "Estuda o **comportamento humano observável** nas organizações para entender como as pessoas decidem, se motivam e como o gestor pode orientá-las.",
      resumo: [
        "Na **psicologia**, o behaviorismo nasce com **John Watson** (e depois **B. F. Skinner**): o comportamento é resposta a **estímulos do ambiente** e pode ser moldado por **recompensas e punições**.",
        "Na **Administração**, a Teoria Comportamental (décadas de 1950–60) aprofunda as Relações Humanas com **Herbert Simon, Chester Barnard, Douglas McGregor, Rensis Likert e Chris Argyris**. No campo da **motivação**, destacam-se **Maslow, Herzberg e McClelland**."
      ],
      funcoes: [
        ["Foco nas pessoas", "O comportamento individual e de grupo é o centro da análise."],
        ["Comportamento organizacional", "Como as pessoas agem e interagem dentro da empresa."],
        ["Motivação", "Entender o que leva as pessoas a agir e como o gestor pode estimular."],
        ["Flexibilidade e cooperação", "Valoriza o trabalhador com base na cooperação."],
        ["Processo decisório", "A organização vista como um sistema de decisões (Simon)."]
      ],
      conceitos: [
        ["Herbert Simon · Teoria da Decisão", "Pessoas decidem com **racionalidade limitada** (não têm todas as informações) e escolhem a opção **satisfatória**, não a ótima."],
        ["Chester Barnard · Aceitação da autoridade", "A autoridade só existe se o subordinado a **aceita**: ele precisa entender a ordem, vê-la compatível com os objetivos e ter condições de cumpri-la."],
        ["Douglas McGregor · Teoria X e Y", "Duas visões opostas sobre a natureza humana no trabalho (ver tema próprio)."],
        ["Rensis Likert · 4 sistemas", "1 Autoritário-coercitivo → 2 Autoritário-benevolente → 3 Consultivo → 4 Participativo."],
        ["David McClelland · Necessidades adquiridas", "As pessoas são movidas por 3 necessidades aprendidas: **realização**, **afiliação** e **poder**."],
        ["Chris Argyris", "Conflito entre as necessidades do indivíduo maduro e as exigências da organização formal."]
      ],
      exemplo: {
        titulo: "Na prática",
        texto: "Um gestor que cria metas com bônus (reforço positivo), envolve a equipe nas decisões (sistema participativo de Likert) e entende que nem toda decisão pode ser perfeita, só boa o suficiente com os dados disponíveis (Simon), está aplicando a abordagem comportamental."
      },
      atencao: [
        "Watson e Skinner = behaviorismo na **psicologia**. Simon, Barnard, McGregor, Likert, Argyris = Comportamental na **Administração**.",
        "Simon: racionalidade **limitada** e decisão **satisfatória**.",
        "Likert vai do sistema 1 (autoritário) ao 4 (participativo)."
      ],
      flash: [
        ["Racionalidade limitada (Simon)", "O decisor não tem todas as informações nem capacidade ilimitada; busca uma solução satisfatória."],
        ["Teoria da aceitação da autoridade (Barnard)", "A autoridade depende de o subordinado aceitar a ordem."],
        ["Os 4 sistemas de Likert", "Autoritário-coercitivo, autoritário-benevolente, consultivo e participativo."],
        ["As 3 necessidades de McClelland", "Realização, afiliação e poder."],
        ["Quem fundou o behaviorismo na psicologia?", "John Watson (seguido por B. F. Skinner)."]
      ],
      quiz: [
        { q: "O autor que afirmou que o decisor escolhe uma solução satisfatória, e não ótima, é:", o: ["Maslow", "Herbert Simon", "Elton Mayo", "Fayol"], c: 1, e: "Teoria da Decisão / racionalidade limitada." },
        { q: "Para Chester Barnard, a autoridade:", o: ["Vem do cargo, sempre", "Depende da aceitação do subordinado", "Não existe nas empresas", "É exclusiva do dono"], c: 1, e: "Teoria da aceitação da autoridade." },
        { q: "Realização, afiliação e poder são as necessidades descritas por:", o: ["McClelland", "Herzberg", "Likert", "McGregor"], c: 0, e: "Teoria das Necessidades Adquiridas." }
      ]
    },
    {
      id: "a-maslow", num: 3, grupo: "a1",
      titulo: "Hierarquia das Necessidades — Maslow",
      sub: "A pirâmide da motivação",
      frase: "As pessoas são motivadas por **necessidades não satisfeitas**, organizadas em **5 níveis**: só depois de atender as de baixo as de cima passam a motivar.",
      resumo: [
        "Abraham Maslow propôs que a motivação humana segue uma **hierarquia**: na base, as necessidades **primárias** (fisiológicas e segurança); no topo, as **secundárias** (sociais, estima e autorrealização).",
        "Uma necessidade satisfeita **deixa de motivar**, e a do nível seguinte passa a guiar o comportamento."
      ],
      tabela: {
        titulo: "A pirâmide (da base para o topo)",
        cols: ["Nível", "Necessidade", "No trabalho"],
        rows: [
          ["1 · Base", "**Fisiológicas** — comida, água, sono, abrigo", "Salário básico, intervalos, ambiente adequado"],
          ["2", "**Segurança** — proteção, estabilidade, previsibilidade", "Estabilidade, plano de saúde, segurança do trabalho"],
          ["3", "**Sociais** — pertencimento, amizade, aceitação", "Bom clima, integração, trabalho em equipe"],
          ["4", "**Estima** — autoestima, reconhecimento, status", "Elogios, promoções, títulos, feedback"],
          ["5 · Topo", "**Autorrealização** — desenvolver todo o potencial", "Desafios, autonomia, crescimento, propósito"]
        ]
      },
      conceitos: [
        ["Necessidades primárias", "Fisiológicas e de segurança (base)."],
        ["Necessidades secundárias", "Sociais, estima e autorrealização (topo)."],
        ["Estima (2 tipos)", "Por si mesmo (dignidade, realização, independência) e dos outros (status, prestígio)."]
      ],
      atencao: [
        "Ordem: **Fisiológicas → Segurança → Sociais → Estima → Autorrealização**. Dica: “**F**ui **S**er **S**ábio **E** **A**utorrealizado”.",
        "Autorrealização é o **topo**; só aparece quando as demais estão atendidas."
      ],
      flash: [
        ["Os 5 níveis de Maslow (base → topo)", "Fisiológicas, Segurança, Sociais, Estima, Autorrealização."],
        ["Necessidade satisfeita motiva?", "Não. Ela deixa de motivar e o próximo nível passa a guiar o comportamento."],
        ["Plano de saúde atende qual nível?", "Segurança."]
      ],
      quiz: [
        { q: "O nível mais alto da pirâmide de Maslow é:", o: ["Estima", "Sociais", "Autorrealização", "Segurança"], c: 2, e: "Autorrealização = desenvolver o próprio potencial." },
        { q: "Um funcionário que deseja promoção e reconhecimento busca necessidades de:", o: ["Segurança", "Estima", "Fisiológicas", "Sociais"], c: 1, e: "Reconhecimento e status = estima." },
        { q: "Pertencer a um grupo e ter amizades no trabalho atende necessidades:", o: ["Sociais", "Fisiológicas", "De segurança", "De autorrealização"], c: 0, e: "Sociais = pertencimento." }
      ]
    },
    {
      id: "a-herz", num: 4, grupo: "a1",
      titulo: "Teoria dos Dois Fatores — Herzberg",
      sub: "Fatores higiênicos × motivacionais",
      frase: "O que **evita a insatisfação** (fatores higiênicos, do ambiente) é diferente do que **gera satisfação** (fatores motivacionais, do próprio trabalho).",
      resumo: [
        "Frederick Herzberg entendeu que o maior motivador está **dentro do próprio trabalho**. Fatores externos (salário, chefia) só impedem a insatisfação — não motivam de verdade.",
        "Diferença para Maslow: Maslow olha as **necessidades humanas**; Herzberg olha o **ambiente de trabalho** e o conteúdo do cargo."
      ],
      tabela: {
        titulo: "Os dois fatores",
        cols: ["", "Fatores HIGIÊNICOS (extrínsecos)", "Fatores MOTIVACIONAIS (intrínsecos)"],
        rows: [
          ["Onde estão", "No ambiente / contexto do trabalho", "No conteúdo do cargo / na tarefa"],
          ["Quem controla", "A organização", "O próprio indivíduo"],
          ["Exemplos", "Salário, estilo de supervisão, relações interpessoais, políticas de RH, condições físicas", "Reconhecimento, crescimento, responsabilidade, realização, o trabalho em si"],
          ["Quando estão bons", "Evitam a insatisfação (não motivam)", "Geram satisfação e motivação"],
          ["Quando estão ruins", "Causam insatisfação", "Evitam a satisfação (geram “não satisfação”)"]
        ]
      },
      conceitos: [
        ["Fatores higiênicos", "Extrínsecos; quando ótimos apenas evitam a insatisfação."],
        ["Fatores motivacionais", "Intrínsecos; quando ótimos provocam satisfação."],
        ["Enriquecimento do cargo", "Aplicação prática: dar mais responsabilidade e desafio à tarefa para motivar."]
      ],
      atencao: [
        "**Salário é fator higiênico** — pegadinha clássica!",
        "O oposto de satisfação é **não satisfação**; o oposto de insatisfação é **não insatisfação**.",
        "Higiênico = extrínseco = ambiente. Motivacional = intrínseco = tarefa."
      ],
      flash: [
        ["Salário é fator higiênico ou motivacional?", "Higiênico (extrínseco)."],
        ["O que fazem os fatores higiênicos quando estão bons?", "Apenas evitam a insatisfação."],
        ["Exemplos de fatores motivacionais", "Reconhecimento, crescimento, responsabilidade, realização e o trabalho em si."],
        ["Diferença entre Maslow e Herzberg", "Maslow: necessidades humanas. Herzberg: ambiente e conteúdo do trabalho."]
      ],
      quiz: [
        { q: "Segundo Herzberg, um aumento de salário tende a:", o: ["Gerar motivação duradoura", "Evitar a insatisfação", "Gerar autorrealização", "Não ter efeito algum"], c: 1, e: "Salário é fator higiênico." },
        { q: "Ter um trabalho desafiador e com responsabilidade é um fator:", o: ["Higiênico", "Motivacional", "Extrínseco", "Contingencial"], c: 1, e: "Ligado ao conteúdo do cargo → motivacional." },
        { q: "Fatores higiênicos são controlados:", o: ["Pelo indivíduo", "Pela organização", "Pelo governo", "Pelos clientes"], c: 1, e: "São do ambiente, administrados pela empresa." }
      ]
    },
    {
      id: "a-xy", num: 5, grupo: "a1",
      titulo: "Teoria X e Teoria Y — McGregor",
      sub: "Duas visões sobre a natureza humana",
      frase: "Douglas McGregor (1960) mostrou que o estilo de liderança depende de como o gestor **enxerga as pessoas**: preguiçosas (X) ou proativas (Y).",
      tabela: {
        titulo: "X × Y",
        cols: ["Teoria X (tradicional)", "Teoria Y (moderna)"],
        rows: [
          ["Pessoas são preguiçosas e evitam o trabalho", "Trabalhar é tão natural quanto descansar"],
          ["Precisam ser controladas, coagidas e punidas", "Têm autocontrole e autodireção quando comprometidas"],
          ["Evitam responsabilidade e preferem ser dirigidas", "Aceitam e buscam responsabilidade"],
          ["Motivadas só por dinheiro e medo", "Motivadas por realização e crescimento"],
          ["Liderança autoritária, centralizada", "Liderança participativa, delegação"]
        ]
      },
      funcoes: [
        ["Explicar estilos de liderança", "A crença do gestor define como ele lidera."],
        ["Profecia autorrealizável", "Tratar as pessoas como X tende a fazê-las agir como X — e o mesmo vale para Y."]
      ],
      atencao: [
        "X = visão **negativa** e controladora (próxima da Clássica). Y = visão **positiva** e participativa (próxima das Relações Humanas/Comportamental).",
        "McGregor defendia a Teoria Y."
      ],
      flash: [
        ["Teoria X em uma frase", "As pessoas não gostam de trabalhar e precisam ser controladas."],
        ["Teoria Y em uma frase", "As pessoas são proativas, buscam responsabilidade e se autodirigem."],
        ["Autor das Teorias X e Y", "Douglas McGregor, 1960."]
      ],
      quiz: [
        { q: "Um gestor que acredita que a equipe só trabalha sob vigilância segue a:", o: ["Teoria Y", "Teoria X", "Teoria dos Dois Fatores", "Teoria Sistêmica"], c: 1, e: "Visão controladora = X." },
        { q: "Delegar e envolver a equipe nas decisões é típico da:", o: ["Teoria X", "Teoria Y", "Administração Científica", "Burocracia"], c: 1, e: "Teoria Y = participativa." }
      ]
    },
    {
      id: "a-sis", num: 6, grupo: "a2",
      titulo: "Teoria Sistêmica",
      sub: "Ludwig von Bertalanffy e a empresa como sistema aberto",
      frase: "A organização é um **conjunto de partes interligadas** que trabalham juntas por objetivos comuns — e deve ser analisada **como um todo**, não por setores isolados.",
      resumo: [
        "Baseada na **Teoria Geral dos Sistemas (TGS)** do biólogo austríaco **Ludwig von Bertalanffy** (primeiros enunciados no fim dos anos 1930; obra de **1968**). **Daniel Katz e Robert Kahn (1966)** aplicaram a abordagem às organizações, destacando a relação com o ambiente externo.",
        "A empresa passa a ser vista como **sistema aberto**: recebe influências do ambiente (clientes, fornecedores, concorrentes, governo) e precisa se adaptar continuamente."
      ],
      tabela: {
        titulo: "O sistema aberto",
        cols: ["Etapa", "O que é", "Exemplo (padaria)"],
        rows: [
          ["1. Entradas (inputs)", "Recursos que a empresa recebe", "Farinha, energia, funcionários, dinheiro"],
          ["2. Processamento (throughput)", "Transformação dos recursos", "Produção dos pães"],
          ["3. Saídas (outputs)", "Resultados entregues ao mercado", "Pães vendidos, atendimento"],
          ["4. Feedback (retroalimentação)", "Informação sobre os resultados para corrigir e melhorar", "Reclamação de cliente → ajuste da receita"]
        ]
      },
      conceitos: [
        ["Interdependência", "Os setores dependem uns dos outros."],
        ["Sinergia", "O todo é maior que a soma das partes: trabalho integrado gera resultado melhor."],
        ["Equilíbrio (homeostase)", "A organização busca manter o funcionamento diante das mudanças."],
        ["Feedback", "Os resultados geram informações para melhoria."],
        ["Sistema aberto", "Interage com clientes, fornecedores, concorrentes e governo."]
      ],
      extra: {
        titulo: "Aplicação nas áreas",
        itens: [
          "**RH:** a contratação impacta produtividade, clima e resultados.",
          "**Administração:** o planejamento precisa considerar todos os departamentos.",
          "**Contabilidade:** as informações financeiras ajudam gestores de diferentes setores a decidir.",
          "**Logística:** estoque, compras, transporte e entregas funcionam de forma integrada."
        ]
      },
      atencao: [
        "Autor: **Bertalanffy** (TGS). Aplicação às organizações: **Katz e Kahn**.",
        "Entrada → Processamento → Saída → **Feedback**.",
        "Ideia central: ver o **todo** e a **interdependência**."
      ],
      flash: [
        ["Criador da Teoria Geral dos Sistemas", "Ludwig von Bertalanffy, biólogo austríaco."],
        ["As 4 etapas do sistema aberto", "Entradas, processamento, saídas e feedback."],
        ["O que é sinergia?", "O trabalho integrado das partes gera resultado maior que a soma individual."],
        ["Quem aplicou a teoria sistêmica às organizações?", "Daniel Katz e Robert Kahn (1966)."]
      ],
      quiz: [
        { q: "A informação sobre os resultados usada para corrigir processos chama-se:", o: ["Input", "Throughput", "Feedback", "Output"], c: 2, e: "Retroalimentação." },
        { q: "A principal ideia da Teoria Sistêmica é:", o: ["Não existe forma única de administrar", "Analisar a organização como um todo interligado", "Motivar pelo salário", "Dividir tarefas ao máximo"], c: 1, e: "A primeira alternativa é a Contingencial." },
        { q: "“O todo é maior que a soma das partes” descreve:", o: ["Entropia", "Sinergia", "Feedback", "Equifinalidade"], c: 1, e: "Sinergia." }
      ]
    },
    {
      id: "a-cont", num: 7, grupo: "a2",
      titulo: "Teoria Contingencial",
      sub: "Tudo depende: não existe uma única forma certa",
      frase: "**Não existe uma única melhor forma de administrar**: a estrutura e a gestão devem se **adaptar ao ambiente, à tecnologia, ao tamanho, à estratégia e às pessoas**.",
      resumo: [
        "Não tem um único criador: nasceu de **várias pesquisas nos anos 1960–70**, que questionaram a ideia de um modelo universal de administração.",
        "Principal ideia: **o que funciona em uma empresa pode não funcionar em outra**. A gestão precisa ser flexível e adequada a cada situação."
      ],
      tabela: {
        titulo: "Principais estudos",
        cols: ["Autores", "Estudo", "Conclusão"],
        rows: [
          ["**Burns e Stalker (1961)**", "Ambiente × estrutura", "Ambiente **estável** → organização **mecanicista** (rígida, centralizada). Ambiente **dinâmico** → organização **orgânica** (flexível, descentralizada)."],
          ["**Lawrence e Lorsch (1967)**", "Ambiente, diferenciação e integração", "Quanto mais complexo o ambiente, mais os departamentos se diferenciam e mais a empresa precisa integrá-los."],
          ["**Joan Woodward (1965)**", "Tecnologia × estrutura", "A tecnologia de produção (unitária/pequenos lotes, em massa, processo contínuo) influencia a estrutura."]
        ]
      },
      conceitos: [
        ["Fatores contingenciais", "Ambiente externo, tecnologia, tamanho, estratégia e pessoas."],
        ["Organização mecanicista", "Hierarquia rígida, regras, centralização — boa para ambiente estável."],
        ["Organização orgânica", "Flexível, comunicação lateral, descentralizada — boa para ambiente dinâmico."],
        ["Diferenciação", "Cada departamento desenvolve características próprias conforme seu ambiente."],
        ["Integração", "Esforço para coordenar os departamentos diferenciados."]
      ],
      extra: {
        titulo: "Aplicação nas áreas",
        itens: [
          "**RH:** adaptar recrutamento e seleção ao perfil da vaga e ao mercado.",
          "**Administração:** mudar o estilo de liderança conforme a equipe e a situação.",
          "**Contabilidade:** adaptar controles e relatórios às exigências legais e gerenciais.",
          "**Logística:** modificar rotas, estoques e transportes conforme demanda e custos."
        ]
      },
      atencao: [
        "Palavra-chave: **“depende”**.",
        "Burns e Stalker: **mecanicista × orgânica**.",
        "Sistêmica ajuda a **entender as conexões**; Contingencial ajuda a **escolher como agir** diante das circunstâncias."
      ],
      flash: [
        ["Ideia central da Teoria Contingencial", "Não existe uma única melhor forma de administrar; depende da situação."],
        ["Burns e Stalker", "Ambiente estável → estrutura mecanicista; ambiente dinâmico → estrutura orgânica."],
        ["Joan Woodward", "A tecnologia de produção influencia a estrutura da organização."],
        ["Lawrence e Lorsch", "Relação entre ambiente, diferenciação dos departamentos e integração."],
        ["Fatores contingenciais", "Ambiente, tecnologia, tamanho, estratégia e pessoas."]
      ],
      quiz: [
        { q: "Uma startup em mercado que muda toda semana deve ter estrutura:", o: ["Mecanicista", "Orgânica", "Burocrática rígida", "Igual à de qualquer empresa"], c: 1, e: "Ambiente dinâmico → orgânica (Burns e Stalker)." },
        { q: "Quem estudou a influência da tecnologia de produção na estrutura?", o: ["Joan Woodward", "Elton Mayo", "Maslow", "Bertalanffy"], c: 0, e: "Woodward, 1965." },
        { q: "Sistêmica × Contingencial: qual afirmação está correta?", o: ["As duas defendem um modelo único", "A Sistêmica analisa o todo; a Contingencial adapta a gestão às circunstâncias", "A Contingencial ignora o ambiente", "A Sistêmica nega o ambiente externo"], c: 1, e: "Conclusão da aula." }
      ]
    },
    {
      id: "a-func", num: 8, grupo: "a3",
      titulo: "Funções administrativas e níveis",
      sub: "PODC e os níveis estratégico, tático e operacional",
      frase: "“O administrador não é o que faz, mas o que **faz fazer**.” Suas funções são **Planejar, Organizar, Dirigir e Controlar (PODC)**.",
      resumo: [
        "Administrar é fazer com que as tarefas sejam executadas **por outras pessoas**, em conjunto, de forma satisfatória e com resultado. O administrador precisa: tomar decisões, coordenar pessoas e processos, gerenciar recursos (financeiros, materiais e tecnológicos), resolver problemas e alcançar resultados.",
        "As funções vêm de **Henri Fayol** (originalmente: prever, organizar, comandar, coordenar e controlar — POCCC), hoje resumidas no **PODC**."
      ],
      tabela: {
        titulo: "PODC",
        cols: ["Função", "O que é", "Exemplo (transportadora)"],
        rows: [
          ["**Planejar**", "Definir objetivos e o caminho para alcançá-los", "Planejar as entregas do mês"],
          ["**Organizar**", "Distribuir tarefas, pessoas e recursos", "Organizar os funcionários e as rotas"],
          ["**Dirigir**", "Liderar, motivar e comunicar", "Orientar e motivar os motoristas"],
          ["**Controlar**", "Comparar o resultado com o planejado e corrigir", "Controlar custos e acompanhar resultados"]
        ]
      },
      extra: {
        titulo: "Níveis organizacionais",
        itens: [
          "**Estratégico** (diretoria, presidência): define o futuro e os objetivos da organização — longo prazo.",
          "**Tático** (gerentes, coordenadores): transforma as estratégias em planos departamentais — médio prazo.",
          "**Operacional** (supervisores, encarregados): executa e acompanha as atividades diárias — curto prazo.",
          "Ex.: a diretoria define a expansão; o gerente de logística planeja ampliar as entregas; o supervisor organiza as rotas e acompanha os motoristas."
        ]
      },
      atencao: [
        "PODC = **P**lanejar, **O**rganizar, **D**irigir, **C**ontrolar — nessa ordem (é um ciclo).",
        "Base: **Fayol**. Original: POCCC.",
        "Estratégico = o quê/por quê; tático = como, por área; operacional = execução diária."
      ],
      flash: [
        ["O que significa PODC?", "Planejar, Organizar, Dirigir e Controlar."],
        ["De quem vêm as funções administrativas?", "Henri Fayol."],
        ["Nível tático", "Gerentes e coordenadores; transformam a estratégia em planos departamentais."],
        ["Função de comparar o resultado com o planejado", "Controlar."]
      ],
      quiz: [
        { q: "Motivar e liderar a equipe corresponde à função de:", o: ["Planejar", "Organizar", "Dirigir", "Controlar"], c: 2, e: "Dirigir = liderar, motivar, comunicar." },
        { q: "Gerentes e coordenadores atuam no nível:", o: ["Estratégico", "Tático", "Operacional", "Institucional externo"], c: 1, e: "Nível intermediário." },
        { q: "Comparar o orçado com o realizado e corrigir desvios é:", o: ["Controlar", "Organizar", "Planejar", "Dirigir"], c: 0, e: "Controle." }
      ]
    },
    {
      id: "a-hab", num: 9, grupo: "a3",
      titulo: "Habilidades e competências",
      sub: "Katz (técnica, humana, conceitual) e o modelo CHA",
      frase: "**Funções** = o que o administrador faz (PODC). **Habilidades** = o que ele precisa saber fazer. **Competências** = como ele mobiliza **conhecimentos, habilidades e atitudes (CHA)** para gerar resultado.",
      resumo: [
        "**Robert L. Katz (1955)** identificou três habilidades: **técnica**, **humana** e **conceitual**. Quanto mais alto o nível, mais importa a conceitual; quanto mais baixo, mais importa a técnica. A humana é importante em todos os níveis.",
        "Segundo **Fleury e Fleury (2001)** e **Durand**, habilidade ≠ competência: habilidade é saber fazer; competência é a mobilização integrada de **saber, saber fazer e saber agir**. O **modelo CHA** (Scott B. Parry, 1996) resume: **Conhecimento, Habilidade e Atitude**."
      ],
      tabela: {
        titulo: "As 3 habilidades de Katz",
        cols: ["Habilidade", "O que é", "Mais importante em"],
        rows: [
          ["**Técnica**", "Usar conhecimentos, métodos e ferramentas específicas da área", "Nível operacional"],
          ["**Humana**", "Trabalhar com pessoas: comunicar, liderar, motivar, resolver conflitos", "Todos os níveis (especialmente o tático)"],
          ["**Conceitual**", "Ver a organização como um todo, pensar estrategicamente, entender relações", "Nível estratégico"]
        ]
      },
      conceitos: [
        ["Habilidade", "Capacidade de transformar conhecimento em ação (saber fazer)."],
        ["Competência", "Mobilização integrada de conhecimentos, habilidades e atitudes."],
        ["C — Conhecimento", "Saber: conceitos, teorias, informações."],
        ["H — Habilidade", "Saber fazer: aplicar na prática."],
        ["A — Atitude", "Querer fazer: iniciativa, proatividade, comportamento."],
        ["Competências duráveis (Chiavenato)", "Conhecimento (saber), Perspectiva/Habilidade (saber fazer), Julgamento (saber analisar) e Atitude (saber fazer acontecer)."]
      ],
      extra: {
        titulo: "Competências do administrador do futuro",
        itens: [
          "Visão estratégica e **ESG** (ambiental, social e governança).",
          "Pensamento analítico e resolução de problemas com **dados**.",
          "Adaptabilidade e resiliência.",
          "Competências digitais (automação, pensamento computacional).",
          "Comunicação e inteligência emocional.",
          "Desafios atuais: transformação digital e IA, diversidade e inclusão, novas relações de trabalho, sustentabilidade, competitividade e inovação."
        ]
      },
      exemplo: {
        titulo: "Habilidade × competência",
        texto: "Saber usar um sistema de recrutamento é **habilidade técnica**. Usar esse sistema para escolher os candidatos certos, com ética e alinhado às necessidades da empresa, é **competência**."
      },
      atencao: [
        "Katz: técnica (base/operacional) → humana (todos) → conceitual (topo/estratégico).",
        "CHA = Conhecimento, Habilidade, Atitude (Scott B. Parry).",
        "Síntese da aula: **Funções** = o que faz; **Habilidades** = o que sabe fazer; **Competências** = como mobiliza tudo para gerar resultado."
      ],
      flash: [
        ["As 3 habilidades de Katz", "Técnica, humana e conceitual."],
        ["Habilidade mais importante no nível estratégico", "Conceitual."],
        ["O que é o CHA?", "Conhecimento (saber), Habilidade (saber fazer) e Atitude (querer fazer)."],
        ["Diferença entre habilidade e competência", "Habilidade é saber fazer; competência é mobilizar conhecimentos, habilidades e atitudes juntos para gerar resultado."],
        ["Competências duráveis (Chiavenato)", "Conhecimento, perspectiva/habilidade, julgamento e atitude."]
      ],
      quiz: [
        { q: "Para um diretor, a habilidade mais importante segundo Katz é a:", o: ["Técnica", "Humana", "Conceitual", "Operacional"], c: 2, e: "Visão do todo." },
        { q: "No modelo CHA, “atitude” corresponde a:", o: ["Saber", "Saber fazer", "Querer fazer / fazer acontecer", "Saber analisar"], c: 2, e: "Atitude = comportamento, iniciativa." },
        { q: "A habilidade necessária em todos os níveis é a:", o: ["Técnica", "Humana", "Conceitual", "Financeira"], c: 1, e: "Lidar com pessoas importa sempre." }
      ]
    }
  ]
});
