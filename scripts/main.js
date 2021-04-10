// "make a simple turret" they said.
// "but the docs don't teach me anything about turrets" I said
// and then I realized that's the point

// it appears in the content, but you can't get it in-game.
const turret = extend(Turret, "notaduo", {
    localizedName: 'sprite',
    description: "The decades fade, the blueprints die. With my ambitions all I have.",
    health: 420,
    targetAir: true,
    targetGround: true,
    breakable: true,
    category: 'turrets',
    research: Blocks.duo,
    buildVisibility: BuildVisibilities.shown
});