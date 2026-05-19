let twitchAuth = null;
let isDOMReady = false;
let isTwitchReady = false;

// Event Listeners - Configurar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM carregado');
    isDOMReady = true;
    
    // Atualizar preview em tempo real
    const couponInput = document.getElementById('couponInput');
    if (couponInput) {
        couponInput.addEventListener('input', function() {
            const previewCoupon = document.getElementById('previewCoupon');
            if (previewCoupon) {
                previewCoupon.textContent = this.value || 'HARDLINE10';
            }
        });
    }

    // Botão de salvar
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            console.log('🔘 Botão Salvar clicado');
            saveConfig();
        });
        console.log('✅ Event listener do botão Salvar registrado');
    } else {
        console.error('❌ Botão saveBtn não encontrado!');
    }

    // Botão de resetar
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            console.log('🔘 Botão Resetar clicado');
            resetForm();
        });
        console.log('✅ Event listener do botão Resetar registrado');
    }

    // Se Twitch já está pronto, carregar config
    if (isTwitchReady) {
        loadConfig();
    }
});

// Inicializar Twitch Extension
if (window.Twitch && window.Twitch.ext) {
    window.Twitch.ext.onAuthorized((auth) => {
        twitchAuth = auth;
        isTwitchReady = true;
        console.log('✅ Twitch autorizado:', auth);
        console.log('📍 Channel ID:', auth.channelId);
        console.log('📍 User ID:', auth.userId);
        
        // Se DOM já está pronto, carregar config
        if (isDOMReady) {
            loadConfig();
        }
    });

    // Escutar mudanças na configuração
    window.Twitch.ext.configuration.onChanged(() => {
        console.log('🔔 Configuração alterada! Recarregando...');
        loadConfig();
    });
} else {
    console.error('❌ Twitch SDK não encontrado!');
}

function loadConfig() {
    console.log('📥 Carregando configuração...');
    
    if (!window.Twitch || !window.Twitch.ext) {
        console.error('❌ Twitch SDK não disponível');
        return;
    }

    // Verificar todos os tipos de configuração
    const broadcasterConfig = window.Twitch.ext.configuration.broadcaster;
    const globalConfig = window.Twitch.ext.configuration.global;
    const developerConfig = window.Twitch.ext.configuration.developer;
    
    console.log('📦 Configurações disponíveis:');
    console.log('  - Broadcaster:', broadcasterConfig);
    console.log('  - Global:', globalConfig);
    console.log('  - Developer:', developerConfig);

    // Tentar carregar da configuração broadcaster
    if (broadcasterConfig && broadcasterConfig.content) {
        try {
            const data = JSON.parse(broadcasterConfig.content);
            console.log('📦 Dados carregados (broadcaster):', data);
            
            const couponInput = document.getElementById('couponInput');
            const previewCoupon = document.getElementById('previewCoupon');
            const linkInput = document.getElementById('linkInput');
            
            if (data.coupon && couponInput && previewCoupon) {
                couponInput.value = data.coupon;
                previewCoupon.textContent = data.coupon;
                console.log('✅ Cupom carregado:', data.coupon);
            }
            if (data.link && linkInput) {
                linkInput.value = data.link;
                console.log('✅ Link carregado:', data.link);
            }
            
            console.log('✅ Configuração carregada com sucesso');
            return;
        } catch (e) {
            console.error('❌ Erro ao carregar configuração:', e);
        }
    }
    
    // Se não encontrou, tentar global
    if (globalConfig && globalConfig.content) {
        try {
            const data = JSON.parse(globalConfig.content);
            console.log('📦 Dados carregados (global):', data);
            
            const couponInput = document.getElementById('couponInput');
            const previewCoupon = document.getElementById('previewCoupon');
            const linkInput = document.getElementById('linkInput');
            
            if (data.coupon && couponInput && previewCoupon) {
                couponInput.value = data.coupon;
                previewCoupon.textContent = data.coupon;
            }
            if (data.link && linkInput) {
                linkInput.value = data.link;
            }
            
            console.log('✅ Configuração global carregada');
            return;
        } catch (e) {
            console.error('❌ Erro ao carregar configuração global:', e);
        }
    }
    
    console.log('ℹ️ Nenhuma configuração salva ainda');
}

function saveConfig() {
    console.log('💾 Tentando salvar configuração...');
    
    if (!window.Twitch || !window.Twitch.ext) {
        console.error('❌ Twitch SDK não disponível');
        alert('Erro: Twitch SDK não está disponível. Recarregue a página.');
        return;
    }

    if (!twitchAuth) {
        console.error('❌ Extensão não autorizada');
        alert('Erro: Extensão não autorizada. Aguarde alguns segundos e tente novamente.');
        return;
    }

    const couponInput = document.getElementById('couponInput');
    const linkInput = document.getElementById('linkInput');
    
    if (!couponInput || !linkInput) {
        console.error('❌ Elementos do formulário não encontrados');
        return;
    }

    const coupon = couponInput.value.trim();
    const link = linkInput.value.trim();

    console.log('📝 Valores a salvar:', { coupon, link });

    if (!coupon) {
        alert('Por favor, insira um código de cupom!');
        console.warn('⚠️ Cupom vazio');
        return;
    }

    if (!link) {
        alert('Por favor, insira um link válido!');
        console.warn('⚠️ Link vazio');
        return;
    }

    const config = JSON.stringify({
        coupon: coupon,
        link: link
    });

    console.log('📤 Enviando configuração:', config);

    try {
        // Salvar como broadcaster configuration
        window.Twitch.ext.configuration.set('broadcaster', '1', config);
        console.log('✅ Configuração broadcaster salva!');
        
        // Aguardar um pouco e verificar se salvou
        setTimeout(() => {
            const saved = window.Twitch.ext.configuration.broadcaster;
            console.log('🔍 Verificando configuração salva:', saved);
            if (saved && saved.content) {
                console.log('✅ Confirmado: configuração persistida');
            } else {
                console.warn('⚠️ Configuração pode não ter sido persistida');
            }
        }, 500);
        
        // Mostrar mensagem de sucesso
        const successMsg = document.getElementById('successMessage');
        if (successMsg) {
            successMsg.classList.add('show');
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 3000);
        }
    } catch (e) {
        console.error('❌ Erro ao salvar:', e);
        alert('Erro ao salvar configuração. Verifique o console (F12) para mais detalhes.');
    }
}

function resetForm() {
    console.log('🔄 Resetando formulário...');
    
    const couponInput = document.getElementById('couponInput');
    const linkInput = document.getElementById('linkInput');
    const previewCoupon = document.getElementById('previewCoupon');
    
    if (couponInput) couponInput.value = 'HARDLINE10';
    if (linkInput) linkInput.value = 'https://hardline.gg/';
    if (previewCoupon) previewCoupon.textContent = 'HARDLINE10';
    
    console.log('✅ Formulário resetado');
}
