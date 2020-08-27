class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racer");
        title.position(630,100);
        var input=createInput("");
        input.position(650,260);
        var button=createButton("Player");
        button.position(650,280);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting=createElement('h3');
            greeting.html("welcome "+ name);
            greeting.position(650,300);
            
        })
    }
}