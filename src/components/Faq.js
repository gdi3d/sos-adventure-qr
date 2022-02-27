const Faq = () => {
  
  return (
    <div className="px-4 py-5 mt-5 text-center bg-light text-dark" id="faq">
      <h1 className="display-5 fw-bold mb-5">Preguntas Frecuentes</h1>
      <div className="col-lg-6 mx-auto text-start">
        <h3 className="mb-3">¿Para que sirve?</h3>
        <p>Genera un código QR que puedes llevar como colgante, pulsera, o pegatina para que los equipos de emergencia puedan acceder a tu información básica en caso de sufrir un accidente y quedar inconsciente.</p>
        <h3 className="mb-3">¿Como funciona?</h3>
        <p>El código QR contiene toda tu información. No requiere de una conexión a internet. No es necesario acceder a una web, ni descargar nada. El concepto detrás del diseño es contar con algo seguro que no dependa de internet para funcionar.</p>
        <h3 className="mb-3">¿Como lo utilizo?</h3>
        <p>Simplemente carga la información que consideres necesaria utilizando los botones. Luego genera el QR e imprimelo o haz una pegatina.</p>
        <p>Recomiendo llevarlo colgado en el cuello ya que en caso de accidente los paramédicos podrán verlo de inmediato.</p>
        <p><strong>Recuerda que cada segundo cuenta.</strong></p>
        
        <h3 className="mb-3">¿En que idioma esta la información?</h3>
        <p>La información se genera en Español pero puedes utilizar Google Translate para traducirlo al idioma que necesites y generar un nuevo código QR.</p>

        <h3 className="mb-3">Privacidad</h3>
        <p>Esta aplicación no guarda ningún dato en ningún servidor y tampoco en tu dispositivo y es de <a href="https://github.com/gdi3d/sos-adventure-qr" target="_blank" rel="noreferrer">código abierto</a></p>
        <p><strong>ATENCIÓN:</strong> Si decides poner este codigo QR en tu mochila, casco, cuadro de bicicleta o cualquier otro lugar visible, recuerda que cualquiera podria escanear el código y obtener la información.</p>
      </div>
    </div>
  )
}

export default Faq