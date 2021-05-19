// core.
// it makes power.

const etgcore = extend(GenericCrafter, "etigeum-core", {})
etgcore.buildType = () => extend(GenericCrafter.GenericCrafterBuild, etgcore, {
	getPowerProduction(){
		return 45 * this.progress;
	},
    updateTile(){     
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