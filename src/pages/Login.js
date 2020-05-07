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
  IonRouterLink,
} from "@ionic/react";
import NavHeader from "../components/headers/NavHeader";

const Login = () => {
  return (
    <IonPage>
      <NavHeader title="Log in" />
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" name="email" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" name="password" required />
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Log in
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="ion-text-center ion-padding-vertical">
            <IonRouterLink routerLink={"/reset-password"}>
              Forgot password?
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
