import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { TrainerBooking } from "./components/Trainer-booking/TrainerBooking.jsx";
import { BeginnerOrPro } from "./components/Beginner-Or-Pro/BeginnerOrPro.jsx";
import { MeetTheCoach } from "./components/MeetTheCoach/MeetTheCoach.jsx";
import { Winnings } from "./components/Winnings/Winnings.jsx";
import { StartTrainingToday } from "./components/Start-Training-Today/StartTrainingToday.jsx";
import { TheStudio } from "./components/The-Studio/TheStudio.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { GalleryDetailed } from "./components/Gallery/Gallery-Detailed/GalleryDetailed.jsx";
import { BookApp } from "./components/Book-App/BookApp.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sectionInFocus: 0,
      distanceFromTop: null
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    let distanceFromTop = document
      .getElementById("mainPage")
      .getBoundingClientRect();
    this.setState(
      () => ({ distanceFromTop }),
      () => {
        if (this.state.distanceFromTop.top > -790) {
          this.setState(() => ({ sectionInFocus: 0 }));
        }
        if (this.state.distanceFromTop.top < -790) {
          this.setState(() => ({ sectionInFocus: 1 }));
        }
        if (this.state.distanceFromTop.top < -1400) {
          this.setState(() => ({ sectionInFocus: 2 }));
        }
        if (this.state.distanceFromTop.top < -2300) {
          this.setState(() => ({ sectionInFocus: 3 }));
        }
        if (this.state.distanceFromTop.top < -4100) {
          this.setState(() => ({ sectionInFocus: 4 }));
        }
      }
    );
  };

  render() {
    return (
      <Router>
        <Route exact path="/">
          <div className="page-container" id="mainPage">
            <Header sectionInFocus={this.state.sectionInFocus} />
            <main>
              <TrainerBooking />
              <BeginnerOrPro />
              <MeetTheCoach />
              <Winnings />
              <StartTrainingToday />
              <Gallery />
              <TheStudio />
              <BookApp />
            </main>
            <Footer />
          </div>
        </Route>
        <Route path="/Gallery-detailed">
          <GalleryDetailed />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".page"));
