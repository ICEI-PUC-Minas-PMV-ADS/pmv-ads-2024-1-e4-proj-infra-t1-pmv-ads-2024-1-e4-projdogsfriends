import { Text } from "react-native"

export const Stars = ({ number }) => {
  let stars = ""
  for(let i = 0; i < number; i++){
    stars += `⭐️ `
  }
  return (
   <Text>
     {stars}
   </Text>
  )
}

 