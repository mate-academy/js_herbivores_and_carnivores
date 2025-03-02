'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    // Adiciona o animal à lista de animais vivos
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    // Filtra os animais vivos, mantendo apenas aqueles com saúde maior que 0
    Animal.alive = Animal.alive.filter((elem) => elem.health > 0);

    // Retorna o array atualizado
    return Animal.alive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// Example:
/*
const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

console.log(deer);
console.log(panther);
console.log(lion);
console.log(rabbit);

console.log(Animal.alive);

lion.bite(deer);
panther.bite(lion);

console.log(Animal.alive);

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

console.log(Animal.alive);

console.log(' // ------- novo ------- // ');

const duck = new Herbivore('Pato Donald');
console.log(Animal.alive);

lion.bite(duck);
console.log(Animal.alive);

// duck.hide();

panther.bite(duck);
console.log(Animal.alive);
*/
