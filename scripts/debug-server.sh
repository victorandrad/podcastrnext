#!/bin/bash

echo "🔍 Debug do Servidor JSON"
echo "=========================="

# Verificar se o arquivo server.json existe
echo "📁 Verificando arquivo server.json..."
if [ -f "server.json" ]; then
    echo "✅ server.json encontrado"
    echo "📊 Tamanho: $(wc -c < server.json) bytes"
    echo "📄 Primeiras linhas:"
    head -5 server.json
else
    echo "❌ server.json não encontrado"
    exit 1
fi

echo ""

# Verificar se json-server está instalado
echo "📦 Verificando json-server..."
if command -v json-server &> /dev/null; then
    echo "✅ json-server instalado"
    json-server --version
else
    echo "❌ json-server não encontrado"
    echo "Instale com: npm install -g json-server"
    exit 1
fi

echo ""

# Verificar se a porta 3333 está livre
echo "🔌 Verificando porta 3333..."
if lsof -i :3333 &> /dev/null; then
    echo "⚠️  Porta 3333 em uso:"
    lsof -i :3333
    echo ""
    echo "🛑 Parando processos existentes..."
    npm run server:stop
    sleep 2
else
    echo "✅ Porta 3333 livre"
fi

echo ""

# Iniciar servidor em modo debug
echo "🚀 Iniciando servidor em modo debug..."
echo "📋 Comando: json-server server.json -w -d 750 -p 3333 --host 0.0.0.0 --no-cors --no-gzip --no-cli"
echo ""

# Iniciar servidor em foreground para ver logs
json-server server.json -w -d 750 -p 3333 --host 0.0.0.0 --no-cors --no-gzip --no-cli
