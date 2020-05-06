import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  sendOutline,
  trendingUpOutline,
  addCircleOutline,
  searchOutline,
  personOutline,
} from "ionicons/icons";

import { IonReactRouter } from "@ionic/react-router";
import Posts from "./pages/Tabs/Posts";
import Trending from "./pages/Tabs/Trending";
import Submit from "./pages/Tabs/Submit";
import Search from "./pages/Tabs/Search";
import Account from "./pages/Tabs/Account";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path="/"
            render={() => <Redirect to="/posts" />}
            exact={true}
          />
          <Route path="/posts" component={Posts} />
          <Route path="/trending" component={Trending} />
          <Route path="/submit" component={Submit} />
          <Route path="/search" component={Search} />
          <Route path="/account" component={Account} />
          <Route component={() => <Redirect to="/posts" />} />
        </IonRouterOutlet>
        {/*-- Tab bar --*/}
        <IonTabBar slot="bottom">
          <IonTabButton tab="posts" href="/posts">
            <IonIcon icon={sendOutline}></IonIcon>
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trending" href="/trending">
            <IonIcon icon={trendingUpOutline}></IonIcon>
            <IonLabel>Trending</IonLabel>
          </IonTabButton>
          <IonTabButton tab="submit" href="/submit">
            <IonIcon icon={addCircleOutline}></IonIcon>
            <IonLabel>Submit</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline}></IonIcon>
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={personOutline}></IonIcon>
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
