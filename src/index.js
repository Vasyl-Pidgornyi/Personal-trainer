import { Header } from "./js/header.js";
import { trainerBooking } from "./js/trainerBooking.js";
import { noobOrPro } from "./js/beginnerOrPro.js";
import "./sass/index.scss";

const pageContainer = document.querySelector(".page-container");

const pageHeader = new Header(pageContainer);
pageHeader.render();

const bookTrainer = new trainerBooking(pageContainer);
bookTrainer.render();

const beginnerOrPro = new noobOrPro(pageContainer);
beginnerOrPro.render();
