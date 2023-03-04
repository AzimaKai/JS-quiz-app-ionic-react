import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import "./Quiz.css";

const Quiz: React.FC = () => {
  const questions = [
    {
      question: 'What is the difference between "==" and "===" operators?',
      answers: [
        {
          text: '"==" compares value and type, while "===" compares only value.',
          correct: false,
        },
        {
          text: '"==" compares only value, while "===" compares value and type.',
          correct: true,
        },
        {
          text: '"==" and "===" are identical in their comparison behavior.',
          correct: false,
        },
      ],
    },
    {
      question: 'What is the use of the "use strict" directive in JavaScript?',
      answers: [
        {
          text: "It specifies that the script should be executed in strict mode, which enforces stricter rules for variable declaration and other language features.",
          correct: true,
        },
        {
          text: "It enables certain experimental features in newer versions of JavaScript.",
          correct: false,
        },
        {
          text: "It disables certain security features in the browser to allow for more flexible scripting.",
          correct: false,
        },
      ],
    },
    {
      question:
        'What is the difference between "var", "let", and "const" in JavaScript?',
      answers: [
        {
          text: '"var" is used to declare variables with function scope, while "let" and "const" are used for block scope.',
          correct: true,
        },
        {
          text: '"var" is used to declare variables with block scope, while "let" and "const" are used for function scope.',
          correct: false,
        },
        {
          text: '"var" and "let" are interchangeable, while "const" is used to declare constants that cannot be reassigned.',
          correct: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (answerIndex: number) => {
    if (questions[currentQuestion].answers[answerIndex].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // quiz is finished, display score and reset state
      alert(`You scored ${score} out of ${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center" color="warning">JS Quizzo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container"color="tertiary">
        <IonList>
          <IonItem>
            <IonLabel>{questions[currentQuestion].question}</IonLabel>
          </IonItem>
          <IonRadioGroup
            value={-1} // value of -1 ensures that no option is initially selected
            onIonChange={(e) =>
              handleAnswerSelected(parseInt(e.detail.value, 10))
            }
          >
            {questions[currentQuestion].answers.map((answer, index) => (
              <IonItem key={index}>
                <IonLabel>{answer.text}</IonLabel>
                <IonRadio slot="start" value={index} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
        <IonButton className="button-small" color="success"
          expand="block"
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
          }}
        >
          Restart Quizzo
        </IonButton>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Quiz;
