# Herbivores and Сarnivores
Nature is well suited to reflect the principles of Object Oriented Programming.
All instances of the `Animal` class must have properties `health` and a `name`.
Health is 100 by default.

Create a `Herbivore` class.
Herbivore has a method of `hide`, which changes the `hidden` property of the beast and helps to hide from carnivores.

Create a `Сarnivore` class.
Carnivore has a `bite` method, which takes a herbivore object and decreases the object's health by 50. The method does not work if it is another сarnivore, or the herbivore is currently hiding.

`Herbivore` and `Сarnivore` should extend an `Animal` class.

All alive animals should be in the static `Animal.alive` array.
If the health of the animal reaches 0, the beast dies and it should be removed from the static array `Animals.alive`.

Example:
```
const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

Animal.alive === [
  {name: 'Bembi', health: 100, hidden: false},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: false},
];

lion.bite(deer);
panther.bite(lion);
Animal.alive === [
  {name: 'Bembi', health: 50},
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100},
];

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

Animal.alive === [
  {name: 'Bagira', health: 100},
  {name: 'King', health: 100},
  {name: 'Max', health: 100, hidden: true},
];
```

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

Природа хорошо подходит для отражения принципов объектно-ориентированного программирования.
Все экземпляры класса Animal должны иметь свойства health и name.
По умолчанию здоровье 100.

Создайте класс «Травоядные».
Травоядное животное имеет метод «спрятаться», который меняет свойство «скрытости» зверя и помогает спрятаться от хищников.

Создайте класс «Сarnivore».
У хищника есть метод «укус», который берёт объект-травоядное и уменьшает его здоровье на 50. Метод не работает, если это другой хищник или травоядное животное в данный момент прячется.

`Herbivore` и `Сarnivore` должны расширять класс Animal.

Все живые животные должны находиться в статическом массиве Animal.alive.
Если здоровье животного достигает 0, зверь умирает и его следует удалить из статического массива Animals.alive.
