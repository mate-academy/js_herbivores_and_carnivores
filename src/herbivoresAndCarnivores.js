class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }

  die() {
    super.die();
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health < 0) {
        herbivore.health = 0;
      }

      if (herbivore.health === 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = { Animal, Herbivore, Carnivore };
