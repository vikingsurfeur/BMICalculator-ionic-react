/* Import Ionic Component */
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControl: React.FC<{
    selectedValue: "mkg" | "ftlbs";
    onSelectedValue: (value: "mkg" | "ftlbs") => void;
}> = ({ selectedValue, onSelectedValue }) => {
    const inputChangeHandler = (event: CustomEvent) => {
        onSelectedValue(event.detail.value);
    };

    return (
        <IonSegment value={selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="mkg">
                <IonLabel>Metric m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>Empiric ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;
