class Player{
 constructor(){
this.index = 0;
this.pname = null;
this.distance=0;
 }
 update(){
     var pIndex = "players/player" + this.index;
    database.ref(pIndex).set({
    name: this.pname,
    distance: this.distance
    }) 
 }

 updateCount(count){
    database.ref('/').update({
    playerCount: count
    })
}
 
 getCount(){
     var pref = database.ref("playerCount");
     pref.on("value", function(data){
     playerCount=data.val();
     });
 }
 static getPlayerInfo(){
 var playerRef = database.ref("players");
 playerRef.on("value", (data) => {
 allPlayers=data.val();  
 });
 }
}