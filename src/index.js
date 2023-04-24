function getVideoAula(nome) {
  const aulas = [
    {
      nome: "testes unitarios aula 01",
      url: "www.videoaula.com/aula.mp3",
    },
    {
      nome: "testes unitarios aula 02",
      url: "www.videoaula.com/aula2.mp3",
    },
  ];
  const aula = aulas.find((aula) => aula.nome === nome);

  if (!aula) {
    const resultadoNaoEncontrado = {
      erro: "aula não encontrada para este nome: " + nome,
      ok: false,
    };

    return resultadoNaoEncontrado;
  }

  return aula;
}

module.exports = { getVideoAula };
