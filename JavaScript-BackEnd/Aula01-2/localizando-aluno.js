const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = nomeDoAluno => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    indice = listaDeNotasEAlunos.indexOf(nomeDoAluno)
  }
}
