export const Stars = ({ number }) => {
  let stars = ""
  for(let i = 0; i < number; i++){
    stars += `⭐️ `
  }
  return (
   <div>
     {stars}
   </div>
  )
}

 