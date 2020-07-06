enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const ghost = SpriteKind.create()
    export const monster = SpriteKind.create()
    export const chest = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, hero)
})
sprites.onOverlap(SpriteKind.monster, SpriteKind.monster, function (sprite, otherSprite) {
    sprite.x += 1
    sprite.y += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "left"
    animation.runImageAnimation(
    hero,
    [img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`],
    50,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "down"
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    EnemyCounter += -1
    info.changeScoreBy(3)
})
function MonsterSpawner () {
    monster_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f 2 f f f f 2 f f f . . . . . . . 
. . . . . f f 2 f f f f f f 2 f f f . . . f . . 
. . . . f f f f f f f f f f f f f f . . . 2 2 . 
. f . . f f f f f f 2 2 f f f f f f . . . . f . 
. 2 . . f f f f f 2 3 3 2 f f f f f f f f . f . 
. f . . f f f f f f f f f f f f f f f . f . f . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f . . f f . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . . . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . . . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . . f f f f f f f f f f f f . . . . . . . 
. . . . . f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . . f f 6 2 . f f f . . . f . . . . . . . 
. . . . . . f f f . . . . . . . f . . . . . . . 
. . . . . . f f . . . . . . . f f . . . . . . . 
. . . . . f f f f . . . . . f f f . . . . . . . 
`, SpriteKind.monster)
    anim = animation.createAnimation(ActionKind.Walking, 100)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f 2 f f f f 2 f f f . . . . . . . 
. . . . . f f 2 f f f f f f 2 f f f . . . f . . 
. . . . f f f f f f f f f f f f f f . . . 2 2 . 
. f . . f f f f f f 2 2 f f f f f f . . . . f . 
. 2 . . f f f f f 2 3 3 2 f f f f f f f f . f . 
. f . . f f f f f f f f f f f f f f f . f . f . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f . . f f . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . . . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . . . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . . f f f f f f f f f f f f . . . . . . . 
. . . . . f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . . f f 6 2 . f f f . . . f . . . . . . . 
. . . . . . f f f . . . . . . . f . . . . . . . 
. . . . . . f f . . . . . . . f f . . . . . . . 
. . . . . f f f f . . . . . f f f . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f 2 f f f f 2 f f f . . . . . . . 
. . . . . f f 2 f f f f f f 2 f f f . . . . . . 
. . . . f f f f f f f f f f f f f f . . . . f . 
. f . . f f f f f f 2 2 f f f f f f . . . . f . 
. . . . f f f f f 2 3 3 2 f f f f f f f f . f . 
. f . . f f f f f f f f f f f f f f f . f . f . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f . f f f . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . . . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . . . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . . f f f f f f f f f f f f . . . . . . . 
. . . . . f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . . f f 6 2 . f f f . . . f . . . . . . . 
. . . . . . f f f . . . . . . f f . . . . . . . 
. . . . . f f f f . . . . . f f f . . . . . . . 
. . . . f f f f f . . . . f f f f . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f 2 f f f f 2 f f f . . . . . . . 
. . . . . f f 2 f f f f f f 2 f f f . . . . . . 
. . . . f f f f f f f f f f f f f f . . . . f . 
. f . . f f f f f f 2 2 f f f f f f . . . . f . 
. . . . f f f f f 2 3 3 2 f f f f f f f f . f . 
. f . . f f f f f f f f f f f f f f f . f . f . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f . f f f . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . . . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . . . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . . f f f f f f f f f f f f . . . . . . . 
. . . . . f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . . f f 6 2 . f f f . . . f . . . . . . . 
. . . . . . f f f . . . . . . f f . . . . . . . 
. . . . . f f f f . . . . . f f f . . . . . . . 
. . . . f f f f f . . . . f f f f . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f 2 f f f . . . . . . . 
. . . . . f f f f f f f f f 2 f f f . . . . . . 
. . . . f f f f f f f f f f f f f f . . . . . . 
. . . . f f f f f f 2 2 f f f f f f . . . . f f 
. . . . f f f f f 2 3 3 2 f f f f f f f f . f . 
f f . . f f f f f f f f f f f f f f f . f . f . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f . f f f . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . . . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . . . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . . f f f f f f f f f f f f . . . . . . . 
. . . . . f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . . f f 6 2 . f f f . f f . . . . . . . . 
. . . . . f f . . . . . . . . f . . . . . . . . 
. . . . f f f . . . . . . . f f . . . . . . . . 
. . . f f f . . . . . . . f f f . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f f 2 f f f 2 f f f . . . . . . . 
. . . . . f f f 2 f f f f f 2 f f f . . . . . . 
. . . . f f f f f f f f f f f f f f . . . . . . 
. . . . f f f f f f 2 2 f f f f f f . . . . . . 
. . . . f f f f f 2 3 3 2 f f f f f f f f . . . 
f f . . f f f f f f f f f f f f f f f . f . . . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f . f f . . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . f . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . f . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . f f f f f f f f f f f f f . . . . . . . 
. . . . f f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . f f f 6 2 . f f f f f . . . . . . . . . 
. . . . f f . . . . . . . f f . . . . . . . . . 
. . . f f . . . . . . . f f f . . . . . . . . . 
. . f f f . . . . . . f f f . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 . . . . . . . . . . 
. . . . . . . . 5 . 5 . 5 5 5 . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . f f f f f f f f f . . . . . . . . 
. . . . . . f f f 2 f f f 2 f f f . . . . . . . 
. . . . . f f f 2 f f f f f 2 f f f . . . . . . 
. . . . f f f f f f f f f f f f f f . . . . . . 
. . . . f f f f f f 2 2 f f f f f f . . . . . . 
. . . . f f f f f 2 3 3 2 f f f f f . . . . . . 
f f . . f f f f f f f f f f f f f f f f . . . . 
. f f f f f f f 6 6 f f f 6 6 6 6 f f f f . . . 
. . . . f 6 2 f 6 6 f 6 f f 2 6 6 f . . . f . . 
. . . . f f f f f 6 6 6 6 6 6 f f . . . . f . . 
. . . . f f f f 6 2 2 2 6 6 f f f . . . . . . . 
. . . . f f f f f f f f f f f f f . . . . . . . 
. . . . f f 6 6 f f f f 6 f f f f . . . . . . . 
. . . . f f f 6 2 . f f f f f . . . . . . . . . 
. . . . f f . . . . . . . f f . . . . . . . . . 
. . . f f . . . . . . . f f f . . . . . . . . . 
. . f f f . . . . . . f f f . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . . 5 . . . . . . . . . . . . 
. . . . . . 5 . 5 . 5 5 5 . . . . . . . . . . . 
. . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . . . . . . . . . 
. . . . . f f f f f f f f f . . . . . . . . . . 
. . . . f f f 2 f f f 2 f f f . . . . . . . . . 
. . . f f f 2 f f f f f 2 f f f . . . . . . . . 
. . f f f f f f f f f f f f f f . . . . . . . . 
. . f f f f f f 2 2 f f f f f f . . . . . . . . 
. . f f f f f 2 3 3 2 f f f f f . . . . . . . . 
. . f f f f f f f f f f f f f f f f . . . . . . 
f f f f f f 6 6 f f f 6 6 6 6 f f f f . . . . . 
f f f 6 2 f 6 6 f 6 f f 2 6 6 f . . . f . . . . 
f . f f f f f 6 6 6 6 6 6 f f . . . . f . . . . 
f . f f f f 6 2 2 2 6 6 f f f . . . . . . . . . 
. . f f f f f f f f f f f f f . . . . . . . . . 
. . f f 6 6 f f f f 6 f f f f . . . . . . . . . 
. . f f f 6 2 . f f f f f f f . . . . . . . . . 
. . . f f f . . . . . . . f f . . . . . . . . . 
. . . f f . . . . . . . f f f . . . . . . . . . 
. . f f f . . . . . . f f f . . . . . . . . . . 
`)
    animation.attachAnimation(monster_1, anim)
    animation.setAction(monster_1, ActionKind.Walking)
    monster_1.follow(hero, Math.randomRange(25, 55))
    tiles.placeOnRandomTile(monster_1, sprites.dungeon.floorLight4)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == "up") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . c . . . . . . . 
. . . . . c a a a c . . . . . . 
. . . . 5 c 2 a b 2 c . . . . . 
. . . . b f f b f a 5 . . . . . 
. . . . 4 b a 2 f 5 a . . . . . 
. . . . 4 b f b b a c . . . . . 
. . . . 4 c a 2 c c 5 . . . . . 
. . . . 2 4 2 2 c 5 2 . . . . . 
. . . . 4 c 5 4 5 c 2 . . . . . 
. . . . 2 c 4 c 5 4 5 . . . . . 
. . . . 4 4 . 4 . 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
`, hero, 0, -200)
        if (DoubleShot == "yes") {
            pause(100)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . 2 . 5 . 2 . 5 . . . . . . 
. . . 5 . 4 . 2 4 2 . . . . . . 
. . . 4 2 5 . c 4 5 . . . . . . 
. . . 4 c a 2 a 5 5 . . . . . . 
. . . c 5 f a b 5 c . . . . . . 
. . . b 4 2 5 4 2 a . . . . . . 
. . . 2 b a 2 f 2 a . . . . . . 
. . . c 2 5 2 b a c . . . . . . 
. . . . 4 a f 4 c 2 . . . . . . 
. . . . . b b c 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, 200)
        }
    } else if (direction == "down") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . 2 . 5 . 2 . 5 . . . . . . 
