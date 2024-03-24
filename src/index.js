import { config } from './config.js';
import GameScene from './GameScene.js';

let game = new Phaser.Game(config);

const TILE_SIZE = 32;

export { game, TILE_SIZE };
