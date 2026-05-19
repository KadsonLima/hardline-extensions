# 🎯 GUIA PASSO A PASSO - Do Zero até Publicar

## 📍 ETAPA 1: Preparação (15 minutos)

### 1.1 Criar conta de desenvolvedor Twitch
1. Acesse: https://dev.twitch.tv/
2. Faça login com sua conta Twitch
3. Aceite os termos de desenvolvedor
4. Ative autenticação de dois fatores (obrigatório)

### 1.2 Escolher hospedagem
**Recomendo GitHub Pages (GRATUITO e FÁCIL):**

1. Crie uma conta no GitHub (se não tiver)
2. Crie um novo repositório chamado `hardline-twitch-extension`
3. Marque como **público**
4. Habilite GitHub Pages em Settings → Pages

## 📍 ETAPA 2: Upload dos Arquivos (10 minutos)

### 2.1 Fazer upload no GitHub

1. No seu repositório, clique em **"Add file"** → **"Upload files"**
2. Faça upload de:
   - `video_overlay.html`
   - `config.html`
   - `panel.html`
   - `icon.png` (crie um ícone 128x128px)

3. Commit: "Initial commit - Hardline Extension"

### 2.2 Anotar as URLs

Suas URLs serão:
```
https://seu-usuario.github.io/hardline-twitch-extension/video_overlay.html
https://seu-usuario.github.io/hardline-twitch-extension/config.html
https://seu-usuario.github.io/hardline-twitch-extension/panel.html
```

**Aguarde 5-10 minutos para o GitHub Pages ficar ativo!**

## 📍 ETAPA 3: Criar a Extensão no Twitch (20 minutos)

### 3.1 Acessar Console de Desenvolvedores

1. Vá para: https://dev.twitch.tv/console
2. Clique em **"Extensions"** no menu lateral
3. Clique em **"+ Create Extension"**

### 3.2 Preencher Informações Básicas

**Aba "About":**
- **Name:** Hardline Cupons
- **Extension Type:** Video - Overlay
- **Summary:** Exibe cupons promocionais na tela com animações
- **Description:** 
```
Esta extensão permite que streamers exibam cupons promocionais 
personalizados na tela dos viewers com transições animadas. 
Perfeito para promover códigos de desconto, links de afiliado 
e aumentar conversões.

Recursos:
- Overlay animado na tela
- Painel lateral interativo
- Configuração fácil e rápida
- Totalmente personalizável
```

- **Support Email:** seu@email.com
- **Category:** Viewer Engagement Tools

### 3.3 Configurar Assets

**Aba "Assets":**

1. **Icon (128x128px)**
   - Upload de um ícone PNG 128x128px
   - Pode criar em: https://www.canva.com/

2. **Screenshots (mínimo 1)**
   - Tamanho: 1280x720px
   - Tire print da extensão funcionando
   - Tool: Captura de tela do Windows ou Lightshot

### 3.4 Configurar URLs

**Aba "Version":**

Clique em **"Asset Hosting"** e configure:

```
Video Overlay:
- Viewer Path: https://seu-usuario.github.io/hardline-twitch-extension/video_overlay.html
- ✅ Can Link External Content

Config:
- Viewer Path: https://seu-usuario.github.io/hardline-twitch-extension/config.html

Panel:
- Viewer Path: https://seu-usuario.github.io/hardline-twitch-extension/panel.html
- Height: 300
- ✅ Can Link External Content
```

**Salve as mudanças!**

### 3.5 Configurar Capabilities

**Aba "Capabilities":**

Marque:
- ✅ Video - Overlay
- ✅ Panel
- ✅ Config

## 📍 ETAPA 4: Testar a Extensão (30 minutos)

### 4.1 Adicionar ao seu canal

1. Na página da extensão, vá para **"Test on Your Channel"**
2. Clique em **"View on Twitch"**
3. Isso abrirá seu dashboard

### 4.2 Ativar para teste

1. No dashboard: **Extensions** → **My Extensions**
2. Encontre "Hardline Cupons"
3. Clique em **"Configure"**
4. Ative a extensão:
   - Video Overlay: Slot 1
   - Panel: Slot 1

### 4.3 Testar funcionalidades

**Teste 1: Configuração**
1. Clique em **"Configure"** na extensão
2. Insira um cupom: `TESTE123`
3. Insira um link: `https://google.com`
4. Clique em **"Salvar"**

**Teste 2: Video Overlay**
1. Abra sua stream em outra aba
2. Verifique se aparece "HARDLINE" no canto
3. Verifique se aparece "Cupom: TESTE123"
4. Clique no cupom - deve abrir o modal

**Teste 3: Panel**
1. Role a página até os painéis
2. Veja se o cupom aparece
3. Teste o botão "Copiar"
4. Teste o botão "Usar Agora"

### 4.4 Debug (se algo não funcionar)

Abra o console do navegador (F12):

```javascript
// Verificar se Twitch SDK carregou
console.log(window.Twitch.ext);

// Ver configuração atual
window.Twitch.ext.configuration.onChanged(() => {
    console.log('Config:', window.Twitch.ext.configuration.broadcaster);
});
```

## 📍 ETAPA 5: Submeter para Revisão (10 minutos)

### 5.1 Preparar para submissão

**Checklist pré-submissão:**
- [ ] Testou todas as funcionalidades
- [ ] Ícone carregado
- [ ] 1+ Screenshots adicionados
- [ ] Descrição completa
- [ ] Suporte email válido
- [ ] URLs funcionando

### 5.2 Enviar para revisão

1. No console, vá para sua extensão
2. Aba **"Status"**
3. Clique em **"Submit for Review"**

