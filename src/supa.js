export class User {
  constructor (age) {
    this.age = age;
  }

  mercuryAge() {
    let mercuryYears = Math.floor(this.age/.24);
    return mercuryYears;
  }

  venusAge() {
    let venusYears = Math.floor(this.age/.62);
    return venusYears;
  }

  marsAge() {
    let marsYears = Math.floor(this.age/1.88);
    return marsYears;
  }

  jupiterAge() {
    let jupiterAge = Math.floor(this.age/11.86);
    return jupiterAge;
  }

  lifeExpectancy () {
    let lifeExpectancy = Math.floor(Math.random() * 100);
  return lifeExpectancy;
  }

  estimatedMercury() {
    let mercuryLife = this.mercuryAge() + this.lifeExpectancy();
    return mercuryLife;
  }

  estimatedVenus() {
    let venusLife = this.venusAge() + this.lifeExpectancy();
    return venusLife;
  }

  estimatedMars() {
    let marsLife = this.marsAge() + this.lifeExpectancy();
    return marsLife;
  }

  estimatedJupiter() {
  }
}