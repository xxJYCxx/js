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

        this.add.text(230, 430, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });
        this.add.text(30, 20, 'Lew Yeong Chuen(5.1)', { font: '15px Courier', fill: 'white' });
        this.add.text(30, 40, 'ID:003F7119', { font: '15px Courier', fill: 'white' });
        this.add.text(30, 60, 'M.A.1-RKLCM018', { font: '15px Courier', fill: 'white' });
        this.add.text(30, 80, 'MAY2020', { font: '15px Courier', fill: 'white' });


        console.log("This is storyScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto Level1");
        this.scene.start("StoryScene1");
        }, this );

    }

}
