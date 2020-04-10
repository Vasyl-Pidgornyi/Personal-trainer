export class trainerBooking {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render() {
    this.pageContentDiv = document.createElement("div");
    this.pageContentDiv.classList.add("trainerBooking-continer");
    this.rootElement.append(this.pageContentDiv);

    this.trainerHeader = document.createElement("h1");
    this.trainerDescription = document.createElement("p");
    this.bookButton = document.createElement("a");

    this.trainerHeader.classList.add("trainerBooking-continer__header");
    this.trainerDescription.classList.add(
      "trainerBooking-continer__description"
    );
    this.bookButton.classList.add("trainerBooking-continer__btn");

    this.trainerHeader.textContent = "JOEY DIXON";
    this.trainerDescription.textContent = "training with a world champion";
    this.bookButton.textContent = "Book Now";
    this.bookButton.href = " ";

    this.pageContentDiv.append(this.trainerHeader);
    this.pageContentDiv.append(this.trainerDescription);
    this.pageContentDiv.append(this.bookButton);
  }
}
