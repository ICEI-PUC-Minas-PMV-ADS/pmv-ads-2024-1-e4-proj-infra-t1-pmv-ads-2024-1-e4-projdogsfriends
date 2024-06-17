import { Image, Text, View } from "react-native"
import { Stars } from "../../components/stars/stars"
import { URL_IMAGE_BASE } from "../../constants/constants";

export const Reviews = ({ reviews }) => {
    
    const dataBr = (data) => {
        const p = data.split("T")[0];
        const br = p.split("-")
        return br[2] + "/" + br[1] + "/"+ br[0]
      }
    
  return (
   <View style={{gap:20}}>
       {
        reviews.length > 0 &&
           reviews.map((review, index) => {
            if(index < 2)
             return   <View key={index} 
                    style={{flexDirection: "row", gap:5, width:"100%", alignItems: "center", justifyContent: "center"}}>
                 <View>
                    {
                        review.fotoCliente ?
                            <Image source={{uri: `${URL_IMAGE_BASE}${review.fotoCliente}`}} 
                                style={{width: 50, height: 50, borderRadius: 25}} />
                            :
                            <Image source={{uri: review.fotoCliente}} 
                            style={{width: 50, height: 50, borderRadius: 25}} />
                    }
                 </View>
                 
                 <View style={{width: "90%"}}>    
                    <View style={{flexDirection: "row", justifyContent:"space-between", width:"94%"}}>
                       <View style={{flexDirection: "row"}}>
                        <Text style={{fontFamily:"semibold"}}>{review.nomeCliente}</Text>
                            <View style={{flexDirection: "row"}}>
                                <Stars number={review.nota} /> 
                                <Text style={{fontFamily:"semibold"}}>{ review.nota }</Text>
                        </View>
                        </View>
                        <Text>{dataBr(review.createdAt)}</Text>
                    </View>
                    <View>
                    <Text style={{fontFamily:"light"}}>{review.comentario}</Text>
                    </View>
                </View>
          
            </View>
           })
       }
   </View>
  )
}
