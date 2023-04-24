const { getVideoAula } = require("..");

describe("getVideoAula", () => {
  it("deve retornar uma video aula com o mesmo nome informado", () => {
    const nomeDaAulaQueEuQuero = "testes unitarios aula 01";
    const urlDaAulaQueEuQuero = "www.videoaula.com/aula.mp3";

    const videoAula = getVideoAula(nomeDaAulaQueEuQuero);

    expect(videoAula.nome).toBe(nomeDaAulaQueEuQuero);
    expect(videoAula.url).toBe(urlDaAulaQueEuQuero);
  });

  it("não deve ser capaz de retornar uma video aula caso o nome passodo não corresponda a nenhum registro", () => {
    const nomeDaAulaQueEuQuero = "aula que não existe";
    // const urlDaAulaQueEuQuero = "url que não existe";

    const videoAula = getVideoAula(nomeDaAulaQueEuQuero);

    expect(videoAula.ok).toBe(false);
    expect(videoAula.erro).toBe(
      "aula não encontrada para este nome: " + nomeDaAulaQueEuQuero
    );
  });
});
