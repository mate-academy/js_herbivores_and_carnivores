'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  _checkHealth() {
    if (this.health <= 0) {
      this.health = 0;

      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);

        return `\n☠️ ${this.name} death`;
      }
    }

    return null;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return `\n🐇 ${this.name} hide`;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return `\n⚠️ ${this.name} не може вкусити ${target.name}: це не травоїдна тварина.`;
    }

    if (target.hidden) {
      return `\n❌ ${this.name} не зміг знайти ${target.name}: вона ховається.`;
    }

    target.health -= 50;

    const deathMessage = target._checkHealth();

    return (
      deathMessage ||
      `\n💥 ${this.name} кусає ${target.name}. Здоров'я ${target.name}: ${target.health}`
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
