// Add functions here to keep things organized
function spawnFriends() {
    for (let frd of frdDatabase) {
        let frdSprite = sprites.create(frd.img, SpriteKind.Player)
        tiles.placeOnTile(frdSprite, tiles.getTileLocation(1, 15))
    }
    // Switch  to the first Friend sprite
    let frdSprites = sprites.allOfKind(SpriteKind.Player)
    switchToPlayer(frdSprites[0])
    
}

function switchToPlayer(activePlayer: Sprite){
scene.cameraFollowSprite(activePlayer)
controller.moveSprite(activePlayer, 100,0)
// To remember who is the currentPlayer
currentPlayer = activePlayer
}
function switchToAnotherPlayer(){
    
}