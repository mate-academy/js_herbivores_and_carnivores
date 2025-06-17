class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this._health = health;
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
    this.checkAlive();
  }

  checkAlive() {
    if (this._health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
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
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }
  }
}

module.exports = { Animal, Herbivore, Carnivore };
