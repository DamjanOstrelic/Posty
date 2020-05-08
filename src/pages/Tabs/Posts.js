import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/headers/SmallHeader";
import LargeHeader from "../../components/headers/LargeHeader";
import LinkList from "../../components/Links/LinkList";

const Posts = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Posts" />
      <IonContent fullscreen>
        <LargeHeader title="Posts" />
        <LinkList location={props.location}></LinkList>
      </IonContent>
    </IonPage>
  );
};

export default Posts;
