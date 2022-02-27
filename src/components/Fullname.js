import React from 'react';
import ComponentWrapper from './ComponentWrapper.js'
import FieldContext from "../contexts/FieldContext";

class Fullname extends React.Component {
  
  constructor(props) {

    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  
  }

  render(){
    this.fieldContext = this.context;
    return (
      <ComponentWrapper id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="fullname" data-groupname={ this.groupName } className="form-control" placeholder="Tu Nombre Completo" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "fullname") }/>
          <label>Tu Nombre Completo</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="country" data-groupname={ this.groupName } className="form-control" placeholder="Nacionalidad" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "country") } />
          <label>Nacionalidad</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="dni" data-groupname={ this.groupName } className="form-control" placeholder="DNI" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "dni") }/>
          <label>DNI</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="passport" data-groupname={ this.groupName } className="form-control" placeholder="Nro. Pasaporte" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "passport") }/>
          <label>Nro. Pasaporte</label>
        </div>
        <hr />
      </ComponentWrapper>
    )
  }
}

Fullname.contextType = FieldContext;

export default Fullname