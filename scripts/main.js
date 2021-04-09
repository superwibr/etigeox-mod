// "make a simple turret" they said.
// "but the docs don't teach me anything about turrets" I said
// and then I realized that's the point

const turret = extend(Turret, "not a duo", {
    name: "turret...",
    description: "The decades fade, the blueprints die. With my ambitions all I have.",
    health: 420,
    shootType: 'missileIncendiary',
    PowerUse: 0,
    craftTime: 0,
    reloadTime: 0,
    category: 'turret',
    research: 'duo',
    range: 300,
    acceptCoolant: true,
    TargetAir: true,
    TargetGround: true,
    breakable: true,
    shootSound: 'shootBig',
});