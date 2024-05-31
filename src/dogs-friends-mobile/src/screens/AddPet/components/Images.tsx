import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"

export const Images = ({imagens, setImagens}) => {

    const removeImage = (uri: string) => {
        const imgs = imagens.filter(i => i.uri !== uri)
        setImagens(imgs)
    }

    return (
        <View>
             <View style={styles.imagesContent}>
             {
                imagens.map((image) => (
                    <View key={image.uri} style={styles.imageContent}>
                        <Image source={{uri: image.uri}}
                             style={styles.imageToUpload} />
                        <TouchableOpacity
                            onPress={() => removeImage(image.uri)}
                        >
                            <Text>remover</Text>
                        </TouchableOpacity>
                    </View>
                ))
             }
             </View>
        </View>
    )
}