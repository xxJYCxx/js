class Instruction1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Instruction1' });
    }

    preload() {
        this.load.image('gameinstruc1','assets/gameinstruc1.png');
    }

    create () {

        this.add.image(0, 0, 'gameinstruc1').setOrigin(0, 0).setScale(0.24);

        this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Instruction2");
        this.scene.start("Instruction2");
        }, this );

    }
}