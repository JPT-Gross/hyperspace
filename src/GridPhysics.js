import { Direction } from './Direction.js';
import { Player } from './Player.js';
import { TILE_SIZE } from './index.js';

const Vector2 = Phaser.Math.Vector2;

export class GridPhysics {
    constructor(player) {
        this.player = player;
        this.movementDirection = Direction.NONE;
        this.speedPixelsPerSecond = TILE_SIZE * 4;
        this.tileSizePixelsWalked = 0;
        this.movementDirectionVectors = {
            [Direction.UP]: Vector2.UP,
            [Direction.DOWN]: Vector2.DOWN,
            [Direction.LEFT]: Vector2.LEFT,
            [Direction.RIGHT]: Vector2.RIGHT,
        };
    }

    movePlayer(direction) {
        if (!this.isMoving()) {
            this.startMoving(direction);
        }
    }

    isMoving() {
        return this.movementDirection != Direction.NONE;
    }

    startMoving(direction) {
        this.movementDirection = direction;
    }

    update(delta) {
        if (this.isMoving()) {
            this.updatePlayerPosition(delta);
        }
    }

    updatePlayerPosition(delta) {
        const pixlesToWalkThisUpdate = this.getPixelsToWalkThisUpdate(delta);
        if (this.willCrossTileBorderThisUpdate(pixlesToWalkThisUpdate)) {
            this.movePlayerSprite(pixlesToWalkThisUpdate);
            this.stopMoving();
        } else {
            this.movePlayerSprite(pixlesToWalkThisUpdate);
        }
    }

    movePlayerSprite(pixelsToMove) {
        const directionVec =
            this.movementDirectionVectors[this.movementDirection].clone();
        const movementDistance = directionVec.multiply(
            new Vector2(pixelsToMove)
        );
        const newPlayerPos = this.player.getPosition().add(movementDistance);
        this.player.setPosition(newPlayerPos);
        this.tileSizePixelsWalked += pixelsToMove;
        this.tileSizePixelsWalked %= TILE_SIZE;
    }

    getPixelsToWalkThisUpdate(delta) {
        const deltaInSeconds = delta / 1000;
        return this.speedPixelsPerSecond * deltaInSeconds;
    }

    willCrossTileBorderThisUpdate(pixelsToWalkThisUpdate) {
        return this.tileSizePixelsWalked + pixelsToWalkThisUpdate >= TILE_SIZE;
    }

    stopMoving() {
        this.movementDirection = Direction.NONE;
    }
}
