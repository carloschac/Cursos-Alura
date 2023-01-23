import { Personagem } from "/src/modules/personagem.js";
import { PersonagemView } from "/src/components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const magoAntonio = new Mago("Antonio", 4, "Fogo", 4, 10);
const magaJulia = new Mago("Julia", 10, "gelo", 4, 2);

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render();

console.log(personagemJose.vida);

console.log(new Mago("gelo", 7, 9));
