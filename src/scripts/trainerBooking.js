export class trainerBooking {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render() {
    this.pageContentDiv = document.createElement("div");
    this.pageContentDiv.classList.add("trainerBooking-continer");
    this.rootElement.append(this.pageContentDiv);
  }
}
