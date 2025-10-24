import React, { useState } from "react";
import { IonPage, IonContent, IonInput, IonButton, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      history.push("/")
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonTitle>Login</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Email" onIonChange={e => setEmail(e.detail.value!)} />
        <IonInput placeholder="Password" type="password" onIonChange={e => setPassword(e.detail.value!)} />
        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
