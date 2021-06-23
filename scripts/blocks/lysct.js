// LYSCT Blocks
// (Lysent Cooperative Technology)


// Recycler item selection
const recycler = extend(GenericSmelter, "recycler", {
    configurations: ObjectMap.of(
        Item,
        extend(Cons2, {
            get: (b, s) => b.setSoutItem(s)
        }),

        java.lang.Integer,
        extend(Cons2, {
            get: (b, s) => b.setSoutQuant(s)
        })
    )
})
recycler.buildType = () => extend(GenericSmelter.SmelterBuild, recycler, {
    buildConfiguration(table){
        let button = function(item, qtty){
           table.button(new TextureRegionDrawable(Items[item].icon(Cicon.medium)), Styles.clearTransi, function(){
               this.sout.item = Items[item]
               this.sout.amount = qtty
               this.configure(this.sout.item)
               this.configure(this.sout.amount)
            });
        }
        button('metaglass', 10)
        button('surgeAlloy', 2)
        button('plastanium', 5)
        button('blastCompound', 5)
        button('pyratite', 10)
        button('phaseFabric', 2)
        button('thorium', 5)
        button('silicon', 10)
        button('coal', 15)
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
        return new ItemStack(this.sout.item, this.sout.amount);
    },
    setSoutItem(s){
        this.sout.item = s
    },
    setSoutQuant(s){
        this.sout.amount = s
    },

    sout: {
        item: Items.surgeAlloy,
        amount:2
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
    
            if(this.getItem() != null){
                for(let i = 0; i < this.getItem().amount; i++){
                    this.offload(this.getItem().item.id);
                }
            }
    
            if(this.block.outputLiquid != null){
                this.handleLiquid(this, this.block.outputLiquid.liquid, this.block.outputLiquid.amount);
            }
    
            this.block.craftEffect.at(this.x, this.y);
            this.progress %= 1;
        }
    
        if(this.getItem() != null && this.timer.get(this.block.timerDump, this.block.dumpTime)){
            this.dump(this.getItem().item);
        }
    
        if(this.block.outputLiquid != null){
            this.dumpLiquid(this.block.outputLiquid.liquid);
        }
    }
});


// fans
const mechfan = extend(GenericCrafter, "mechanical-fan", {})
mechfan.buildType = () => extend(GenericCrafter.GenericCrafterBuild, mechfan, {
    draw(){
        this.super$draw()

        Draw.rect(Core.atlas.find("etigeox-mechanical-fan-top"), this.x, this.y);
    }
})

const elecfan = extend(GenericCrafter, "electric-fan", {})
elecfan.buildType = () => extend(GenericCrafter.GenericCrafterBuild, elecfan, {
    draw(){
        this.super$draw()

        Draw.rect(Core.atlas.find("etigeox-electric-fan-top"), this.x, this.y);
    }
})
