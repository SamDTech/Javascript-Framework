export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'div:click': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log('button clicked');
  }

  template(): string {
    return `<div>
              <h1> User Form </h1>
                <Form>
                      <input />
                </Form>
            </div>`;
  }

  render(): void {
    const templateElement = document.createElement('template');

    templateElement.innerHTML = this.template();

    console.log(this.parent);

    this.parent?.append(templateElement.content);
  }
}
