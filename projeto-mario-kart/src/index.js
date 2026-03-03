const player1 = {
  name: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  name: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 2,
  pontos: 0,
};

const player3 = {
  name: "Bowser",
  velocidade: 5,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

const player4 = {
  name: "Peach",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 2,
  pontos: 0,
};

const player5 = {
  name: "Yoshi",
  velocidade: 2,
  manobrabilidade: 4,
  poder: 3,
  pontos: 0,
};

const player6 = {
  name: "Donkey Kong",
  velocidade: 2,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}...`);

    //sorteio de dados para cada jogador
    let block = await getRandomBlock();
    console.log(`🎲 Bloco sorteado: ${block}`);

    //rolar os dados para cada jogador
    let dice1 = await rollDice();
    let dice2 = await rollDice();

    //teste de habilidades
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = character1.velocidade + dice1;
      totalTestSkill2 = character2.velocidade + dice2;

      await logRollResult(
        character1.name,
        "velocidade",
        dice1,
        character1.velocidade,
      );

      await logRollResult(
        character2.name,
        "velocidade",
        dice2,
        character2.velocidade,
      );
    }
    if (block === "CURVA") {
      totalTestSkill1 = character1.manobrabilidade + dice1;
      totalTestSkill2 = character2.manobrabilidade + dice2;

      await logRollResult(
        character1.name,
        "manobrabilidade",
        dice1,
        character1.manobrabilidade,
      );

      await logRollResult(
        character2.name,
        "manobrabilidade",
        dice2,
        character2.manobrabilidade,
      );
    }
    if (block === "CONFRONTO") {
      let power1 = character1.poder + dice1;
      let power2 = character2.poder + dice2;

      console.log(`${character1.name} confrontou com ${character2.name}!🥊`);

      await logRollResult(character1.name, "poder", dice1, character1.poder);

      await logRollResult(character2.name, "poder", dice2, character2.poder);

      // character2.pontos -= power1 > power2 && character2.pontos > 0 ? 1 : 0;
      // character1.pontos -= power2 > power1 && character1.pontos > 0 ? 1 : 0;
        // console.log(
        //   power2 == power1 ? "🤝 Empate no confronto! Nenhum ponto foi perdido.",
        // );
      if (power1 > power2) {
        if (character2.pontos > 0) {
          character2.pontos --;
          console.log(`\n💥 ${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto.`);
        }
    }
      if (power2 > power1) {
        if (character1.pontos > 0) {
          character1.pontos --;
          console.log(`\n💥 ${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto.`);
        }  
      }
      if (power2 == power1) {
        console.log(`🤝 Empate no confronto! Nenhum ponto foi perdido.`);
      }
    }
    if (totalTestSkill1 > totalTestSkill2) {
      character1.pontos += 1;
      console.log(`\n🏆 ${character1.name} venceu a rodada!`);
    } else if (totalTestSkill2 > totalTestSkill1) {
      character2.pontos += 1;
      console.log(`\n🏆 ${character2.name} venceu a rodada!`);
    } 
    console.log(`---------------------------------\n`);
  }
}

async function determineWinner(character1, character2) {
  console.log(`🏁 Resultado final: ${character1.name} ${character1.pontos} x ${character2.pontos} ${character2.name}`);
  if (character1.pontos > character2.pontos) {
    console.log(`🏆 ${character1.name} venceu a corrida!`);
  } else if (character2.pontos > character1.pontos) {
    console.log(`🏆 ${character2.name} venceu a corrida!`);
  } else {
    console.log(`🤝 Empate na corrida!`);
  }
}

(async function main() {
  console.log(
    `🏁🚨 Corrida de Kart - ${player1.name} x ${player2.name} valendo...\n`,
  );

  await playRaceEngine(player1, player2);
  await determineWinner(player1, player2);
})();
