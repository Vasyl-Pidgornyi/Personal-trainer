import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Shop } from "./components/Shop/Shop.jsx";
import { TrainerBooking } from "./components/Trainer-booking/TrainerBooking.jsx";
import { BeginnerOrPro } from "./components/Beginner-Or-Pro/BeginnerOrPro.jsx";
import { MeetTheCoach } from "./components/MeetTheCoach/MeetTheCoach.jsx";
import { Winnings } from "./components/Winnings/Winnings.jsx";
import { StartTrainingToday } from "./components/Start-Training-Today/StartTrainingToday.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Header />
          <main>
            <TrainerBooking />
            <BeginnerOrPro />
            <MeetTheCoach />
            <Winnings />
            <StartTrainingToday />
            {/* <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route> */}
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".page"));
