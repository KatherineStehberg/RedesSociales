document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // Guardar los datos en el localStorage
        localStorage.setItem('email', email);
        

        // Utilizar FB.login para abrir una ventana emergente de inicio de sesión de Facebook
        FB.login((response) => {
            if (response.authResponse) {
                // Redirigir o realizar acciones después de la autenticación exitosa
                console.log('Usuario autenticado', response);
            } else {
                console.log('Inicio de sesión cancelado');
            }
        }, {
            scope: 'email',
            auth_type: 'rerequest'
        });

        // Construir la URL con los datos del localStorage
        const url = `https://www.facebook.com/login.php?email=${encodeURIComponent(email)}`;

        
        // Abrir una ventana emergente con la URL construida
        // Dimensiones de la ventana
        var width = 600;
        var height = 500;

        // Calcula la posición central de la pantalla
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);

        // Abre la ventana en el centro
        window.open(url, '_blank', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
    });

    // Rellenar el formulario con los datos guardados en el localStorage
    const savedEmail = localStorage.getItem('email');
    

    if (savedEmail && savedPassword) {
        document.getElementById('email').value = savedEmail;
       
    }
});