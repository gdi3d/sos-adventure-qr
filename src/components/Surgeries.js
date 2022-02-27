import React from 'react';
import FieldContext from "../contexts/FieldContext";
import ComponentWrapper from './ComponentWrapper.js'

class Surgeries extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  }

  render() {
    this.fieldContext = this.context;
    return (
      <ComponentWrapper field="surgeries" id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="surgeries" data-groupname={ this.groupName } className="form-control" placeholder="Operaciones ultimos 2 años" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "surgeries") }/>
          <label>Operaciones ultimos 2 años</label>
          <p className="text-muted"><small>separadas por coma</small></p>
        </div>
      </ComponentWrapper>
    )
  }
}

Surgeries.contextType = FieldContext;

export default Surgeries