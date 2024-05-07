import React from "react"
import { useGetPets } from "../hooks"
import { CardPet, Add } from "./"

export const ListPets = React.memo(({userId}) => {
 
  const { pets } = useGetPets(userId)  

  return (
    <div className="flex flex-col px-10">
        <span className="font-bold">Meus Pets</span>
        
        <div className="flex flex-row gap-4 mb-16">
        {
            pets.length > 0 ?
            (
              pets.map((pet) => (
                <div key={pet.id} className="flex flex-col w-48 h-48 relative">                   
                     
                         <CardPet pet={pet}/>                      
                      
                </div>  
              ))
          ):
          (
            <div className="w-full h-40 bg-blue-100 rounded-md flex justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-sm text-zinc-600">Nenhum pet ainda, adicione seus pets</span>
                <img src="/dog-fill.svg" width={60}/>
              </div>
            </div>
          )
        }
         
        </div>
        <div className={`${pets.length > 0 ? 'mt-28' : ''}`}>
        <Add label={"Add Pet"}/>
      </div>
    </div>
  )
}
)
