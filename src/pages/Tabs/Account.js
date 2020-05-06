import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/headers/SmallHeader";
import LargeHeader from "../../components/headers/LargeHeader";

const Account = () => {
  return (
    <IonPage>
      <SmallHeader title="Account" />
      <IonContent fullscreen>
        <LargeHeader title="Account" />
      </IonContent>
    </IonPage>
  );
};

export default Account;