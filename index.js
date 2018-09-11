class BoardMember {
  constructor(name, homestate, training) {
    this.name = name;
    this.homestate = homestate;
    this.training = training;
  }

  sayVeto() {
    return `No, I must disagree`return 
  }

  sayApprove() {
    return `You can do that!`
  }

  sayDoCharity() {
    return `I like to help people.`
  }

  sayReleasePressStatement() {
    return `You will see great things from Scuber.`
  }

  sayHi() {
    return `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
  }


}
