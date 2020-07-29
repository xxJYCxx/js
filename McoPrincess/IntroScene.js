class IntroScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'IntroScene' });
    }

    preload() {
        this.load.image('story','assets/introscene.png');
    }

    create () {

        this.add.image(0, 0, 'story').setOrigin(0, 0).setScale(0.24);

        this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Level1");
        this.scene.start("StoryScene1");
        }, this );

    }

}
