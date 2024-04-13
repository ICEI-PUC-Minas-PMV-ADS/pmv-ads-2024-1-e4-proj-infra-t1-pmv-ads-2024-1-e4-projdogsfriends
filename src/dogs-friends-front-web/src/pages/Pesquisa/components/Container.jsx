
const Container = ({children}) => {

  return (
    <div className="grid grid-cols-5">
        <div className="bg-black grid-cols-5 py-4 w-full">

        </div>
            {
                children
            }

    </div>
  )
}

export default Container