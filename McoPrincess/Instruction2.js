class Instruction2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Instruction2' });
    }

    preload() {
        this.load.image('gameinstruc2','assets/gameinstruc2.png');
    }

    create () {

        this.add.image(0, 0, 'gameinstruc2').setOrigin(0, 0).setScale(0.24);

        this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Level1");
        this.scene.start("Level1");
        }, this );

    }
}