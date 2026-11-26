/* =========================================================
   SIG — Sistemas de Informação Gerencial
   Conteúdo dos 10 temas do cronograma (sessões I a IV)
   ========================================================= */
window.MATERIAS = window.MATERIAS || [];
window.MATERIAS.push({
  id: "sig",
  nome: "Sistemas de Informação Gerencial",
  curto: "SIG",
  cor: "indigo",
  descricao: "Bancos de dados, BI, Data Warehouse, SAD, LGPD e indicadores financeiros de TI.",
  grupos: [
    { id: "s1", nome: "Sessão I · Arquitetura e Modelagem de Banco de Dados" },
    { id: "s2", nome: "Sessão II · Engenharia de Dados, BI e Repositórios" },
    { id: "s3", nome: "Sessão III · Sistemas de Apoio à Decisão" },
    { id: "s4", nome: "Sessão IV · Governança, Viabilidade e Fator Humano" }
  ],
  mapa: {
    titulo: "A jornada do dado (como os temas se conectam)",
    passos: [
      ["Operação", "Bancos relacionais (T2) e NoSQL (T3) registram o dia a dia — OLTP."],
      ["Ingestão", "ETL (T1) extrai, limpa e carrega. O Data Lake (T5) guarda tudo bruto."],
      ["Repositório", "Data Warehouse (T6) integra a empresa; Data Marts (T7) recortam por área."],
      ["Modelagem", "Modelo dimensional (T4): fatos + dimensões em estrela ou floco de neve."],
      ["Decisão", "BI (T1) mostra o passado; SAD (T9) simula cenários (what-if, goal-seeking)."],
      ["Governança e valor", "LGPD (T8) protege os dados; KPIs e fator humano (T10) justificam o investimento."]
    ]
  },
  temas: [
    /* ---------------- TEMA 2 ---------------- */
    {
      id: "t2", num: 2, grupo: "s1",
      titulo: "Banco de Dados Relacional",
      sub: "SGBD, tabelas, chaves, integridade e ACID",
      frase: "Organiza os dados em **tabelas relacionadas entre si por chaves**, garantindo consistência por meio de regras de integridade e transações ACID.",
      resumo: [
        "Proposto por **Edgar F. Codd (IBM, 1970)**, o modelo relacional representa os dados em **tabelas (relações)**. Cada linha é um registro (**tupla**) e cada coluna é uma característica (**atributo**). O software que administra isso é o **SGBD** (Sistema Gerenciador de Banco de Dados) — ex.: MySQL, PostgreSQL, SQL Server, Oracle.",
        "A linguagem padrão é o **SQL**. É o banco típico do **nível operacional** (OLTP): vendas, notas fiscais, folha, lançamentos contábeis — muitas transações pequenas que precisam estar sempre corretas."
      ],
      funcoes: [
        ["Armazenar de forma estruturada", "Esquema rígido definido antes (schema-on-write): cada coluna tem tipo e regras."],
        ["Relacionar informações", "Chave primária (PK) identifica a linha; chave estrangeira (FK) aponta para a PK de outra tabela."],
        ["Garantir integridade", "Integridade referencial impede, por ex., uma venda para um cliente que não existe."],
        ["Processar transações com segurança", "Propriedades ACID: tudo ou nada, sem corromper os dados."],
        ["Evitar redundância", "Normalização (1FN, 2FN, 3FN) divide os dados para não repetir informação."],
        ["Consultar com SQL", "DDL cria estruturas (CREATE); DML manipula dados (SELECT, INSERT, UPDATE, DELETE)."]
      ],
      conceitos: [
        ["Tupla", "Uma linha da tabela = um registro (ex.: um cliente)."],
        ["Atributo", "Uma coluna da tabela = uma característica (ex.: CPF, nome)."],
        ["Chave primária (PK)", "Identifica cada linha de forma única; não pode ser nula nem repetir."],
        ["Chave estrangeira (FK)", "Campo que referencia a PK de outra tabela, criando o relacionamento."],
        ["Integridade referencial", "Regra que garante que toda FK aponte para um registro existente."],
        ["Atomicidade (A)", "A transação acontece inteira ou não acontece (tudo ou nada)."],
        ["Consistência (C)", "A transação leva o banco de um estado válido a outro estado válido."],
        ["Isolamento (I)", "Transações simultâneas não interferem umas nas outras."],
        ["Durabilidade (D)", "Depois de confirmada (commit), a transação não se perde, nem com queda de energia."],
        ["Normalização", "Processo de organizar tabelas para reduzir redundância e anomalias."]
      ],
      tabela: {
        titulo: "Exemplo: duas tabelas relacionadas",
        cols: ["Tabela CLIENTE", "Tabela PEDIDO"],
        rows: [
          ["**id_cliente (PK)** · nome · cidade", "**id_pedido (PK)** · data · valor · **id_cliente (FK)**"],
          ["1 · Ana · Itaquá", "501 · 10/11 · R$ 300 · 1"],
          ["2 · Bruno · Suzano", "502 · 11/11 · R$ 120 · 2"]
        ]
      },
      exemplo: {
        titulo: "Na prática: transferência bancária",
        texto: "Transferir R$ 500 da conta A para a B são duas operações: debitar A e creditar B. Pela **atomicidade**, se o sistema cair no meio, nada é gravado — o dinheiro não some. É por isso que bancos, ERPs e sistemas contábeis usam banco relacional."
      },
      atencao: [
        "Tupla = linha; atributo = coluna. É a troca mais cobrada.",
        "PK não aceita nulo nem duplicado; FK pode repetir (um cliente tem vários pedidos).",
        "ACID é característica do relacional/OLTP. NoSQL costuma seguir BASE.",
        "Relacional escala principalmente na **vertical** (máquina mais forte)."
      ],
      flash: [
        ["O que significa ACID?", "Atomicidade, Consistência, Isolamento e Durabilidade."],
        ["Diferença entre PK e FK", "PK identifica a linha na própria tabela; FK referencia a PK de outra tabela."],
        ["Quem criou o modelo relacional?", "Edgar F. Codd, IBM, 1970."],
        ["O que é integridade referencial?", "Garantia de que toda chave estrangeira aponta para um registro que existe."],
        ["Banco relacional atende qual tipo de processamento?", "OLTP — transacional, operacional, do dia a dia."]
      ],
      quiz: [
        { q: "Em um banco relacional, uma linha da tabela é chamada de:", o: ["Atributo", "Tupla", "Esquema", "Índice"], c: 1, e: "Linha = tupla (registro). Coluna = atributo." },
        { q: "Qual propriedade ACID garante que uma transação ocorra por completo ou não ocorra?", o: ["Isolamento", "Durabilidade", "Atomicidade", "Consistência"], c: 2, e: "Atomicidade = tudo ou nada." },
        { q: "Um pedido com id_cliente = 99, sendo que o cliente 99 não existe, viola:", o: ["A normalização", "A integridade referencial", "A durabilidade", "O schema-on-read"], c: 1, e: "A FK precisa apontar para uma PK existente — isso é integridade referencial." },
        { q: "Qual comando SQL é de consulta?", o: ["CREATE", "SELECT", "DROP", "ALTER"], c: 1, e: "SELECT é DML de consulta. CREATE, DROP e ALTER são DDL." }
      ]
    },

    /* ---------------- TEMA 3 ---------------- */
    {
      id: "t3", num: 3, grupo: "s1",
      titulo: "Banco de Dados Não Relacional (NoSQL)",
      sub: "Big Data, 4 modelos, escalabilidade horizontal",
      frase: "Bancos **sem o esquema rígido de tabelas**, criados para lidar com **grande volume, variedade e velocidade** de dados, escalando horizontalmente.",
      resumo: [
        "NoSQL significa **“Not only SQL”**. Surgiu porque o relacional tem limitações diante do **Big Data** (os 3 Vs: **Volume, Velocidade e Variedade**): esquema rígido, dificuldade com dados não estruturados e escalabilidade cara (vertical).",
        "Em vez de ACID estrito, muitos seguem o modelo **BASE** (Basicamente disponível, estado Suave, consistência Eventual) e o **Teorema CAP**: num sistema distribuído só é possível garantir 2 de 3 — Consistência, Disponibilidade e tolerância a Partição."
      ],
      funcoes: [
        ["Escalar horizontalmente", "Adiciona mais servidores (nós) baratos em vez de comprar uma máquina maior."],
        ["Alta disponibilidade", "Dados replicados em vários nós: se um cai, outro responde."],
        ["Esquema flexível", "Cada registro pode ter campos diferentes — bom para dados semiestruturados."],
        ["Desempenho em grande volume", "Leituras e gravações muito rápidas para milhões de usuários."],
        ["Modelar relações complexas", "Bancos de grafos navegam conexões (redes sociais, fraudes)."]
      ],
      conceitos: [
        ["Chave-Valor", "Cada dado é um par chave → valor. Ultrarrápido. Ex.: Redis, DynamoDB. Uso: cache, sessão, carrinho."],
        ["Documentos (JSON)", "Guarda documentos JSON/BSON com estrutura flexível. Ex.: MongoDB. Uso: catálogos, cadastros variados."],
        ["Grafos", "Nós (entidades) e arestas (relações). Ex.: Neo4j. Uso: redes sociais, recomendação, detecção de fraude."],
        ["Orientado a Colunas", "Agrupa dados por famílias de colunas. Ex.: Cassandra, HBase. Uso: séries temporais, IoT, logs."],
        ["Escalabilidade horizontal", "Crescer adicionando máquinas (scale-out)."],
        ["Escalabilidade vertical", "Crescer turbinando uma única máquina (scale-up) — típico do relacional."],
        ["BASE", "Basically Available, Soft state, Eventual consistency."],
        ["Teorema CAP", "Consistência, Disponibilidade e tolerância a Partição: só dá para garantir duas ao mesmo tempo."]
      ],
      tabela: {
        titulo: "Relacional × NoSQL",
        cols: ["Critério", "Relacional (SQL)", "NoSQL"],
        rows: [
          ["Estrutura", "Tabelas com esquema fixo", "Chave-valor, documento, grafo, colunas"],
          ["Escalabilidade", "Vertical", "Horizontal"],
          ["Transações", "ACID", "BASE (consistência eventual)"],
          ["Tipo de dado", "Estruturado", "Estruturado, semi e não estruturado"],
          ["Exemplo de uso", "ERP, contabilidade, banco", "Redes sociais, IoT, streaming"]
        ]
      },
      exemplo: {
        titulo: "Na prática: uma rede social",
        texto: "Os perfis ficam num banco de **documentos** (cada usuário tem campos diferentes), as amizades num banco de **grafos** (quem conhece quem), a sessão logada num **chave-valor** (rápido) e o histórico de cliques num **colunar** (volume enorme). Tudo distribuído em vários servidores."
      },
      atencao: [
        "NoSQL não significa “sem SQL”, e sim “não apenas SQL”.",
        "Decore os 4 modelos com um exemplo de cada: Redis, MongoDB, Neo4j, Cassandra.",
        "NoSQL = escalabilidade **horizontal** e alta disponibilidade.",
        "NoSQL não substitui o relacional: eles convivem (persistência poliglota)."
      ],
      flash: [
        ["Os 4 modelos NoSQL", "Chave-valor, Documentos (JSON), Grafos e Orientado a Colunas."],
        ["NoSQL significa…", "Not only SQL — “não apenas SQL”."],
        ["Escalabilidade horizontal é…", "Adicionar mais servidores (scale-out)."],
        ["Qual modelo NoSQL é ideal para redes sociais e fraudes?", "Grafos (ex.: Neo4j)."],
        ["Os 3 Vs do Big Data", "Volume, Velocidade e Variedade."]
      ],
      quiz: [
        { q: "O MongoDB é um exemplo de banco NoSQL do tipo:", o: ["Grafo", "Chave-valor", "Documento", "Colunar"], c: 2, e: "MongoDB armazena documentos JSON/BSON." },
        { q: "A principal forma de crescimento dos bancos NoSQL é:", o: ["Escalabilidade vertical", "Escalabilidade horizontal", "Normalização", "Indexação"], c: 1, e: "NoSQL distribui os dados em vários nós (scale-out)." },
        { q: "Para identificar redes de fraude entre contas bancárias, o modelo mais indicado é:", o: ["Grafos", "Chave-valor", "Colunar", "Relacional"], c: 0, e: "Grafos modelam relações (arestas) entre entidades (nós)." },
        { q: "O modelo de consistência típico do NoSQL é:", o: ["ACID", "BASE", "OLAP", "ETL"], c: 1, e: "BASE: basicamente disponível, estado suave, consistência eventual." }
      ]
    },

    /* ---------------- TEMA 4 ---------------- */
    {
      id: "t4", num: 4, grupo: "s1",
      titulo: "Banco de Dados Dimensional",
      sub: "OLAP, fatos, dimensões, estrela e floco de neve",
      frase: "Modelo pensado para **análise (OLAP)**: uma **tabela fato** com os números do negócio cercada de **tabelas dimensão** que dão o contexto (quem, quando, onde, o quê).",
      resumo: [
        "Popularizado por **Ralph Kimball**, o modelo dimensional organiza os dados para responder perguntas gerenciais rápido: “quanto vendemos por região, por mês, por produto?”. Ele aceita **redundância** (desnormaliza) em troca de **velocidade de consulta**.",
        "É a base do **cubo OLAP** e dos Data Warehouses / Data Marts."
      ],
      funcoes: [
        ["Medir o negócio", "Tabela fato guarda métricas numéricas: valor vendido, quantidade, custo."],
        ["Dar contexto", "Tabelas dimensão descrevem: Tempo, Produto, Cliente, Loja, Vendedor."],
        ["Consultas analíticas rápidas", "Menos junções que o modelo normalizado → relatórios ágeis."],
        ["Navegar pelos dados (OLAP)", "Drill-down, roll-up, slice, dice e pivot."],
        ["Manter histórico", "Dimensão Tempo permite comparar períodos e tendências."]
      ],
      conceitos: [
        ["Tabela Fato", "Centro do modelo; contém **métricas** (números) e as FKs para as dimensões."],
        ["Tabela Dimensão", "Contém **descrições/contexto** (atributos textuais) usados para filtrar e agrupar."],
        ["Granularidade (grão)", "Nível de detalhe de cada linha da fato (ex.: um item de venda por dia)."],
        ["Esquema Estrela (Star)", "Fato no centro e dimensões **desnormalizadas** ligadas diretamente a ela."],
        ["Floco de Neve (Snowflake)", "Dimensões **normalizadas**, divididas em subtabelas (Produto → Categoria → Departamento)."],
        ["Drill-down / Roll-up", "Descer ao detalhe (ano → mês → dia) / subir ao resumo (dia → mês → ano)."],
        ["Slice / Dice", "Slice: fatiar por um valor de uma dimensão (só 2025). Dice: subcubo com filtros em várias dimensões."],
        ["Pivot", "Girar o cubo: trocar linhas por colunas para ver outro ângulo."]
      ],
      tabela: {
        titulo: "Estrela × Floco de Neve",
        cols: ["Critério", "Estrela (Star)", "Floco de Neve (Snowflake)"],
        rows: [
          ["Dimensões", "Desnormalizadas (uma tabela cada)", "Normalizadas (várias subtabelas)"],
          ["Junções (joins)", "Poucas → consulta mais rápida", "Mais joins → consulta mais lenta"],
          ["Espaço / redundância", "Mais redundância", "Menos redundância, economiza espaço"],
          ["Facilidade", "Simples de entender", "Mais complexo"]
        ]
      },
      exemplo: {
        titulo: "Na prática: rede de farmácias",
        texto: "**Fato_Vendas** (quantidade, valor, desconto) ligada a **Dim_Tempo** (dia, mês, ano), **Dim_Produto** (nome, categoria), **Dim_Loja** (cidade, estado) e **Dim_Cliente**. Pergunta: “quanto vendemos de genéricos em SP no 2º trimestre?” → um slice/dice direto no cubo."
      },
      atencao: [
        "Fato = números (métricas). Dimensão = contexto (texto).",
        "Estrela = desnormalizada e rápida; floco de neve = normalizada.",
        "Dimensional serve para OLAP (análise), não para OLTP (operação).",
        "Drill-down desce ao detalhe; roll-up sobe ao resumo."
      ],
      flash: [
        ["O que fica na tabela fato?", "As métricas numéricas do negócio e as chaves para as dimensões."],
        ["O que fica na tabela dimensão?", "Os atributos descritivos (contexto): tempo, produto, cliente, local."],
        ["Diferença entre estrela e floco de neve", "Na estrela as dimensões são desnormalizadas; no floco de neve são normalizadas em subtabelas."],
        ["Drill-down", "Detalhar: ir do resumo para o detalhe (ano → mês → dia)."],
        ["Granularidade", "O nível de detalhe de cada linha da tabela fato."]
      ],
      quiz: [
        { q: "No modelo dimensional, “valor total da venda” é armazenado na:", o: ["Dimensão Produto", "Tabela Fato", "Dimensão Tempo", "Tabela de staging"], c: 1, e: "Métricas numéricas ficam na tabela fato." },
        { q: "O esquema em que as dimensões são normalizadas em subtabelas é o:", o: ["Estrela", "Floco de neve", "Relacional OLTP", "Chave-valor"], c: 1, e: "Snowflake normaliza as dimensões." },
        { q: "Passar de “vendas por ano” para “vendas por mês” é uma operação de:", o: ["Roll-up", "Drill-down", "Pivot", "Slice"], c: 1, e: "Drill-down = descer para mais detalhe." },
        { q: "O modelo dimensional é otimizado principalmente para:", o: ["Gravar transações", "Consultas analíticas (OLAP)", "Garantir ACID", "Guardar arquivos brutos"], c: 1, e: "Ele existe para análise rápida." }
      ]
    },

    /* ---------------- TEMA 1 ---------------- */
    {
      id: "t1", num: 1, grupo: "s2",
      titulo: "BI, Analytics e Gestão de Dados",
      sub: "O papel do ETL e do Data Warehouse",
      frase: "BI transforma **dados em informação para decidir**; o **ETL** é o processo que extrai, limpa e carrega esses dados num **Data Warehouse**.",
      resumo: [
        "**Business Intelligence (BI)** é o conjunto de processos, tecnologias e pessoas que coleta, organiza, analisa e apresenta dados para apoiar decisões. O termo foi popularizado por **Howard Dresner (Gartner, 1989)**. **Analytics** vai além: busca explicar, prever e recomendar.",
        "O coração técnico é o **ETL**: os dados vêm de fontes **heterogêneas** (ERP, planilhas, CRM, sistemas legados), passam por **higienização** e são carregados no DW. Com os dados integrados e limpos, os relatórios ficam rápidos e confiáveis — isso gera **agilidade e melhor desempenho organizacional**."
      ],
      funcoes: [
        ["Extrair (E)", "Coletar dados de fontes diferentes: ERP, CRM, planilhas, APIs, bancos legados."],
        ["Transformar (T)", "Limpar e padronizar: remover duplicados, corrigir formatos, converter unidades, aplicar regras."],
        ["Carregar (L)", "Gravar os dados prontos no Data Warehouse, normalmente em cargas periódicas."],
        ["Analisar e visualizar", "Dashboards, relatórios e KPIs (Power BI, Tableau, Looker)."],
        ["Apoiar a decisão", "Mostrar a verdade única da empresa para todos os níveis gerenciais."]
      ],
      conceitos: [
        ["Business Intelligence", "Transformar dados em informação e conhecimento para decisão."],
        ["Analytics descritivo", "O que aconteceu? (relatórios, dashboards)."],
        ["Analytics diagnóstico", "Por que aconteceu? (análise de causas, drill-down)."],
        ["Analytics preditivo", "O que vai acontecer? (estatística, machine learning)."],
        ["Analytics prescritivo", "O que devemos fazer? (otimização, recomendação)."],
        ["Fontes heterogêneas", "Sistemas diferentes, formatos diferentes (SQL, Excel, CSV, API)."],
        ["Higienização (data cleansing)", "Correção de erros, duplicidades e inconsistências."],
        ["ELT", "Variação moderna: carrega bruto e transforma depois (comum em Data Lakes e nuvem)."]
      ],
      tabela: {
        titulo: "As 3 etapas do ETL",
        cols: ["Etapa", "O que faz", "Exemplo"],
        rows: [
          ["Extract", "Busca os dados nas origens", "Puxar vendas do ERP e metas de uma planilha"],
          ["Transform", "Limpa, padroniza, integra", "“SP”, “S.Paulo” e “São Paulo” viram “SP”; CNPJs duplicados removidos"],
          ["Load", "Grava no destino", "Carga diária no Data Warehouse às 2h da manhã"]
        ]
      },
      exemplo: {
        titulo: "Na prática: escritório contábil",
        texto: "O escritório tem dados no Domínio, no Bitrix e em planilhas. O ETL extrai os três, padroniza CNPJs e competências e carrega num DW. O dashboard mostra, por cliente, entregas atrasadas e honorários — sem ninguém juntar planilhas na mão."
      },
      atencao: [
        "ETL = **E**xtract, **T**ransform, **L**oad — nessa ordem.",
        "A etapa de **transformação** é onde ocorre a limpeza/higienização.",
        "BI olha mais o passado/presente (descritivo); analytics avançado prevê e prescreve.",
        "O ganho do DW é agilidade: dados integrados e prontos para consulta."
      ],
      flash: [
        ["O que significa ETL?", "Extract, Transform, Load — extrair, transformar e carregar."],
        ["Em qual etapa do ETL ocorre a limpeza dos dados?", "Transform (transformação)."],
        ["Os 4 tipos de analytics", "Descritivo, diagnóstico, preditivo e prescritivo."],
        ["Quem popularizou o termo BI?", "Howard Dresner, do Gartner, em 1989."],
        ["Por que o DW melhora o desempenho organizacional?", "Integra e organiza os dados, dando respostas rápidas e confiáveis aos gestores."]
      ],
      quiz: [
        { q: "Remover registros duplicados e padronizar datas acontece na etapa de:", o: ["Extração", "Transformação", "Carga", "Visualização"], c: 1, e: "Transform = limpeza e padronização." },
        { q: "“O que vai acontecer com as vendas no próximo trimestre?” é uma pergunta de analytics:", o: ["Descritivo", "Diagnóstico", "Preditivo", "Prescritivo"], c: 2, e: "Prever o futuro = preditivo." },
        { q: "Fontes heterogêneas significa que os dados vêm de:", o: ["Um único sistema", "Sistemas e formatos diferentes", "Apenas da nuvem", "Apenas de planilhas"], c: 1, e: "Heterogêneo = origens e formatos variados." },
        { q: "No ELT, a transformação ocorre:", o: ["Antes da extração", "Depois da carga no destino", "Antes da carga", "Nunca"], c: 1, e: "ELT carrega bruto e transforma dentro do destino." }
      ]
    },

    /* ---------------- TEMA 5 ---------------- */
    {
      id: "t5", num: 5, grupo: "s2",
      titulo: "Data Lake",
      sub: "Dados brutos, de todos os tipos, para Ciência de Dados",
      frase: "Repositório que guarda **grandes volumes de dados em estado bruto**, de qualquer formato, para serem estruturados **só na hora do uso**.",
      resumo: [
        "O termo foi cunhado por **James Dixon (Pentaho, 2010)**. Diferente do DW, o Data Lake **não exige esquema antes** de gravar: aplica o **schema-on-read** (a estrutura é definida na leitura).",
        "Aceita dados **estruturados** (tabelas), **semiestruturados** (JSON, XML, logs) e **não estruturados** (PDFs, imagens, áudios, vídeos, e-mails). É muito usado por **cientistas de dados** para machine learning. Sem governança vira um **Data Swamp** (pântano de dados)."
      ],
      funcoes: [
        ["Armazenar tudo, barato", "Guarda volumes enormes em armazenamento de baixo custo (ex.: nuvem — S3, Azure Data Lake)."],
        ["Preservar o dado original", "Mantém o dado bruto, permitindo novas análises no futuro."],
        ["Aceitar qualquer formato", "Estruturado, semiestruturado e não estruturado."],
        ["Alimentar Ciência de Dados", "Base para machine learning, IA e análises exploratórias."],
        ["Servir de área de pouso", "Pode alimentar o Data Warehouse depois (ELT)."]
      ],
      conceitos: [
        ["Schema-on-read", "A estrutura é aplicada na leitura (Data Lake)."],
        ["Schema-on-write", "A estrutura é definida antes de gravar (DW e bancos relacionais)."],
        ["Dado estruturado", "Organizado em linhas e colunas (tabelas)."],
        ["Dado semiestruturado", "Tem alguma organização, mas flexível (JSON, XML, CSV, logs)."],
        ["Dado não estruturado", "Sem formato definido (texto livre, imagem, áudio, vídeo)."],
        ["Data Swamp", "Data Lake sem governança/catalogação: ninguém acha nem confia nos dados."],
        ["Data Lakehouse", "Arquitetura que une a flexibilidade do lake com a organização do warehouse."]
      ],
      tabela: {
        titulo: "Data Lake × Data Warehouse",
        cols: ["Critério", "Data Lake", "Data Warehouse"],
        rows: [
          ["Dados", "Brutos, qualquer formato", "Tratados, estruturados"],
          ["Esquema", "Schema-on-read", "Schema-on-write"],
          ["Usuários", "Cientistas de dados", "Gestores e analistas de negócio"],
          ["Custo de armazenamento", "Baixo", "Mais alto"],
          ["Processo típico", "ELT", "ETL"]
        ]
      },
      exemplo: {
        titulo: "Na prática: e-commerce",
        texto: "A loja joga no Data Lake os cliques do site, avaliações escritas, fotos de produtos e conversas do chat. Os cientistas de dados usam isso para treinar um modelo de recomendação (“quem comprou X também comprou Y”)."
      },
      atencao: [
        "Lake = **bruto** + **schema-on-read**. DW = **tratado** + **schema-on-write**.",
        "Lake aceita os 3 tipos: estruturado, semi e não estruturado.",
        "Lake sem governança = Data Swamp.",
        "Público principal do lake: cientistas de dados."
      ],
      flash: [
        ["O que é schema-on-read?", "A estrutura dos dados só é definida no momento da leitura/uso."],
        ["Que tipos de dados o Data Lake aceita?", "Estruturados, semiestruturados e não estruturados."],
        ["O que é Data Swamp?", "Um Data Lake desorganizado, sem governança, onde os dados não são confiáveis."],
        ["Quem é o principal usuário do Data Lake?", "Cientistas de dados."],
        ["Exemplo de dado semiestruturado", "JSON, XML, arquivos de log."]
      ],
      quiz: [
        { q: "A principal característica do Data Lake é armazenar dados:", o: ["Já agregados", "Em estado bruto", "Somente em tabelas", "Apenas de um departamento"], c: 1, e: "Data Lake guarda o dado original, bruto." },
        { q: "Um arquivo JSON é classificado como dado:", o: ["Estruturado", "Semiestruturado", "Não estruturado", "Dimensional"], c: 1, e: "JSON tem marcação, mas estrutura flexível." },
        { q: "Um Data Lake sem catálogo e sem governança tende a virar um:", o: ["Data Mart", "Data Swamp", "Data Warehouse", "Cubo OLAP"], c: 1, e: "Data Swamp = pântano de dados." },
        { q: "No Data Lake, a estrutura dos dados é definida:", o: ["Antes da gravação", "Na leitura", "Pelo ETL obrigatório", "Pela ANPD"], c: 1, e: "Schema-on-read." }
      ]
    },

    /* ---------------- TEMA 6 ---------------- */
    {
      id: "t6", num: 6, grupo: "s2",
      titulo: "Data Warehouse",
      sub: "Arquitetura centralizada, 4 características, OLTP × OLAP",
      frase: "**Armazém central** de dados da empresa, integrado e histórico, feito para **análise e apoio à decisão**, separado dos sistemas operacionais.",
      resumo: [
        "Definição clássica de **Bill Inmon** (o “pai do DW”): uma coleção de dados **orientada a assuntos, integrada, não volátil e variante no tempo**, que apoia o processo de decisão gerencial.",
        "Arquitetura típica: **fontes** (ERP, CRM, planilhas) → **ETL / staging** → **DW central** → **Data Marts** → **ferramentas de BI**. Inmon defende o DW corporativo primeiro (top-down); **Kimball** defende começar pelos Data Marts dimensionais (bottom-up)."
      ],
      funcoes: [
        ["Centralizar", "Uma única fonte da verdade para toda a empresa."],
        ["Integrar", "Unifica dados de sistemas diferentes com padrões comuns."],
        ["Guardar histórico", "Mantém anos de dados para comparar e ver tendências."],
        ["Separar análise da operação", "Consultas pesadas não deixam o ERP lento."],
        ["Apoiar decisões táticas e estratégicas", "Base para BI, dashboards, SAD e mineração de dados."]
      ],
      conceitos: [
        ["Orientado a assuntos", "Organizado por temas do negócio (vendas, clientes, finanças), não por sistema ou processo."],
        ["Integrado", "Dados de várias fontes padronizados (mesmos códigos, unidades e formatos)."],
        ["Não volátil", "Os dados são carregados e consultados, mas **não são alterados nem apagados** no dia a dia."],
        ["Variante no tempo", "Todo dado tem referência temporal; guarda o histórico (fotografias ao longo do tempo)."],
        ["OLTP", "Online Transaction Processing: operacional, muitas transações curtas, dados atuais."],
        ["OLAP", "Online Analytical Processing: analítico, consultas complexas, dados históricos."],
        ["Staging area", "Área intermediária onde os dados são tratados antes da carga no DW."]
      ],
      tabela: {
        titulo: "OLTP × OLAP",
        cols: ["Critério", "OLTP (operacional)", "OLAP (analítico / DW)"],
        rows: [
          ["Objetivo", "Registrar o dia a dia", "Analisar e decidir"],
          ["Operações", "Inserir, alterar, excluir", "Consultar (leitura)"],
          ["Dados", "Atuais, detalhados", "Históricos, integrados, resumidos"],
          ["Usuários", "Operadores, caixas, atendentes", "Gestores, analistas, diretoria"],
          ["Modelo", "Relacional normalizado", "Dimensional (estrela/floco)"],
          ["Volume por consulta", "Poucos registros", "Milhões de registros"]
        ]
      },
      exemplo: {
        titulo: "Na prática: varejista",
        texto: "O PDV (OLTP) grava cada venda. À noite o ETL leva os dados ao DW. Na segunda-feira, a diretoria compara as vendas de Black Friday dos últimos 5 anos por região — consulta pesada que, se rodasse no PDV, travaria os caixas."
      },
      atencao: [
        "As 4 características (Inmon): **orientado a assuntos, integrado, não volátil e variante no tempo** — cai quase sempre.",
        "Não volátil = não se altera/apaga dado no DW; só se carrega e consulta.",
        "OLTP = operação; OLAP = análise.",
        "Inmon = top-down (DW primeiro). Kimball = bottom-up (Data Marts primeiro)."
      ],
      flash: [
        ["4 características do DW segundo Inmon", "Orientado a assuntos, integrado, não volátil e variante no tempo."],
        ["O que significa “não volátil”?", "Os dados não são alterados nem excluídos; apenas carregados e consultados."],
        ["O que significa “variante no tempo”?", "Os dados guardam referência temporal e histórico."],
        ["OLTP × OLAP em uma frase", "OLTP registra transações do dia a dia; OLAP analisa dados históricos para decisão."],
        ["Quem é o “pai do Data Warehouse”?", "Bill Inmon."]
      ],
      quiz: [
        { q: "A característica do DW que indica que os dados não são alterados após a carga é:", o: ["Integrado", "Não volátil", "Orientado a assuntos", "Variante no tempo"], c: 1, e: "Não volátil = carga e consulta, sem atualização/exclusão." },
        { q: "Organizar o DW por “Clientes”, “Vendas” e “Finanças” corresponde a ser:", o: ["Orientado a assuntos", "Variante no tempo", "Volátil", "Transacional"], c: 0, e: "Organizado por temas do negócio." },
        { q: "Qual afirmação descreve OLTP?", o: ["Consultas complexas sobre histórico", "Muitas transações curtas do dia a dia", "Modelo em estrela", "Uso exclusivo da diretoria"], c: 1, e: "OLTP = operacional." },
        { q: "A abordagem que constrói primeiro o DW corporativo e depois os Data Marts é a de:", o: ["Kimball (bottom-up)", "Inmon (top-down)", "Codd", "Dresner"], c: 1, e: "Inmon é top-down." }
      ]
    },

    /* ---------------- TEMA 7 ---------------- */
    {
      id: "t7", num: 7, grupo: "s2",
      titulo: "Data Mart",
      sub: "O recorte departamental do Data Warehouse",
      frase: "**Subconjunto especializado** do Data Warehouse voltado a **um departamento** (Finanças, Marketing, Vendas), com menor escopo, custo e prazo.",
      resumo: [
        "Se o DW é o “supermercado” da empresa, o Data Mart é a “loja de bairro” de um setor: contém só os dados de que aquela área precisa, já no formato que ela usa.",
        "Pode ser **dependente** (alimentado pelo DW central — abordagem Inmon) ou **independente** (construído direto das fontes — abordagem Kimball, que depois integra vários marts pelo “barramento” de dimensões comuns)."
      ],
      funcoes: [
        ["Atender um departamento", "Dados focados nas perguntas de uma área (ex.: Finanças)."],
        ["Entregar rápido", "Escopo menor → implantação em semanas, não anos."],
        ["Custar menos", "Menos dados, menos infraestrutura, menos pessoas."],
        ["Melhorar desempenho", "Consultas mais rápidas por ter menos volume."],
        ["Dar autonomia ao usuário", "A área entende e usa os próprios dados."]
      ],
      conceitos: [
        ["Data Mart dependente", "Recebe os dados do DW central (top-down / Inmon). Garante consistência."],
        ["Data Mart independente", "Construído direto das fontes, sem DW (bottom-up / Kimball). Risco de “ilhas” de dados."],
        ["Data Mart híbrido", "Combina dados do DW com outras fontes."],
        ["Escopo", "DW = empresa toda; Data Mart = um assunto/departamento."]
      ],
      tabela: {
        titulo: "Data Warehouse × Data Mart",
        cols: ["Critério", "Data Warehouse", "Data Mart"],
        rows: [
          ["Escopo", "Toda a empresa", "Um departamento/assunto"],
          ["Volume", "Muito grande (TB)", "Menor (GB)"],
          ["Tempo de implantação", "Meses a anos", "Semanas a meses"],
          ["Custo", "Alto", "Menor"],
          ["Fontes", "Muitas", "Poucas (ou o próprio DW)"]
        ]
      },
      exemplo: {
        titulo: "Na prática: departamento contábil",
        texto: "Do DW da empresa sai um **Data Mart Contábil** só com balancetes, lançamentos e indicadores por cliente e competência. A equipe contábil consulta rápido, sem se perder nos dados de Marketing ou RH."
      },
      atencao: [
        "Data Mart = **subconjunto** do DW por **departamento**.",
        "Vantagens: menor escopo, custo, prazo e mais desempenho.",
        "Dependente vem do DW; independente vem direto das fontes.",
        "Muitos marts independentes sem padrão = silos de informação."
      ],
      flash: [
        ["Defina Data Mart", "Subconjunto do Data Warehouse focado em um departamento ou assunto."],
        ["Data Mart dependente × independente", "Dependente é alimentado pelo DW; independente é montado direto das fontes."],
        ["Vantagens do Data Mart", "Menor escopo, custo e prazo; consultas mais rápidas; foco no usuário da área."],
        ["Exemplos de Data Marts", "Finanças, Marketing, Vendas, RH, Contábil."]
      ],
      quiz: [
        { q: "Um Data Mart é melhor definido como:", o: ["Um Data Lake menor", "Um subconjunto do DW voltado a um departamento", "Um banco OLTP", "Uma ferramenta de visualização"], c: 1, e: "É o recorte departamental do DW." },
        { q: "Um Data Mart construído diretamente das fontes, sem DW central, é:", o: ["Dependente", "Independente", "Volátil", "Normalizado"], c: 1, e: "Independente = bottom-up, sem DW antes." },
        { q: "Qual NÃO é vantagem típica de um Data Mart?", o: ["Menor custo", "Implantação mais rápida", "Visão integrada de toda a empresa", "Consultas mais ágeis"], c: 2, e: "Visão integrada da empresa toda é papel do DW." }
      ]
    },

    /* ---------------- TEMA 9 ---------------- */
    {
      id: "t9", num: 9, grupo: "s3",
      titulo: "Sistemas de Apoio à Decisão (SAD / DSS)",
      sub: "Paradigma DDM, ciclo de processamento e simulações",
      frase: "Sistema **interativo** que combina **dados, modelos e o julgamento do gestor** para resolver problemas **semiestruturados e não estruturados** em cenários de incerteza.",
      resumo: [
        "O SAD (Decision Support System) **apoia, não substitui** o decisor. É usado no nível **tático e estratégico**, quando não existe uma regra pronta (problemas semiestruturados ou não estruturados) e o gestor precisa testar alternativas.",
        "Sua arquitetura é o **paradigma DDM** (Diálogo–Dados–Modelos), atribuído a **Sprague** e coautores (Sprague & Carlson; Sprague & Watson). O processo decisório que ele apoia segue as fases de **Herbert Simon**: inteligência → concepção (design) → escolha → implementação."
      ],
      funcoes: [
        ["Diálogo (interface)", "Interface amigável: o usuário pergunta, ajusta parâmetros e vê gráficos sem precisar programar."],
        ["Dados (BD / SGBD)", "Base de dados internos e externos gerenciada por um SGBD — pode vir do DW."],
        ["Modelos (BM / SGBM)", "Base de modelos matemáticos, estatísticos e financeiros gerida por um SGBM (sistema gerenciador de base de modelos)."],
        ["Simular cenários", "What-if, goal-seeking e análise de sensibilidade."],
        ["Alertar e sintetizar", "Gera alertas preventivos, relatórios de cenários e recomendações."]
      ],
      conceitos: [
        ["Problema estruturado", "Rotineiro, com regra conhecida (ex.: calcular folha). Resolvido por sistemas transacionais."],
        ["Problema semiestruturado", "Parte tem regra, parte depende de julgamento (ex.: definir preço, orçamento). Foco do SAD."],
        ["Problema não estruturado", "Novo, sem regra (ex.: entrar em novo mercado). SAD apoia com cenários."],
        ["Paradigma DDM", "Diálogo (interface) + Dados (BD/SGBD) + Modelos (BM/SGBM)."],
        ["What-if (E se…?)", "Altera uma entrada e observa o resultado. “E se o custo subir 10%?”"],
        ["Goal-seeking (busca de metas)", "Fixa o resultado desejado e descobre a entrada necessária. “Que preço preciso para ter 20% de margem?”"],
        ["Análise de sensibilidade", "Mede quanto o resultado muda quando uma variável varia — mostra as variáveis críticas."],
        ["Fases de Simon", "Inteligência (achar o problema), Concepção (gerar alternativas), Escolha (decidir) e Implementação."]
      ],
      tabela: {
        titulo: "Ciclo de processamento do SAD",
        cols: ["Fase", "O que acontece"],
        rows: [
          ["1. Entrada", "Definição do problema e objetivos estratégicos; criação de strings de busca; critérios de qualificação dos dados."],
          ["2. Processamento", "Condução das consultas; execução dos algoritmos/modelos; análise dos resultados; documentação."],
          ["3. Saída", "Alertas preventivos; síntese de resultados; relatórios de cenários; modelos teóricos."]
        ]
      },
      exemplo: {
        titulo: "Na prática: what-if × goal-seeking",
        texto: "Uma empresa vende a R$ 100 com custo de R$ 70 (margem 30%). **What-if:** “e se o custo subir 10%?” → custo R$ 77, margem cai para 23%. **Goal-seeking:** “com custo de R$ 77, qual preço dá 30% de margem?” → preço = 77 ÷ 0,70 = **R$ 110**. No Excel, isso é a ferramenta **Atingir Meta**. Teste no simulador abaixo."
      },
      ferramenta: "simulador-sad",
      atencao: [
        "SAD **apoia** a decisão, não decide sozinho — o julgamento humano é parte do sistema.",
        "DDM = **D**iálogo, **D**ados, **M**odelos. BD/SGBD é dos dados; BM/SGBM é dos modelos.",
        "What-if muda a **entrada** e vê a saída; goal-seeking fixa a **saída** e descobre a entrada.",
        "Foco: problemas **semiestruturados e não estruturados**, níveis tático e estratégico."
      ],
      flash: [
        ["O que é o paradigma DDM?", "Arquitetura do SAD: Diálogo (interface), Dados (BD/SGBD) e Modelos (BM/SGBM)."],
        ["What-if", "Simulação que altera uma variável de entrada para ver o efeito no resultado."],
        ["Goal-seeking", "Busca de metas: define o resultado desejado e calcula a entrada necessária."],
        ["Para que tipo de problema serve o SAD?", "Semiestruturados e não estruturados, nos níveis tático e estratégico."],
        ["As 3 fases do ciclo de processamento", "Entrada, Processamento e Saída."],
        ["O que é o SGBM?", "Sistema Gerenciador da Base de Modelos — administra os modelos quantitativos do SAD."]
      ],
      quiz: [
        { q: "“Qual volume de vendas preciso para lucrar R$ 50 mil?” é uma análise de:", o: ["What-if", "Goal-seeking", "Drill-down", "ETL"], c: 1, e: "Fixa a meta (lucro) e busca a entrada (volume)." },
        { q: "No paradigma DDM, o componente responsável pela interface com o usuário é:", o: ["Dados", "Modelos", "Diálogo", "SGBD"], c: 2, e: "Diálogo = interface." },
        { q: "O SAD é mais indicado para problemas:", o: ["Estruturados e rotineiros", "Semiestruturados e não estruturados", "Apenas operacionais", "Apenas de cadastro"], c: 1, e: "Onde há incerteza e julgamento humano." },
        { q: "“E se o dólar subir 15%, o que acontece com o custo?” é:", o: ["Goal-seeking", "What-if", "Roll-up", "Normalização"], c: 1, e: "Altera a entrada e observa a saída." },
        { q: "Alertas preventivos e relatórios de cenários pertencem à fase de:", o: ["Entrada", "Processamento", "Saída", "Carga"], c: 2, e: "São produtos (saídas) do SAD." }
      ]
    },

    /* ---------------- TEMA 8 ---------------- */
    {
      id: "t8", num: 8, grupo: "s4",
      titulo: "LGPD — Lei Geral de Proteção de Dados",
      sub: "Princípios, agentes, ROPA, pequeno porte e incidentes",
      frase: "A **Lei 13.709/2018** regula o tratamento de **dados pessoais** no Brasil, protegendo a privacidade do titular e definindo deveres de quem trata os dados.",
      resumo: [
        "Sancionada em 2018 e em vigor desde **setembro de 2020** (sanções a partir de **agosto de 2021**). Vale para qualquer tratamento de dados pessoais — físico ou digital — feito por empresas e pelo poder público. A fiscalização é da **ANPD** (Autoridade Nacional de Proteção de Dados).",
        "Todo tratamento precisa de uma **base legal** (são 10, como consentimento, cumprimento de obrigação legal, execução de contrato, legítimo interesse) e deve respeitar os **princípios** do art. 6º."
      ],
      funcoes: [
        ["Proteger o titular", "Garante direitos: acesso, correção, exclusão, portabilidade, informação sobre compartilhamento."],
        ["Definir responsabilidades", "Controlador decide; operador executa; encarregado (DPO) é o canal de comunicação."],
        ["Exigir documentação", "Mapeamento de dados e Registro das Operações de Tratamento (ROPA)."],
        ["Prevenir e tratar incidentes", "Medidas de segurança e comunicação de incidentes à ANPD e aos titulares."],
        ["Punir irregularidades", "Advertência, multa de até 2% do faturamento (limite de R$ 50 milhões por infração), bloqueio e eliminação dos dados."]
      ],
      conceitos: [
        ["Titular", "Pessoa natural a quem os dados se referem (o dono dos dados)."],
        ["Controlador", "Quem **toma as decisões** sobre o tratamento (por quê e como). Ex.: a empresa que contrata."],
        ["Operador", "Quem **realiza o tratamento em nome do controlador**. Ex.: escritório contábil que processa a folha do cliente."],
        ["Encarregado (DPO)", "Canal de comunicação entre controlador, titulares e ANPD."],
        ["Dado pessoal", "Informação que identifica ou pode identificar uma pessoa (nome, CPF, e-mail, IP)."],
        ["Dado sensível", "Origem racial/étnica, religião, opinião política, filiação sindical, saúde, vida sexual, genético, biométrico."],
        ["Dado anonimizado", "Não permite identificar o titular; deixa de ser dado pessoal."],
        ["ROPA", "Registro das Operações de Tratamento (art. 37): documenta quais dados, finalidade, base legal, compartilhamento, prazo e segurança."],
        ["Mapeamento de dados", "Inventário de onde os dados entram, por onde passam, quem acessa e onde ficam — é a base do ROPA."]
      ],
      tabela: {
        titulo: "Os 10 princípios (art. 6º)",
        cols: ["Princípio", "Em uma frase"],
        rows: [
          ["Finalidade", "Tratar para propósito legítimo, específico e informado."],
          ["Adequação", "O tratamento deve combinar com a finalidade informada."],
          ["Necessidade", "Usar só o mínimo de dados necessário."],
          ["Livre acesso", "O titular consulta facilmente seus dados."],
          ["Qualidade dos dados", "Dados exatos, claros e atualizados."],
          ["Transparência", "Informações claras sobre o tratamento."],
          ["Segurança", "Medidas técnicas contra acessos indevidos e vazamentos."],
          ["Prevenção", "Evitar danos antes que ocorram."],
          ["Não discriminação", "Proibido usar dados para discriminar de forma ilícita ou abusiva."],
          ["Responsabilização e prestação de contas", "Demonstrar que cumpre a lei (accountability)."]
        ]
      },
      extra: {
        titulo: "Agentes de pequeno porte (Resolução CD/ANPD nº 2/2022)",
        itens: [
          "Vale para microempresas, empresas de pequeno porte, startups e afins (exceto quem faz tratamento de alto risco).",
          "**Dispensa de indicar encarregado (DPO)**, mas precisa disponibilizar um canal de comunicação com o titular.",
          "**ROPA simplificado** (modelo facilitado da ANPD).",
          "**Prazos em dobro** em vários procedimentos, inclusive comunicação de incidentes.",
          "Pode adotar **política simplificada de segurança da informação**."
        ]
      },
      extra2: {
        titulo: "Gestão de incidentes de segurança",
        itens: [
          "Incidente = acesso não autorizado, vazamento, perda ou destruição de dados pessoais.",
          "Se puder gerar **risco ou dano relevante** ao titular, comunicar à **ANPD e aos titulares** (Res. CD/ANPD nº 15/2024: **3 dias úteis**; pequeno porte: prazo em dobro).",
          "Passos: conter o incidente → avaliar o risco → comunicar → registrar e manter o registro → corrigir a causa."
        ]
      },
      exemplo: {
        titulo: "Na prática: escritório contábil",
        texto: "A empresa cliente é **controladora** dos dados dos funcionários dela; o escritório que processa a folha é **operador**. O escritório mapeia: quais dados recebe (CPF, salário, dependentes), para quê (folha e eSocial), base legal (cumprimento de obrigação legal), quem acessa e por quanto tempo guarda — isso vira o **ROPA**."
      },
      atencao: [
        "Controlador **decide**; operador **executa** em nome do controlador.",
        "Titular é sempre **pessoa natural** (física). Dados de empresa (CNPJ) não são dado pessoal.",
        "Dado sensível tem proteção reforçada — decore a lista.",
        "ROPA = Registro das Operações de Tratamento, previsto no art. 37.",
        "Multa: até 2% do faturamento, limitada a R$ 50 milhões por infração."
      ],
      flash: [
        ["Número e ano da LGPD", "Lei nº 13.709/2018."],
        ["Controlador × Operador", "Controlador decide sobre o tratamento; operador trata os dados em nome do controlador."],
        ["O que é o ROPA?", "Registro das Operações de Tratamento de dados pessoais (art. 37)."],
        ["O que é dado sensível?", "Origem racial/étnica, religião, opinião política, filiação sindical, saúde, vida sexual, genético ou biométrico."],
        ["Quem fiscaliza a LGPD?", "A ANPD — Autoridade Nacional de Proteção de Dados."],
        ["Principal flexibilização para pequeno porte", "Dispensa de DPO (com canal de comunicação), ROPA simplificado e prazos em dobro."]
      ],
      quiz: [
        { q: "Na LGPD, quem toma as decisões sobre o tratamento dos dados é o:", o: ["Operador", "Titular", "Controlador", "Encarregado"], c: 2, e: "Controlador decide; operador executa." },
        { q: "Qual destes é dado pessoal sensível?", o: ["E-mail", "Endereço", "Filiação sindical", "Telefone"], c: 2, e: "Filiação sindical está na lista de dados sensíveis." },
        { q: "O documento que registra as operações de tratamento é o:", o: ["DPIA", "ROPA", "SPED", "ECD"], c: 1, e: "ROPA (art. 37)." },
        { q: "O princípio que manda usar apenas o mínimo de dados necessários é:", o: ["Finalidade", "Necessidade", "Transparência", "Prevenção"], c: 1, e: "Necessidade = minimização." },
        { q: "Para agentes de pequeno porte, a ANPD permite:", o: ["Ignorar a LGPD", "Não indicar encarregado, mantendo canal de comunicação", "Vender dados livremente", "Não comunicar incidentes"], c: 1, e: "Resolução CD/ANPD nº 2/2022." }
      ]
    },

    /* ---------------- TEMA 10 ---------------- */
    {
      id: "t10", num: 10, grupo: "s4",
      titulo: "KPIs: Viabilidade Financeira e Fator Humano",
      sub: "Payback, ROI, VPL, IL, TIR e cultura analítica",
      frase: "Indicadores financeiros mostram **se o investimento em um SIG vale a pena**; o **fator humano** determina se ele vai dar resultado de verdade.",
      resumo: [
        "Implantar um SIG é um **investimento**: gasta-se agora (I₀) para ter benefícios futuros (redução de custos, ganho de produtividade, mais receita). Os modelos de **orçamento de capital** comparam esse gasto com os fluxos de caixa futuros.",
        "Mas tecnologia sozinha não basta: **capacitação, liderança e engajamento** — a **cultura orientada a dados** — são os principais determinantes de desempenho e agilidade."
      ],
      formulas: [
        ["Payback simples", "Payback = Investimento ÷ Fluxo de caixa anual", "Tempo para recuperar o investimento. Com fluxos diferentes, vá somando ano a ano até zerar. Quanto menor, melhor."],
        ["Payback descontado", "Igual ao simples, mas usando os fluxos trazidos a valor presente", "Considera o valor do dinheiro no tempo — sempre maior que o simples."],
        ["ROI", "ROI = (Ganho − Investimento) ÷ Investimento × 100", "Retorno percentual sobre o que foi investido. ROI > 0 = ganhou."],
        ["VPL", "VPL = Σ [FCₜ ÷ (1 + i)ᵗ] − I₀", "Valor Presente Líquido. VPL > 0 → viável (gera valor); VPL < 0 → inviável. i = TMA (taxa mínima de atratividade)."],
        ["IL", "IL = VP das entradas ÷ Investimento inicial", "Índice de Lucratividade. IL > 1 → viável; IL = 1 → indiferente; IL < 1 → inviável."],
        ["TIR", "Taxa que faz o VPL = 0", "Taxa Interna de Retorno. TIR > TMA → viável."]
      ],
      funcoes: [
        ["Justificar o investimento", "Mostra à diretoria, em números, que o SIG paga a si mesmo."],
        ["Comparar alternativas", "Escolher entre dois sistemas ou fornecedores."],
        ["Considerar o tempo e o risco", "VPL e TIR descontam o valor do dinheiro no tempo."],
        ["Acompanhar o resultado", "KPIs pós-implantação mostram se o ganho prometido aconteceu."],
        ["Valorizar as pessoas", "Treinamento, liderança e cultura analítica fazem o sistema gerar valor."]
      ],
      conceitos: [
        ["KPI", "Key Performance Indicator — indicador-chave de desempenho."],
        ["TMA", "Taxa Mínima de Atratividade: o mínimo que o investidor aceita ganhar (custo de oportunidade)."],
        ["Fluxo de caixa (FC)", "Entradas líquidas que o projeto gera em cada período."],
        ["Valor do dinheiro no tempo", "R$ 1 hoje vale mais que R$ 1 daqui a um ano."],
        ["Cultura analítica (data-driven)", "Decisões baseadas em dados, não em “achismo”."],
        ["Letramento em dados", "Capacidade das pessoas de ler, interpretar e questionar dados."],
        ["Resistência à mudança", "Principal barreira humana na implantação de sistemas; vencida com comunicação, treino e liderança."]
      ],
      tabela: {
        titulo: "Regras de decisão (resumo para a prova)",
        cols: ["Indicador", "Viável quando…", "Considera o tempo?"],
        rows: [
          ["Payback simples", "Menor que o prazo máximo aceito", "Não"],
          ["Payback descontado", "Menor que o prazo máximo aceito", "Sim"],
          ["ROI", "Maior que zero (e que o alvo)", "Não"],
          ["VPL", "Maior que zero", "Sim"],
          ["IL", "Maior que 1", "Sim"],
          ["TIR", "Maior que a TMA", "Sim"]
        ]
      },
      exemplo: {
        titulo: "Exemplo resolvido: implantação de um SIG",
        texto: "Investimento: **R$ 100.000**. Economia gerada: **R$ 40.000/ano por 3 anos**. TMA: **10% a.a.**\n• **Payback** = 100.000 ÷ 40.000 = **2,5 anos**.\n• **ROI** = (120.000 − 100.000) ÷ 100.000 = **20%**.\n• **VP das entradas** = 40.000/1,1 + 40.000/1,21 + 40.000/1,331 ≈ 36.364 + 33.058 + 30.053 = **R$ 99.474**.\n• **VPL** = 99.474 − 100.000 ≈ **−R$ 526** → inviável a 10%.\n• **IL** = 99.474 ÷ 100.000 ≈ **0,995** (< 1).\n• **TIR** ≈ **9,7%** (< TMA de 10%).\nRepare: ROI positivo não garante viabilidade — quem considera o tempo (VPL, IL, TIR) é que decide. Use a calculadora abaixo para testar."
      },
      ferramenta: "calc-kpi",
      atencao: [
        "VPL > 0, IL > 1 e TIR > TMA dizem a mesma coisa: o projeto é viável.",
        "Payback simples e ROI **ignoram** o valor do dinheiro no tempo.",
        "TIR é a taxa que **zera** o VPL.",
        "Fator humano: maturidade das pessoas e cultura de dados são o principal determinante do sucesso do SIG."
      ],
      flash: [
        ["Fórmula do ROI", "(Ganho − Investimento) ÷ Investimento × 100."],
        ["Quando o VPL indica viabilidade?", "Quando VPL > 0."],
        ["O que é a TIR?", "A taxa de desconto que torna o VPL igual a zero."],
        ["Quando o IL indica viabilidade?", "Quando IL > 1."],
        ["Diferença entre payback simples e descontado", "O descontado traz os fluxos a valor presente; o simples não."],
        ["O que é TMA?", "Taxa Mínima de Atratividade — o retorno mínimo exigido."],
        ["Por que o fator humano importa?", "Sem capacitação, liderança e cultura de dados, o sistema não gera o valor previsto."]
      ],
      quiz: [
        { q: "Um projeto custa R$ 60.000 e gera R$ 20.000 por ano. O payback simples é:", o: ["2 anos", "3 anos", "4 anos", "6 anos"], c: 1, e: "60.000 ÷ 20.000 = 3 anos." },
        { q: "Um projeto tem TIR de 14% e a TMA da empresa é 12%. Ele é:", o: ["Inviável", "Viável", "Indiferente", "Impossível avaliar"], c: 1, e: "TIR > TMA → viável." },
        { q: "Investimento de R$ 50.000 com ganho total de R$ 65.000. O ROI é:", o: ["15%", "23%", "30%", "130%"], c: 2, e: "(65.000 − 50.000) ÷ 50.000 = 0,30 = 30%." },
        { q: "Qual indicador NÃO considera o valor do dinheiro no tempo?", o: ["VPL", "TIR", "Payback simples", "IL"], c: 2, e: "Payback simples soma fluxos nominais." },
        { q: "IL = 1,25 significa que:", o: ["O projeto é inviável", "Cada R$ 1 investido retorna R$ 1,25 em valor presente", "A TIR é 25%", "O payback é 1,25 ano"], c: 1, e: "IL = VP das entradas ÷ investimento." }
      ]
    }
  ]
});
