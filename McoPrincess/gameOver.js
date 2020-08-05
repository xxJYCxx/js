
class gameOver extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver' });
    }

    preload() {
        this.load.image('over','assets/gameover.png');
    }

    create () {

        this.add.image(0, 0, 'over').setOrigin(0, 0).setScale(0.24);

        this.add.text(230, 430, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Level2");
        this.scene.start("Level2");
        }, this );

    }

}