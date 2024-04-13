import {Map, PesquisarLocalOrigem} from "../../../components/google-maps"

 

const Container = ({children}) => {

  return (
    <div className="flex flex-col w-full h-full">
        <header className="bg-black py-4 w-full">
                Teste
        </header>

        <main className="grid grid-cols-8">
            <div className="bg-green-100 col-span-2 w-full">
             <PesquisarLocalOrigem />
            </div>

            <div className="bg-red-500 col-span-4 w-full h-full">
                teste
            </div>

            <div className="col-span-2 w-full">
                <div>
                 
                     <Map />
                  
                </div>
             
            </div>
        </main>
        
        
        <footer className="bg-black w-full h-[100px]">
            teste
        </footer>

    </div>
  )
}

export default Container