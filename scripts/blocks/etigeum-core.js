// core.
// it makes power.

const etgcore = extend(BurnerGenerator, "etigeum-core", {
    update: true
})
etgcore.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, etgcore, {
    updateTile(){   
        this.super$updateTile()

        //Vars.ui.showInfoToast("prod: "+this.productionEfficiency+",  prodt: "+this.generateTime.toString().substring(0, 5), 1)

        if(this.generateTime >= 0.1 && this.generateTime <= 0.12){
            for(let i = 0; i < 2 /*this.block.outputItem.amount = 2*/; i++){
                this.offload(Vars.content.getByName(ContentType.item, "etigeox-etigeum-depleted")/*this.block.outputItem.item = depleted-etigeum*/);
            }
        }
    }
});