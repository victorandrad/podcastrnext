# 🚀 Deploy para GitHub Pages

Este guia explica como fazer deploy do Podcastr Next.js para GitHub Pages.

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
   - O workflow "Deploy to GitHub Pages" será executado automaticamente
   - Aguarde a conclusão

3. **Acessar o site:**
   - Vá para **Settings** > **Pages**
   - O link estará disponível após o deploy

### Opção 2: Deploy Manual

1. **Build e export:**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy via gh-pages:**
   ```bash
   npm run deploy:gh-pages
   ```

## 📡 Servidor Mockado (JSON Server)

### Como Funciona

O projeto usa um **servidor JSON mockado** durante o build para fornecer dados dos podcasts:

- **Arquivo de dados**: `server.json` (contém episódios mockados)
- **Servidor**: JSON Server rodando na porta 3333
- **Endpoints**: `/episodes`, `/episodes/:id`
- **Dados**: Episódios com thumbnails, descrições, durações, etc.

### Workflow de Deploy

1. **Inicia servidor JSON** em background
2. **Aguarda** servidor estar disponível (timeout: 30s)
3. **Testa endpoints** para garantir funcionamento
4. **Executa build** com dados mockados disponíveis
5. **Exporta arquivos** estáticos
6. **Para servidor** e faz deploy

### Testes Automáticos

O workflow inclui testes para garantir que o servidor funcione:

- ✅ **Verificação de status** do servidor
- ✅ **Teste do endpoint** `/episodes`
- ✅ **Teste de endpoint específico** `/episodes/:id`
- ✅ **Validação de resposta** dos dados

## 📁 Estrutura de Deploy

```
out/                    # Diretório de build
├── .nojekyll          # Arquivo para GitHub Pages
├── _next/             # Assets do Next.js
├── episodes/          # Páginas de episódios
├── index.html         # Página principal
└── ...
```

## 🔍 Troubleshooting

### Problema: Build falha
```bash
# Verificar se o servidor JSON está rodando
npm run server:start

# Verificar se está acessível
curl http://localhost:3333/episodes

# Verificar logs
cat json-server.log
```

### Problema: Servidor não inicia
```bash
# Verificar se a porta 3333 está livre
lsof -i :3333

# Parar processos existentes
npm run server:stop

# Iniciar novamente
npm run server:start
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
# Limpar build
npm run clean

# Verificar servidor JSON
npm run server:check

# Iniciar servidor em background
npm run server:start

# Parar servidor
npm run server:stop

# Build local
npm run build

# Deploy manual
npm run deploy:gh-pages
```

## 🌐 URLs

- **Desenvolvimento:** `http://localhost:3000`
- **Servidor JSON:** `http://localhost:3333`
- **Produção:** `https://[seu-usuario].github.io/podcastrnext`

## ✅ Checklist de Deploy

- [ ] Servidor JSON está rodando
- [ ] Endpoint `/episodes` responde
- [ ] Build executa sem erros
- [ ] Export gera arquivos estáticos
- [ ] Workflow GitHub Actions executa
- [ ] Site está acessível no GitHub Pages
- [ ] Imagens e assets carregam corretamente
- [ ] Navegação entre páginas funciona

## 🔄 Workflows GitHub Actions

### 1. Test JSON Server
- **Trigger:** Push para master ou Pull Request
- **Função:** Testa se o servidor JSON funciona
- **Resultado:** Garante que dados mockados estão disponíveis

### 2. Deploy to GitHub Pages
- **Trigger:** Push para master
- **Função:** Build, export e deploy
- **Resultado:** Site publicado no GitHub Pages

---

**Nota:** O deploy automático acontece sempre que você fizer push para a branch `master`. O servidor JSON é iniciado automaticamente durante o build para garantir que os dados estejam disponíveis.
