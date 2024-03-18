var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('playerShip', 'assets/spaceships/Ship_1.png');
    this.load.image('pirateShip1', 'assets/spaceships/Ship_2.png');
    this.load.image('bg', 'assets/map/galaxy.png');
}

function create() {
    this.add.image(400, 300, 'bg');
    this.add.image(400, 300, 'playerShip');
}

function update() {}
