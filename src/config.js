import GameScene from './GameScene.js';
import { TILE_SIZE } from './index.js';

const config = {
    type: Phaser.AUTO,
    width: 352,
    height: 352,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    scene: GameScene,
};

export { config };
