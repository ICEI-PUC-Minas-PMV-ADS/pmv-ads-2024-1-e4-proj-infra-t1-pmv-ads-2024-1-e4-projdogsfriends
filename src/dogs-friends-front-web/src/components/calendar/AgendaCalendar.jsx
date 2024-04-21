import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range'

const handleSelect = (date) => {
    console.log(date); 
  }

  const dataTeste = [
    [10,4,2024],
    [10,5,2024],
    [11,4,2024],
    [11,5,2024],
    [13,4,2024],
    [15,4,2024],
    [16,4,2024],
    [16,4,2026],
  ]

let c = 1;
 const teste = dataTeste.map((data, i) => {
    const mapa = new Map()
    let r = []
    r.push(data)
    mapa.set(data[2]+data[1], data[0])
    for(let j = i+1; j < dataTeste.length; j++){
      if(((mapa.get(data[2]+data[1])+1) === dataTeste[j][0]) && data[2]+data[1] === dataTeste[j][2]+dataTeste[j][1]){
        
        r.push(dataTeste[j])        
        
        mapa.set(data[2]+data[1], (mapa.get(data[2]+data[1])+1))
      }
    }

    return r

  })

 console.log("teste:",teste)

export const AgandaCalendar = () => {
  
  const selectionRange = [
   {
    startDate: new Date("2024-04-01T00:00:00"),
    endDate: new Date("2024-04-05T00:00:00"),
    key: 'selection',
  },
  {
    startDate: new Date("2024-04-02T00:00:00"),
    endDate: new Date("2024-04-05T00:00:00"),
    key: 'selection',
  },
  {
    startDate: new Date("2024-04-03T00:00:00"),
    endDate: new Date("2024-04-05T00:00:00"),
    key: 'selection',
  },
   {
    startDate: new Date("2024-04-01T00:00:00"),
    endDate: new Date("2024-04-05T00:00:00"),
    key: 'selection',
  },
  {
   startDate: new Date("2024-04-10T00:00:00"),
   endDate: new Date("2024-04-12T00:00:00"),
   key: 'selection',
 },
 {
  startDate: new Date("2024-04-23T00:00:00"),
 endDate: new Date("2024-04-16T00:00:00"),
 key: 'selection',
 
},
  ]

  return (
    <div className="" >
       <DateRange  
        className="w-[320px]"      
        ranges={selectionRange}
        onChange={handleSelect}
        showDateDisplay={false} 
        rangeColors={['#3d91ff']}       
      />
    </div>
  )
}
