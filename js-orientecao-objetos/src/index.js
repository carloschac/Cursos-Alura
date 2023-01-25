import { Personagem } from "/src/modules/personagem.js";
import { PersonagemView } from "/src/components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago("Antonio", 4, "Fogo", 9, 10);
const magaJulia = new Mago("Julia", 10, "gelo", 7, 5);
const arqueiroTeste = new Arqueiro("Archer1", 6, 10);
const arqueiroMagoChico = new ArqueiroMago("Chico", 10, 6, "gelo", 7, 8);
const guerreiroPedro = new Guerreiro("Pedro", 10);

const personagens = [
  magoAntonio,
  magaJulia,
  arqueiroTeste,
  arqueiroMagoChico,
  guerreiroPedro,
];

new PersonagemView(personagens).render();

//magoAntonio.#level = 15;

//console.log(new Mago("gelo", 7, 9));
//console.log(Personagem.verificarVencedor(magoAntonio, arqueiroTeste));
console.log(magoAntonio);
