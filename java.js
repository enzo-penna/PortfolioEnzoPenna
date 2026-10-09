const toggleButton = document.getElementById('btntema');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      toggleButton.textContent = 'Modo escuro';
    } else {
      toggleButton.textContent = 'Modo claro';
    }
  });
}

const elemento = document.querySelector(".digitando");
const frase = "Olá, sou o Enzo";
let index = 0;

function digitarFrase() {
  if (index < frase.length) {
    elemento.textContent += frase.charAt(index);
    index++;
    setTimeout(digitarFrase, 100);
  }
}

window.onload = digitarFrase;

const observador = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.animar').forEach(elemento => {
  observador.observe(elemento);
});

  
const btnHabilidades = document.querySelector('.verhb');
const btnContato = document.querySelector('button.contato');

btnHabilidades.addEventListener('click', () => {
  document.getElementById('habilidades').scrollIntoView({ behavior: 'smooth' });
});

btnContato.addEventListener('click', () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});
