/* Import Ionic Component */
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";

/* Import Icons from ionicons */
import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* BmiControls Component */
const BmiControls: React.FC<{
    calculateBMI: () => void;
    resetFields: () => void;
}> = ({ calculateBMI, resetFields }) => {
    return (
        <IonRow className="ion-padding">
            <IonCol className="ion-text-left">
                <IonButton onClick={calculateBMI}>
                    <IonIcon slot="start" icon={calculatorOutline} />
                    Calculate
                </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
                <IonButton onClick={resetFields}>
                    <IonIcon slot="start" icon={refreshOutline} />
                    Reset
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default BmiControls;
