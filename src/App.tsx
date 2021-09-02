import { useRef, useState } from "react";

/* Import Components */
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";
import InputControl from "./components/InputControl";

/* Import Ionic Component */
import {
    IonApp,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar,
    IonItem,
    IonAlert,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
    const [calculatedBmi, setCalculatedBmi] = useState<number>();
    const [error, setError] = useState<string>();
    const [calcMethodUnits, setCalcMethodUnits] = useState<'mkg' | 'ftlbs'>('mkg');

    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);

    const calculateBMI = () => {
        const inputHeight = heightInputRef.current!.value;
        const inputWeight = weightInputRef.current!.value;

        if (
            !inputHeight ||
            !inputWeight ||
            +inputHeight <= 0 ||
            +inputWeight <= 0
        ) {
            setError('Please enter a valid input height or weight (non-negative)')
            return;
        }

        const weightConversionFactor = calcMethodUnits === 'mkg' ? 1 : 2.20462;
        const weight = +inputWeight / weightConversionFactor;

        const heightConversionFactor = calcMethodUnits === 'mkg' ? 1 : 3.28084;
        const height = +inputHeight / heightConversionFactor;

        const bmi = weight / (height * height);
        setCalculatedBmi(bmi);
    };

    const resetFields = () => {
        weightInputRef.current!.value = "";
        heightInputRef.current!.value = "";
    };

    const clearError = () => {
        setError('');
    };

    const toggleUnits = (selectedValue: 'mkg' | 'ftlbs') => {
        setCalcMethodUnits(selectedValue);
    };

    return (
        <>
            <IonAlert
                isOpen={!!error}
                message={error}
                buttons={[{ text: "Okay...", handler: clearError }]}
            />
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle className="ion-text-center">
                            BMI Calculator
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <InputControl selectedValue={calcMethodUnits} onSelectedValue={toggleUnits} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">
                                        Your Height ({calcMethodUnits === 'mkg' ? 'meters' : 'feet'})
                                    </IonLabel>
                                    <IonInput
                                        type="number"
                                        ref={heightInputRef}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">
                                        Your Weight ({calcMethodUnits === 'mkg' ? 'kg' : 'lbs'})
                                    </IonLabel>
                                    <IonInput
                                        type="number"
                                        ref={weightInputRef}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <BmiControls
                            calculateBMI={calculateBMI}
                            resetFields={resetFields}
                        />
                        {calculatedBmi && (
                            <BmiResult calculatedBmi={calculatedBmi} />
                        )}
                    </IonGrid>
                </IonContent>
            </IonApp>
        </>
    );
};

export default App;
