const nomes = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinicius',
  'Renan',
  'Renata'
]

console.log('Tamanho da array', nomes.lenght)

const sala1 = nomes.slice(0, nomes.lenght / 2)

const sala2 = nomes.slice(nomes.lenght / 2)

console.log(`Alunos da sala1: ${sala1}`)

console.log(`Alunos da sala2: ${sala2}`)
