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
  IonLoading,
} from "@ionic/react";
import NavHeader from "../../components/headers/NavHeader";
import { toast } from "../../helpers/toast";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import validatePasswordReset from "../../validation/validatePasswordReset";

const INITIAL_STATE = {
  email: "",
};
const ForgotPassword = (props) => {
  const { handleChange, handleSubmit, isSubmitting, values } = useForm(
    INITIAL_STATE,
    validatePasswordReset,
    resetPassword
  );
  const [busy, setBusy] = React.useState(false);

  async function resetPassword() {
    setBusy(true);
    const { email } = values;

    try {
      await firebase.resetPassword(email);
      toast(`Password reset link sent to ${email}.`);
      props.history.push("/login");
    } catch (err) {
      console.log("Reset Password Error", err);
      toast(err.message);
    }
    setBusy(false);
  }
  return (
    <IonPage>
      <NavHeader title="Reset Password" />
      <IonLoading isOpen={busy} message="Processing..." />
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            name="email"
            value={values.email}
            onIonChange={handleChange}
            required
          />
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              expand="block"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Send Password Reset Link
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
