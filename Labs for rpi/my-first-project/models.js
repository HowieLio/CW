export class Task {
    constructor(id, description, status) {
      this.id = id;
      this.description = description;
      this.status = status;
    }

    ToString() {
        return `Task with id: ${this.id} description: ${this.description}' Status: ${this.status}`;
    }
}