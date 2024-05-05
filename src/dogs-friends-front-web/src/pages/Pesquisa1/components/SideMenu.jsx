import { useState } from "react";
import { PesquisarLocalOrigem } from "../../../components/google-maps"

export const SideMenu = ({setTermo, setUf}) => {
  
  return (
   <aside className="mt-6 px-1 flex flex-col">
    <div>
        <span className="font-semibold text-sm">Pesquisar em uma cidade ou bairro...</span>
        <PesquisarLocalOrigem setTermo={setTermo} setUf={setUf}/>
    </div>
    <div className="mt-6">
      <span className="text-sm">Quantos Pets?</span>
      <div className="flex mx-6 w-full mt-2">
        <button className="bg-blue-200 py-2 px-6 rounded-tl-md rounded-bl-md">1</button>
        <button className="bg-blue-200 py-2 px-6 border-x border-zinc-300">2</button>
        <button className="bg-blue-200 py-2 px-6 rounded-tr-md rounded-br-md">+3</button>
      </div>
    </div>

    <div className="mt-6">
      <div className="flex flex-col gap-2">
        <span>Filtrar Preço</span>
        <input type="range" />
      </div>
    </div>

    <div className="mt-6">
      <div className="flex gap-2">
        <input type="checkbox" min={0} max={1000} step={1}/>
        <span>Inclui alimentação</span>      
      </div>
    </div>
   </aside>
  )
}
