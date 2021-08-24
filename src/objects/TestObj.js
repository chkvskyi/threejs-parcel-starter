import { BoxGeometry, Group, Mesh, MeshLambertMaterial } from "three"

export class TestObj extends Group {
  constructor() {
    super();

    const cubeGeo = new BoxGeometry(1, 1, 1);
    const cubeMat = new MeshLambertMaterial({ color: 0x78226d });

    this.add(new Mesh(cubeGeo, cubeMat));
  }
}