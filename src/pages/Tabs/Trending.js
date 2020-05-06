import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/headers/SmallHeader";
import LargeHeader from "../../components/headers/LargeHeader";

const Trending = () => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
