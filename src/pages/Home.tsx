import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import { Link } from "react-router-dom";
import './Home.css';
import Slide from "../components/Slide";

const Home: React.FC = () => {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Quizzo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="tertiary" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quizzo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Slide />
        <Link to="/quiz">
          <IonButton  color="success" expand="block">
            Start Quizzo
          </IonButton>
        </Link>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Home;
