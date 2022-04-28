
import React, { useState } from "react";

function App() {

  const [data, setData] = useState({
    val1: '',
    val2: '',
    operacion: ''
  })

  const [result, setResult] = useState('')

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name]: event.target.value
    });
  }
  const Operar = (event) => {
    event.preventDefault()
    setResult('')

    /* Para el cluster utilizo solo el endpoint sin definir el host 
        de esta manera se va a ir a buscar al servidor del frontend (ngnix) y va a usar el dns interno configurado
        en el archivo nginx.conf
    */
    //fetch(`http://localhost:2000/operacion/${data.operacion}`, {
    fetch(`/operacion/${data.operacion}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        if (data.error == null) {
          
            setData({
                val1: '',
                val2: '',
                operacion: ''
            })
            setResult(data.result)
         
        }else{
            console.error(data.error)
        }
    })
    .catch(error => {
        console.log(error)
    })
}

return (
    <>
        <div className="d-flex justify-content-center">
        <div className="form-group col-md-6">
       
            <h1>Operacion Aritemetica</h1>
            <form onSubmit={Operar}>
                
                <div className="form-group col-md-8">
                    <label htmlFor="val1" className="form-label">val1</label>
                    <input type="text" name="val1" id="val1" onChange={handleInputChange} className="form-control" value={data.val1}></input>
                </div>

                <div className="form-group col-md-8">
                    <label htmlFor="val2" className="form-label">val2</label>
                    <input type="text" name="val2" id="val2" onChange={handleInputChange} className="form-control" value={data.val2}></input>
                </div>

                <div className="form-group col-md-8">
                    <label htmlFor="val2" className="form-label">Operacion</label>
                    <select name="operacion" id="operacion" onChange={handleInputChange} className="form-control" value={data.operacion}>
                      <option value="">Seleccionar</option>
                      <option value="suma">Suma</option>
                      <option value="resta">Resta</option>
                    </select>
                  
                </div>

                <div className="form-group col-md-8">
                    <label htmlFor="val2" className="form-label">Resultado</label>
                    <input type="text" name="val2" id="val2"  onChange={handleInputChange} className="form-control" value={result} readOnly></input>
                </div>

                
               <br></br>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Aceptar</button>
                </div>

            </form>
      
        </div>
        </div>
        
        
    </>
)
}

export default App;
