export class Header {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render() {
    this.headerDiv = document.createElement("div");
    this.headerDiv.classList.add("page-header");
    this.rootElement.append(this.headerDiv);

    const navButtons = [
      "home",
      "traning",
      "about",
      "winnings",
      "the studio",
      "book online",
      "plans",
      "contact"
    ];
    for (let i = 0; i < navButtons.length; i++) {
      this.navRefference = document.createElement("a");
      this.navRefference.classList.add("page-header__nav");
      this.navRefference.href = "#";
      this.navRefference.innerText = navButtons[i];
      this.headerDiv.append(this.navRefference);
    }

    this.logInContainer = document.createElement("div");
    this.logInContainer.classList.add("page-header__logIn");

    this.logInImage = document.createElement("img");
    this.logInImage.classList.add("page-header__logIn_icon");
    this.logInImage.src = "./src/assets/images/svg/login_icon2.svg";

    this.logInText = document.createElement("p");
    this.logInText.classList.add("page-header__logIn_text");
    this.logInText.textContent = "Log In";

    this.logInLink = document.createElement("a");
    this.logInLink.classList.add("page-header__logIn_link");
    this.logInLink.href = "#";

    this.headerDiv.append(this.logInContainer);
    this.logInContainer.append(this.logInImage);
    this.logInContainer.append(this.logInText);
    this.logInContainer.append(this.logInLink);
  }
}
