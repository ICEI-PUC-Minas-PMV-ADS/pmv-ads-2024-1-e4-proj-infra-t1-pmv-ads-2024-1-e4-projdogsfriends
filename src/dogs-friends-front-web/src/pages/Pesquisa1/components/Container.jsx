import { Footer } from "../../../components/footer/Footer"
import { MapContainer } from "./MapContainer"
import { SideMenu } from "./SideMenu"

const Container = ({
    termo,
    setUf, 
    setTermo, 
    clients,
    activeMarker, 
    setActiveMarker, 
    children}) => {
    
  return (
    <div className="flex flex-col w-full h-full bg-white relative text-zinc-800">
        {/* <header className=" bg-white w-full">
              <div className="flex py-6 border-b-gray-200 border-b-[1px] shadow-sm justify-center">
                <span>logo</span>
              </div>
                
        </header> */}

        <main className="flex flex-row ">
      
            <aside className="hidden lg:block bg-white col-span-0 px-2 py-2 w-[450px]">
                    <SideMenu setTermo={setTermo} setUf={setUf}/>
            </aside>

            <div className="grid grid-cols-10 my-2 mx-2 relative w-full">
            
                <div className="bg-white min-h-[750px] shadow-md shadow-slate-200  py-4 px-4 mx-1 col-span-10
                        lg:col-span-6 sm:col-span-5 h-full w-full">
                    <>
                        <h1 className="font-bold text-2xl mb-2">Resultados em <span className="text-green-900">{termo}</span></h1>
                        <div className="mx-2">
                            {
                            children
                            }
                        </div>
                    </>
                </div>

                <div className="hidden sm:block  col-span-0 sm:col-span-5 lg:col-span-4 
                        shadow-lg shadow-slate-400 border-solid overflow-hidden relative h-full w-full">
    
                        <div className="w-full h-full absolute">
                                <MapContainer clients={clients} activeMarker={activeMarker} setActiveMarker={setActiveMarker}/>
                            </div>
                        
                </div>
             </div>
       
        </main>

       
        
        <footer className="bg-black w-full h-[100px] mt-6">
           <Footer />
        </footer>

    </div>
  )
}

export default Container