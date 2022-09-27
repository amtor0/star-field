controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    me,
    [img`
        . . . . . . e e c c e e . . . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        . . . . 2 c 2 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 2 4 2 2 2 2 2 c 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 c 2 4 4 2 2 2 c 2 f . 
        . . . e 2 c e c c c c e c 2 e . 
        . . . e 2 e c b b b b c e 2 e . 
        . . . e 2 e b b b b b b e 2 e . 
        . . . e e e e e e e e e e e e . 
        . . . f e d e e e e e e d e f . 
        . . . f e 2 d e e e e d 2 e f . 
        . . . f f e e e e e e e e f f . 
        . . . . f f . . . . . . f f . . 
        `],
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    me,
    [img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 4 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b c c f e e f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 4 4 2 2 2 4 b e . 
        . . e e 9 9 4 4 4 4 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f f f b f e e f f f b f . 
        . . . . c b b . . . . c b b . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 4 4 4 b e . 
        . . e e 9 9 4 2 2 2 4 4 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f c b b f e e f c b b f . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 2 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b b c f e e f b b c f . 
        . . . . c f f . . . . c f f . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    me,
    [img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 2 2 4 9 e . . . . 
        e b 9 4 2 2 2 2 4 4 9 9 e e . . 
        e 9 9 4 2 2 2 4 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f c c b f e e f c c b f e e . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 4 4 4 9 e . . . . 
        e b 9 4 2 2 4 4 4 4 9 9 e e . . 
        e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f b f f f e e f b f f f e e . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 4 4 2 2 2 4 9 e . . . . 
        e b 9 4 4 4 2 2 2 4 9 9 e e . . 
        e 9 9 4 4 2 2 2 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f b b c f e e f b b c f e e . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 2 2 4 9 e . . . . 
        e b 9 4 2 2 2 2 2 4 9 9 e e . . 
        e 9 9 4 2 2 2 2 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f c b b f e e f c b b f e e . 
        . . f f c . . . . f f c . . . . 
        `],
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    me,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `],
    200,
    false
    )
})
let me: Sprite = null
me = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(me)
me.vx += 10
game.onUpdate(function () {
	
})
