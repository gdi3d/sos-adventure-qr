import React from 'react';
import FieldContext from "../contexts/FieldContext";
import ComponentWrapper from './ComponentWrapper.js'

class Note extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = props.id;
    this.groupName = props.groupName;
  }

  render() {
    this.fieldContext = this.context;
    return (
      <ComponentWrapper field="note" id={ this.id }>
        <div className="mb-3 form-floating input-lg">
          <textarea name="notes" data-groupname={ this.groupName } className="form-control" placeholder="Notas" style={{height: 10+'em'}} onChange={e => this.fieldContext.fieldOnChangeHandler(e)}  defaultValue={ this.fieldContext.getComponentState(this.groupName, "note") }></textarea>
          <label>Notas</label>
        </div>
      </ComponentWrapper>
    )
  }
}

Note.contextType = FieldContext;

export default Note