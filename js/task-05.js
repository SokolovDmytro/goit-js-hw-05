'use strict';

// Напиши класс Car с указанными свойствами и методами.

class Car {

  //  Добавь статический метод `getSpecs(car)`,
  // который принимает объект-машину как параметр и выводит
  // в консоль значения свойств maxSpeed, speed, isOn, distance и price.

  static getSpecs(car) {
    console.log(
      `maxSpeed = ${car.maxSpeed}, speed = ${car.speed}, isOn = ${car.isOn}, distance = ${car.distance} и price = ${car.price}`,
    );
  }
  
  // Конструктор получает объект настроек.
  // Добавь свойства будущеего экземпляра класса:
  // speed - текущая скорость, изначально 0
  // price - цена автомобиля
  // maxSpeed - максимальная скорость
  // isOn - заведен ли автомобиль, значения true или false. Изначально false
  // distance - общий киллометраж, изначально 0

  constructor(obj, speed = 0, isOn = false, distance = 0) {
    this.maxSpeed = obj.maxSpeed;
    this._price = obj.price;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
  }

  // Добавь геттер и сеттер для свойства price,
  // который будет работать с свойством цены автомобиля.

  get price() {
    return this._price;
  }

  set price(amount) {
    this._price = Number(amount);
  }

  // Добавь код для того чтобы завести автомобиль
  // Записывает в свойство isOn значение true

  turnOn() {
    this.isOn === false ? (this.isOn = true) : console.log('двигатель уже работает');
  }

  // Добавь код для того чтобы заглушить автомобиль
  // Записывает в свойство isOn значение false,
  // и сбрасывает текущую скорость в 0

  turnOff() {
    if (this.isOn === true) {
      this.isOn = false;
      this.speed = 0;
    } else {
      console.log('двигатель заглушен');
    }
  }

  // Добавялет к свойству speed полученное значение,
  // при условии что результирующая скорость
  // не больше чем значение свойства maxSpeed

  accelerate(value) {
    if (this.speed + value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += Number(value);
    }
  }

  // Отнимает от свойства speed полученное значение,
  // при условии что результирующая скорость не меньше нуля

  decelerate(value) {
    if (this.speed - value < 0) {
      this.speed = 0;
    } else {
      this.speed -= Number(value);
    }
  }

  // Добавляет в поле distance киллометраж (hours * speed),
  // но только в том случае если машина заведена!

  drive(hours) {
    if (this.isOn) {
      this.distance += Number(hours) * this.speed;
    }
  }
}


const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000