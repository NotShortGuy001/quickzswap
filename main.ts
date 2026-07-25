controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(125, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(55, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(100, 100)
})
info.onLifeZero(function () {
    mySprite.startEffect(effects.fire)
    sprites.destroy(mySprite)
    game.gameOver(false)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    info.changeLifeBy(-1)
})
let Right: Sprite = null
let Down: Sprite = null
let Up: Sprite = null
let Left: Sprite = null
let Lane = 0
let mySprite: Sprite = null
game.splash("QuickzSwap")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f 7 7 f 7 7 f 7 7 f f . . 
    . . f 6 6 6 6 f f 6 6 6 6 f . . 
    . . 7 6 7 7 7 7 7 7 7 7 6 7 . . 
    . . 7 6 7 f c c c c f 7 6 7 . . 
    . . f 6 7 c f a a f c 7 6 f . . 
    . . 7 f 7 c a 9 9 a c 7 f 7 . . 
    . . 7 f 7 c a 9 9 a c 7 f 7 . . 
    . . f 6 7 c f a a f c 7 6 f . . 
    . . 7 6 7 f c c c c f 7 6 7 . . 
    . . 7 6 7 7 7 7 7 7 7 7 6 7 . . 
    . . f 6 6 6 6 f f 6 6 6 6 f . . 
    . . f f 7 7 f 7 7 f 7 7 f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 100)
let Speed = 40
info.setScore(0)
info.setLife(5)
music.play(music.stringPlayable("C5 A E G B C5 C F ", 90), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(500, function () {
    Lane = randint(1, 4)
    if (Lane == 1) {
        Left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 9 . . . . . . . . 
            . . . . . 9 6 6 9 . . . . . . . 
            . . . . 9 6 6 9 . . . . . . . . 
            . . . 9 6 6 9 . . . . . . . . . 
            . . 9 6 6 9 . . . . . . . . . . 
            . . 9 6 9 . . . . . . . . . . . 
            . 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 
            . 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . 9 6 6 9 9 9 9 9 9 9 9 9 9 9 9 
            . . 9 6 9 . . . . . . . . . . . 
            . . 9 6 6 9 . . . . . . . . . . 
            . . . 9 6 6 9 . . . . . . . . . 
            . . . . 9 6 6 9 . . . . . . . . 
            . . . . . 9 6 6 9 . . . . . . . 
            . . . . . . 9 9 . . . . . . . . 
            `, SpriteKind.Projectile)
        Left.setVelocity(0, Speed)
        Left.setPosition(30, 40)
    }
    if (Lane == 2) {
        Up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . 9 9 6 6 6 9 9 . . . . . 
            . . . 9 6 6 6 6 6 6 6 9 . . . . 
            . . 9 6 6 9 9 6 9 9 6 6 9 . . . 
            . 9 6 6 9 . 9 6 9 . 9 6 6 9 . . 
            9 6 6 9 . . 9 6 9 . . 9 6 6 9 . 
            9 6 9 . . . 9 6 9 . . . 9 6 9 . 
            . 9 . . . . 9 6 9 . . . . 9 . . 
            . . . . . . 9 6 9 . . . . . . . 
            . . . . . . 9 6 9 . . . . . . . 
            . . . . . . 9 6 9 . . . . . . . 
            . . . . . . 9 6 9 . . . . . . . 
            . . . . . . 9 6 9 . . . . . . . 
            . . . . . . 9 6 9 . . . . . . . 
            . . . . . . 9 6 9 . . . . . . . 
            `, SpriteKind.Projectile)
        Up.setVelocity(0, Speed)
        Up.setPosition(125, 40)
    }
    if (Lane == 3) {
        Down = sprites.create(img`
            . . . . . . . 9 6 9 . . . . . . 
            . . . . . . . 9 6 9 . . . . . . 
            . . . . . . . 9 6 9 . . . . . . 
            . . . . . . . 9 6 9 . . . . . . 
            . . . . . . . 9 6 9 . . . . . . 
            . . . . . . . 9 6 9 . . . . . . 
            . . . . . . . 9 6 9 . . . . . . 
            . . 9 . . . . 9 6 9 . . . . 9 . 
            . 9 6 9 . . . 9 6 9 . . . 9 6 9 
            . 9 6 6 9 . . 9 6 9 . . 9 6 6 9 
            . . 9 6 6 9 . 9 6 9 . 9 6 6 9 . 
            . . . 9 6 6 9 9 6 9 9 6 6 9 . . 
            . . . . 9 6 6 6 6 6 6 6 9 . . . 
            . . . . . 9 9 6 6 6 9 9 . . . . 
            . . . . . . . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Down.setVelocity(0, Speed)
        Down.setPosition(100, 40)
    }
    if (Lane == 4) {
        Right = sprites.create(img`
            . . . . . . . . 9 9 . . . . . . 
            . . . . . . . 9 6 6 9 . . . . . 
            . . . . . . . . 9 6 6 9 . . . . 
            . . . . . . . . . 9 6 6 9 . . . 
            . . . . . . . . . . 9 6 6 9 . . 
            . . . . . . . . . . . 9 6 9 . . 
            9 9 9 9 9 9 9 9 9 9 9 9 6 6 9 . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 6 6 9 . 
            . . . . . . . . . . . 9 6 9 . . 
            . . . . . . . . . . 9 6 6 9 . . 
            . . . . . . . . . 9 6 6 9 . . . 
            . . . . . . . . 9 6 6 9 . . . . 
            . . . . . . . 9 6 6 9 . . . . . 
            . . . . . . . . 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        Right.setVelocity(0, Speed)
        Right.setPosition(55, 40)
    }
})
