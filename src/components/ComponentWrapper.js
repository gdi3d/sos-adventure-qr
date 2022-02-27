import { useContext } from "react";

import FieldContext from "../contexts/FieldContext";

const ComponentWrapper = (props) => {
  
  const fieldContext = useContext(FieldContext);

  return (
    <div className="row">
      <div className="col-10">
        {props.children}
      </div>
      <div className="col-2">
        <button className="btn btn-danger btn-sm mt-3" type="button" onClick={(e) => fieldContext.removeHandler(e, props.id) }><span className="fa fa-remove"></span></button>
      </div>
    </div>
  )
}

export default ComponentWrapper