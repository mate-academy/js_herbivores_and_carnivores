'use strict';
// Все живые животные должны находиться в статическом массиве Animal.alive.
// Если здоровье животного достигает 0, зверь умирает и его следует удалить 
// из статического массива `Animals.alive`.

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
};
// У травоядных есть метод `скрытия`,
// который изменяет скрытое свойство зверя
// на противоположное значение и помогает прятаться от плотоядных.
class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
};

// У плотоядного есть метод «укус», который берет
// объект травоядного и снижает его здоровье на 50.
// Метод не работает, если это другой хищник или травоядное
// в данный момент прячется.

class Carnivore extends Animal {
  bite(obj) {
    if ((obj instanceof Herbivore) && (obj.hidden === false)) {
      obj.health = obj.health - 50;
      // И если объект принадлежит классу травоядные и не спрятался
      // Тогда у него отнимаются жизни
    }

    Animal.alive = Animal.alive.filter((el) => el.health > 0);
  };
};
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
