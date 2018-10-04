export class HouseModel {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name.slice();
  }

  setName(newName: string) {
    this.name = newName;
  }
}
