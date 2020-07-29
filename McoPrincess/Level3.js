class Level3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Level3' });
    }

 preload () {
    var map =  this.load.tilemapTiledJSON('map3', 'assets/Map3.json');
    this.load.spritesheet('tiles', 'assets/tiles32.png', {frameWidth: 32, frameHeight: 32});

    // player animations
    this.load.atlas('player', 'assets/princess.png', 'assets/princess.json');
    this.load.atlas('virus', 'assets/virus.png', 'assets/virus.json');
    this.load.atlas('police', 'assets/police.png', 'assets/police.json');
    this.load.atlas('mask', 'assets/mask.png', 'assets/mask.json');
    this.load.image('life','assets/Mask1.png');
} 

 create () {
    var map = this.make.tilemap({key: 'map3'});
    
    // tiles64x64 is name inside Tiled
    var Tiles = map.addTilesetImage('tiles32','tiles');
    
    // groundLayer & platformLayer from Tiled
    this.groundLayer = map.createDynamicLayer('groundLayer', Tiles, 0, 0).setScale(1);
    this.wallLayer = map.createDynamicLayer('wallLayer', Tiles, 0, 0).setScale(1);
    this.wallLayer.setCollisionByProperty({ water:true });
    this.wallLayer.setCollisionByProperty({ tree:true });
    this.wallLayer.setCollisionByProperty({ wall:true });

    var start = map.findObject("ObjectLayer1", obj => obj.name === "start");
    this.end = map.findObject("ObjectLayer1", obj => obj.name === "end");

    this.time.addEvent({ delay: 1000, callback: this.moveRightLeft, callbackScope: this, loop: false });
    this.time.addEvent({ delay: 1000, callback: this.moveRightLeft2, callbackScope: this, loop: false });
    this.time.addEvent({ delay: 1000, callback: this.moveRightLeft3, callbackScope: this, loop: false });
    this.time.addEvent({ delay: 1000, callback: this.moveRightLeft4, callbackScope: this, loop: false });
    
    this.virus1 = map.findObject("ObjectLayer1", obj => obj.name === "virus1");
    this.virus2 = map.findObject("ObjectLayer1", obj => obj.name === "virus2");
    this.police1 = map.findObject("ObjectLayer1", obj => obj.name === "police1");
    this.police2 = map.findObject("ObjectLayer1", obj => obj.name === "police2");
    this.mask1 = map.findObject("ObjectLayer1", obj => obj.name === "mask1");
    this.mask2 = map.findObject("ObjectLayer1", obj => obj.name === "mask2");
    // console.log(this.end.x,this.end.y)
    
     // create the player sprite
     this.player = this.physics.add.sprite(start.x, start.y, 'player').setScale(0.2);
     // small fix to our player images, we resize the physics body object slightly
     this.player.body.setSize(this.player.width, this.player.height);
     
 
     this.physics.world.bounds.width = this.groundLayer.width;
     this.physics.world.bounds.height = this.groundLayer.height;

    // this.player.setBounce(0.5);
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.player,this.groundLayer);
    this.physics.add.collider(this.player,this.wallLayer);
    this.physics.add.overlap(this.player, this.virus, this.hitvirus, null, this );

    this.life1 = this.add.image(50,30, 'life').setScrollFactor(0).setScale(0.6);
    this.life2 = this.add.image(150,30,'life').setScrollFactor(0).setScale(0.6);
    this.life3 = this.add.image(250,30,'life').setScrollFactor(0).setScale(0.6);


    this.add.text(50,450, 'Level 3', { font: '24px Helvetica', fill: 'white' }).setScrollFactor(0);

    this.anims.create({
        key:'walk',
        frames:[
            {key: 'player', frame: 'Side1'},
            {key: 'player', frame: 'Side2'},
            {key: 'player', frame: 'Side3'},
            {key: 'player', frame: 'Side4'},
        ],
    
        frameRate:10,
        repeat: -1
        });
    
        this.anims.create({
        key:'front',
        frames: [
            {key:'player', frame:'Front1'},
            {key:'player', frame:'Front2'},
            {key:'player', frame:'Front3'},
        ],
        frameRate:10,
        repeat: -1
        });

        this.anims.create({
            key:'back',
            frames: [
                {key:'player', frame:'Back1'},
                {key:'player', frame:'Back2'},
                {key:'player', frame:'Back3'},
            ],
            frameRate:10,
            repeat: -1
            });

        this.anims.create({
            key:'idle',
            frames: [{key:'player', frame:'Front1'},],
            frameRate:10,
        });

        this.anims.create({
            key:'virusanim',
            frames: [
                {key:'virus', frame:'Virus1'},
                {key:'virus', frame:'Virus2'},
                {key:'virus', frame:'Virus3'},
            ],
            frameRate:10,
            repeat: -1
            });

        this.anims.create({
            key:'policeanim',
            frames: [
                {key:'police', frame:'Police1'},
                {key:'police', frame:'Police2'},
                {key:'police', frame:'Police3'},
                {key:'police', frame:'Police4'},
                {key:'police', frame:'Police5'},
            ],
            frameRate:10,
            repeat: -1
            }); 
            
        this.anims.create({
             key:'maskanim',
             frames: [
                {key:'mask', frame:'Mask1'},
                {key:'mask', frame:'Mask2'},
                {key:'mask', frame:'Mask3'},
            ],
            frameRate:10,
            repeat: -1
            });

        //virus
        this.virus = this.physics.add.sprite(264, 752,'virus').setScale(0.2).play('virusanim');
        this.virus2 = this.physics.add.sprite(816, 1524,'virus').setScale(0.2).play('virusanim');
        this.virus.body.setSize(this.virus.width, this.virus.height/2);
        this.virus2.body.setSize(this.virus2.width, this.virus2.height/2);

        //police
        this.police = this.physics.add.sprite(748, 456,'police').setScale(0.2).play('policeanim');
        this.police2 = this.physics.add.sprite(172, 300,'police').setScale(0.2).play('policeanim');
        this.police.body.setSize(this.police.width, this.police.height);
        this.police2.body.setSize(this.police2.width, this.police2.height);

        //mask
        this.mask = this.physics.add.sprite(144, 948,'mask').setScale(0.3).play('maskanim');
        this.mask2 = this.physics.add.sprite(920, 364,'mask').setScale(0.3).play('maskanim');
        this.mask.body.setSize(this.mask.width, this.mask.height/2);
        this.mask2.body.setSize(this.mask2.width, this.mask2.height/2);

        this.cursors = this.input.keyboard.createCursorKeys();
    
        // set bounds so the camera won't go outside the game world
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    
        // make the camera follow the player
        this.cameras.main.startFollow(this.player);
    
        // set background color, so the sky is not black
        this.cameras.main.setBackgroundColor('#ccccff');
    }
    
     update() {
    
        if (this.cursors.left.isDown)
        {
            console.log("left");
            this.player.body.setVelocityX(-200);
            this.player.anims.play('walk', true); // walk left
            this.player.flipX = true; // flip the sprite to the left
        }
        else if (this.cursors.right.isDown)
        {
            console.log("right");
            this.player.body.setVelocityX(200);
            this.player.anims.play('walk', true);
            this.player.flipX = false; // use the original sprite looking to the right
        }
        else if (this.cursors.up.isDown)
        {
            console.log("up");
            this.player.body.setVelocityY(-200);
            this.player.anims.play('back', true);
        }
        else if (this.cursors.down.isDown)
        {
            console.log("down");
            this.player.body.setVelocityY(200);
            this.player.anims.play('front', true);
        }
        else {
            this.player.body.setVelocity(0);
            this.player.anims.stop();
        }
        // console.log(this.player.x,this.player.y)

         // Check for reaching endPoint object
    if ( this.player.x >= 1100 && this.player.y <= 120 ) {
        console.log('Reached End, game over');
        //this.cameras.main.shake(500);
        this.time.delayedCall(1000,function() {
            
            this.scene.start("endScene");
        },[], this);
    }
        }

        moveRightLeft() {
            console.log('moveDownUp')
            this.tweens.timeline({
                targets: this.virus,
                loop: -1, // loop forever
                ease: 'Linear',
                duration: 1000,
                tweens: [
                {
                    x: 264,
                },
                {
                    x: 400,
                },
                {
                    x: 244,
                },
            ]
            });
        }
         moveRightLeft2() {
            console.log('moveDownUp')
            this.tweens.timeline({
                targets: this.virus2,
                loop: -1, // loop forever
                ease: 'Linear',
                duration: 1000,
                tweens: [
                {
                    x: 816,
                },
                {
                    x: 1000,
                },
                {
                    x: 890,
                },
            ]
            });
        }

        moveRightLeft3() {
            console.log('moveDownUp')
            this.tweens.timeline({
                targets: this.police,
                loop: -1, // loop forever
                ease: 'Linear',
                duration: 2000,
                tweens: [
                {
                    x: 748,
                },
                {
                    x: 540,
                },
                {
                    x: 748,
                },
            ]
            });
        }

        moveRightLeft4() {
            console.log('moveDownUp')
            this.tweens.timeline({
                targets: this.police2,
                loop: -1, // loop forever
                ease: 'Linear',
                duration: 2000,
                tweens: [
                {
                    x: 172,
                },
                {
                    x: 400,
                },
                {
                    x: 172,
                },
            ]
            });
        }
    
        hitvirus(player, virus) {
            virus.disableBody(true, true);
            // this.hitSnd.play();
            console.log(this.virusCount);
            this.virusCount -= 1; 
            if ( this.virusCount === 2) {
                this.cameras.main.shake(50);
                this.life1.setVisible(false);
            } else if ( this.virusCount === 1) {
                this.cameras.main.shake(50);
                this.life2.setVisible(false);
            } else if ( this.virusCount === 0) {
                this.cameras.main.shake(50);
                this.life3.setVisible(false);
            }
            if ( this.virusCount === 0 ) {
                this.cameras.main.shake(400);
                // delay 1 sec
                this.time.delayedCall(1000,function() {
                    this.virusCount = 3;
                    // this.bgmSnd.stop();
                    this.scene.restart();
                },[], this);
            }
            this.cameras.main.shake(50);
            
            //this.lifeText.setText('' + this.lifeCount); // set the text to show the current score
            return false;
        }
    }
