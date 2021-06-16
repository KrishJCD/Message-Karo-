class Player
{
  constructor()
  {
    this.name=null;
    this.index=null;
    //this.messageArray=new Array();
  }

  getUserCount()
  {
    var usercountRef=database.ref("users");
    usercountRef.on("value",(data)=>{
      userCount=data.val();
    });
  }


  update()
  {
    var userIndex="username/user"+this.index;
    database.ref(userIndex).set({
      name : this.name
    });

  }
  updateUserCount(upVal)
  {
    database.ref('/').update(
    {
      users: upVal
    });
  }
  
  updateState(upVal)
  {
    database.ref('/').update({
      status: upVal
    });
  }

  async updateMessage(message)
  {
    var userIndex="username/user"+msgIndex;

      database.ref(userIndex).update({
        msg : message
       }
      );
  }

  async fetchUser0Messsage()
  {
    var valuePresent=true;
    var userMsgRef = await database.ref('username/user0/msg');
    userMsgRef.on('value',(data)=>{
      for(var i=0;i<game.messageArray.length;i++)
      {
        if(game.messageArray[i]==data.val())
        {
          valuePresent=false;
          break;
        }
      }
      if(valuePresent){
        game.messageArray.push(data.val());
      }

    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('username');
    playerInfoRef.on("value", (data) => {
        allPlayers = data.val();
    })
}

}
