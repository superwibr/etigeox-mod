// core.
// it makes power.

const etgcore = extend(BurnerGenerator, "etigeum-core", {
    update: true
})
etgcore.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, etgcore, {
    updateTile(){   
        this.super$updateTile()

        //Vars.ui.showInfoToast("prod: "+this.productionEfficiency+",  prodt: "+this.generateTime.toString().substring(0, 5), 1)

        if(this.generateTime <= 0){
            Vars.ui.showInfoToast("core prod!", 1)
            this.dump(/*this.block.outputItem.item*/);
            for(let i = 0; i < 2 /*this.block.outputItem.amount = 2*/; i++){
                this.offload(/*this.block.outputItem.item = depleted-etigeum*/);
            }
        }
    }
});