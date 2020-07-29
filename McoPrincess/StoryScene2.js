class StoryScene2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'StoryScene2' });
    }

    preload() {
        this.load.image('storyscene2','assets/storyscene2.png');
    }

    create () {

        this.add.image(0, 0, 'storyscene2').setOrigin(0, 0).setScale(0.24);

        this.add.text(530, 480, 'Press Spacebar to continue', { font: '15px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Instruction1");
        this.scene.start("Instruction1");
        }, this );

    }
}