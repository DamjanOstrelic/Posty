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
  IonLoading,
} from "@ionic/react";
import NavHeader from "../../components/headers/NavHeader";
import { toast } from "../../helpers/toast";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import validateLogin from "../../validation/validateLogin";

const INITIAL_STATE = {
  email: "",
  password: "",
};
const Login = (props) => {
  const { handleSubmit, values, isSubmitting, handleChange } = useForm(
    INITIAL_STATE,
    validateLogin,
    loginUser
  );
  const [busy, setBusy] = React.useState(false);

  async function loginUser() {
    const { email, password } = values;
    setBusy(true);

    try {
      await firebase.login(email, password);
      toast("Logged in successfully!");
      props.history.push("/");
    } catch (err) {
      console.log("Login error", err);
      toast(err.message);
    }
    setBusy(false);
  }
  return (
    <IonPage>
      <NavHeader title="Log in" />
      <IonLoading message="Logging in..." isOpen={busy} />
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
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            name="password"
            required
            value={values.password}
            onIonChange={handleChange}
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
