/* Import Ion Component */
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

/* Header Component */
const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle className="ion-text-center">BMI Calculator</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
