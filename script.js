// Definindo a referência para a tabela de tarefas no HTML
const taskList = document.getElementById('task-list');

// Array para armazenar as tarefas
const tasks = [];

// Função para renderizar as tarefas na tabela
function renderTasks() {
    // Limpa o conteúdo da tabela
    taskList.innerHTML = '';

    // Percorre o array de tarefas e cria as linhas da tabela dinamicamente
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.description}</td>
            <td>${task.author}</td>
            <td>${task.department}</td>
            <td>${task.importance}</td>
            <td>${task.value || ''}</td>
            <td>${task.duration || ''}</td>
            <td><button onclick="deleteTask(${index})">Excluir</button></td>
        `;
        taskList.appendChild(row);
    });
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1); // Remove a tarefa do array
    renderTasks(); // Re-renderiza a tabela após a exclusão
}

// Exemplo de inclusão de tarefas iniciais
tasks.push({
    description: 'Fazer relatório mensal',
    author: 'João',
    department: 'Contabilidade',
    importance: 'Alta'
});

tasks.push({
    description: 'Reunião com cliente',
    author: 'Maria',
    department: 'Vendas',
    importance: 'Média',
    value: 2000
});

tasks.push({
    description: 'Treinamento da equipe',
    author: 'Carlos',
    department: 'RH',
    importance: 'Baixa',
    duration: '2 horas'
});

// Renderiza as tarefas na tabela
renderTasks();