. . . 5 . 4 . 2 4 2 . . . . . . 
. . . 4 2 5 . c 4 5 . . . . . . 
. . . 4 c a 2 a 5 5 . . . . . . 
. . . c 5 f a b 5 c . . . . . . 
. . . b 4 2 5 4 2 a . . . . . . 
. . . 2 b a 2 f 2 a . . . . . . 
. . . c 2 5 2 b a c . . . . . . 
. . . . 4 a f 4 c 2 . . . . . . 
. . . . . b b c 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, 200)
        if (DoubleShot == "yes") {
            pause(100)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . c . . . . . . . 
. . . . . c a a a c . . . . . . 
. . . . 5 c 2 a b 2 c . . . . . 
. . . . b f f b f a 5 . . . . . 
. . . . 4 b a 2 f 5 a . . . . . 
. . . . 4 b f b b a c . . . . . 
. . . . 4 c a 2 c c 5 . . . . . 
. . . . 2 4 2 2 c 5 2 . . . . . 
. . . . 4 c 5 4 5 c 2 . . . . . 
. . . . 2 c 4 c 5 4 5 . . . . . 
. . . . 4 4 . 4 . 2 . . . . . . 
. . . . . . . 2 . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
`, hero, 0, -200)
        }
    } else if (direction == "left") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . 5 . . 5 . . 
. . . . c 4 2 a c 4 . . . . . . 
. . . c 5 f a 5 5 c 4 2 4 . . . 
. . . b 2 f 2 f a a . 5 . 5 . 2 
. . . 5 b 4 b 4 2 a . . . . . . 
. . . c 2 f 5 b a c 2 2 . 5 . . 
. . . . b 4 f 2 c 4 . . 5 . 4 . 
. . . . . b b c 4 2 5 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, -200, 0)
        if (DoubleShot == "yes") {
            pause(100)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . 2 c . . . . . . 
. 2 . 5 2 4 c a 4 5 c . . . . . 
. . . . . c c 2 a b 2 c . . . . 
. . 4 2 4 b 4 f 4 4 a 5 . . . . 
. . . . 2 2 b 4 2 f 2 a . . . . 
. . 5 . . c 5 5 b b 5 c . . . . 
. 2 . . 2 4 2 a 4 5 c . . . . . 
. . . . . . . 4 b c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 200, 0)
        }
    } else if (direction == "right") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . 2 c . . . . . . 
. 2 . 5 2 4 c a 4 5 c . . . . . 
. . . . . c c 2 a b 2 c . . . . 
. . 4 2 4 b 4 f 4 4 a 5 . . . . 
. . . . 2 2 b 4 2 f 2 a . . . . 
. . 5 . . c 5 5 b b 5 c . . . . 
. 2 . . 2 4 2 a 4 5 c . . . . . 
. . . . . . . 4 b c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 200, 0)
        if (DoubleShot == "yes") {
            pause(100)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . 5 . . 5 . . 
. . . . c 4 2 a c 4 . . . . . . 
. . . c 5 f a 5 5 c 4 2 4 . . . 
. . . b 2 f 2 f a a . 5 . 5 . 2 
. . . 5 b 4 b 4 2 a . . . . . . 
. . . c 2 f 5 b a c 2 2 . 5 . . 
. . . . b 4 f 2 c 4 . . 5 . 4 . 
. . . . . b b c 4 2 5 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, -200, 0)
        }
    }
    pause(100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "right"
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`],
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    effects.bubbles.startScreenEffect(100)
    info.changeLifeBy(3)
    info.changeScoreBy(17)
    DoubleShot = "yes"
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 100)
    EnemyCounter += -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "up"
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`],
    50,
    true
    )
})
let projectile: Sprite = null
let anim: animation.Animation = null
let monster_1: Sprite = null
let direction = ""
let DoubleShot = ""
let hero: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(
            hex`2a002a00040b040404040415151504040404091f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f04040415151515150b0404040404091f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f04040415040c04040404040c0404091f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f0c151504040c0000000c0c040404091f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1c0707170707111f1f1f1f040c150b0400000404040b040415091f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c0c0c121f1f1f1f04151504040c040b040400041504091f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c0c0c121f1f1f1f04040c00000004040404041515040e07071707070707170707111f1f1f1f1f050c0c0a0c0c121f1f1f1f040b0404040004040415040404041a0c0c0c0c0c0c0c0c0c0c121f1f1f1f1f050c0c0c0c0c121f1f1f1f040404000b0404150c04040404041d0c0c0c150c0c0c0c0c0c191f1f1f1f1f180c150c0c0c121f1f1f1f04040c04151504040404041515041a0404040404040c0c150c121f1f1f1f1f050c0c0c0c0d141f1f1f1f04150415150404150404000b04041a0c0c0c0c0c0c0c0c0c0c121f1f1f1f1f050c0c0c0c121f1f1f1f1f04040404040404040404041504040d0f0f160f0f16100c0c0c121f1f1f1f1f050c0c0c0c121f1f1f1f1f0707070707070707070707070707061f1f1f1f1f1f050c0c0c121f1f1f1f1f050c040c0c191f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c191f1f1f1f1f050c040c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c121f1f1f1f1f050c040c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f180c0c0c121f1f1f1f1f180c040c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c150c191f1f1f1f1f050c040c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c150c121f1f1f1f1f050c040c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c150c121f1f1f1f1f050c040c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f180c0c0c121f1f1f1f1f050c151e0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c191f1f1f1f1f050c0c0c0c191f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c121f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c121f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1c07070717070717070707060c0c0c121f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c0c0c0c0c0c0c0c0c04040c121f1f1f1f1f180c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c0c040c150c0c15040c0c0c191f1f1f1f1f050c150c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c150c04040c0c0c0c040c0c0c0c121f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f180c0c0c040c0c0c0c0c0c0c0c0c0d141f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c04040c0c1e0c150c0c0c0d141f1f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c040c0c0c0c0c0c0c0c0d141f1f1f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c040c0c0c0c0c0c0c0d141f1f1f1f1f1f1f1f050c0c150c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c0d0f0f0f160f0f141f1f1f1f1f1f1f1f1f050c0c150c191f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c150c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f180c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f050c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c0e07070717070707070707170707070707060c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c15150c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f180c0c150c0c0c1515151515151515150c0c0c040404040c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f090c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c1e0c0c0c0c0c0c0c0c121f1f1f1f1f1f1f1f1f1f1f1f1f1f1f130f0f0f0f0f160f0f0f0f0f0f160f0f0f0f0f0f0f0f160f0f0f141f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f`,
            img`
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . 2 2 . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . 2 2 . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . 2 2 . . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . 2 2 . . . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight1,sprites.dungeon.floorLight5,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterEast1,sprites.dungeon.chestClosed,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorLightMoss,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.stairSouth,sprites.dungeon.floorMixed,myTiles.tile1,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
DoubleShot = "no"
direction = "down"
let EnemyCounter = 20
controller.moveSprite(hero, 100, 100)
scene.cameraFollowSprite(hero)
info.setLife(10)
hero.setPosition(50, 40)
for (let index = 0; index < EnemyCounter; index++) {
    MonsterSpawner()
}
game.onUpdate(function () {
    if (EnemyCounter < 10) {
        for (let index = 0; index < 21; index++) {
            MonsterSpawner()
        }
        EnemyCounter += 21
    }
    console.log(EnemyCounter)
})
