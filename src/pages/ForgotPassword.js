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

const ForgotPassword = () => {
  return (
    <IonPage>
      <NavHeader title="Reset Password" />
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" name="email" required />
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Send Password Reset Link
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
