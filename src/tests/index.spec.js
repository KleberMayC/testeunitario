const { getVideoAula } = require("..");

describe("getVideoAula", () => {
  it("deve retornar uma video aula com o mesmo nome informado", () => {
    const nomeDaAulaQueEuQuero = "testes unitarios aula 01";
    const urlDaAulaQueEuQuero = "www.videoaula.com/aula.mp3";

    const videoAula = getVideoAula(nomeDaAulaQueEuQuero);

    expect(videoAula.nome).toBe(nomeDaAulaQueEuQuero);
    expect(videoAula.url).toBe(urlDaAulaQueEuQuero);
  });
});
