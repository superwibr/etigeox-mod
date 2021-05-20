// core.
// it makes power.

const etgcore = extend(BurnerGenerator, "etigeum-core", {})
etgcore.buildType = () => extend(BurnerGenerator.BurnerGeneratorBuild, etgcore, {
    updateTile(){   
        Vars.ui.showInfoToast("toast", 0.9)
        this.super$updateTile()

        if(this.block.generateTime >= 1){
            Vars.ui.showInfoToast("core prod > 1", 0.9)
            //this.dump(this.block.outputItem.item);
        }
    }
});