# ❓ FAQ - Perguntas Frequentes

## 📌 Sobre a Extensão

### O que é esta extensão?
Uma extensão Twitch que exibe cupons promocionais na tela dos viewers com animações e permite aos streamers configurarem códigos personalizados.

### É gratuita?
Sim! Tanto para desenvolver quanto para usar. A hospedagem também pode ser gratuita usando GitHub Pages.

### Preciso saber programar?
Não! Basta seguir o guia passo a passo. Os arquivos já estão prontos, você só precisa fazer upload e configurar.

---

## 🚀 Publicação e Aprovação

### Quanto tempo leva para aprovar?
**Resposta:** Entre 3 a 7 dias úteis. Em alguns casos pode levar até 10 dias.

### O que a Twitch analisa na revisão?
- Se a extensão funciona corretamente
- Se segue as políticas de desenvolvedores
- Se não coleta dados indevidamente
- Se a descrição é precisa
- Se os screenshots representam a extensão

### Minha extensão foi rejeitada, e agora?
1. Leia os motivos da rejeição no email
2. Corrija os problemas apontados
3. Faça upload das correções
4. Reenvie para revisão
5. Não desista! É normal precisar de ajustes

### Posso testar antes de publicar?
**Sim!** Você pode:
1. Usar "Test on Your Channel" no dashboard
2. Adicionar até 100 testadores
3. Testar por tempo ilimitado antes de enviar

---

## 💻 Hospedagem e Técnico

### Posso hospedar no meu PC?
**Não.** Precisa estar em um servidor público com HTTPS. Opções:
- GitHub Pages (gratuito)
- Netlify (gratuito)
- Vercel (gratuito)
- Servidor próprio com SSL

### HTTPS é obrigatório?
**Sim!** A Twitch exige HTTPS para todas as extensões. GitHub Pages fornece isso automaticamente.

### Posso usar um subdomínio?
Sim! Exemplo:
- ✅ `extensao.meusite.com`
- ✅ `seu-usuario.github.io/pasta`
- ✅ `meusite.com/twitch-extension`

### E se meu site sair do ar?
A extensão para de funcionar. Por isso:
- Use hospedagem confiável
- GitHub Pages tem 99.9% uptime
- Configure monitoramento (UptimeRobot gratuito)

---

## 🎨 Personalização

### Posso mudar as cores?
**Sim!** Edite os arquivos HTML:
```css
/* Procure por: */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Substitua pelas suas cores */
```

### Como troco o texto "HARDLINE"?
Em `video_overlay.html`:
```html
<div class="hardline-text pulse">SEU TEXTO AQUI</div>
```

### Posso adicionar meu logo?
Sim! Adicione uma imagem:
```html
<img src="https://seu-site.com/logo.png" alt="Logo" style="width: 50px;">
```

### Posso mudar a posição do overlay?
Sim! No CSS de `video_overlay.html`:
```css
.overlay-container {
    top: 20px;    /* Mude para bottom para ficar embaixo */
    right: 20px;  /* Mude para left para ficar à esquerda */
}
```

---

## 🔧 Problemas Comuns

### "Twitch.ext is not defined"
**Causa:** SDK não carregou
**Solução:** Verifique se esta linha está nos seus HTMLs:
```html
<script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
```

### Extensão não aparece no overlay
**Causas possíveis:**
1. Não ativou no slot correto
2. JavaScript com erro
3. URLs incorretas
4. Cache do navegador

**Soluções:**
1. Dashboard → Extensions → Ative no Slot 1
2. Abra console (F12) e veja erros
3. Verifique as URLs no dev.twitch.tv
4. Ctrl + Shift + R (hard refresh)

### Cupom não atualiza quando mudo
**Causa:** Cache ou configuração não salvou
**Solução:**
1. Certifique-se de clicar em "Salvar"
2. Aguarde 2-3 segundos
3. Recarregue a página (F5)
4. Verifique console do navegador

### "Failed to load resource"
**Causa:** URL do arquivo está errada ou inacessível
**Solução:**
1. Teste a URL no navegador diretamente
2. Certifique-se que está HTTPS
3. Verifique se o GitHub Pages está ativo
4. Aguarde 10 minutos após fazer upload

### Não consigo copiar o cupom
**Causa:** Clipboard API bloqueada
**Solução:** Acontece em alguns navegadores. A extensão já tem fallback automático.

---

## 📱 Mobile e Compatibilidade

### Funciona no mobile?
**Sim!** Incluímos `mobile.html` otimizado para celulares.

### Funciona em todos os navegadores?
Testado e funciona em:
- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Brave

### Funciona no app da Twitch?
Sim! A extensão funciona tanto no navegador quanto no app.

---

## 💰 Monetização

### Posso cobrar pela extensão?
**Não diretamente.** As extensões Twitch são gratuitas para instalação. Porém:
- Pode usar para promover produtos pagos
- Pode usar cupons affiliados
- Pode direcionar para loja própria

### Posso colocar anúncios?
**Não.** Contra as políticas da Twitch.

### Posso rastrear quantas pessoas clicaram?
Sim, mas precisa implementar analytics (Google Analytics, por exemplo) respeitando GDPR.

---

## 🔄 Atualizações

### Como atualizo a extensão?
**Para mudanças pequenas (CSS, texto, etc):**
1. Edite os arquivos no GitHub
2. Commit as mudanças
3. Aguarde 5-10 minutos
4. Pronto! Atualiza automaticamente

