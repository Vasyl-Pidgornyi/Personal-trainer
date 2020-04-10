import { Header } from "./header.js";

const pageContainer = document.querySelector(".page-container");
const pageHeader = new Header(pageContainer);
pageHeader.render();
