import React from 'react';
import FieldContext from "../contexts/FieldContext";
import ComponentWrapper from './ComponentWrapper.js'

class BloodType extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  }

  render() {
    this.fieldContext = this.context;
    return (
      <ComponentWrapper field="bloodtype" id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <select name="bloodtype" data-groupname={this.groupName} className="form-select form-select-lg mb-3" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "bloodtype") }>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <label>Grupo Sanguíneo</label>
        </div>
        <hr />
      </ComponentWrapper>
    )
  }
}

BloodType.contextType = FieldContext;

export default BloodType