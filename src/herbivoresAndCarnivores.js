const ANIMAL_HEALTH = 100;
const CARNIVORE_DAMAGE = 50;

class Animal {
  static alive = [];
  health = ANIMAL_HEALTH;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  removeAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Carnivore || herbivore.hidden) {
      return;
    }

    herbivore.health -= CARNIVORE_DAMAGE;

    if (herbivore.health <= 0) {
      this.removeAnimal();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
