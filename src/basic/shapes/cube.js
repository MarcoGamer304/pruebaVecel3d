import { BoxGeometry, MeshBasicMaterial, Mesh, MeshStandardMaterial } from 'three'

class Cube {
    constructor(positionParam, colorParam, x=0,y=0) {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshStandardMaterial({ color: colorParam });
        this.cube = new Mesh(geometry, material);
        this.cube.position.set(x, positionParam, y)
    }

    getMesh() {
        return this.cube;
    }
}

export default Cube;