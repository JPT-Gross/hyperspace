import { TILE_SIZE } from './index.js';

export class Player {
    constructor(sprite, tilePos) {
        this.sprite = sprite;
        this.tilePos = tilePos;
    }

    loadPlayer() {
        const offsetX = TILE_SIZE / 2;
        const offsetY = TILE_SIZE;

        this.sprite.setOrigin(0.5, 1);
        this.sprite.setPosition(
            this.tilePos.x * TILE_SIZE + offsetX,
            this.tilePos.y * TILE_SIZE + offsetY
        );
    }
}
