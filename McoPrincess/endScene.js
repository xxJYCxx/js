
class endScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'endScene' });
    }

    preload() {
        this.load.image('end','assets/endscene.png');
    }

    create () {

        this.add.image(0, 0, 'end').setOrigin(0, 0).setScale(0.24);

        this.add.text(230, 430, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto IntroScene");
        this.scene.start("IntroScene");
        }, this );

    }

}