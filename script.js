// Variáveis de controle de tamanho de fonte
let fontSizeLevel = 1;
const maxFontSizeLevel = 5; // Nível máximo de aumento
const minFontSizeLevel = 1; // Nível mínimo de diminuição

// Função para ajustar o tamanho da fonte
function ajustarFonte() {
    document.documentElement.style.fontSize = (100 + (fontSizeLevel - 1) * 10) + '%'; // Aumenta ou diminui em passos de 10%
}

// Função para aumentar a fonte
document.getElementById('aumentar-fonte')?.addEventListener('click', function() {
    if (fontSizeLevel < maxFontSizeLevel) {
        fontSizeLevel++;
        ajustarFonte();
    }
});

// Função para diminuir a fonte
document.getElementById('diminuir-fonte')?.addEventListener('click', function() {
    if (fontSizeLevel > minFontSizeLevel) {
        fontSizeLevel--;
        ajustarFonte();
    }
});

// Variável de controle de contraste
let contrasteAtivo = 0;
const contrastClasses = ['alto-contraste', 'contraste-medio', 'contraste-baixo']; // Exemplo de classes de contraste

// Função para alternar o contraste
document.getElementById('alterar-contraste')?.addEventListener('click', function() {
    document.body.classList.remove(...contrastClasses); // Remove todas as classes de contraste
    contrasteAtivo = (contrasteAtivo + 1) % contrastClasses.length; // Alterna entre os níveis de contraste
    document.body.classList.add(contrastClasses[contrasteAtivo]); // Adiciona a nova classe de contraste
});

// Função para alternar o submenu com atalho Alt+2
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === '2') {
        event.preventDefault();
        const submenu = document.querySelector('.submenu .submenu-lista');
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
});

// Adicionando eventos para mostrar e esconder o submenu ao passar o mouse
const submenu = document.querySelector('.submenu');
submenu.addEventListener('mouseover', function() {
    const submenuLista = submenu.querySelector('.submenu .submenu-lista');
    submenuLista.style.display = 'block';
});

submenu.addEventListener('mouseout', function() {
    const submenuLista = submenu.querySelector('.submenu .submenu-lista');
    submenuLista.style.display = 'none';
});
