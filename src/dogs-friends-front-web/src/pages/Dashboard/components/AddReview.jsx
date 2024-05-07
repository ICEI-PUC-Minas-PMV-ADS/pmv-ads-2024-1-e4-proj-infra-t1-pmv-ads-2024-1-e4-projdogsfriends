import { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useGetPasseio } from "../hooks";
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm, handleSubmit } from 'react-hook-form'
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from 'zod'
import { api } from "../../../api/axios";

const createReviewSchema = z.object({
  comentario: z.string().min(5, "O comentario deve conter pelo menos 5 caracteres.")
})

export const AddReview = ({passeioId}) => {
  const [nota, setNota] = useState(5)
  const {passeio} = useGetPasseio(passeioId)
  const [comentario, setComentario] = useState('')
  const [review, setReview] = useState(true)
  
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: zodResolver( createReviewSchema )
  })

  async function createReview({comentario}){
    try {
      const res = await api.post("/review", {
        nota,
        comentario,
        passeioId,
        passeadorId: passeio.pedido.passeador.id
      })
      if(res.status === 201){
        toast.success("Review adicionado");
        setReview(false)
      }
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }

  const ViewNota = () => {
    return (
    <div className="flex">
      {
        Array.apply(0, Array(5)).map(function (x, i) {
          return (
            <div key={i} className="cursor-pointer"
              onMouseOver={ () => setNota(nota => i+1)}>
            { 
              (nota < i+1)
                  ? 
                <div><FaRegStar /></div> 
                  : 
                <div className="text-yellow-500"><FaStar /></div> }
           </div>
          )
        })
      }
    </div>
    )
  }


  return (
   <>
    {
      passeio ?
        (
          <div>
             {
              review ? (
                <form onSubmit={handleSubmit(createReview)} className="flex flex-col">
        
                    <div className="flex">
                      <ViewNota /> <span>{ nota }</span>
                    </div>
                    <textarea 
                      {...register('comentario')}
                      value={comentario}
                      onChange={(e) => setComentario(e.target.value)}
                      rows={5} />
        
                    <button type="submit">Add Review</button>
                </form>
           )
           :
           <div>
             <Link to={"http://localhost:3001/user/dashboard"}>Voltar</Link>
           </div>
         }
      </div>
    )
      
      :
      (<div></div>)
    }
   
   </>
  )
}
