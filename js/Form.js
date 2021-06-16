class Form {

  constructor() {
    this.input = createInput('');
    this.button = createButton('Register');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var wei=displayWidth,hei=displayHeight
    var title = createElement('h2');
    title.html("Message Karo ! ");
    title.position(displayWidth/2, 0);

    this.input.position(wei/2, hei/2);
    this.button.position((wei/2)+250,( hei/2));

    this.button.mousePressed(()=>
    {
      var name = this.input.value();
      player.name=name;
      this.input.hide();
      this.button.hide();
      player.index=userCount
      //this.hide();
      userCount+=1;
      player.update();
      player.updateUserCount(userCount);
      this.greeting.html("Welcome! : "+name);
      this.greeting.position(wei/2,(hei/2)-20);
    });

  }
}
