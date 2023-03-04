import React from "react";
import { IonSlides, IonSlide, } from "@ionic/react";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Slide: React.FC = () => {
  return (
    < >
    <IonSlides className="container" pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Welcome to the Quizzo</h1>
        <p>
          This is a fun and interactive quizzo game to test your knowledge. Swipe
          left to learn how to play.
        </p>
      </IonSlide>
      <IonSlide>
        <h1>How to Play</h1>
        <p>Answer the questions by selecting one of the provided choices.</p>
        <p>
          Each correct answer will earn you a point. At the end of the quizzo, your
          score will be displayed.
        </p>
      </IonSlide>
      <IonSlide>
        <p>Are you ready to begin?</p>
      </IonSlide>
    </IonSlides>
    </>
  );
};

export default Slide;