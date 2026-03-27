import type { ChatMessage, QuickReply } from "@/types";

interface Intent {
  name: string;
  patterns: RegExp[];
  responses: string[];
  quickReplies: QuickReply[];
}

const intents: Intent[] = [
  {
    name: "greeting",
    patterns: [/\b(oi|ola|hey|bom dia|boa tarde|boa noite|eai|salve)\b/i],
    responses: [
      "Ola! Bem-vindo a Snowonline! Como posso ajudar voce a planejar sua viagem de ski? ⛷️",
      "Oi! Que bom ter voce aqui! Estou pronto para ajudar com sua proxima aventura na neve! 🏔️",
      "Ola! Sou o assistente da Snowonline. Como posso te ajudar hoje?",
    ],
    quickReplies: [
      { label: "Ver destinos", value: "Quais destinos voces oferecem?" },
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
      { label: "Dicas para iniciantes", value: "Sou iniciante no ski" },
    ],
  },
  {
    name: "destination_info",
    patterns: [
      /\b(destino|destinos|onde|lugar|lugares|resort|resorts|opcoes|opcao)\b/i,
      /\b(chile|argentina|eua|estados unidos|canada|europa|japao|franca|suica|austria)\b/i,
      /\b(valle nevado|portillo|cerro catedral|chapelco|vail|aspen|park city|whistler|banff|chamonix|zermatt|st anton|niseko|hakuba)\b/i,
    ],
    responses: [
      "Temos destinos incriveis em 5 regioes! America do Sul (Chile e Argentina), Estados Unidos, Canada, Europa e Japao. Cada um com experiencias unicas. Quer saber mais sobre alguma regiao especifica?",
      "Nossos destinos cobrem os melhores resorts do mundo! De Valle Nevado nos Andes a Niseko no Japao, temos opcoes para todos os perfis. Qual regiao te interessa mais?",
    ],
    quickReplies: [
      { label: "America do Sul", value: "Me fale sobre destinos na America do Sul" },
      { label: "Estados Unidos", value: "Quais resorts nos EUA?" },
      { label: "Europa", value: "Destinos na Europa" },
      { label: "Japao", value: "Como e esquiar no Japao?" },
    ],
  },
  {
    name: "price_info",
    patterns: [
      /\b(preco|precos|valor|valores|custo|custos|quanto|custa|orcamento|investimento|barato|caro|economico)\b/i,
    ],
    responses: [
      "Os valores variam conforme o destino, epoca e nivel de hospedagem. Na America do Sul, pacotes comecam a partir de R$ 3.000 por pessoa. Para EUA e Europa, a partir de R$ 7.000. Posso gerar um orcamento personalizado para voce!",
      "Temos opcoes para todos os bolsos! Desde pacotes economicos na America do Sul ate experiencias de luxo nos Alpes. Que tal fazer um orcamento personalizado? E rapido e sem compromisso!",
    ],
    quickReplies: [
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
      { label: "Destinos mais baratos", value: "Quais os destinos mais acessiveis?" },
      { label: "Falar com consultor", value: "Quero falar com um consultor" },
    ],
  },
  {
    name: "season_info",
    patterns: [
      /\b(temporada|epoca|quando|mes|meses|melhor epoca|periodo|neve|inverno|verao)\b/i,
    ],
    responses: [
      "A temporada depende da regiao! America do Sul: junho a outubro. America do Norte e Europa: novembro a abril. Japao: dezembro a abril. A melhor epoca geralmente e o pico da temporada, quando a neve esta mais consistente.",
      "Otima pergunta! No hemisferio sul (Chile e Argentina), a neve cai de junho a outubro. No hemisferio norte (EUA, Canada, Europa, Japao), de novembro a abril. Quando voce pretende viajar?",
    ],
    quickReplies: [
      { label: "Hemisferio sul", value: "Quando ir para America do Sul?" },
      { label: "Hemisferio norte", value: "Melhor epoca para Europa?" },
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
    ],
  },
  {
    name: "quote_request",
    patterns: [
      /\b(orcamento|orcar|cotar|cotacao|reservar|reserva|pacote|comprar|contratar)\b/i,
    ],
    responses: [
      "Otimo! Voce pode gerar um orcamento personalizado diretamente no nosso site. E super rapido! Basta escolher o destino, datas e numero de viajantes. Clique no link abaixo para comecar!",
      "Vamos montar seu orcamento! Acesse nossa pagina de orcamento para um calculo instantaneo, ou se preferir, posso conectar voce com um dos nossos consultores especializados.",
    ],
    quickReplies: [
      { label: "Ir para orcamento", value: "Abrir pagina de orcamento" },
      { label: "Falar com consultor", value: "Quero falar com um consultor" },
      { label: "Ver destinos primeiro", value: "Quais destinos voces oferecem?" },
    ],
  },
  {
    name: "beginner_tips",
    patterns: [
      /\b(iniciante|primeira vez|nunca esqui|comecando|comecar|aprender|aula|aulas|dica|dicas|conselho)\b/i,
    ],
    responses: [
      "Que legal que voce quer comecar! Algumas dicas importantes: 1) Escolha um destino com boa escola de ski (Valle Nevado e Chapelco sao otimos!). 2) Alugue equipamentos no local. 3) Invista em pelo menos 3 dias de aulas. 4) Comece nas pistas verdes! A neve e viciante! ⛷️",
      "Bem-vindo ao mundo do ski! Para iniciantes, recomendo destinos na America do Sul pela proximidade e custo-beneficio. Valle Nevado e Cerro Catedral tem otimas escolas. Nao se preocupe com equipamento — tudo pode ser alugado la!",
    ],
    quickReplies: [
      { label: "Destinos para iniciantes", value: "Melhor destino para iniciantes?" },
      { label: "O que levar", value: "O que preciso levar para esquiar?" },
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
    ],
  },
  {
    name: "family_trip",
    patterns: [
      /\b(familia|crianca|criancas|filho|filhos|filha|filhas|infantil|kids|familias|familiar)\b/i,
    ],
    responses: [
      "Viagens em familia sao incriveis! Recomendo destinos como Chapelco (Argentina), Whistler (Canada) e Valle Nevado (Chile) que tem excelente infraestrutura para criancas, com escolas de ski infantis e atividades na neve. Criancas a partir de 4 anos ja podem ter aulas!",
      "Adoramos montar viagens para familias! Os melhores destinos para levar criancas sao aqueles com escolinhas de ski dedicadas e atividades alem das pistas. Chapelco, Whistler e Vail sao otimos para isso!",
    ],
    quickReplies: [
      { label: "Chapelco", value: "Me fale sobre Chapelco" },
      { label: "Whistler", value: "Me fale sobre Whistler" },
      { label: "Fazer orcamento familia", value: "Quero orcamento para familia" },
    ],
  },
  {
    name: "help",
    patterns: [
      /\b(ajuda|ajudar|help|nao sei|como funciona|o que voces fazem|servicos|servico)\b/i,
    ],
    responses: [
      "Claro! A Snowonline e especialista em viagens de ski e snowboard. Posso te ajudar com: informacoes sobre destinos, orcamentos personalizados, dicas para iniciantes e planejamento completo da sua viagem. O que voce gostaria de saber?",
    ],
    quickReplies: [
      { label: "Ver destinos", value: "Quais destinos voces oferecem?" },
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
      { label: "Dicas de viagem", value: "Sou iniciante no ski" },
      { label: "Contato", value: "Quero falar com um consultor" },
    ],
  },
  {
    name: "farewell",
    patterns: [/\b(tchau|adeus|ate|valeu|obrigado|obrigada|brigado|brigada|flw|vlw)\b/i],
    responses: [
      "Obrigado pelo contato! Se precisar de mais alguma coisa, estou por aqui. Boa viagem! 🏔️⛷️",
      "Valeu! Foi otimo conversar com voce. Quando estiver pronto para reservar, e so voltar! Ate mais! 👋",
      "Obrigado! Esperamos te ver nas pistas em breve! Qualquer duvida, e so chamar. 😊",
    ],
    quickReplies: [],
  },
  {
    name: "unknown",
    patterns: [],
    responses: [
      "Desculpe, nao entendi muito bem. Posso te ajudar com informacoes sobre destinos de ski, orcamentos e dicas de viagem. Como posso ajudar?",
      "Hmm, nao tenho certeza sobre isso. Que tal eu te ajudar com informacoes sobre nossos destinos ou gerar um orcamento personalizado?",
      "Nao entendi sua pergunta, mas posso ajudar com destinos, precos, temporadas e dicas para sua viagem de ski!",
    ],
    quickReplies: [
      { label: "Ver destinos", value: "Quais destinos voces oferecem?" },
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
      { label: "Ajuda", value: "Como voce pode me ajudar?" },
    ],
  },
];

