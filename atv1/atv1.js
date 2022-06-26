let dados = [
    {
        nome: 'Alisson',
        cargo: 'Estagio',
        salario: 800
    },
    {
        nome: 'Bernardo',
        cargo: 'Junior',
        salario: 1500
    },
    {
        nome: 'Carlos',
        cargo: 'Senior',
        salario: 3000
    }
];

console.log('Imprimindo os dados do Array');
console.log(dados);

console.log('\nUsando Map para mapear o nome dos funcionários');
funcionarios = 'Funcionários: '+dados.map((dados)=>dados.nome);
console.log(funcionarios);

console.log('\nSelecionando o primeiro dado do Array');
console.log(dados[1]);

console.log('\nUsando Reduce para somar todos os salarios');
totSalarios = 'Valor total dos salários: ' + dados.reduce((a, dados) => (a = a + dados.salario), 0);
console.log(totSalarios);

console.log('\nUsando Filter para remover os os dados do funcionário Alisson');
novaLista = dados.filter((dados) => dados.nome !== 'Alisson');
console.log(novaLista);

