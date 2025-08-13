export interface Episode {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: number;
  description: string;
  url: string;
}

export const episodes: Episode[] = [
  {
    id: 'a-importancia-da-contribuicao-em-open-source',
    title: 'Faladev #30 | A importância da contribuição em Open Source',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/a-importancia-da-contribuicao-em-open-source.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-03-02T12:00:00.000Z',
    duration: 3600,
    description: '<p>Trabalhar em Open Source é uma prática muito interessante para todos os desenvolvedores, tanto para quem está começando na carreira quanto para quem já é mais experiente. Neste episódio, conversamos sobre como começar a contribuir em projetos Open Source, quais são os benefícios dessa prática e como ela pode te ajudar a se tornar um desenvolvedor melhor.</p><p>Além disso, falamos sobre como encontrar projetos interessantes para contribuir, como fazer a primeira contribuição e como se manter ativo na comunidade Open Source.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/a-importancia-da-contribuicao-em-open-source.mp3'
  },
  {
    id: 'como-renovar-suas-skills-em-tecnologia',
    title: 'Faladev #29 | Como renovar suas skills em tecnologia',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/como-renovar-suas-skills-em-tecnologia.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-02-23T12:00:00.000Z',
    duration: 3600,
    description: '<p>Manter-se atualizado em tecnologia é um desafio constante para todos os desenvolvedores. Neste episódio, conversamos sobre estratégias para renovar suas skills e se manter relevante no mercado.</p><p>Discutimos sobre como identificar quais tecnologias aprender, como organizar seu tempo de estudo, e como aplicar o conhecimento na prática através de projetos pessoais e contribuições para a comunidade.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/como-renovar-suas-skills-em-tecnologia.mp3'
  },
  {
    id: '5-dicas-para-melhorar-sua-produtividade',
    title: 'Faladev #28 | 5 dicas para melhorar sua produtividade',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/5-dicas-para-melhorar-sua-produtividade.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-02-16T12:00:00.000Z',
    duration: 3600,
    description: '<p>Produtividade é um tema que sempre gera discussões interessantes entre desenvolvedores. Neste episódio, compartilhamos 5 dicas práticas que podem ajudar você a ser mais produtivo no seu dia a dia.</p><p>Falamos sobre organização do ambiente de trabalho, gestão de tempo, ferramentas que podem ajudar, e como manter o foco em um mundo cheio de distrações.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/5-dicas-para-melhorar-sua-produtividade.mp3'
  },
  {
    id: 'como-fazer-a-transicao-de-carreira-para-ti',
    title: 'Faladev #27 | Como fazer a transição de carreira para TI',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/como-fazer-a-transicao-de-carreira-para-ti.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-02-09T12:00:00.000Z',
    duration: 3600,
    description: '<p>Muitas pessoas estão considerando fazer uma transição de carreira para a área de TI. Neste episódio, conversamos sobre como fazer essa mudança de forma estratégica e eficiente.</p><p>Discutimos sobre quais habilidades são fundamentais, como se preparar para entrevistas, e como aproveitar experiências anteriores em outras áreas para se destacar no mercado de tecnologia.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/como-fazer-a-transicao-de-carreira-para-ti.mp3'
  },
  {
    id: 'desenvolvimento-mobile-com-react-native',
    title: 'Faladev #26 | Desenvolvimento mobile com React Native',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/desenvolvimento-mobile-com-react-native.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-02-02T12:00:00.000Z',
    duration: 3600,
    description: '<p>React Native é uma das tecnologias mais populares para desenvolvimento mobile. Neste episódio, exploramos os conceitos fundamentais, vantagens e desafios de usar React Native para criar aplicações móveis.</p><p>Conversamos sobre a arquitetura da plataforma, como funciona o bridge nativo, e quais são as melhores práticas para desenvolver apps de qualidade com React Native.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/desenvolvimento-mobile-com-react-native.mp3'
  },
  {
    id: 'testes-automatizados-em-javascript',
    title: 'Faladev #25 | Testes automatizados em JavaScript',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/testes-automatizados-em-javascript.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-01-26T12:00:00.000Z',
    duration: 3600,
    description: '<p>Testes automatizados são fundamentais para a qualidade do código. Neste episódio, discutimos sobre como implementar testes em projetos JavaScript, desde testes unitários até testes de integração.</p><p>Falamos sobre ferramentas populares como Jest, Testing Library, e Cypress, e como criar uma estratégia de testes que realmente agrega valor ao projeto.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/testes-automatizados-em-javascript.mp3'
  },
  {
    id: 'microservicos-e-arquitetura-distribuida',
    title: 'Faladev #24 | Microserviços e arquitetura distribuída',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/microservicos-e-arquitetura-distribuida.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-01-19T12:00:00.000Z',
    duration: 3600,
    description: '<p>Microserviços são uma abordagem arquitetural que tem ganhado muita popularidade. Neste episódio, exploramos os conceitos, vantagens e desafios de migrar de uma arquitetura monolítica para microserviços.</p><p>Discutimos sobre como decompor aplicações, gerenciar comunicação entre serviços, e quais tecnologias podem ajudar na implementação de uma arquitetura distribuída.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/microservicos-e-arquitetura-distribuida.mp3'
  },
  {
    id: 'machine-learning-para-desenvolvedores',
    title: 'Faladev #23 | Machine Learning para desenvolvedores',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/machine-learning-para-desenvolvedores.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-01-12T12:00:00.000Z',
    duration: 3600,
    description: '<p>Machine Learning está se tornando cada vez mais acessível para desenvolvedores. Neste episódio, conversamos sobre como começar a aprender ML, quais são os conceitos fundamentais, e como integrar modelos de ML em aplicações web.</p><p>Discutimos sobre ferramentas como TensorFlow.js, bibliotecas Python populares, e como criar experiências interativas que aproveitam o poder do machine learning.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/machine-learning-para-desenvolvedores.mp3'
  },
  {
    id: 'seguranca-em-aplicacoes-web',
    title: 'Faladev #22 | Segurança em aplicações web',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/seguranca-em-aplicacoes-web.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2021-01-05T12:00:00.000Z',
    duration: 3600,
    description: '<p>Segurança é um aspecto crítico do desenvolvimento web. Neste episódio, abordamos as principais vulnerabilidades que afetam aplicações web e como se proteger contra elas.</p><p>Falamos sobre OWASP Top 10, práticas de segurança defensiva, e como implementar autenticação e autorização de forma segura em aplicações modernas.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/seguranca-em-aplicacoes-web.mp3'
  },
  {
    id: 'desenvolvimento-com-typescript',
    title: 'Faladev #21 | Desenvolvimento com TypeScript',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/desenvolvimento-com-typescript.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2020-12-29T12:00:00.000Z',
    duration: 3600,
    description: '<p>TypeScript tem se tornado essencial para o desenvolvimento JavaScript moderno. Neste episódio, exploramos os benefícios de usar TypeScript, desde a detecção de erros em tempo de compilação até melhor suporte de IDEs.</p><p>Conversamos sobre como migrar projetos JavaScript existentes, configurações de tsconfig.json, e como aproveitar ao máximo o sistema de tipos do TypeScript.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/desenvolvimento-com-typescript.mp3'
  },
  {
    id: 'deploy-e-ci-cd-com-github-actions',
    title: 'Faladev #20 | Deploy e CI/CD com GitHub Actions',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/deploy-e-ci-cd-com-github-actions.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2020-12-22T12:00:00.000Z',
    duration: 3600,
    description: '<p>Automatizar o processo de deploy é fundamental para equipes de desenvolvimento. Neste episódio, mostramos como configurar um pipeline de CI/CD completo usando GitHub Actions.</p><p>Discutimos sobre como criar workflows para testes, build e deploy automático, e como integrar com diferentes plataformas de hospedagem.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/deploy-e-ci-cd-com-github-actions.mp3'
  },
  {
    id: 'performance-em-aplicacoes-react',
    title: 'Faladev #19 | Performance em aplicações React',
    thumbnail: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/thumbnails/performance-em-aplicacoes-react.jpg',
    members: 'Diego Fernandes, João Pedro, Mayk Brito',
    publishedAt: '2020-12-15T12:00:00.000Z',
    duration: 3600,
    description: '<p>Performance é crucial para a experiência do usuário. Neste episódio, exploramos técnicas para otimizar aplicações React, desde lazy loading até memoização de componentes.</p><p>Falamos sobre ferramentas de profiling, como identificar gargalos de performance, e como implementar otimizações que realmente fazem diferença na velocidade da aplicação.</p>',
    url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/performance-em-aplicacoes-react.mp3'
  }
];

export const getLatestEpisodes = (limit: number = 2): Episode[] => {
  return episodes
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getEpisodeBySlug = (slug: string): Episode | undefined => {
  return episodes.find(episode => episode.id === slug);
};

export const getAllEpisodes = (): Episode[] => {
  return episodes.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};
