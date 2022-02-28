import { useState, useReducer, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';
import QRCode from 'qrcode.react';

import "./bootstrap.min.css";
import QRiconER from './emergency-ambulance-svgrepo-com.svg'

import Header from './components/Header'
import Fullname from './components/Fullname'
import BloodType from './components/BloodType'
import ContactPerson from './components/ContactPerson'
import FieldButton from "./components/FieldButton";
import Medication from "./components/Medication";
import Allergies from "./components/Allergies";
import Surgeries from "./components/Surgeries";
import InfectionDiseases from "./components/InfectionDiseases";
import Note from "./components/Note";
import Faq from "./components/Faq";

import FieldContext from "./contexts/FieldContext";

function fieldReducers(state, action) {

  const fieldID = uuidv4();

  let groupName = '';

  switch(action.type) {

    case 'FULLNAME_ADD':

      groupName = "fullname";
      return [...state, {"group":groupName, "id": fieldID, "data": {}, "order":1, "template": <Fullname id={ fieldID } groupName={ groupName } />}];
    
    case 'BLOODTYPE_ADD':
    
      groupName = "bloodtype"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":3, "template": <BloodType id={ fieldID } groupName={ groupName } />}]
    
    case 'CONTACTPERSON_ADD':
    
      groupName = "contactperson"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":2, "template": <ContactPerson id={ fieldID } groupName={ groupName } />}]
    
    case 'ALLERGIES_ADD':
    
      groupName = "allergies"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":4, "template": <Allergies id={ fieldID } groupName={ groupName } />}]
    
    case 'MEDICATION_ADD':
    
      groupName = "medication"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":5, "template": <Medication id={ fieldID } groupName={ groupName } />}]
    case 'SURGERIES_ADD':
    
      groupName = "surgeries"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":6, "template": <Surgeries id={ fieldID } groupName={ groupName } />}]
    
    case 'NOTE_ADD':
      groupName = "note"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":8, "template": <Note id={ fieldID } groupName={ groupName } />}]
    
    case 'INFECTION_ADD':
    
      groupName = "infectiondiseases"
      return [...state, {"group":groupName,"id": fieldID, "data": {}, "order":7, "template": <InfectionDiseases id={ fieldID } groupName={ groupName } />}]
    case 'COMPONENT_REMOVE':
    
      return state.filter((d) => d.id !== action.id)
    
    case 'FIELD_CHANGE':
    
      const fieldIDX = state.findIndex(f => f.group === action.group);
      action.value.length > 0 ? Reflect.set(state[fieldIDX]['data'], action.field, action.value) : Reflect.deleteProperty(state[fieldIDX]['data'], action.field)
      return [...state]
    
    default:
      throw Error("Undefined action while calling reducer");
  }
}

function App() {

  const [UIFields, dispatch] = useReducer(fieldReducers, []);
  const [QRTextTranslate, setQRTextTranslate] = useState('');
  const [QRCodeData, setQRCodeData] = useState('');

  useEffect(() => {
    updateQR();
  }, [UIFields]);

  const fullNameAddHandler = (e, field) => {
    if(!fieldExists("fullname")) {
      dispatch({type:'FULLNAME_ADD'});
    } 
  }

  const fieldOnChangeHandler = (e) => {
      dispatch({type:'FIELD_CHANGE', value: e.target.value, field: e.target.name, group: e.target.dataset.groupname});
  }

  const bloodTypeAddHandler = (e) => {  
    if(!fieldExists("bloodtype")) {
      dispatch({type:'BLOODTYPE_ADD'});
    }
  }

  const allergiesAddHandler = (e) => {
    if(!fieldExists("allergies")) {
      dispatch({type:'ALLERGIES_ADD'});
    }
  }

  const surgeriesAddHandler = (e) => {
    if(!fieldExists("surgeries")) {
      dispatch({type:'SURGERIES_ADD'});
    }
  }

  const medicationAddHandler = (e) => {
    if(!fieldExists("medication")) {
      dispatch({type:'MEDICATION_ADD'});
    }
  }

  const contactPersonAddHandler = (e, field) => {
    if(!fieldExists("contactperson")) {
      dispatch({type:'CONTACTPERSON_ADD'});
    }
  }

  const infectionDiseaseAddHandler = (e, field) => {
    if(!fieldExists("infectiondiseases")) {
      dispatch({type:'INFECTION_ADD'});
    }
  }

  const noteAddHandler = (e) => {
    if(!fieldExists("note")) {
      dispatch({type:'NOTE_ADD'});
    }
  }

  const removeHandler = (e, id) => {
    dispatch({type:'COMPONENT_REMOVE', id: id});
  }

  const fieldExists = (id) => {
    if (UIFields.find((d) => d.group === id)) {
      alert("Ya agregaste esta opción");
      return true;
    }
  }

  const getComponentState = (groupName, field) => {
    const fieldIDX = UIFields.findIndex(f => f.group === groupName);
    return UIFields[fieldIDX]['data'][field]
  }

  const showTranslation = () => {
    let elem = document.getElementById('translate')
    elem.classList.remove("d-none");  
  }

  const updateQR = (translate) => {

    if(translate !== '' && translate !== undefined) {
      setQRCodeData(translate);
      setQRTextTranslate(translate);
      return
    }

    let QRText = '';
    
    // sort fields by predefined order
    let fields = [...UIFields].sort(function(a,b) {
      return a.order - b.order
    });


    fields.forEach((el) => {
      
      if(el.data.hasOwnProperty('fullname')) {          
        QRText = `Nombre: ${el.data.fullname}\n`
      }

      if(el.data.hasOwnProperty('country')){
        QRText = `${QRText}Nacionalidad: ${el.data.country}\n`
      }

      if(el.data.hasOwnProperty('dni')) {
        QRText = `${QRText}Numero de Documento: ${el.data.dni}\n`
      }

      if(el.data.hasOwnProperty('passport')) {
        QRText = `${QRText}Pasaporte #: ${el.data.passport}\n`
      }

      if(el.data.hasOwnProperty('emergencyName1')) {
        QRText = `${QRText}Contacto Emergencia #1: ${el.data.emergencyName1}\n`
        QRText = `${QRText}Telefono: ${el.data.emergencyPhone1}\n`
        QRText = `${QRText}Idiomas: ${el.data.emergencyLang1}\n`
      }

      if(el.data.hasOwnProperty('emergencyName2')) {
        QRText = `${QRText}Contacto Emergencia #2: ${el.data.emergencyName2}\n`
        QRText = `${QRText}Telefono: ${el.data.emergencyPhone2}\n`
        QRText = `${QRText}Idiomas: ${el.data.emergencyLang2}\n`
      }

      if(el.data.hasOwnProperty('emergencyName3')) {
        QRText = `${QRText}Contacto Emergencia #3: ${el.data.emergencyName3}\n`
        QRText = `${QRText}Telefono: ${el.data.emergencyPhone3}\n`
        QRText = `${QRText}Idiomas: ${el.data.emergencyLang3}\n`
      }

      if(el.data.hasOwnProperty('bloodtype')) {
        QRText = `${QRText}Grupo Sanguineo: ${el.data.bloodtype}\n`
      }

      if(el.data.hasOwnProperty('allergies')) {
        QRText = `${QRText}Alergias: ${el.data.allergies}\n`
      }

      if(el.data.hasOwnProperty('medication')) {
        QRText = `${QRText}Medicacion actual: ${el.data.medication}\n`
      }

      if(el.data.hasOwnProperty('surgeries')) {
        QRText = `${QRText}Operaciones últimos 2 años: ${el.data.surgeries}\n`
      }

      if(el.data.hasOwnProperty('infectiondiseases')) {
        QRText = `${QRText}Enfermedades Infecciosas: ${el.data.infectiondiseases}\n`
      }

      if(el.data.hasOwnProperty('notes')) {
        QRText = `${QRText}Notas: ${el.data.notes}\n`
      }

    })

    setQRTextTranslate(QRText);
    setQRCodeData(QRText);
  }

  const imageSettings = {src: `${QRiconER}`, height:115, width:115, excavate:true}

  const downloadQR = () => {
    const canvas = document.querySelector('.qr-container > canvas');
    const pngFile = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.download = "qrcode";
    downloadLink.href = `${pngFile}`;
    downloadLink.click();
  }

  return (
    <main>
      <Header />
      <div className="container">
        
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form action="">
              <FieldContext.Provider 
                value={{ removeHandler: removeHandler, fieldOnChangeHandler:fieldOnChangeHandler, getComponentState: getComponentState  }} 
                >
                {UIFields.map((d) => (
                  d.template
                  ))}
              </FieldContext.Provider>
            </form>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-8 offset-md-2 col-sm-12">
            <h4>Selecciona la información que deseas incluir en el codigo QR</h4>
            <FieldButton clickHandler={ fullNameAddHandler } label="Datos Básicos" />
            <FieldButton clickHandler={ contactPersonAddHandler } label="Contactos de Emergencia" />  
            <FieldButton clickHandler={ bloodTypeAddHandler } label="Grupo Sanguineo" />
            <FieldButton clickHandler={ allergiesAddHandler } label="Alergias" />  
            <FieldButton clickHandler={ medicationAddHandler } label="Medicación" />  
            <FieldButton clickHandler={ surgeriesAddHandler } label="Operaciones Recientes" />  
            <FieldButton clickHandler={ infectionDiseaseAddHandler } label="Enfermedades Infecciosas" />  
            <FieldButton clickHandler={ noteAddHandler } label="Notas" />  
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-8 offset-md-2 mt-5">
            <h4 className="mb-5">Descarga e imprime esta imagen en una pegatina o en un colgante</h4>
          </div>
        </div>

        <div className="row mt-0">
          <div className="col-md-4 offset-md-4 col-xs-12 text-center qr-container">
            <QRCode value={ QRCodeData } style={{width: "100%"}} size="1024" level="Q" imageSettings={ imageSettings } />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-4 col-xs-12 text-center">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
              <button type="button" className="btn btn-success btn-lg" onClick={e => downloadQR() }>Descargar QR</button>
              <button type="button" className="btn btn-link btn-lg" onClick={e => showTranslation() }>QR en otro idioma</button>
            </div>
          </div>
        </div>

        <div className="row d-none" id="translate">
          <div className="col-md-8 offset-md-2 mt-5">
            <textarea className="form-control" style={{height: 10+'em'}} value={QRTextTranslate} onChange={e => updateQR(e.target.value)}></textarea>
            <p>Esta es la información que se cargará en el QR. Puedes utilizar <a href={"https://translate.google.com/?sl=es&tl=en&text="+encodeURIComponent(QRTextTranslate)+"&op=translate"} target="_blank" rel="noreferrer">Google Translate</a> para crear el QR en otro idioma y luego copia y pega la traducción aquí y el QR se actualizará</p>
          </div>
        </div>
        
        

      </div>

      <Faq />
    </main>
  );
}

export default App;