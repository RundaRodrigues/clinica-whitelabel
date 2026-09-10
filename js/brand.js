/* ============================================================
   brand.js — ARQUIVO UNICO DE PERSONALIZACAO (CLINICA MEDICA)
   Edite somente este arquivo para entregar a um novo cliente.
   ============================================================ */

window.BRAND = {

  nome: 'Clinica Nucleo',
  sigla: 'CN',
  tagline: 'Medicina integrada, com tempo de consulta de verdade',

  seo: {
    titulo: 'Clinica Nucleo — Consultas e exames em Porto Alegre',
    descricao: 'Clinica multiespecialidades com consultas de 40 minutos, exames no local e agendamento online. Convenios e particular.'
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
    mensagemWhatsapp: 'Ola! Vim pelo site e gostaria de agendar uma consulta.',
    tituloMensagem: 'Novo agendamento pelo site'
  },

  redes: [
    { nome: 'Instagram', url: 'https://instagram.com/' },
    { nome: 'LinkedIn',  url: 'https://linkedin.com/' }
  ],

  hero: {
    eyebrow: 'Agendamento em ate 48h',
    tituloHtml: 'Consulta que cabe na sua agenda, <em>sem consultorio lotado</em>',
    subtitulo: 'Doze especialidades, exames no proprio predio e consultas de 40 minutos. Voce sai daqui com o proximo passo definido, nao com mais duvidas.',
    ctaPrimario: 'Agendar consulta',
    ctaSecundario: 'Ver especialidades',
    selos: ['Consulta de 40 minutos', 'Exames no local', 'Convenios e particular'],
    destaqueValor: '48h',
    destaqueLabel: 'Prazo medio de agendamento'
  },

  agendamento: {
    titulo: 'Agende em 30 segundos',
    subtitulo: 'Escolha a especialidade e o turno. Confirmamos por WhatsApp.',
    turnos: ['Manha', 'Tarde', 'Primeiro horario livre'],
    cta: 'Solicitar horario'
  },

  servicos: {
    eyebrow: 'Especialidades',
    titulo: 'Doze especialidades sob o mesmo teto',
    subtitulo: 'Quando o caso passa de uma area para outra, o encaminhamento acontece internamente e o prontuario segue junto.',
    itens: [
      { icone: 'heart',       titulo: 'Cardiologia',      texto: 'Consulta, eletro, ecocardiograma e teste ergometrico no mesmo dia.' },
      { icone: 'stethoscope', titulo: 'Clinica geral',    texto: 'Porta de entrada para check-up, sintomas difusos e acompanhamento cronico.' },
      { icone: 'brain',       titulo: 'Neurologia',       texto: 'Cefaleia, tontura, memoria e distúrbios do sono.' },
      { icone: 'bone',        titulo: 'Ortopedia',        texto: 'Coluna, joelho e ombro, com raio-x e infiltracao guiada.' },
      { icone: 'child',       titulo: 'Pediatria',        texto: 'Puericultura, vacinacao e pronto-atendimento infantil agendado.' },
      { icone: 'female',      titulo: 'Ginecologia',      texto: 'Preventivo, ultrassom transvaginal e acompanhamento de gestacao.' },
      { icone: 'skin',        titulo: 'Dermatologia',     texto: 'Mapeamento de pintas por dermatoscopia digital e pequenas cirurgias.' },
      { icone: 'eye',         titulo: 'Oftalmologia',     texto: 'Refracao, fundo de olho e adaptacao de lentes.' },
      { icone: 'lungs',       titulo: 'Pneumologia',      texto: 'Espirometria, asma, DPOC e avaliacao pre-operatoria.' },
      { icone: 'scan',        titulo: 'Endocrinologia',   texto: 'Tireoide, diabetes e obesidade com bioimpedancia.' },
      { icone: 'mind',        titulo: 'Psiquiatria',      texto: 'Ansiedade, depressao e TDAH adulto, com retorno em 30 dias.' },
      { icone: 'nutri',       titulo: 'Nutricao',         texto: 'Plano alimentar integrado ao acompanhamento medico.' }
    ]
  },

  passos: {
    eyebrow: 'Como funciona',
    titulo: 'Tres passos, sem fila de telefone',
    itens: [
      { titulo: 'Voce solicita o horario', texto: 'Pelo formulario ou WhatsApp, dizendo a especialidade e o turno que prefere.' },
      { titulo: 'Confirmamos em ate 2h uteis', texto: 'Enviamos as opcoes de data, o valor e o que levar. Sem ligacao insistente.' },
      { titulo: 'Voce e atendido no horario', texto: 'Atraso medio de 8 minutos. Se passar de 20, a consulta sai com desconto.' }
    ]
  },

  convenios: {
    titulo: 'Convenios atendidos',
    itens: ['Unimed', 'Bradesco Saude', 'SulAmerica', 'Amil', 'Cassi', 'IPE Saude', 'Petrobras', 'Particular']
  },

  numeros: [
    { valor: '12',    label: 'especialidades' },
    { valor: '8 min', label: 'atraso medio' },
    { valor: '31 mil', label: 'consultas por ano' },
    { valor: '4,8',   label: 'nota dos pacientes' }
  ],

  equipe: {
    eyebrow: 'Corpo clinico',
    titulo: 'Medicos que voce continua vendo',
    subtitulo: 'Agenda fixa por profissional. O paciente escolhe com quem quer seguir o acompanhamento.',
    itens: [
      { nome: 'Dra. Helena Costa',  cargo: 'Cardiologia',  registro: 'CRM-RS 21344', foto: 'assets/equipe-1.svg' },
      { nome: 'Dr. Bruno Tavares',  cargo: 'Clinica geral', registro: 'CRM-RS 33210', foto: 'assets/equipe-2.svg' },
      { nome: 'Dra. Sofia Ribeiro', cargo: 'Dermatologia', registro: 'CRM-RS 41288', foto: 'assets/equipe-3.svg' },
      { nome: 'Dr. Marcos Vieira',  cargo: 'Ortopedia',    registro: 'CRM-RS 19877', foto: 'assets/equipe-4.svg' }
    ]
  },

  depoimentos: {
    eyebrow: 'Pacientes',
    titulo: 'Avaliacoes reais de quem se consultou',
    itens: [
      { texto: 'Primeira vez que um medico olhou meu exame anterior antes de pedir outro igual. Economizei tempo e dinheiro.', autor: 'Renato S.', detalhe: 'paciente de cardiologia', inicial: 'R' },
      { texto: 'Marquei pelo WhatsApp num domingo e na segunda de manha ja tinha tres opcoes de horario.', autor: 'Cristina F.', detalhe: 'paciente de dermatologia', inicial: 'C' },
      { texto: 'Levei meu filho e a pediatra passou 40 minutos com a gente. Nao me senti empurrada para a saida.', autor: 'Aline B.', detalhe: 'mae de paciente', inicial: 'A' }
    ]
  },

  horarios: {
    titulo: 'Horario de funcionamento',
    nota: 'Coleta de exames laboratoriais das 7h as 10h, sem agendamento.',
    itens: [
      { dia: 'Segunda a sexta', hora: '07h — 19h' },
      { dia: 'Sabado',          hora: '08h — 13h' },
      { dia: 'Domingo',         hora: 'Fechado' },
      { dia: 'Feriados',        hora: 'Fechado' }
    ]
  },

  faixaFinal: {
    titulo: 'Ainda em duvida sobre qual especialidade procurar?',
    texto: 'Descreva o sintoma pelo WhatsApp. A recepcao clinica orienta o encaminhamento sem custo.',
    cta: 'Falar com a recepcao'
  },

  faq: {
    eyebrow: 'Duvidas',
    titulo: 'O que os pacientes mais perguntam',
    itens: [
      { p: 'Atendem por convenio?', r: 'Sim. Trabalhamos com os principais convenios da regiao, listados acima. Confirme a cobertura da sua especialidade no agendamento.' },
      { p: 'Quanto custa a consulta particular?', r: 'O valor varia por especialidade e e informado antes da confirmacao do horario, sempre por escrito. Nao ha taxa de retorno em 30 dias.' },
      { p: 'Preciso de encaminhamento para especialista?', r: 'Nao para atendimento particular. Para convenio, depende das regras do seu plano — orientamos no agendamento.' },
      { p: 'Fazem exames no local?', r: 'Fazemos coleta laboratorial, eletrocardiograma, ecocardiograma, ultrassom, raio-x e espirometria no proprio predio.' },
      { p: 'Como cancelo ou remarco?', r: 'Pelo mesmo WhatsApp, ate 4 horas antes, sem custo. Isso libera o horario para outro paciente.' }
    ]
  },

  contatoSecao: {
    eyebrow: 'Agendamento',
    titulo: 'Solicite seu horario',
    subtitulo: 'Respondemos em ate 2 horas uteis com as opcoes de data e o valor.'
  },

  rodape: {
    sobre: 'Clinica multiespecialidades com exames no local, agendamento por WhatsApp e consultas de 40 minutos.',
    aviso: 'Conteudo informativo. Nao substitui consulta, diagnostico ou tratamento medico.'
  }
};
