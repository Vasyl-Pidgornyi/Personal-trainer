import { Header } from "./header.js";
import { trainerBooking } from "./trainerBooking.js";

const pageContainer = document.querySelector(".page-container");

const pageHeader = new Header(pageContainer);
pageHeader.render();

const bookTrainer = new trainerBooking(pageContainer);
bookTrainer.render();
