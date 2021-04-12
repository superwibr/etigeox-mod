const summonblock = extend(Block, "summon", {})
summonblock.buildType = () => extend(Building, {
    buildConfiguration(table){
        table.button(Icon.upOpen, Styles.clearTransi, () => {
            // run stuff here when the button is clicked
            UnitTypes.toxopid.spawn(this.team, this.x, this.y)
        });
    }
});