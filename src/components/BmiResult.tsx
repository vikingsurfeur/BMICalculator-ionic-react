/* Import Ionic Component */
import { IonRow, IonCol, IonCard } from "@ionic/react";

/* Import colorCardResult from utils function */
import colorCardResult from "../utils/colorCardResult";

/* BmiResult Component */
const BmiResult: React.FC<{ calculatedBmi: number }> = ({ calculatedBmi }) => {
    return (
        <IonRow>
            <IonCol>
                <IonCard 
                    className="ion-padding ion-text-center"
                    color={`${colorCardResult(calculatedBmi)}`}
                >
                    <h2>Your Body Mass Index</h2>
                    <h3>
                        {calculatedBmi.toFixed(2)} %
                    </h3>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;
