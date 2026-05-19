# 🚀 TUTORIAL RÁPIDO - Hospedar no GitHub Pages

## ⚠️ POR QUE ARQUIVOS LOCAIS NÃO FUNCIONAM?

A Twitch **bloqueia** arquivos locais (`file:///`) por segurança. Ela só aceita:
- ✅ HTTPS (obrigatório)
- ❌ HTTP (bloqueado)
- ❌ file:/// (bloqueado)

---

## 📦 SOLUÇÃO: GitHub Pages (5 minutos, GRÁTIS)

### PASSO 1: Criar conta no GitHub
1. Acesse: https://github.com/
2. Clique em **"Sign up"**
3. Crie sua conta (é grátis)
4. Confirme seu email

### PASSO 2: Criar repositório
1. Clique no **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Preencha:
   - **Nome:** `hardline-extension`
   - **Public** (marcar como público)
   - ✅ Marque "Add a README file"
4. Clique em **"Create repository"**

### PASSO 3: Fazer upload dos arquivos
1. No repositório criado, clique em **"Add file"** → **"Upload files"**
2. Arraste estes arquivos:
   ```
   video_overlay.html
   config.html
   panel.html
   mobile.html
   ```
3. Role até o fim e clique em **"Commit changes"**

### PASSO 4: Ativar GitHub Pages
1. No repositório, clique em **"⚙️ Settings"** (topo)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **"Save"**
5. **AGUARDE 5-10 MINUTOS** (GitHub precisa processar)

### PASSO 5: Copiar suas URLs
Após 5-10 minutos, suas URLs serão:

```
https://SEU-USUARIO.github.io/hardline-extension/video_overlay.html
https://SEU-USUARIO.github.io/hardline-extension/config.html
https://SEU-USUARIO.github.io/hardline-extension/panel.html
https://SEU-USUARIO.github.io/hardline-extension/mobile.html
```

**Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!**

---

## 🎮 CONFIGURAR NA TWITCH

### PASSO 1: Acessar o console de desenvolvedor
1. Acesse: https://dev.twitch.tv/console/extensions
2. Encontre sua extensão "Hardline"
3. Clique nela

### PASSO 2: Configurar as URLs
1. Vá na aba **"Asset Hosting"** (ou "Version")
2. Configure:

```
Video Overlay:
Viewer URL: https://SEU-USUARIO.github.io/hardline-extension/video_overlay.html
✅ Can Link External Content

Config:
Viewer URL: https://SEU-USUARIO.github.io/hardline-extension/config.html

Panel:
Viewer URL: https://SEU-USUARIO.github.io/hardline-extension/panel.html
Height: 300
✅ Can Link External Content

Mobile:
Viewer URL: https://SEU-USUARIO.github.io/hardline-extension/mobile.html
```

3. **SALVE as mudanças!**

### PASSO 3: Testar
1. Na página da extensão, clique em **"Test on Your Channel"**
2. Ou vá para: https://dashboard.twitch.tv/extensions
3. Instale sua extensão
4. Ative nos slots:
   - **Video Overlay:** Slot 1
   - **Panel:** Slot 1
5. Abra sua página da Twitch
6. **Deve aparecer agora!** ✨

---

## 🧪 TESTAR LOCALMENTE PRIMEIRO

Antes de hospedar, teste se está tudo OK:

1. Abra o arquivo **`teste-local.html`** no navegador
2. Você deve ver:
   - ✅ Página estilizada com as cores Hardline (preto + azul neon)
   - ✅ 4 iframes mostrando cada parte da extensão
   - ✅ Preview do overlay no canto superior direito
3. Se aparecer tudo OK, pode hospedar!
4. Se aparecer erros, me avise para corrigir

---

## 🔄 ATUALIZAR A EXTENSÃO

Quando fizer mudanças:

1. No GitHub, vá no arquivo
2. Clique no ícone do lápis ✏️ (Edit)
3. Faça as alterações
4. Clique em **"Commit changes"**
5. Aguarde 1-2 minutos
6. Recarregue sua página Twitch (Ctrl + Shift + R)
7. Pronto! Atualizado ✨

---

## ❌ PROBLEMAS COMUNS

### "Failed to load resource"
**Causa:** GitHub Pages ainda não está ativo
**Solução:** Aguarde mais 5 minutos e tente novamente

### Página branca/vazia
**Causa:** Caminhos incorretos ou arquivos não foram enviados
**Solução:** 
1. Verifique se os arquivos estão na raiz do repositório
2. Teste as URLs diretamente no navegador
3. Veja o console (F12) para erros

### "Mixed content blocked"
**Causa:** Você está tentando carregar HTTP em HTTPS
**Solução:** Todas as URLs devem ser HTTPS

### Extensão não aparece no canal
**Causa:** Não ativou nos slots corretos
**Solução:**
1. Dashboard → Extensions → My Extensions
2. Configure a extensão
3. Ative em Slot 1 (Video Overlay)
4. Ative em Slot 1 (Panel)
5. Salve

---

## 📝 CHECKLIST

Antes de configurar na Twitch:

- [ ] Conta GitHub criada
- [ ] Repositório criado
- [ ] 4 arquivos HTML enviados
- [ ] GitHub Pages ativado
- [ ] Aguardei 10 minutos
- [ ] Testei as URLs no navegador
- [ ] Todas as URLs carregam corretamente
- [ ] Vi o conteúdo estilizado (preto + azul neon)
- [ ] Copiei as URLs corretas
- [ ] Configurei no dev.twitch.tv
- [ ] Salvei as configurações
- [ ] Instalei no meu canal
- [ ] Ativei nos slots corretos
- [ ] Recarreguei a página

✅ SE TUDO OK → Extensão deve aparecer!

---

## 🎯 RESUMO VISUAL

```
ARQUIVOS LOCAIS (❌ NÃO FUNCIONA)
file:///C:/Users/.../video_overlay.html
         ↓
      TWITCH BLOQUEIA
         ↓
    NADA APARECE 😢

════════════════════════════════════

ARQUIVOS HOSPEDADOS (✅ FUNCIONA!)
https://seu-usuario.github.io/hardline-extension/video_overlay.html
         ↓
    HTTPS VÁLIDO
         ↓
   TWITCH ACEITA
         ↓
  EXTENSÃO FUNCIONA! 🎉
```

---

## 🆘 AINDA NÃO FUNCIONA?

Se mesmo após hospedar não aparecer:

1. **Abra o console do navegador:**
   - Pressione F12
   - Vá na aba "Console"
   - Veja se há erros em vermelho
   - Me mande um print dos erros

2. **Verifique as URLs:**
   - Cole as URLs diretamente no navegador
   - Elas devem carregar as páginas
   - Se der 404, o caminho está errado

3. **Limpe o cache:**
   - Ctrl + Shift + R (hard refresh)
   - Ou abra em aba anônima

4. **Verifique se está ativo:**
   - Dashboard → Extensions
   - Sua extensão deve estar "Active"
   - Com checkbox verde ✅

---

**Siga este tutorial e sua extensão vai funcionar! 🚀**

Qualquer dúvida, é só perguntar!
