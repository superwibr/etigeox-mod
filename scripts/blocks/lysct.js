// LYSCT Blocks
// (Lysent Cooperative Technology)


// Recycler item selection
const recycler = extend(GenericSmelter, "recycler", {})
recycler.buildType = () => extend(GenericSmelter.SmelterBuild, recycler, {
    buildConfiguration(table){
        let button = (item, qtty) => {
           table.button(new TextureRegionDrawable(Items[item].icon(Cicon.medium)), Styles.clearTransi, () => {
               this.sout.id = Items[item].id
               this.sout.amount = qtty
            });
        }
        button('metaglass', 10)
        button('surgeAlloy', 2)
        button('plastanium', 5)
        button('blastCompound', 10)
        button('pyratite', 10)
        button('phaseFabric', 2)
        button('thorium', 5)
    },
    write(write) {
        this.super$write(write);
        
        // soutid is the item's id.
        write.s(this.sout.id);
        // soutamount is the item's amount.
        write.i(this.sout.amount);
    }, 
    read(read, revision) {
        this.super$read(read, revision);
    
        this.sout.id = read.s();
        this.sout.amount = read.i();
    },
    getItem() {
        return new ItemStack(Vars.content.item(this.sout.id), this.sout.amount);
    },

    sout: {
        id:0,
        amount:0
    },
    updateTile(){
        this.block.outputItem = this.getItem()
        
        if(this.consValid()){
    
            this.progress += this.getProgressIncrease(this.block.craftTime);
            this.totalProgress += this.delta();
            this.warmup = Mathf.lerpDelta(this.warmup, 1, 0.02);
    
            if(Mathf.chanceDelta(this.block.updateEffectChance)){
                this.block.updateEffect.at(this.getX() + Mathf.range(this.size * 4), this.getY() + Mathf.range(this.size * 4));
            }
        }else{
            this.warmup = Mathf.lerp(this.warmup, 0, 0.02);
        }
    
        if(this.progress >= 1){
            this.consume();
    
            if(this.block.outputItem != null){
                for(let i = 0; i < this.block.outputItem.amount; i++){
                    this.offload(this.block.outputItem.item);
                }
            }
    
            if(this.block.outputLiquid != null){
                this.handleLiquid(this, this.block.outputLiquid.liquid, this.block.outputLiquid.amount);
            }
    
            this.block.craftEffect.at(this.x, this.y);
            this.progress %= 1;
        }
    
        if(this.block.outputItem != null && this.timer.get(this.block.timerDump, this.block.dumpTime)){
            this.dump(this.block.outputItem.item);
        }
    
        if(this.block.outputLiquid != null){
            this.dumpLiquid(this.block.outputLiquid.liquid);
        }
    }
});