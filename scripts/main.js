// "make a simple turret" they said.
// "but the docs don't teach me anything about turrets" I said
// and then I realized that's the point

// it appears in the content, but you can't get it in-game.
const turret = extend(Turret, "notaduo", {
    description: "The decades fade, the blueprints die. With my ambitions all I have.",
    health: 420,
    shootType: Bullets.missileIncendiary,
    powerUse: 0,
    reloadTime: 0,
    range: 300,
    acceptCoolant: true,
    targetAir: true,
    targetGround: true,
    breakable: true,
    shootSound: Sounds.shootBig,
    category: 'turret',
    research: 'duo'
});