class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  sayVeto() {
    return 'No, I must disagree'
  }

  sayApprove() {
    return 'You can do that!'
  }

  sayDoCharity() {
    return 'I like to help people.'
  }

  sayReleasePressStatement() {
    return 'You will see great things from Scuber.'
  }

  sayHi() {
    return 'Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.'
  };
}

class Ceo extends BoardMember {
  hireEmployee() {
    return 'Welcome aboard!'
  }
}
