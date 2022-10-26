# Herbivores and Сarnivores
Nature is well suited to reflect the principles of Object Oriented Programming.
All instances of the `Animal` class must have health and a name.
Health is 100 by default.

Create a `Herbivore` class.
Herbivore has a method of `hide`, which changes the hidden property of the beast and helps to hide from carnivores.

Create a `Сarnivore` class.
Carnivore has a `bite` method, which takes a herbivore object and decreases the object's health by 50. The method does not work if it is another сarnivore, or the herbivore is currently hiding.

`Herbivore` and `Сarnivore` should extend an `Animal` class.

All alive animals should be in the static `Animal.alive` array.
If the health of the animal reaches 0, the beast dies and it should be removed from the static array `Animals.alive`.

Природа добре підходить для відображення принципів об'єктно-орієнтованого програмування.
Усі екземпляри класу `Animal` повинні мати здоров'я та назву.
Здоров'я за замовчуванням становить 100.

Створіть клас «Травоїдні».
У травоїдних тварин є метод «ховатися», який змінює приховану властивість звіра і допомагає сховатися від м'ясоїдних.

Створіть клас `Сarnivore`.
Carnivore має метод «укусу», який бере травоїдний об’єкт і знижує здоров’я об’єкта на 50. Метод не працює, якщо це інша хижа тварина або травоїдна тварина зараз ховається.

`Травоїдна тварина` та `Знаїдна тварина` повинні розширити клас `Тварина`.

Усі живі тварини мають бути в статичному масиві `Animal.alive`.
Якщо здоров'я тварини досягає 0, звір гине і його слід видалити зі статичного масиву `Animals.alive`.

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
