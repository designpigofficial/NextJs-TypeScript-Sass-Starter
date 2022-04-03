import { IonCol, IonGrid, IonLabel, IonRow, LazyLoadImage } from '../functions';
export default function Login() {
  return (
    <div className='form' id="login">
      <div className="innerForm">
        <IonGrid className='formElements'>
          <IonRow>
            <IonCol>
              <IonLabel className="formLabel">Log In</IonLabel>
            </IonCol>
            <IonCol class="emptyColSpacer" />
          </IonRow>
        </IonGrid>
        <LazyLoadImage className="formBG" id={`formBG`} alt={`formBG`} src={`/assets/formBG.png`} 
        width={`100%`} height={`auto`} effect="blur" />
      </div>
    </div>
  );
}
