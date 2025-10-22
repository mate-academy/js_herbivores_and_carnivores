'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((x) => x !== this);

      /* - x é cada animal da lista Animal.alive
- this é o animal atual que chamou checkHealth()
- x !== this significa: "mantenha todos os animais que não são o atual"
- Como o atual está morto (health <= 0), ele será removido */

      /* em outras palavras esse trecho pega o animal morto this.health <= 0
e usa ele no animzal.alive, com o seguinte raciocinio:
eu estou morto, para cada animal x
que é diferente de mim(que não esta morto(health = 0)
 crie uma nova lista com eles)
      /* const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1); */
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }
    target.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
