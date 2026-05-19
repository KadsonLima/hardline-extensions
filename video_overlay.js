let currentCoupon = 'HARDLINE10';
let targetLink = 'https://hardline.gg/';

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🎮 HARDLINE EXTENSION');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Overlay carregado e VISÍVEL');
console.log('📍 Posição: Canto superior direito');
console.log('🎫 Cupom: ' + currentCoupon);
console.log('🔗 Link: ' + targetLink);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Funções globais
function showLink() {
    console.log('👆 Clique detectado! Abrindo modal...');
    document.getElementById('linkOverlay').classList.add('show');
    document.getElementById('couponText').textContent = currentCoupon;
}

function closeLink() {
    console.log('✖ Fechando modal...');
    document.getElementById('linkOverlay').classList.remove('show');
}

function openLink() {
    console.log('🚀 Abrindo link:', targetLink);
    window.open(targetLink, '_blank');
    closeLink();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Clique no container do cupom
    const couponContainer = document.getElementById('couponContainer');
    if (couponContainer) {
        couponContainer.addEventListener('click', showLink);
    }

    // Clique no overlay para fechar
    const linkOverlay = document.getElementById('linkOverlay');
    if (linkOverlay) {
        linkOverlay.addEventListener('click', function(e) {
            if (e.target === linkOverlay) {
                closeLink();
            }
        });
    }

    // Prevenir que cliques no conteúdo fechem o modal
    const linkContent = document.getElementById('linkContent');
    if (linkContent) {
        linkContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Botão de abrir link
    const openLinkBtn = document.getElementById('openLinkBtn');
    if (openLinkBtn) {
        openLinkBtn.addEventListener('click', openLink);
    }

    // Botão de fechar
    const closeLinkBtn = document.getElementById('closeLinkBtn');
    if (closeLinkBtn) {
        closeLinkBtn.addEventListener('click', closeLink);
    }

    // Atualizar o cupom inicial
    document.getElementById('couponCode').textContent = currentCoupon;
    document.getElementById('couponText').textContent = currentCoupon;
    
    console.log('✅ Inicialização completa!');
});

// Inicializar Twitch Extension
if (window.Twitch && window.Twitch.ext) {
    console.log('✅ Twitch SDK encontrado');
    
    window.Twitch.ext.onAuthorized((auth) => {
        console.log('✅ Extension autorizada:', auth);
    });

    // Escutar atualizações do broadcaster
    window.Twitch.ext.configuration.onChanged(() => {
        const config = window.Twitch.ext.configuration.broadcaster;
        if (config) {
            try {
                const data = JSON.parse(config.content);
                console.log('📥 Nova configuração recebida:', data);
                
                if (data.coupon) {
                    currentCoupon = data.coupon;
                    const couponCodeEl = document.getElementById('couponCode');
                    const couponTextEl = document.getElementById('couponText');
                    if (couponCodeEl) couponCodeEl.textContent = currentCoupon;
                    if (couponTextEl) couponTextEl.textContent = currentCoupon;
                    console.log('🎫 Cupom atualizado:', currentCoupon);
                }
                if (data.link) {
                    targetLink = data.link;
                    console.log('🔗 Link atualizado:', targetLink);
                }
            } catch (e) {
                console.error('❌ Erro ao parse da configuração:', e);
            }
        }
    });
} else {
    console.warn('⚠️ Twitch SDK não encontrado (normal se testar localmente)');
}

// Inicializar Twitch Extension
if (window.Twitch && window.Twitch.ext) {
    console.log('✅ Twitch SDK encontrado');
    
    window.Twitch.ext.onAuthorized((auth) => {
        console.log('✅ Extension autorizada:', auth);
    });

    // Escutar atualizações do broadcaster
    window.Twitch.ext.configuration.onChanged(() => {
        const config = window.Twitch.ext.configuration.broadcaster;
        if (config) {
            try {
                const data = JSON.parse(config.content);
                console.log('📥 Nova configuração recebida:', data);
                
                if (data.coupon) {
                    currentCoupon = data.coupon;
                    document.getElementById('couponCode').textContent = currentCoupon;
                    document.getElementById('couponText').textContent = currentCoupon;
                    console.log('🎫 Cupom atualizado:', currentCoupon);
                }
                if (data.link) {
                    targetLink = data.link;
                    console.log('🔗 Link atualizado:', targetLink);
                }
            } catch (e) {
                console.error('❌ Erro ao parse da configuração:', e);
            }
        }
    });
} else {
    console.warn('⚠️ Twitch SDK não encontrado (normal se testar localmente)');
}

// Atualizar o cupom inicial
document.getElementById('couponCode').textContent = currentCoupon;
document.getElementById('couponText').textContent = currentCoupon;

console.log('✅ Inicialização completa!');
