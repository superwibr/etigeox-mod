// "make a simple turret" they said.
// "but the docs don't teach me anything about turrets" I said
// and then I realized that's the point

const notaduo = extendContent(Block, "notaduo", {
    //override the method to build configuration
    buildConfiguration(tile, table){
        table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            //configure the tile to signal that it has been pressed (this sync on client to server)
            tile.configure(0)
        })).size(50).disabled(boolf(b => tile.build != null && !tile.build.cons.valid()))
    },

    //override configure event
    configured(tile, value){
        //make sure this silo has the items it needs to fire
        if(tile.entity.cons.valid()){
            //create 10 bullets at this tile's location with random rotation and velocity/lifetime
            for(var i = 0; i < 15; i++){
                Calls.createBullet(Bullets.flakExplosive, tile.getTeam(), tile.drawx(), tile.drawy(), Mathf.random(360), Mathf.random(0.5, 1.0), Mathf.random(0.2, 1.0))
            }
            //triggering consumption makes it use up the items it requires
            tile.build.cons.trigger()
        }
    }
})