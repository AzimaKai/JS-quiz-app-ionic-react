import "./ExploreContainer.css";
import { IonButton } from "@ionic/react";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <IonButton routerLink="/quiz" fill="solid" color="success">
        JS Quiz Page
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
