export class noobOrPro {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render() {
    const leftSideLink = "#";

    this.contentCoverDiv = document.createElement("div");
    this.contentCoverDiv.classList.add("beginnerOrPro-cover");
    this.rootElement.append(this.contentCoverDiv);

    // Left side content
    this.contentDivLeft = document.createElement("div"); //left side div
    this.contentDivLeft.classList.add(
      "beginnerOrPro-cover__content",
      "left-background"
    );
    this.contentCoverDiv.append(this.contentDivLeft);

    this.descriptionBox = document.createElement("div"); //description content cover
    this.descriptionBox.classList.add(
      "beginnerOrPro-cover__content_description-cover"
    );
    this.contentDivLeft.append(this.descriptionBox);

    this.leftDescription = document.createElement("a"); //left side description text
    this.leftDescription.classList.add(
      "beginnerOrPro-cover__content_description-cover_description"
    );
    this.leftDescription.textContent = "beginners";
    this.leftDescription.href = leftSideLink;
    this.descriptionBox.append(this.leftDescription);

    this.leftLinkIcon = document.createElement("a"); //left side description image
    this.leftLinkIcon.classList.add(
      "beginnerOrPro-cover__content_description-cover_image"
    );
    this.leftLinkIcon.href = leftSideLink;
    this.descriptionBox.append(this.leftLinkIcon);

    this.backgroundTransitionLeft = document.createElement("a"); //left side background transition
    this.backgroundTransitionLeft.classList.add(
      "beginnerOrPro-cover__content_background-transition"
    );
    this.contentDivLeft.append(this.backgroundTransitionLeft);

    // Right side content
    this.contentDivRight = document.createElement("div"); //right side div
    this.contentDivRight.classList.add(
      "beginnerOrPro-cover__content",
      "right-background"
    );
    this.contentCoverDiv.append(this.contentDivRight);

    this.backgroundTransitionRight = document.createElement("a"); //right side background transition
    this.backgroundTransitionRight.classList.add(
      "beginnerOrPro-cover__content_background-transition"
    );
    this.contentDivRight.append(this.backgroundTransitionRight);
  }
}
