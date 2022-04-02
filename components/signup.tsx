import { IonCol, IonGrid, IonLabel, IonRow, LazyLoadImage } from '../functions';
export default function Signup() {
  return (
    <div className='signup signupCont' id="signup">
      <div className="innerSignup">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel className="signupLabel">Sign Up</IonLabel>
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
