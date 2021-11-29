import { Group, Mesh, MeshStandardMaterial, TorusKnotGeometry } from "three"

export class TestObj extends Group {
  constructor() {
    super();

    const torusGeometry = new TorusKnotGeometry(1, .5, 128, 32);
    const torusMaterial = new MeshStandardMaterial({ color: 'purple' });

    this.add(new Mesh(torusGeometry, torusMaterial));
  }
}
