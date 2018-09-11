class BoardMember {
  constructor(name, homestate, training) {
    this.name = name;
    this.homestate = homestate;
    this.training = training;
  }

  sayVeto() {
    console.log(`No, I must disagree`)
  }

  sayApprove() {
    console.log(`You can do that!`)
  }

  sayDoCharity() {
    console.log(`I like to help people.`)
  }

  sayReleasePressStatement() {
    console.log(`You will see great things from Scuber.`)
  }

  sayHi() {
    console.log(`Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`)
  }


}
