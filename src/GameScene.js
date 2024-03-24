import { Player } from './player.js';

let asteroids;

class GameScene {
    preload() {
        this.load.spritesheet('playerShip', 'assets/spaceships/Ship_1.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.image('pirateShip1', 'assets/spaceships/Ship_2.png');
        this.load.image('bg', 'assets/map/galaxy.png');
        this.load.image('roid', 'assets/map/roid.png');
    }

    create() {
        const playerSprite = this.add.sprite(0, 0, 'playerShip');
        this.add.image(200, 150, 'pirateShip1');
        this.add.image(400, 300, 'bg');
        this.add.image(300, 175, 'roid');

        playerSprite.setDepth(2);

        const player = new Player(playerSprite, new Phaser.Math.Vector2(6, 6));

        player.loadPlayer();

        asteroids = this.physics.add.staticGroup();

        asteroids.create(300, 175, 'roid').setScale(1).refreshBody();
    }
}

export default GameScene;
