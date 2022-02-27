import React from 'react';
import FieldContext from "../contexts/FieldContext";
import ComponentWrapper from './ComponentWrapper.js'

class ContactPerson extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  }

  render() {
    this.fieldContext = this.context;
    return (
      <ComponentWrapper field="contactperson" id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="emergencyName1" data-groupname={ this.groupName } className="form-control" placeholder="Nombre Contacto Emergencia 1" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyName1") } />
          <label>Nombre Contacto Emergencia</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="tel" name="emergencyPhone1" data-groupname={ this.groupName } className="form-control" placeholder="Telefono (No olvides código pais)" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyPhone1") } />
          <label>Telefono (+34...)</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="emergencyLang1" data-groupname={ this.groupName } className="form-control" placeholder="Habla Idioma" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyLang1") }/>
          <label>Habla Idioma</label>
          <p className="text-muted"><small>separados por coma</small></p>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="emergencyName2" data-groupname={ this.groupName } className="form-control" placeholder="Nombre Contacto Emergencia 2" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyName2") } />
          <label>Nombre Contacto #2</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="tel" name="emergencyPhone2" data-groupname={ this.groupName } className="form-control" placeholder="Telefono (No olvides código pais)" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyPhone2") }/>
          <label>Telefono (+34...)</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="emergencyLang2" data-groupname={ this.groupName } className="form-control" placeholder="Habla Idioma" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyLang2") } />
          <label>Habla Idioma</label>
          <p className="text-muted"><small>separados por coma</small></p>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="emergencyName3" data-groupname={ this.groupName } className="form-control" placeholder="Nombre Contacto Emergencia 3" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyName3") }/>
          <label>Nombre Contacto #3</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="tel" name="emergencyPhone3" data-groupname={ this.groupName } className="form-control" placeholder="Telefono (No olvides código pais)" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyPhone3") } />
          <label>Telefono (+34...)</label>
        </div>
        <div className="mb-3 form-floating input-lg">
          <input type="text" name="emergencyLang3" data-groupname={ this.groupName } className="form-control" placeholder="Habla Idioma" onChange={e => this.fieldContext.fieldOnChangeHandler(e)} defaultValue={ this.fieldContext.getComponentState(this.groupName, "emergencyLang3") } />
          <label>Habla Idioma</label>
          <p className="text-muted"><small>separados por coma</small></p>
        </div>
        <hr />
      </ComponentWrapper>
    )
  }
}

ContactPerson.contextType = FieldContext;

export default ContactPerson