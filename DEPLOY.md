# 🚀 Deploy para GitHub Pages (Build Simples)

Este guia explica como fazer deploy do Podcastr Next.js para GitHub Pages usando um build estático simples.

## 📋 Pré-requisitos

- Repositório no GitHub
- Node.js 18+ instalado
- Acesso de escrita ao repositório

## 🔧 Configuração

### 1. Configurar GitHub Pages

1. Vá para **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch **gh-pages** (será criada automaticamente)
4. Clique em **Save**

### 2. Configurar Secrets (se necessário)

O workflow usa `GITHUB_TOKEN` que é fornecido automaticamente pelo GitHub.

## 🚀 Deploy Automático

### Opção 1: Deploy via GitHub Actions (Recomendado)

1. **Push para master branch:**
   ```bash
   git add .
   git commit -m "Atualizações para deploy"
   git push origin master
   ```

2. **Verificar deploy:**
   - Vá para **Actions** no GitHub
   - O workflow "Deploy to GitHub Pages (Simple)" será executado automaticamente
   - Aguarde a conclusão

3. **Acessar o site:**
   - Vá para **Settings** > **Pages**
   - O link estará disponível após o deploy

### Opção 2: Deploy Manual

1. **Build:**
   ```bash
   npm run build
   ```

2. **Deploy via gh-pages:**
   ```bash
   npm run deploy:gh-pages
   ```

## 📡 Dados Estáticos (Sem Servidor)

### Como Funciona

O projeto usa **dados estáticos** embutidos no código:

- **Arquivo de dados**: `src/data/episodes.ts` (contém episódios mockados)
- **Sem servidor**: Não há necessidade de JSON Server
- **Build estático**: Todos os dados são incluídos durante o build
- **Deploy simples**: Apenas build e deploy, sem dependências externas

### Vantagens

- ✅ **Sem servidor** - Não precisa rodar servidor durante build
- ✅ **Deploy rápido** - Build mais simples e rápido
- ✅ **Sem dependências** - Não precisa de JSON Server ou APIs externas
- ✅ **GitHub Pages** - Funciona perfeitamente com hospedagem estática
- ✅ **Sem Vercel** - Deploy direto para GitHub Pages

## 📁 Estrutura de Deploy

```
out/                    # Diretório de build (criado automaticamente)
├── .nojekyll          # Arquivo para GitHub Pages
├── _next/             # Assets do Next.js
├── episodes/          # Páginas de episódios
├── index.html         # Página principal
└── ...
```

## 🔍 Troubleshooting

### Problema: Build falha
```bash
# Verificar se há erros de TypeScript
npm run build

# Verificar se todos os imports estão corretos
npm run dev
```

### Problema: Páginas não carregam
- Verificar se o `basePath` está configurado corretamente
- Verificar se o repositório tem o nome correto
- Aguardar alguns minutos após o deploy

### Problema: Imagens não carregam
- Verificar se `images.unoptimized: true` está configurado
- Verificar se as URLs das imagens estão corretas

## 📝 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Limpar build
npm run clean

# Deploy manual
npm run deploy:gh-pages
```

## 🌐 URLs

- **Desenvolvimento:** `http://localhost:3000`
- **Produção:** `https://[seu-usuario].github.io/podcastrnext`

## ✅ Checklist de Deploy

- [ ] Build executa sem erros
- [ ] Diretório `out/` é criado automaticamente
- [ ] Workflow GitHub Actions executa
- [ ] Site está acessível no GitHub Pages
- [ ] Imagens e assets carregam corretamente
- [ ] Navegação entre páginas funciona

## 🔄 Workflow GitHub Actions

### Deploy to GitHub Pages (Simple)
- **Trigger:** Push para master
- **Função:** Build e deploy automático
- **Resultado:** Site publicado no GitHub Pages

## 🎯 Características do Build

### Configuração Next.js
```javascript
// next.config.js
const nextConfig = {
  output: 'export',           // Export estático automático
  trailingSlash: true,        // URLs com barra final
  basePath: '/podcastrnext',  // Base path para GitHub Pages
  images: {
    unoptimized: true,        // Imagens sem otimização
  },
}
```

### Dados Estáticos
- **12 episódios** com informações completas
- **Thumbnails** de imagens dos podcasts
- **Metadados** (duração, participantes, datas)
- **Descrições** em HTML
- **URLs de áudio** mockadas

---

**Nota:** O deploy automático acontece sempre que você fizer push para a branch `master`. O build é completamente estático e não requer servidor ou APIs externas.
