class StoryScene1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'StoryScene1' });
    }

    preload() {
        this.load.image('storyscene1','assets/storyscene1.png');
    }

    create () {

        this.add.image(0, 0, 'storyscene1').setOrigin(0, 0).setScale(0.24);

        this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto StoryScene2");
        this.scene.start("StoryScene2");
        }, this );

    }

}