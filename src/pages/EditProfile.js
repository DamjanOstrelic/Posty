import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import NavHeader from "../components/headers/NavHeader";

const SignUp = () => {
  return (
    <IonPage>
      <NavHeader title="Sign Up"/>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput type="text" name="username" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" name="email" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput type="password" name="password" required />
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Submit
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
