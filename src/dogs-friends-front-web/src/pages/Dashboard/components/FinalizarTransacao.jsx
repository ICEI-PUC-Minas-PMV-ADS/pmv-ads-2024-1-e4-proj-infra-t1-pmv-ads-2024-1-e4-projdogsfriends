import { useState } from "react"
import { api } from "../../../api/axios"
import toast from "react-hot-toast";

export const FinalizarTransacao = ({passeioId}) => {
  const [concluido, setConcluido] = useState(false)
  const handleFinish = async() => {
    try {
      const res = await api.post("passeio/finish", {
        id: passeioId
      })
      if(res.status === 201){
        toast.success("Passeio Concluido!")
        setConcluido(true)
      }
   
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <>
     {
       concluido ?
        (<div>
           Passeio Concluido! Obrigado!!!
        </div>)
        :
        (
          <div className="flex flex-col">
          <span>
              Clicando em finalizar, você confirma que os serviços foram atendidos conforme o esperado.
          </span>
            <div className="flex justify-end w-full">
            <button 
              onClick={() => handleFinish()}
              className="flex justify-center items-center font-semibold bg-blue-200 px-6 py-2 w-32 rounded">
                Finalizar
            </button>
            </div>
          </div>
        )
       
     }
  </>
  )
}
