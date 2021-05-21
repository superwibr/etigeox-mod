// core.
// it makes power.

const etgcore = extend(BurnerGenerator, "etigeum-core", {
    update: true
})
etgcore.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, etgcore, {
    updateTile(){   
        this.super$updateTile()
        if(this.generateTime >= 0.1 && this.generateTime <= 0.12){
            for(let i = 0; i < 2; i++){
                this.offload(Vars.content.getByName(ContentType.item, "etigeox-etigeum-depleted"));
            }
        }
    }
});