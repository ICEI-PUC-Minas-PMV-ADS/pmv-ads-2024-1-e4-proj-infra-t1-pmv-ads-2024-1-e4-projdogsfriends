import { Link } from "react-router-dom"

export const Add = ({label}) => {
  return (
    <Link to={"#"}>
     <div className="flex flex-col justify-center items-center w-32 border-2 border-dashed
      border-sky-500 p-6 bg-zinc-50 rounded">
       <div className="">+</div>
       <span>{label}</span> 
    </div>
    </Link>
    
  )
}
