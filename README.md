# 🎮 Hardline Cupons - Extensão Twitch

Extensão para Twitch que exibe cupons promocionais na tela com transições animadas.

## 📋 Sobre

Esta extensão permite que streamers:
- Exibam cupons promocionais personalizados
- Configurem links de destino
- Ofereçam uma experiência visual atraente para os viewers
- Facilitem a conversão de viewers em clientes

## 🚀 Processo Completo de Publicação

### 1. **Pré-requisitos**

Antes de começar, você precisa:

- [ ] Conta Twitch (óbvio! 😄)
- [ ] Conta de desenvolvedor Twitch (https://dev.twitch.tv/)
- [ ] Domínio próprio ou hospedagem web (os arquivos HTML precisam estar online)
- [ ] Certificado SSL (HTTPS obrigatório)
- [ ] Conhecimento básico de HTML/CSS/JavaScript

### 2. **Hospedagem dos Arquivos**

Os arquivos HTML precisam estar acessíveis via HTTPS:

**Opções de hospedagem:**
- GitHub Pages (gratuito, fácil)
- Netlify (gratuito)
- Vercel (gratuito)
- Servidor próprio
- AWS S3 + CloudFront

**Estrutura de hospedagem:**
```
https://seu-dominio.com/
├── video_overlay.html
├── config.html
├── panel.html
└── icon.png (128x128px)
```

### 3. **Criar a Extensão no Twitch Developers**

1. Acesse https://dev.twitch.tv/console/extensions
2. Clique em **"Create Extension"**
3. Preencha os campos:
   - **Name:** Hardline Cupons
   - **Extension Type:** Video - Overlay
   - **Author/Organization:** Seu nome
   - **Support Email:** Seu email
   - **Category:** Viewer Engagement Tools

### 4. **Configurar a Extensão**

No painel de configuração:

#### **Assets**
- Upload do ícone (128x128px PNG)
- Screenshots da extensão (1280x720px - pelo menos 1)

#### **Extension Capabilities**
- ✅ Video Overlay
- ✅ Panel
- ✅ Config

#### **Asset Hosting**
- **Video Overlay URL:** `https://seu-dominio.com/video_overlay.html`
- **Config URL:** `https://seu-dominio.com/config.html`
- **Panel Viewer URL:** `https://seu-dominio.com/panel.html`

#### **Permissions**
- Nenhuma permissão especial necessária para esta extensão

### 5. **Testar Localmente**

Antes de enviar para revisão:

1. No painel da extensão, clique em **"Version"**
2. Encontre a seção **"Test on Your Channel"**
3. Clique em **"View on Twitch"**
4. Teste todos os recursos:
   - Aparição do overlay
   - Transição do cupom
   - Clique no cupom
   - Painel lateral
   - Configuração do broadcaster

### 6. **Ajustar URLs no Manifest**

Edite o `manifest.json` com as URLs reais:

```json
{
  "video_overlay": {
    "viewer_url": "https://SEU-DOMINIO-REAL.com/video_overlay.html",
    "can_link_external_content": true
  },
  "config": {
    "viewer_url": "https://SEU-DOMINIO-REAL.com/config.html"
  },
  "panel": {
    "viewer_url": "https://SEU-DOMINIO-REAL.com/panel.html",
    "height": 300
  }
}
```

### 7. **Submeter para Revisão**

Quando tudo estiver funcionando:

1. No Console de Desenvolvedores Twitch
2. Vá para **"Extensions"** → Sua extensão
3. Clique em **"Submit for Review"**
4. Preencha o formulário:
   - **Descrição detalhada** do que a extensão faz
   - **Instruções de uso** para os reviewers
   - **Conta de teste** (se necessário)

### 8. **Processo de Revisão**

- ⏱️ Tempo: 3-7 dias úteis
- 📧 Você receberá email com o resultado
- ✅ Aprovado: Extensão publicada automaticamente
- ❌ Rejeitado: Lista de correções necessárias

### 9. **Após Aprovação**

Sua extensão estará disponível em:
- https://dashboard.twitch.tv/extensions
- Pesquisa de extensões no Twitch

## 🎨 Personalização

### Cores e Estilo

Edite as cores no CSS dos arquivos HTML:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Altere para suas cores */
background: linear-gradient(135deg, #SUA-COR-1 0%, #SUA-COR-2 100%);
```

### Texto "HARDLINE"

Para mudar o texto exibido, edite em `video_overlay.html`:

```html
<div class="hardline-text pulse">SEU TEXTO AQUI</div>
```

### Duração das Animações

```css
/* Tempo de aparição */
transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Altere 0.5s para o tempo desejado */
```

## 📱 Como os Streamers Usarão

1. **Instalar a extensão** no canal
2. **Clicar em "Configure"** no dashboard
3. **Inserir o código do cupom** (ex: HARDLINE10)
4. **Inserir o link** para onde quer direcionar
5. **Salvar** - pronto! ✅

## 🔧 Troubleshooting

### Extensão não aparece
- Verifique se os arquivos estão acessíveis via HTTPS
- Confirme as URLs no manifest
- Limpe o cache do navegador

### Cupom não atualiza
- Verifique o console do navegador (F12)
- Confirme que a configuração foi salva
- Teste em modo anônimo

### Certificado SSL
A Twitch exige HTTPS. Use:
- Let's Encrypt (gratuito)
- Certificado da hospedagem
- CloudFlare (gratuito)

## 📊 Recursos da Extensão

✅ Video Overlay animado
✅ Painel lateral interativo
✅ Configuração fácil para broadcasters
✅ Responsivo
✅ Sem necessidade de backend
✅ Totalmente customizável

## 🎯 Boas Práticas

1. **Teste extensivamente** antes de publicar
2. **Otimize imagens** para carregar rápido
3. **Use CDN** para melhor performance
4. **Monitore analytics** após publicação
5. **Responda feedback** dos usuários

## 📝 Checklist de Publicação

- [ ] Arquivos hospedados em HTTPS
- [ ] Ícone 128x128px criado
- [ ] Screenshots 1280x720px tirados
- [ ] Todas as URLs configuradas
- [ ] Testado no seu canal
- [ ] Descrição da extensão escrita
- [ ] Instruções de uso documentadas
- [ ] Submetido para revisão
- [ ] Aguardando aprovação

## 🆘 Suporte

Para problemas ou dúvidas:
- Documentação oficial: https://dev.twitch.tv/docs/extensions
- Fórum de desenvolvedores: https://discuss.dev.twitch.tv/
- Discord de desenvolvedores Twitch

## 📜 Licença

Este projeto é livre para uso e modificação.

---

**Desenvolvido para facilitar a vida dos streamers! 🎮✨**
