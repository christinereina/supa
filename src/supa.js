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

    // life expectancy set to 75 years 

  estimatedMercury() {
    let mercuryLife = this.mercuryAge() + 75;
    return mercuryLife;
  }

  estimatedVenus() {
    let venusLife = this.venusAge() + 75;
    return venusLife;
  }

  estimatedMars() {
    let marsLife = this.marsAge() + 75;
    return marsLife;
  }

  estimatedJupiter() {
    let jupiterLife = this.jupiterAge() + 75;
    return jupiterLife;
  }
    
    // years left on each planet

  leftMercury() {
    let finalMercury = this.estimatedMercury() - 75;
    return finalMercury;
  }

  leftVenus() {
    let finalVenus = this.estimatedVenus() - 75 ;
    return finalVenus;
  }

  leftMars() {
    let finalMars = this.estimatedMars() - 75;
    return finalMars;
  }

  leftJupiter() {
    let finalJupiter = this.estimatedJupiter() - 75 ;
    return finalJupiter;
  }
}