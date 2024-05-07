import React, { useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import { Stars } from "../../components/stars/stars";
import { AiOutlineHeart } from "react-icons/ai";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { AgandaCalendar } from "../../components/calendar/AgendaCalendar";
import { Calendar } from "primereact/calendar";

import "./componentes/Style.css";

import { Card } from "./componentes/Card";
import { Header } from "./componentes/Header";
import { useLocation } from "react-router-dom";

import { Agendador } from "./componentes/Agendador";

export const Agendamento = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const [endereco, setEndereco] = useState(null);

  // const navegacao = useNavigate();
  const location = useLocation();
  const client = location.state?.client;

  // const namePasseador = client.nome;

  const handleSave = () => {
    if (!camposVazios()) {
      const dateFormatted = date.toLocaleDateString();
      // const timeFormatted = time.toLocaleTimeString();
      // const dateTime = `${dateFormatted} ${timeFormatted}`;

      alert(`Agendamento foi solicitado para ${dateFormatted} em "${endereco}"
Aguarde a confirmação de ${client.nome}.`);
    }
  };

  const camposVazios = () => { 
    if (date === null || time === null || endereco === null) {
      alert("Preencha todos os campos");
      return true;
    }

    return false;
  };

  return (
    <>
      <div className=" flex md:flex-row flex-col sm:px-12 lg:px-24 2xl:px-72 w-full text-zinc-700 ">
        <section className="lg:w-80 flex flex-col items-center gap-2 bg-zinc-100 h-[100vh] md:fixed">
          <div className="p-5">
            <Card client={client} />
          </div>
          <div className="">
            <span>Disponibilidade</span>
            <AgandaCalendar />
          </div>
        </section>

        <main className="container-calendar md:pl-80 w-full h-full">
          <div className="p-6">
            <div className="w-full mb-6">
              <h1 className="text-3xl font-semibold">Agendamento</h1>
              <Header client={client} />
            </div>

            <div className="flex flex-col w-full gap-8">
              
              <div className="flex flex-col md:flex-row w-full gap-8 px-2 justify-center text-center">
                
                <div className="md:w-1/2">
                  <p>Horário</p>

                  <div className="calendar-border flex justify-center">
                    <Calendar
                      value={time}
                      onChange={(e) => setTime(e.value)}
                      timeOnly
                      showIcon
                      showButtonBar
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <p>Data:</p>
                  <div className="calendar-border flex justify-center">
                    <Calendar
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      minDate={new Date()}
                      dateFormat="dd/mm/yy"
                      showIcon
                      placeholder="dd/mm/aaaa"
                      // showButtonBar
                      // value={dateRange}
                      // onChange={(e) => setDateRange(e.value)}
                      // selectionMode="range"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p>Endereço:</p>
                  <div className="p-endereco calendar-border flex justify-center">
                    <input
                      onChange={(e) => setEndereco(e.target.value)}
                      type="text"
                      placeholder="Endereço"
                      className="w-full p-2 border border-gray-200 rounded-md"
                    />
                  </div>
                  </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleSave}
                  className="px-8 p-2 bg-blue-800 hover:bg-blue-700 text-zinc-100 text-sm
                  rounded-full transition-all duration-300 hover:shadow-md "
                >
                  Agendar com {client.nome}
                </button>
                {/* <button className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                    <span className="text-lg">
                      {" "}
                      <AiOutlineHeart />{" "}
                    </span>
                  </button> */}
              </div>

            </div> // Fim do flex flex-col w-full gap-8

          </div>
        </main>
      </div>
    </>
  );
};
