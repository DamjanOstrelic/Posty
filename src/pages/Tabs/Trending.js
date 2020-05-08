import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/headers/SmallHeader";
import LargeHeader from "../../components/headers/LargeHeader";
import LinkList from "../../components/Links/LinkList";

const Trending = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
        <LinkList location={props.location}></LinkList>
      </IonContent>
    </IonPage>
  );
};

export default Trending;
