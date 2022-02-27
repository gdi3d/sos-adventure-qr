import React from 'react';
import ComponentWrapper from './ComponentWrapper.js'
import FieldContext from "../contexts/FieldContext";

class Allergies extends React.Component {

  constructor(props) {

    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  
  }

  render() {
    this.fieldContext = this.context;
    return (
      <ComponentWrapper field="medication" id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="allergies" data-groupname={ this.groupName } className="form-control" placeholder="Alergias a Medicamentos" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "allergies") }/>
          <label>Alergias a Medicamentos</label>
          <p class="text-muted"><small>nombre de las drogas, separadas por coma</small></p>
        </div>
      </ComponentWrapper>
    )
  }
}

Allergies.contextType = FieldContext;

export default Allergies