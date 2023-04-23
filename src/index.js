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
  return aulas.find(aula => aula.nome === nome);
}

module.exports = { getVideoAula };


