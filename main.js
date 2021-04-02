/*(function() {
    emailjs.init("user_KDIDFdrab8kxDjaCA6T6J");
})();
      
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_dvoy198', 'template_ky0yu9w', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}*/

(function() {
    emailjs.init("user_KDIDFdrab8kxDjaCA6T6J");
})();
      
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_htogygm', 'template_ky0yu9w', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
