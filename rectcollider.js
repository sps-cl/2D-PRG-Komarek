class RectCollider extends Positionable{
    constructor(position, width, height) {
        super(position);
        this.width = width;
        this.height = height;
    }
    collideWith(other) {
       return other.collideWithRect(this);
    }
    collideWithRect(other) {
       return CollisionDetection.checkRectCollision(this, other)
    }
    collideWithCircle(other) {
       return CollisionDetection.checkRectCircleCollision(this, other);
    }
    get leftEdge() {
        return this.x;
    }
    get rightEdge() {
        return this.x + this.width;
    }
    get topEdge() {
        return this.y;
    }
    get bottomEdge() {
        return this.y + this.height;
    }
    set leftEdge(value) {
        return this.x = value;
    }
    set rightEdge(value) {
        return this.x = value - this.width;
    }
    set topEdge(value) {
        return this.y = value;
    }
    set bottomEdge(value) {
        return this.y = value - this.height;
    }
}