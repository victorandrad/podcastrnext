# Podcastr Next.js

Um aplicativo de podcast construído com Next.js, React 18 e TypeScript.

## Requisitos

- **Node.js**: Versão 18 ou superior
- **npm** ou **yarn**

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd podcastrnext
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Em outro terminal, execute o servidor JSON para os dados:
```bash
npm run server
# ou
yarn server
```

## Mudanças para Node.js 18

Este projeto foi atualizado para ser compatível com Node.js 18:

### Dependências Atualizadas:
- **Next.js**: 10.1.3 → 14.0.0
- **React**: 17.0.2 → 18.2.0
- **TypeScript**: 4.2.4 → 5.0.0
- **Axios**: 0.21.1 → 1.6.0
- **Sass**: 1.32.11 → 1.69.0

### Configurações Atualizadas:
- `tsconfig.json` configurado para TypeScript 5
- Suporte a React 18 com novas APIs
- Configuração otimizada para Next.js 14

### Melhorias de Layout e Responsividade:
- ✅ Corrigido overflow horizontal que causava scroll horizontal
- ✅ Layout responsivo para dispositivos móveis e tablets
- ✅ Player empilhado em telas pequenas
- ✅ Media queries para diferentes tamanhos de tela
- ✅ Tabelas com scroll horizontal em dispositivos móveis
- ✅ Componentes adaptáveis para mobile

### 🎨 **Melhorias Visuais da Seção "Últimos Lançamentos":**
- ✅ **Design moderno** com sombras e bordas arredondadas
- ✅ **Animações suaves** com hover effects e transições
- ✅ **Layout aprimorado** com melhor espaçamento e hierarquia visual
- ✅ **Botões interativos** com feedback visual e sombras
- ✅ **Tipografia melhorada** com cores e tamanhos otimizados
- ✅ **Responsividade avançada** com breakpoints específicos
- ✅ **Consistência visual** entre todas as seções

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento (Next.js + JSON Server)
- `npm run dev:server` - Inicia apenas o servidor JSON
- `npm run dev:next` - Inicia apenas o Next.js
- `npm run build` - Constrói o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run server` - Inicia o servidor JSON com dados dos podcasts
- `npm run server:start` - Inicia o servidor JSON em background
- `npm run server:stop` - Para o servidor JSON
- `npm run clean` - Limpa arquivos de build

## 🚀 Deploy para GitHub Pages

### Deploy Automático (Recomendado)
1. **Push para main branch:**
   ```bash
   git add .
   git commit -m "Atualizações para deploy"
   git push origin main
   ```

2. **O deploy acontece automaticamente** via GitHub Actions

### Deploy Manual
```bash
npm run deploy:gh-pages
```

**📖 [Guia completo de deploy](DEPLOY.md)**

## Estrutura do Projeto

```
src/
├── components/     # Componentes React
├── contexts/       # Contextos React (Player)
├── pages/          # Páginas Next.js
├── services/       # Serviços de API
├── styles/         # Estilos SCSS
└── utils/          # Utilitários
```

## Tecnologias

- **Next.js 14** - Framework React
- **React 18** - Biblioteca de UI
- **TypeScript 5** - Tipagem estática
- **SCSS** - Pré-processador CSS
- **Axios** - Cliente HTTP
- **JSON Server** - API mock para desenvolvimento

## Responsividade

O projeto agora é totalmente responsivo com:
- **Desktop**: Layout horizontal com player lateral
- **Tablet**: Player redimensionado para melhor aproveitamento
- **Mobile**: Layout empilhado com player na parte inferior
- **Breakpoints**: 1200px, 1024px, 768px, 480px

## Design System

### Cores:
- **Primárias**: Purple (#8257E5), Green (#04D361)
- **Neutras**: Gray scale (#F7F8FA → #494D4B)
- **Estados**: Hover, Active, Disabled

### Componentes:
- **Cards**: Sombras, bordas arredondadas, hover effects
- **Botões**: Estados visuais, animações, feedback
- **Tipografia**: Hierarquia clara, legibilidade otimizada
- **Espaçamento**: Sistema consistente de margins e paddings

## Pipeline de Build

O projeto inclui uma pipeline automatizada que:
- ✅ **Verifica** se o servidor JSON está rodando
- ✅ **Inicia** o servidor automaticamente se necessário
- ✅ **Executa** o build com dados mock disponíveis
- ✅ **Deploy** automático para GitHub Pages

## URLs

- **Desenvolvimento**: `http://localhost:3000`
- **Servidor JSON**: `http://localhost:3333`
- **Produção**: `https://[seu-usuario].github.io/podcastrnext`
