async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("Cep não existe");
    }
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`;
    console.log(erro);
  }
}
var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
