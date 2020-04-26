import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import { BookOnline } from "./components/Book-Online/BookOnline.jsx";
import { BookOnlineDetailed } from "./components/Book-Online/Book-Online-Detailed/BookOnlineDetailed.jsx";
import { Plans } from "./components/Plans/Plans.jsx";
import { Payment } from "./components/Plans/Payment/Payment.jsx";

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
        <div className="page-container" id="mainPage">
          <Header sectionInFocus={this.state.sectionInFocus} />
          <main>
            <Switch>
              <Route exact path="/">
                <TrainerBooking />
                <BeginnerOrPro />
                <MeetTheCoach />
                <Winnings />
                <StartTrainingToday />
                <Gallery />
                <TheStudio />
                <BookApp />
              </Route>
              <Route path="/Gallery-detailed">
                <GalleryDetailed />
              </Route>
              <Route path="/book-online">
                <BookOnline />
              </Route>
              <Route path="/book-online-detailed/:courseId">
                <BookOnlineDetailed />
              </Route>
              <Route path="/plans">
                <Plans />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".page"));