**Para mudanças grandes (novas features):**
1. Crie nova versão no dev.twitch.tv
2. Altere os arquivos
3. Submeta para revisão novamente

### Preciso aprovar cada atualização?
**Não** para mudanças menores (correções, CSS).
**Sim** para mudanças estruturais ou novas funcionalidades.

### Como sei quantas pessoas usam minha extensão?
No Console de Desenvolvedores Twitch:
- Dashboard → Extensions → Analytics
- Veja instalações, ativações, visualizações

---

## 🛡️ Segurança e Privacidade

### A extensão coleta dados?
**Não.** Ela não coleta dados pessoais. Apenas exibe o cupom configurado.

### Preciso de GDPR?
Esta extensão está em conformidade. Incluímos `privacy.html` já pronta.

### Posso ver quem usou o cupom?
**Não pela extensão.** Mas pode:
- Usar link com UTM tracking
- Solicitar código único por streamer
- Usar sistema de afiliados próprio

---

## 👥 Suporte e Comunidade

### Onde pedir ajuda?
1. **Documentação oficial:** https://dev.twitch.tv/docs/extensions
2. **Fórum:** https://discuss.dev.twitch.tv/
3. **Discord:** Twitch Developers Discord
4. **Reddit:** r/Twitch

### Posso contratar alguém para fazer pra mim?
Sim! Plataformas:
- Fiverr
- Upwork
- 99Freelas
- Workana

Custo estimado: $50-200 USD

### Posso vender extensões customizadas?
Sim! Muitos desenvolvedores fazem extensões sob encomenda.

---

## 📊 Estatísticas e Métricas

### Como vejo quantos cliques o cupom teve?
Você precisa adicionar Google Analytics ou similar. Exemplo:

```javascript
// Adicionar no video_overlay.html
function trackClick() {
    gtag('event', 'coupon_click', {
        'coupon_code': currentCoupon
    });
}
```

### Posso A/B testar diferentes cupons?
Sim, mas precisa implementar lógica adicional. A extensão atual é simples e mostra um cupom único.

---

## 🎓 Aprendizado

### Onde aprendo mais sobre desenvolvimento Twitch?
- **Twitch Dev Docs:** https://dev.twitch.tv/docs
- **YouTube:** "Twitch Extension Tutorial"
- **Udemy:** Cursos de extensões Twitch
- **GitHub:** Exemplos open source

### Preciso saber JavaScript avançado?
Para esta extensão: **Não**
Para extensões mais complexas: **Sim**

### Quais tecnologias são usadas?
- HTML5
- CSS3
- JavaScript (Vanilla)
- Twitch Extension SDK
- Local Storage API

---

## 🔮 Próximos Passos

### Ideias de melhorias futuras:

1. **Múltiplos cupons**
   - Rodar entre vários códigos
   - Diferentes cupons por horário

2. **Contador de tempo**
   - "Cupom expira em 10 minutos"
   - Urgência para aumentar conversão

3. **Sons e efeitos**
   - Som ao aparecer
   - Partículas animadas

4. **Integração com banco de dados**
   - Rastrear uso de cupons
   - Dashboard de analytics

5. **Gamificação**
   - Cupons desbloqueados por bits
   - Raridade de cupons
   - Cupons exclusivos para subs

### Como implementar melhorias?
1. Edite os arquivos HTML/CSS/JS
2. Teste localmente (pode usar Live Server)
3. Faça upload no GitHub
4. Teste no seu canal
5. Se funcionar, já está atualizado! ✨

---

## 💡 Dicas Pro

### 1. Use variáveis CSS
```css
:root {
    --cor-principal: #667eea;
    --cor-secundaria: #764ba2;
}
```
Facilita mudar cores depois.

### 2. Minifique o código
Use https://www.minifier.org/ para reduzir tamanho dos arquivos.

### 3. CDN para melhor performance
Considere usar CloudFlare ou outro CDN.

### 4. Teste em vários dispositivos
- Desktop (Windows/Mac)
- Mobile (Android/iOS)
- Tablet
- Diferentes navegadores

### 5. Monitore erros
Use Sentry.io ou similar para rastrear bugs em produção.

---

## 📞 Contato e Créditos

**Criado por:** [Seu Nome]
**Email:** seu.email@exemplo.com
**GitHub:** github.com/seu-usuario

---

**Última atualização:** Maio 2026

**Versão do FAQ:** 1.0

---

## ✅ Checklist Final

Antes de publicar, confirme:

- [ ] Todos os arquivos hospedados em HTTPS
- [ ] Ícone 128x128px criado e carregado
- [ ] Pelo menos 1 screenshot adicionado
- [ ] Descrição completa preenchida
- [ ] Email de suporte válido
- [ ] URLs testadas e funcionando
- [ ] Testou no seu próprio canal
- [ ] Config salva corretamente
- [ ] Cupom aparece no overlay
- [ ] Cupom aparece no panel
- [ ] Click funciona corretamente
- [ ] Copy funciona corretamente
- [ ] Mobile funciona (se aplicável)
- [ ] Sem erros no console (F12)
- [ ] Privacy policy adicionada
- [ ] Leu as políticas da Twitch
- [ ] Pronto para submeter! 🚀

---

**Boa sorte com sua extensão! 🎮✨**

Se tiver mais dúvidas, consulte a documentação oficial ou entre em contato com a comunidade de desenvolvedores Twitch.
