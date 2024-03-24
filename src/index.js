import { config } from './config.js';
import GameScene from './GameScene.js';

let game = new Phaser.Game(config);

const TILE_SIZE = 32;

function update() {}

export { game, TILE_SIZE };
