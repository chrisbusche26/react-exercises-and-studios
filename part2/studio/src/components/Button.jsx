import ClickedButton from './ClickedButton.jsx';
import SaveButton from './SaveButton.jsx';

function Button(prop) {
  const saveButton = prop.saveButton;
  if (saveButton === true) {
    return <SaveButton />;
  } else {
    return <ClickedButton />;
  }
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 