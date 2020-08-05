

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    backgroundColor: '#FFBDF4',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: false
            },
            debug: false
        }
    },
    scene: [IntroScene, StoryScene1, StoryScene2, Instruction1, Instruction2,Level1, Level2, Level3, levelPass, levelPass1, gameOver, gameOver1 ,endScene]


};

let game = new Phaser.Game(config);