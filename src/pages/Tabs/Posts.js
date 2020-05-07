import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/headers/SmallHeader";
import LargeHeader from "../../components/headers/LargeHeader";

const Posts = () => {
  return (
    <IonPage>
      <SmallHeader title="Posts" />
      <IonContent fullscreen>
        <LargeHeader title="Posts" />
      </IonContent>
    </IonPage>
  );
};

export default Posts;
