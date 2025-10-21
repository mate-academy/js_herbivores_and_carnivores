'use strict';

class Animal {
  static alive = [];


  constructor(health = 100, name) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);

  }
}

class Herbivore extends Animal {

  constructor(name) {
    super(100, name)
    this.hidden = false
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  constructor(name) {
    super(100, name);
  }

  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }
    if (target.hidden) {
      return;
    }

    target.health -= 50;
    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }
  }
}

const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

Animal.alive = [
  {name: 'Bembi', health: 100, hidden: false},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: false}
];

lion.bite(deer);
panther.bite(lion);

Animal.alive = [
  {name: 'Bembi', health: 50},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100}
];

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

Animal.alive = [
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: true}
];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
