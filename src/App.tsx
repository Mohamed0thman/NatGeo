import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import axios from "axios";

import BgVideo from "./components/bg-video/bg-video.component";
import Header from "./components/header/header.component";
import TermsAndCondition from "./components/terms-and-condition/terms-and-condition.component";

import EntryPage from "./pages/entry/entry.component";
import GatePage from "./pages/gate/gatePage";
import WaitingPage from "./pages/waiting/waiting-page";
import Gallery from "./pages/gallery/gallery";
import AboutTheFilmPage from "./pages/about-the-film/about-the-film";
import FilmPage from "./pages/film-page/film-page";
import WelcomePage from "./pages/welcome-page/welcome-page";

import "./App.scss";
import { get_token } from "./redux/user/user-action";

function App() {
  const [timerHours, setTimerHours] = useState<String | Number>("00");
  const [timerMinutes, setTimerMinutes] = useState<String | Number>("00");
  const [timerSeconds, setTimerSeconds] = useState<String | Number>("00");
  const [directedTo, setDirectedTo] = useState<string>("/waiting");
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [halfHour, setHalfHour] = useState<boolean>(false);
  const [isHovering, setHovering] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_token());
  }, []);

  useEffect(() => {
    axios("https://lf4ougqar4.execute-api.us-east-2.amazonaws.com/time")
      .then((response) => {
        setTime(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  let interval: any = useRef();

  const startTimer = () => {
    const countDownDate = new Date("September 19, 2020 12:40:00").getTime();

    interval = setInterval(() => {
      const now: number = new Date().getTime();

      const distance: number = countDownDate - now;

      const hours: number = Math.floor(
        (distance % (1000 * 60 * 60 * 100)) / (1000 * 60 * 60)
      );
      const minutes: number = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

      setLoading(true);
      if (seconds < 0 || (hours === 0 && minutes < 30 && seconds >= 0)) {
        setHalfHour(true);
      }

      if (hours === 0 && minutes < 3 && seconds >= 0) {
        setShouldRedirect(true);
        setDirectedTo("/welcome");
      }
      if (seconds < 0) {
        setShouldRedirect(true);
        setDirectedTo("/film");
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  });

  const currentUser = useSelector((state: any) => state.user.currentUser);

  const handleOnMouseEnter = () => {
    setHovering(true);
  };
  const handleOnMouseOut = () => {
    setHovering(false);
  };

  return (
    <div className="App">
      {loading ? (
        <div>
          <BgVideo />
          <Header
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
            directedTo={directedTo}
            showOnHover={isHovering}
            halfHour={halfHour}
          />
          <TermsAndCondition />

          <Switch>
            {!halfHour ? (
              <Route
                exact
                path="/"
                render={() => (
                  <EntryPage
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                  />
                )}
              />
            ) : (
              <Route
                exact
                path="/"
                render={() => <GatePage directedTo={directedTo} />}
              />
            )}
          </Switch>

          {currentUser ? (
            <Switch>
              <Route
                path="/waiting"
                render={() => (
                  <WaitingPage
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                    directedTo={directedTo}
                    shouldRedirect={shouldRedirect}
                  />
                )}
              />
              <Route path="/photo-gallery" component={Gallery} />
              <Route path="/meet-the-panel" component={AboutTheFilmPage} />
              <Route
                path="/welcome"
                render={() => (
                  <WelcomePage
                    shouldRedirect={shouldRedirect}
                    directedTo={directedTo}
                  />
                )}
              />
              <Route
                path="/film"
                render={() => (
                  <FilmPage
                    handleOnMouseEnter={handleOnMouseEnter}
                    handleOnMouseOut={handleOnMouseOut}
                  />
                )}
              />
            </Switch>
          ) : (
            <Redirect to="/" />
          )}
        </div>
      ) : (
        ""
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
