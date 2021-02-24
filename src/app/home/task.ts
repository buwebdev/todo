export class Task {

  private id: string;
  private item: string;

  constructor(item: string = '') {
    this.id = Math.random().toString(16).slice(2);
    this.item = item;
  }

  setId(id: string): void {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  setItem(item: string): void {
    this.item = item;
  }

  getItem(): string {
    return this.item;
  }
}
