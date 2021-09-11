class gameState{

constructor(){

}

getState(){
    var refer = db.ref("gamaState");
    refer.on("value" , function(data){
refer.data()

    })



}

update(count){

    db.ref("/").update({

        gameState:count
    })


}

start(){
form=new Form ();
form.display();

}

}