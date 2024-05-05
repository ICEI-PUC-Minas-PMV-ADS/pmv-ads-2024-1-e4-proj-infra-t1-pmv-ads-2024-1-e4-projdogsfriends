import { MapContainer } from "../../Pesquisa/components/MapContainer";
import { GridImages, Reviews, Header } from "./";
import {Footer} from "../../../components/footer/Footer"
import { AgandaCalendar } from "../../../components/calendar/AgendaCalendar";
import { Card } from "../../../components/client/Card";

const Container = ({ client, activeMarker, setActiveMarker }) => {
  if (client === undefined || client === null) return <></>;
  return (
    <>
    {/* <header className=" bg-white w-full fixed z-10">
            <div className="flex py-6 border-b-gray-200 border-b-[1px] shadow-sm justify-center">
              <span>logo</span>
            </div>
              
      </header>  */}

    <div className=" flex md:flex-row flex-col sm:px-12 lg:px-24 2xl:px-72 w-full text-zinc-700">
     
      <section id="aside-menu" className="lg:w-80 flex flex-col items-center gap-2 bg-zinc-100 h-[100vh] md:fixed">      
       <div className="p-5">
          <Card client={client} />
       </div>
        <div className="">
           <span>Disponibilidade</span>
           <AgandaCalendar />
        </div>
    
      </section>

      <main className="md:pl-80 w-full h-full">
        <div className="p-6">
          <div className="w-full mb-6">
            <Header client={client}/>
          </div>


          <div className="flex flex-col w-full gap-8">


          <div className="px-2">
              <GridImages />
            </div>


          <div>
            <h2 className="text-2xl font-semibold">Carinho e atenção com os pets.</h2>
            <span>
              Eu cresci com muitos cães e quase todos os outros animais de
              estimação e animais 4H possíveis. Cuidar dos meus animais de
              estimação era uma rotina diária. Vizinhos e amigos também contam
              comigo para cuidar de seus cães enquanto estão fora da cidade.
            </span>
          </div>


            <div className="w-full flex flex-col gap-4">
              <span className="text-2xl font-semibold">Reviews</span>
              <div className="px-2 w-full">
                <Reviews reviews={client.reviews}/>
              </div>             
            </div>

            <div className="px-2">
              <div className="w-full h-[400px] relative z-0">
                <MapContainer
                  clients={[client]}
                  activeMarker={activeMarker}
                  setActiveMarker={setActiveMarker}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <Footer/>
    </>
  );
};

export default Container;
