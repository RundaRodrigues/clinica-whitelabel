/* ============================================================
   brand.js — ARQUIVO ÚNICO DE PERSONALIZAÇÃO (CLÍNICA MÉDICA)
   Edite somente este arquivo para entregar a um novo cliente.
   ============================================================ */

window.BRAND = {

  nome: 'Clínica Núcleo',
  sigla: 'CN',
  tagline: 'Medicina integrada, com tempo de consulta de verdade',

  seo: {
    titulo: 'Clínica Núcleo — Consultas e exames em Porto Alegre',
    descricao: 'Clínica multiespecialidades com consultas de 40 minutos, exames no local e agendamento on-line. Convênios e particular.'
  },

  tema: {
    'primary':       '#1d5fd6',
    'primary-hover': '#1a4fb3',
    'primary-soft':  '#e4edfd',
    'primary-tint':  '#f4f8ff',
    'accent':        '#12b39b',
    'accent-soft':   '#dcf5f0'
  },
  fontes: {
    display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    corpo:   "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },

  contato: {
    whatsapp: '+55 51 98888-0000',
    telefone: '+55 51 3222-0000',
    telefoneLabel: '(51) 3222-0000',
    whatsappLabel: '(51) 98888-0000',
    email: 'agendamento@clinicanucleo.com.br',
    endereco: 'Rua Vieira de Castro, 340 — Farroupilha, Porto Alegre/RS',
    enderecoCurto: 'Farroupilha, Porto Alegre',
    mensagemWhatsapp: 'Olá! Vim pelo site e gostaria de agendar uma consulta.',
    tituloMensagem: 'Novo agendamento pelo site'
  },

  redes: [
    { nome: 'Instagram', url: 'https://instagram.com/' },
    { nome: 'LinkedIn',  url: 'https://linkedin.com/' }
  ],

  ui: {
    pularConteudo: 'Pular para o conteúdo',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    erros: {
      obrigatorio: 'Preencha este campo para continuar.',
      telefone: 'Informe DDD e número, ex.: (51) 98888-0000.',
      email: 'Confira o e-mail, ex.: nome@dominio.com.br.',
      revisar: 'Confira os campos destacados abaixo.',
      enviadoWhatsapp: 'Abrimos o WhatsApp com a sua mensagem pronta. É só enviar.',
      enviadoEmail: 'Abrimos o seu e-mail com a mensagem pronta.'
    }
  },

  nav: {
    especialidades: 'Especialidades',
    comoFunciona: 'Como funciona',
    equipe: 'Corpo clínico',
    faq: 'Dúvidas',
    agendar: 'Agendar',
    cta: 'Agendar consulta'
  },

  hero: {
    eyebrow: 'Agendamento em até 48h',
    tituloHtml: 'Consulta que cabe na sua agenda, <em>sem consultório lotado</em>',
    subtitulo: 'Doze especialidades, exames no próprio prédio e consultas de 40 minutos. Você sai daqui com o próximo passo definido, não com mais dúvidas.',
    ctaPrimario: 'Agendar consulta',
    ctaSecundario: 'Ver especialidades',
    selos: ['Consulta de 40 minutos', 'Exames no local', 'Convênios e particular'],
    destaqueValor: '48h',
    destaqueLabel: 'Prazo médio de agendamento'
  },

  agendamento: {
    titulo: 'Agende em 30 segundos',
    subtitulo: 'Escolha a especialidade e o turno. Confirmamos por WhatsApp.',
    cta: 'Solicitar horário',
    labelNome: 'Nome completo',
    hintNome: 'Ex.: Maria Silva…',
    labelWhats: 'WhatsApp',
    hintWhats: 'Ex.: (51) 99999-0000',
    labelEspecialidade: 'Especialidade',
    labelTurno: 'Turno preferido',
    turnos: ['Manhã', 'Tarde', 'Primeiro horário livre'],
    nota: 'Abrimos o WhatsApp com o pedido pronto. Nenhum dado fica salvo no site.'
  },

  servicos: {
    eyebrow: 'Especialidades',
    titulo: 'Doze especialidades sob o mesmo teto',
    subtitulo: 'Quando o caso passa de uma área para outra, o encaminhamento acontece internamente e o prontuário segue junto.',
    especialidades: [
      'Clínica geral', 'Cardiologia', 'Dermatologia', 'Ortopedia',
      'Pediatria', 'Ginecologia', 'Neurologia', 'Oftalmologia', 'Outra'
    ],
    itens: [
      { icone: 'heart',       titulo: 'Cardiologia',    texto: 'Consulta, eletrocardiograma, ecocardiograma e teste ergométrico no mesmo dia.' },
      { icone: 'stethoscope', titulo: 'Clínica geral',  texto: 'Porta de entrada para check-up, sintomas difusos e acompanhamento crônico.' },
      { icone: 'brain',       titulo: 'Neurologia',     texto: 'Cefaleia, tontura, memória e distúrbios do sono.' },
      { icone: 'bone',        titulo: 'Ortopedia',      texto: 'Coluna, joelho e ombro, com raio-x e infiltração guiada.' },
      { icone: 'child',       titulo: 'Pediatria',      texto: 'Puericultura, vacinação e pronto-atendimento infantil agendado.' },
      { icone: 'female',      titulo: 'Ginecologia',    texto: 'Preventivo, ultrassom transvaginal e acompanhamento de gestação.' },
      { icone: 'skin',        titulo: 'Dermatologia',   texto: 'Mapeamento de pintas por dermatoscopia digital e pequenas cirurgias.' },
      { icone: 'eye',         titulo: 'Oftalmologia',   texto: 'Refração, fundo de olho e adaptação de lentes.' },
      { icone: 'lungs',       titulo: 'Pneumologia',    texto: 'Espirometria, asma, DPOC e avaliação pré-operatória.' },
      { icone: 'scan',        titulo: 'Endocrinologia', texto: 'Tireoide, diabetes e obesidade com bioimpedância.' },
      { icone: 'mind',        titulo: 'Psiquiatria',    texto: 'Ansiedade, depressão e TDAH adulto, com retorno em 30 dias.' },
      { icone: 'nutri',       titulo: 'Nutrição',       texto: 'Plano alimentar integrado ao acompanhamento médico.' }
    ]
  },

  passos: {
    eyebrow: 'Como funciona',
    titulo: 'Três passos, sem fila de telefone',
    itens: [
      { titulo: 'Você solicita o horário', texto: 'Pelo formulário ou WhatsApp, dizendo a especialidade e o turno que prefere.' },
      { titulo: 'Confirmamos em até 2h úteis', texto: 'Enviamos as opções de data, o valor e o que levar. Sem ligação insistente.' },
      { titulo: 'Você é atendido no horário', texto: 'Atraso médio de 8 minutos. Se passar de 20, a consulta sai com desconto.' }
    ]
  },

  convenios: {
    titulo: 'Convênios atendidos',
    itens: ['Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Cassi', 'IPE Saúde', 'Petrobras', 'Particular']
  },

  numeros: [
    { valor: '12',     label: 'especialidades' },
    { valor: '8 min',  label: 'atraso médio' },
    { valor: '31 mil', label: 'consultas por ano' },
    { valor: '4,8',    label: 'nota dos pacientes' }
  ],

  equipe: {
    eyebrow: 'Corpo clínico',
    titulo: 'Médicos que você continua vendo',
    subtitulo: 'Agenda fixa por profissional. O paciente escolhe com quem quer seguir o acompanhamento.',
    itens: [
      { nome: 'Dra. Helena Costa',  cargo: 'Cardiologia',   registro: 'CRM-RS 21344', foto: 'assets/equipe-1.svg' },
      { nome: 'Dr. Bruno Tavares',  cargo: 'Clínica geral', registro: 'CRM-RS 33210', foto: 'assets/equipe-2.svg' },
      { nome: 'Dra. Sofia Ribeiro', cargo: 'Dermatologia',  registro: 'CRM-RS 41288', foto: 'assets/equipe-3.svg' },
      { nome: 'Dr. Marcos Vieira',  cargo: 'Ortopedia',     registro: 'CRM-RS 19877', foto: 'assets/equipe-4.svg' }
    ]
  },

  depoimentos: {
    eyebrow: 'Pacientes',
    titulo: 'Avaliações reais de quem se consultou',
    itens: [
      { texto: 'Primeira vez que um médico olhou o meu exame anterior antes de pedir outro igual. Economizei tempo e dinheiro.', autor: 'Renato S.', detalhe: 'paciente de cardiologia', inicial: 'R' },
      { texto: 'Marquei pelo WhatsApp num domingo e na segunda de manhã já tinha três opções de horário.', autor: 'Cristina F.', detalhe: 'paciente de dermatologia', inicial: 'C' },
      { texto: 'Levei o meu filho e a pediatra passou 40 minutos com a gente. Não me senti empurrada para a saída.', autor: 'Aline B.', detalhe: 'mãe de paciente', inicial: 'A' }
    ]
  },

  horarios: {
    titulo: 'Horário de funcionamento',
    nota: 'Coleta de exames laboratoriais das 7h às 10h, sem agendamento.',
    itens: [
      { dia: 'Segunda a sexta', hora: '07h — 19h' },
      { dia: 'Sábado',          hora: '08h — 13h' },
      { dia: 'Domingo',         hora: 'Fechado' },
      { dia: 'Feriados',        hora: 'Fechado' }
    ]
  },

  faixaFinal: {
    titulo: 'Ainda em dúvida sobre qual especialidade procurar?',
    texto: 'Descreva o sintoma pelo WhatsApp. A recepção clínica orienta o encaminhamento sem custo.',
    cta: 'Falar com a recepção'
  },

  faq: {
    eyebrow: 'Dúvidas',
    titulo: 'O que os pacientes mais perguntam',
    itens: [
      { p: 'Atendem por convênio?', r: 'Sim. Trabalhamos com os principais convênios da região, listados acima. Confirme a cobertura da sua especialidade no agendamento.' },
      { p: 'Quanto custa a consulta particular?', r: 'O valor varia por especialidade e é informado antes da confirmação do horário, sempre por escrito. Não há taxa de retorno em 30 dias.' },
      { p: 'Preciso de encaminhamento para especialista?', r: 'Não para atendimento particular. Para convênio, depende das regras do seu plano — orientamos no agendamento.' },
      { p: 'Fazem exames no local?', r: 'Fazemos coleta laboratorial, eletrocardiograma, ecocardiograma, ultrassom, raio-x e espirometria no próprio prédio.' },
      { p: 'Como cancelo ou remarco?', r: 'Pelo mesmo WhatsApp, até 4 horas antes, sem custo. Isso libera o horário para outro paciente.' }
    ]
  },

  contatoSecao: {
    eyebrow: 'Agendamento',
    titulo: 'Solicite o seu horário',
    subtitulo: 'Respondemos em até 2 horas úteis com as opções de data e o valor.',
    chaves: { whatsapp: 'WhatsApp', telefone: 'Telefone', endereco: 'Endereço', email: 'E-mail' },
    form: {
      nome: 'Nome completo',
      nomeHint: 'Ex.: Maria Silva…',
      whats: 'WhatsApp',
      whatsHint: 'Ex.: (51) 99999-0000',
      especialidade: 'Especialidade',
      convenio: 'Convênio',
      convenios: ['Particular', 'Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'IPE Saúde', 'Outro'],
      mensagem: 'Motivo da consulta',
      mensagemHint: 'Ex.: dor no joelho há 3 semanas ao subir escada…',
      enviar: 'Solicitar agendamento',
      nota: 'Abrimos o WhatsApp com a sua solicitação pronta. Nenhum dado fica salvo no site.'
    }
  },

  rodape: {
    sobre: 'Clínica multiespecialidades com exames no local, agendamento por WhatsApp e consultas de 40 minutos.',
    aviso: 'Conteúdo informativo. Não substitui consulta, diagnóstico ou tratamento médico.',
    colNavegacao: 'Navegação',
    colContato: 'Contato',
    colOnde: 'Onde estamos',
    direitos: 'Todos os direitos reservados.'
  }
};
