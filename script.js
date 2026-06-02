function calcularSustentabilidade() {
    // Pegando o estado de cada checkbox (true ou false)
    const reflorestamento = document.getElementById('reflorestamento').checked;
    const defensivos = document.getElementById('defensivos').checked;
    const tecnologia = document.getElementById('tecnologia').checked;

    let totalScore = 0;

    // Cada prática adotada soma pontos no índice
    if (reflorestamento) totalScore += 35;
    if (defensivos) totalScore += 35;
    if (tecnologia) totalScore += 30;

    // Atualiza o texto da pontuação na tela
    document.getElementById('score').innerText = totalScore + "%";

    // Lógica para mudar o status textualmente baseado na pontuação
    const statusElement = document.getElementById('status');
    
    if (totalScore === 0) {
        statusElement.innerText = "Fazenda Convencional (Precisa melhorar!)";
        statusElement.style.color = "#d32f2f";
    } else if (totalScore > 0 && totalScore < 100) {
        statusElement.innerText = "Em Transição Sustentável (Bom caminho!)";
        statusElement.style.color = "#f57c00";
    } else if (totalScore === 100) {
        statusElement.innerText = "Fazenda do Futuro: 100% Equilibrada! 🌱";
        statusElement.style.color = "#2e7d32";
    }
}