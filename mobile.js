let currentCoupon = 'HARDLINE10';
let targetLink = 'https://hardline.gg/';

// Inicializar Twitch Extension
window.Twitch.ext.onAuthorized((auth) => {
    console.log('Mobile extension autorizada:', auth);
});

// Escutar atualizações do broadcaster
window.Twitch.ext.configuration.onChanged(() => {
    const config = window.Twitch.ext.configuration.broadcaster;
    if (config) {
        try {
            const data = JSON.parse(config.content);
            if (data.coupon) {
                currentCoupon = data.coupon;
                const couponCodeEl = document.getElementById('couponCode');
                if (couponCodeEl) {
                    couponCodeEl.textContent = currentCoupon;
                }
            }
            if (data.link) {
                targetLink = data.link;
            }
        } catch (e) {
            console.error('Erro ao parse da configuração:', e);
        }
    }
});

function copyCoupon() {
    // Para mobile, usar a Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentCoupon).then(() => {
            showToast();
        }).catch(err => {
            // Fallback para iOS
            fallbackCopy();
        });
    } else {
        fallbackCopy();
    }
}

function fallbackCopy() {
    // Método alternativo para dispositivos que não suportam clipboard API
    const textArea = document.createElement('textarea');
    textArea.value = currentCoupon;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast();
    } catch (err) {
        alert('Cupom: ' + currentCoupon);
    }
    
    document.body.removeChild(textArea);
}

function showToast() {
    const toast = document.getElementById('copiedToast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
}

function openLink() {
    // Abrir link em nova aba
    window.open(targetLink, '_blank');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Definir cupom inicial
    const couponCodeEl = document.getElementById('couponCode');
    if (couponCodeEl) {
        couponCodeEl.textContent = currentCoupon;
    }

    // Botões
    const copyBtn = document.querySelector('[data-action="copy"]');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyCoupon);
    }

    const openBtn = document.querySelector('[data-action="open"]');
    if (openBtn) {
        openBtn.addEventListener('click', openLink);
    }
});
