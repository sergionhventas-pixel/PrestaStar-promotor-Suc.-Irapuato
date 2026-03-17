// Menú Hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Funcionalidad del formulario de registro
    const registroForm = document.getElementById('registroForm');
    
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const ubicacion = document.getElementById('ubicacion').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Obtener perfiles seleccionados
            const perfiles = Array.from(document.querySelectorAll('input[name="perfil"]:checked'))
                .map(cb => cb.value)
                .join(', ');
            
            // Obtener comprobantes seleccionados
            const comprobantes = Array.from(document.querySelectorAll('input[name="comprobante"]:checked'))
                .map(cb => cb.value)
                .join(', ');
            
            // Crear mensaje para WhatsApp
            const whatsappMessage = `¡Hola! Me gustaría unirme a PrestaStar Promotor.\n\n` +
                `*Datos Personales:*\n` +
                `Nombre: ${nombre}\n` +
                `Correo: ${email}\n` +
                `Teléfono: ${telefono}\n` +
                `Ubicación: ${ubicacion}\n\n` +
                `*Mi Perfil(es):*\n${perfiles}\n\n` +
                `*Comprobantes que puedo presentar:*\n${comprobantes}\n\n` +
                `${mensaje ? `*Mensaje adicional:*\n${mensaje}\n\n` : ''}` +
                `Por favor, enviaré mis comprobantes por este medio.`;
            
            const whatsappUrl = `https://wa.me/4624931734?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Limpiar formulario
            registroForm.reset();
            
            // Mostrar confirmación
            alert('¡Gracias! Tu información será enviada por WhatsApp. Por favor, envía tus comprobantes en el chat.');
        });
    }
    
    // Funcionalidad del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email-contact').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Crear mensaje para WhatsApp
            const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}, teléfono ${phone}. ${message}`;
            const whatsappUrl = `https://wa.me/4624931734?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Limpiar formulario
            contactForm.reset();
            
            // Mostrar confirmación
            alert('¡Gracias! Tu mensaje será enviado por WhatsApp.');
        });
    }
    
    // Smooth scroll para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
