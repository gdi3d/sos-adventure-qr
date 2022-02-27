const FieldButton = ({ clickHandler, label }) => {
  
  return (
    <button type="button" className="btn btn-primary me-2 ms-2 mt-2" onClick={e => clickHandler(e) }>{ label }</button>
  )
}

export default FieldButton