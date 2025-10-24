import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    nav('/home');
  };

  return (
    <IonPage>
      <IonHeader><IonToolbar><IonTitle>Sign In</IonTitle></IonToolbar></IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Log In
        </IonButton>
        <IonButton fill="clear" onClick={() => nav('/login')}>
            Already have an account? Log In
        </IonButton>
      </IonContent>
    </IonPage>
  );
}