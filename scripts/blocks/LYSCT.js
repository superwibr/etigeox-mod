// LYSCT Blocks
// (Lysent Cooperative Technology)


// Recycler item selection
const recycler = extend(GenericCrafter, "recycler", {})
recycler.buildType = () => extend(GenericCrafter.GenericCrafterBuild, recycler, {
    buildConfiguration(table){
        let button = item => {
           return `table.button(new TextureRegionDrawable(Items.${item}.icon(Cicon.medium)), Styles.clearTransi, () => recycler.outputItem = new ItemStack(Items.${item}, 1));`
        }
        button('metaglass')
    }
});