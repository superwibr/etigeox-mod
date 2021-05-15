// LYSCT Blocks
// (Lysent Cooperative Technology)


// Recycler item selection
const recycler = extend(GenericCrafter, "recycler", {})
recycler.buildType = () => extend(Building, {
    buildConfiguration(table){
        table.button(Items.metaglass.icon(Cicon.medium), Styles.clearTransi, () => { recycler.outputItem = {item: Items.metaglass, amount: 1} });
    }
});