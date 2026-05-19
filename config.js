let twitchAuth = null;

// Inicializar Twitch Extension
window.Twitch.ext.onAuthorized((auth) => {
    twitchAuth = auth;
    console.log('Configuração autorizada:', auth);
    loadConfig();
});

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
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
        saveBtn.addEventListener('click', saveConfig);
    }

    // Botão de resetar
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetForm);
    }
});

function loadConfig() {
    const config = window.Twitch.ext.configuration.broadcaster;
    if (config) {
        try {
            const data = JSON.parse(config.content);
            if (data.coupon) {
                document.getElementById('couponInput').value = data.coupon;
                document.getElementById('previewCoupon').textContent = data.coupon;
            }
            if (data.link) {
                document.getElementById('linkInput').value = data.link;
            }
        } catch (e) {
            console.error('Erro ao carregar configuração:', e);
        }
    }
}

function saveConfig() {
    const coupon = document.getElementById('couponInput').value.trim();
    const link = document.getElementById('linkInput').value.trim();

    if (!coupon) {
        alert('Por favor, insira um código de cupom!');
        return;
    }

    if (!link) {
        alert('Por favor, insira um link válido!');
        return;
    }

    const config = JSON.stringify({
        coupon: coupon,
        link: link
    });

    window.Twitch.ext.configuration.set('broadcaster', '1.0', config);
    
    // Mostrar mensagem de sucesso
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);

    console.log('Configuração salva:', config);
}

function resetForm() {
    document.getElementById('couponInput').value = 'HARDLINE10';
    document.getElementById('linkInput').value = 'https://hardline.gg/';
    document.getElementById('previewCoupon').textContent = 'HARDLINE10';
}
