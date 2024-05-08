import React, { useEffect, useState } from "react";


export const Telefones = () => {

    const handleSubmit = () => { }

    const handleChange = () => { }

    const [user, setUser] = useState("");

    const telefones = user.telefones;

    const telefoneInputs = telefones?.map((telefone, index) => (
        <div key={index} className="sm:col-span-1">
            <label htmlFor={`telefoneCodigo${index}`} className="block text-sm font-medium leading-6 text-gray-900">DDD:</label>
            <div className="mt-2">
                <input
                    id={`telefoneCodigo${index}`}
                    name="telefones"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={telefone.codigo}
                    onChange={(e) => handleChange(e, index, 'codigo')}
                />
            </div>
        </div>,
        <div key={index + 'numero'} className="sm:col-span-3">
            <label htmlFor={`telefoneNumero${index}`} className="block text-sm font-medium leading-6 text-gray-900">Número de telefone:</label>
            <div className="mt-2">
                <input
                    id={`telefoneNumero${index}`}
                    name="telefones"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    value={telefone.numero}
                    onChange={(e) => handleChange(e, index, 'numero')}
                />
            </div>
        </div>
    ));
    

  return (
    <div>{telefoneInputs}</div>
  )
}
