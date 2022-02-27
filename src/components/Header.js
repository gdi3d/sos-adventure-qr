const Header = () => {
  
  return (
    <div className="px-4 py-5 mb-5 mt-0 text-center bg-dark text-light">
      <p><span className="fa fa-ambulance" style={{fontSize: 5+'em'}}></span></p>
      <h1 className="display-5 fw-bold">S.O.S Adventure QR</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Genera un código QR con tus datos para que en caso de accidente los servicios de emergencia sepan quién eres, a quien contactar y acceso a información básica sobre tí.<br/><i>No requiere una conexión a Internet</i></p>
        <p><a className="btn btn-info" href="#faq">Leer más...</a></p>
      </div>
    </div>
  )
}

export default Header