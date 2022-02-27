import React from 'react';
import FieldContext from "../contexts/FieldContext";
import ComponentWrapper from './ComponentWrapper.js'

class InfectionDiseases extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  }

  render() {
    this.fieldContext = this.context;
    return (
      <ComponentWrapper field="infectiondiseases" id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="infectiondiseases" data-groupname={ this.groupName } className="form-control" placeholder="Enfermedades Infecciosas"  onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "infectiondiseases") }/>
          <label>Enfermedades Infecciosas</label>
          <p class="text-muted"><small>separadas por coma</small></p>
        </div>
      </ComponentWrapper>
    )
  }
}

InfectionDiseases.contextType = FieldContext;

export default InfectionDiseases