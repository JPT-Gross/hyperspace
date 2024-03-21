class GameScene extends Scene {

preload() {
    this.load.image('playerShip', 'assets/spaceships/Ship_1.png');
    this.load.image('pirateShip1', 'assets/spaceships/Ship_2.png');
    this.load.image('bg', 'assets/map/galaxy.png');
    this.load.image('roid', 'assets/map/roid.png');
}

create() {
    this.add.image(400, 300, 'bg');
    this.add.image(400, 300, 'playerShip');
    this.add.image(200, 150, 'pirateShip1');
    this.add.image(300, 175, 'roid');

    let asteroids = this.physics.add.staticGroup();

    asteriods.create(300, 175, 'roid').setScale(1).refreshBody();
}
}

export default GameScene