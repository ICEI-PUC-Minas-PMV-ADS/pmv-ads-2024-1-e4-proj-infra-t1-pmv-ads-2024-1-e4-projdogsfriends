import { Stars } from "../../../components/stars/stars"

export const Reviews = ({reviews}) => {
 
  if(reviews.length === 0) return (<div>nenhum review</div>)
  return (
    <div className="grid grid-cols-2 w-full  text-sm">
        {
            reviews.map((review) => (           
                    <div className="col-span-1 p-4">
                       <div className="flex ">

                       <div className="w-[62px]">
                            <img 
                                className="w-[42px] h-[42px] object-cover rounded-full"
                                src={`http://localhost:3000/files/file/${review.fotoCliente}`} alt="" 
                                />
                        </div>
                        <div className="flex flex-col w-full">
                          
                           <div className="flex justify-between font-semibold">                          
                             <h3 className="">{ review.nomeCliente }</h3>
                             <span className="text-zinc-600 text-[12px]">{ dataBr(review.createdAt) }</span>
                           </div>
                          
                            <span className="w-full">{review.comentario}</span>
                            <div className="flex gap-2">
                                <Stars number={review.nota} />
                                <span>{review.nota}</span>
                            </div>
                        </div>

                        </div>
                    </div>
                
            ))
        }
    </div>
  )
}


const dataBr = (data) => {
  const p = data.split("T")[0];
  const br = p.split("-")
  return br[2] + "/" + br[1] + "/"+ br[0]
}