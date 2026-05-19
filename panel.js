let currentCoupon = 'HARDLINE10';
let targetLink = 'https://hardline.gg/';

window.Twitch.ext.onAuthorized((auth) => {
    console.log('Panel autorizado:', auth);
});

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
    navigator.clipboard.writeText(currentCoupon).then(() => {
        const msg = document.getElementById('copiedMessage');
        if (msg) {
            msg.classList.add('show');
            setTimeout(() => {
                msg.classList.remove('show');
            }, 2000);
        }
    });
}

function openLink() {
    window.open(targetLink, '_blank');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const couponCodeEl = document.getElementById('couponCode');
    if (couponCodeEl) {
        couponCodeEl.textContent = currentCoupon;
    }

    const copyBtn = document.querySelector('.copy-button[data-action="copy"]');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyCoupon);
    }

    const openLinkBtn = document.querySelector('.copy-button[data-action="open"]');
    if (openLinkBtn) {
        openLinkBtn.addEventListener('click', openLink);
    }
});
