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
import UserContext from "../../contexts/userContext";
import useForm from "../../hooks/useForm";
import firebase from "../../firebase";
import { toast } from "../../helpers/toast";
import validateEditProfile from "../../validation/validateEditProfile";

const EditProfile = (props) => {
  const { user, setUser } = React.useContext(UserContext);
  const INITIAL_STATE = {
    name: user && user.displayName,
    email: user && user.email,
    newPassword: "",
    currentPassword: "",
  };
  const {
    handleSubmit,
    handleChange,
    setValues,
    values,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateEditProfile, authenticateUser);
  const [busy, setBusy] = React.useState(false);

  async function reauthenticate(email, password) {
    const credential = firebase.app.auth.EmailAuthProvider.credential(
      email,
      password
    );
    try {
      await user.reauthenticateWithCredential(credential);
      console.log("Reauthentication successful");
    } catch (err) {
      console.log("Authentication error", err);
      toast(err.message);
    }
  }

  async function updateProfileItems(name, email, password) {
    await user.updateProfile({
      displayName: name,
    });
    await user.updateEmail(email);
    if (password) {
      await user.updatePassword(password);
    }
  }

  async function authenticateUser() {
    setBusy(true);
    const { name, email, currentPassword, newPassword } = values;
    try {
      await reauthenticate(user.email, currentPassword);
      await updateProfileItems(name, email, newPassword);
      const result = await firebase.login(
        email,
        newPassword || currentPassword
      );
      setValues({
        name: user && user.displayName,
        email: user && user.email,
        newPassword: "",
        currentPassword: "",
      });
      setUser(result.user);
      toast("Profile updates successfully!");
      props.history.push("/account");
    } catch (err) {
      console.log("Profile update error", err);
      toast(err.message);
    }
    setBusy(false);
  }
  return (
    <IonPage>
      <NavHeader title="Edit Account" />
      <IonLoading message="Please wait..." isOpen={busy}></IonLoading>
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            type="text"
            name="name"
            onIonChange={handleChange}
            value={values.name}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            name="email"
            onIonChange={handleChange}
            value={values.email}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">New Password</IonLabel>
          <IonInput
            type="password"
            name="newPassword"
            onIonChange={handleChange}
            value={values.newPassword}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Current Password</IonLabel>
          <IonInput
            type="password"
            name="currentPassword"
            onIonChange={handleChange}
            value={values.currentPassword}
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
              Update
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
