import React from 'react';
import FieldContext from "../contexts/FieldContext";
import ComponentWrapper from './ComponentWrapper.js'

class Medication extends React.Component {
  
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
          <input type="text" name="medication" data-groupname={ this.groupName } className="form-control" placeholder="Medicamentos que tomas"  onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "medication") }/>
          <label>Medicamentos que tomas</label>
          <p className="text-muted"><small>separadas por coma</small></p>
        </div>
      </ComponentWrapper>
    )
  }
}

Medication.contextType = FieldContext;

export default Medication