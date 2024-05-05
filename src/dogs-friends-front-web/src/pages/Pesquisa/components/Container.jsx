import { useState } from "react"
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
    
      // const[position, setPosition] = useState(0)
      // console.log(position)
      // window.addEventListener('scroll', function() {
      //   var menu = document.getElementById('map-container');
      //   var main = document.getElementById('main');
      //   if(menu !== null && menu !== undefined){
      //     var distanceBotton = menu.getBoundingClientRect().top;
      //     var maintop = main.getBoundingClientRect().top;
      //     console.log(distanceBotton)
      //     if (distanceBotton < 10) {
      //       menu.classList.add('fixed-menu');
      //       setPosition(Math.abs(Math.round(distanceBotton)))
      //     }
      //     if(maintop > 50)
      //       menu.classList.remove('fixed-menu');
      //     }
      // });

      
  return (
    <div className="flex flex-col w-full h-full bg-white relative text-zinc-800 px-4">
        {/* <header className=" bg-white w-full">
              <div className="flex py-6 border-b-gray-200 border-b-[1px] shadow-sm justify-center">
                <span>logo</span>
              </div>
                
        </header> */}
      
      {
      (clients.length > 0) ? (
        <main id="main" className="flex flex-row w-[100%]">
        
        

            <aside className="hidden lg:block bg-white col-span-0 px-2 py-2 w-[28%]">
                    <SideMenu setTermo={setTermo} setUf={setUf}/>
            </aside>

            <div className="flex flex-row my-2 mx-2 relative w-full">
            
                <div className="bg-white min-h-[750px] md:w-[60%] w-full shadow-md shadow-slate-200  py-4 px-4 mx-1 
                         ">
                    <>
                        <h1 className="font-bold text-2xl mb-2">Resultados em <span className="text-green-900">{termo}</span></h1>
                      {

                     
                        <div className="mx-2">
                            {
                            children
                            }
                        </div>

                      }
                    </>
                </div>

                <div className={`hidden sm:block 
                        shadow-lg shadow-slate-400 border-solid overflow-hidden relative w-[40%]`}>
                    
                        <div id="map-container" className={`w-full h-full `}>
                                <MapContainer clients={clients} activeMarker={activeMarker} setActiveMarker={setActiveMarker}/>
                            </div>
                  
                </div>
             </div>
       
        </main>)

        :
        (
        <main>
          <div className="my-[62px] h-[60vh] px-[250px]">
          <span className="font-bold text-2xl">Comece pesquisando em uma cidade</span>
            <SideMenu setTermo={setTermo} setUf={setUf}/>
          </div>
        </main>
        )
        }

       
        
      

    </div>
  )
}

export default Container