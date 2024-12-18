document.addEventListener("DOMContentLoaded", function() {
  const username = "FilipeAzevedog"; // Substitua pelo seu nome de usuário do GitHub
  const projectList = document.getElementById('project-list');

  axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      const repos = response.data;
      repos.forEach(repo => {
        const projectItem = document.createElement('div');
        projectItem.className = 'bg-white p-4 rounded shadow hover:bg-green-100 transition duration-300';
        projectItem.innerHTML = `
          <h3 class="text-xl font-semibold">${repo.name}</h3>
          <p>${repo.description || 'Sem descrição'}</p>
          <a href="${repo.html_url}" target="_blank" class="text-green-600 hover:underline">Ver Projeto</a>
        `;
        projectList.appendChild(projectItem);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar os repositórios:', error);
    });

  // Animação para o bot corrigindo vulnerabilidades
  const botAnimation = document.getElementById('bot-animation');
  setInterval(() => {
    botAnimation.classList.toggle('animate-pulse');
  }, 2000);
});