### 5.3 Preencher formulário de submissão

**Testing Instructions (Instruções para reviewers):**
```
Como testar esta extensão:

1. CONFIGURAÇÃO:
   - Clique em "Configure" no dashboard
   - Insira qualquer código (ex: TEST10)
   - Insira qualquer URL (ex: https://google.com)
   - Clique em "Salvar"

2. VIDEO OVERLAY:
   - Aguarde 2-3 segundos após carregar a página
   - Verá "HARDLINE" aparecer no canto superior direito
   - Após 1 segundo, aparecerá o cupom configurado
   - Clique no cupom para testar o modal de redirecionamento

3. PANEL:
   - Role até os painéis na página do canal
   - Veja o cupom exibido
   - Teste os botões "Copiar" e "Usar Agora"

Nota: A extensão não requer permissões especiais ou backend.
Funciona completamente no frontend.
```

**Privacy Policy URL (opcional mas recomendado):**
Se não tiver, pode criar uma simples no GitHub:
```
https://seu-usuario.github.io/hardline-twitch-extension/privacy.html
```

Conteúdo básico:
```html
Esta extensão não coleta dados pessoais.
Não usa cookies.
Não armazena informações dos usuários.
```

### 5.4 Confirmar submissão

1. Revise todas as informações
2. Aceite os termos
3. Clique em **"Submit"**

## 📍 ETAPA 6: Aguardar Revisão (3-7 dias)

### 6.1 O que acontece agora

- Twitch vai revisar sua extensão
- Testarão todas as funcionalidades
- Verificarão se segue as políticas
- Tempo médio: 3-7 dias úteis

### 6.2 Você receberá email com:

**Se APROVADO ✅:**
- Extensão publicada automaticamente
- Aparecerá na busca de extensões
- Link direto para instalação

**Se REJEITADO ❌:**
- Lista de problemas encontrados
- Sugestões de correção
- Possibilidade de reenviar

### 6.3 Motivos comuns de rejeição

1. **HTTPS não funciona** - Verifique se o GitHub Pages está ativo
2. **Erros de JavaScript** - Teste no console
3. **Screenshots faltando** - Adicione pelo menos 1
4. **Descrição incompleta** - Seja detalhado
5. **Funcionalidade quebrada** - Teste antes de enviar

## 📍 ETAPA 7: Após Aprovação (Pós-publicação)

### 7.1 Divulgar sua extensão

1. **Twitter/X:**
```
🎉 Minha extensão Twitch foi aprovada!

"Hardline Cupons" - Exiba cupons promocionais 
na sua stream com animações incríveis!

Instale: [link]

#Twitch #TwitchDev #StreamerTips
```

2. **Reddit:**
- r/Twitch
- r/twitchextensions

3. **Discord de Streamers**

### 7.2 Coletar feedback

1. Peça para streamers testarem
2. Anote sugestões de melhorias
3. Corrija bugs reportados
4. Atualize a extensão

### 7.3 Atualizar a extensão

Para fazer updates:
1. Faça mudanças nos arquivos no GitHub
2. Commit as alterações
3. Aguarde GitHub Pages atualizar (5-10min)
4. Extensão atualiza automaticamente! ✨

**Não precisa reenviar para revisão para updates pequenos!**

## 🎨 BÔNUS: Personalizações Populares

### Mudar cores do gradiente

Em todos os arquivos HTML, procure:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Substitua por suas cores:
```css
/* Verde e Azul */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* Vermelho e Laranja */
background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);

/* Roxo Neon */
background: linear-gradient(135deg, #7303c0 0%, #ec38bc 100%);
```

### Adicionar som ao aparecer

No `video_overlay.html`, adicione:
```javascript
// Após mostrar o overlay
const audio = new Audio('https://seu-dominio.com/notification.mp3');
audio.play();
```

### Mudar posição do overlay

No `video_overlay.html`, CSS:
```css
.overlay-container {
    /* Superior direito (padrão) */
    top: 20px;
    right: 20px;
    
    /* Superior esquerdo */
    /* top: 20px;
    left: 20px; */
    
    /* Inferior direito */
    /* bottom: 20px;
    right: 20px; */
}
```

## 🆘 Problemas Comuns e Soluções

### "ERR_SSL_PROTOCOL_ERROR"
**Causa:** GitHub Pages não está ativo
**Solução:** 
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Aguarde 10 minutos

### Extensão não aparece no canal
**Causa:** Não ativou nos slots
**Solução:**
1. Dashboard → Extensions
2. Configure a extensão
3. Ative nos slots Video Overlay e Panel

### Cupom não atualiza
**Causa:** Cache do navegador
**Solução:**
1. Ctrl + Shift + R (hard refresh)
2. Ou abra em aba anônima

### Erro "Twitch.ext is not defined"
**Causa:** SDK não carregou
**Solução:**
Adicione no HTML antes do seu script:
```html
<script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
```

---

## ✅ RESUMO DO QUE VOCÊ TEM AGORA

📁 **Arquivos prontos:**
- video_overlay.html (Overlay na tela)
- config.html (Painel de configuração)
- panel.html (Painel lateral)
- manifest.json (Descrição da extensão)
- README.md (Documentação)
- Este guia!

🎯 **Próximos passos:**
1. Criar ícone 128x128px
2. Fazer upload no GitHub Pages
3. Criar extensão no dev.twitch.tv
4. Testar no seu canal
5. Submeter para revisão
6. Aguardar aprovação
7. 🎉 Extensão publicada!

**Tempo total estimado:** 1-2 horas + 3-7 dias de revisão

Boa sorte! 🚀
