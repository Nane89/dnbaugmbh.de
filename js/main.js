// Minimal main.js for interactive enhancements
document.addEventListener('DOMContentLoaded', function () {
  // set current year in footer
  var y = new Date().getFullYear();
  document.querySelectorAll('#current-year').forEach(function (el) { el.textContent = y; });

  // simple client-side form validation for contact form
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
      }
    }, false);
  }
});
