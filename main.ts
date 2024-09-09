let sz = 0
let buildingPoint = 0
let ex = 0
player.onChat("erase", function () {
    blocks.fill(
    AIR,
    pos(40, 10, 10),
    pos(-10, -10, 25),
    FillOperation.Replace
    )
})
function solarpanels (direction: number, z: number) {
    sz = buildingPoint
    sz = 5
    sz = 16
    for (let index = 0; index < 10; index++) {
        let sx = 0
        shapes.line(
        DAYLIGHT_SENSOR,
        pos(sx, 0, sz),
        pos(ex, 0, sz)
        )
        ex += 1
        ex += -1
        ex += direction
    }
}
player.onChat("run", function () {
	
})
function Inside () {
    shapes.sphere(
    GRASS,
    pos(0, 0, 20),
    3,
    ShapeOperation.Replace
    )
    buildingPoint = 0
    for (let index = 0; index < 16; index++) {
        shapes.circle(
        GLASS,
        pos(buildingPoint, 0, 20),
        3,
        Axis.X,
        ShapeOperation.Replace
        )
        buildingPoint += 1
    }
    shapes.sphere(
    GRASS,
    pos(buildingPoint, 0, 20),
    3,
    ShapeOperation.Replace
    )
}
player.onChat("SpaceStation", function () {
    Outside()
    Inside()
    solarpanels(1, 6)
    solarpanels(-1, 34)
})
function Outside () {
    shapes.sphere(
    GRASS,
    pos(0, 0, 20),
    4,
    ShapeOperation.Replace
    )
    buildingPoint = 0
    for (let index = 0; index < 16; index++) {
        shapes.circle(
        GLASS,
        pos(buildingPoint, 0, 20),
        4,
        Axis.X,
        ShapeOperation.Replace
        )
        buildingPoint += 1
    }
    shapes.sphere(
    GRASS,
    pos(buildingPoint, 0, 20),
    4,
    ShapeOperation.Replace
    )
}