function detectIntent(message: string): Intent {
  for (const intent of intents) {
    if (intent.name === "unknown") continue;
    for (const pattern of intent.patterns) {
      if (pattern.test(message)) {
        return intent;
      }
    }
  }
  return intents.find((i) => i.name === "unknown")!;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateBotResponse(userMessage: string): {
  content: string;
  quickReplies: QuickReply[];
} {
  const intent = detectIntent(userMessage);
  return {
    content: pickRandom(intent.responses),
    quickReplies: intent.quickReplies,
  };
}

export function createBotMessage(
  content: string,
  quickReplies?: QuickReply[]
): ChatMessage {
  return {
    id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    role: "bot",
    content,
    timestamp: new Date(),
    quickReplies,
  };
}

export function createUserMessage(content: string): ChatMessage {
  return {
    id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    role: "user",
    content,
    timestamp: new Date(),
  };
}

export function getWelcomeMessage(): ChatMessage {
  return createBotMessage(
    "Ola! Bem-vindo a Snowonline! Sou seu assistente virtual e estou aqui para ajudar com sua viagem de ski. Como posso te ajudar? ⛷️🏔️",
    [
      { label: "Ver destinos", value: "Quais destinos voces oferecem?" },
      { label: "Fazer orcamento", value: "Quero fazer um orcamento" },
      { label: "Dicas para iniciantes", value: "Sou iniciante no ski" },
      { label: "Falar com consultor", value: "Quero falar com um consultor" },
    ]
  );
}
