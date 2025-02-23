class Animal {
  health = 100;
  static #animals = [];

  constructor(name) {
    this.name = name;
    Animal.#animals.push(this);
  }

  static get alive() {
    return Animal.#animals.filter((animal) => {
      if (animal instanceof Herbivore) {
        return animal.health > 0;
      }

      return true;
    });
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
