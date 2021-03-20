export class UserForm {
 constructor(public parent: Element){}

  template(): string {
    return `<div>
    <h1> User Form     </h1>
      <Form>
      <input />
      </Form>

    
    </div>`;
  }

  render(): void {
    const parentElement = document.createElement('template');

    parentElement.innerHTML = this.template();

    this.parent.append(parentElement.content);
  }
}
