import GameScene from './GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 608,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    scene: GameScene,
};

export { config };
