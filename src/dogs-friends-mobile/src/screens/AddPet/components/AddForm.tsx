import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Text, TextInput, View,TouchableOpacity } from "react-native"
import { styles } from "./styles";

 

const Schema = yup.object({
    nome: yup.string().required("Informe um nome"),
    idade: yup.number().required("Informe a idade do Pet"),
    peso: yup.number().required("Informe um peso aproximado"),
    raca: yup.string().required("Informe a raça do pet")
})

export const AddForm = ({setPet}) => {

    const  { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(Schema)
    })

    const handleAddPet = (data: any) => {
      setPet(data);
    }

    return (
        <View style={{marginTop: 20}}>
        <Text>{errors.nome ? errors.nome.message : "Nome do Pet"}</Text>
           <Controller 
              control={control}
              name="nome"
              render={({field: {onChange, onBlur, value}}) => (  

                <TextInput
                  style={[styles.inputContainer ]}
                  placeholder="Nome do Pet"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />

          )}
          />
      <Text>{errors.raca ? errors.raca.message : "Raça"}</Text>
            <Controller 
              control={control}
              name="raca"
              render={({field: {onChange, onBlur, value}}) => (  

                <TextInput
                  style={[styles.inputContainer ]}
                  placeholder="Raça"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />

          )}
          />

      <Text>{errors.idade ? errors.idade.message : "Idade"}</Text>
        <Controller 
              control={control}
              name="idade"
              render={({field: {onChange, onBlur, value}}) => (  

                <TextInput
                  style={[styles.inputContainer ]}
                  keyboardType="numeric"
                  placeholder="Idade"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />
            
          )}
          />
        <Text>{errors.peso ? errors.peso.message : "Peso"}</Text>
        <Controller 
              control={control}
              name="peso"
              render={({field: {onChange, onBlur, value}}) => (  

                <TextInput
                  style={[styles.inputContainer ]}
                  placeholder="Peso"
                  keyboardType="numeric"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />

          )}
          />

          <View style={styles.container}>
            <TouchableOpacity style={styles.btnAddPet}
              onPress={handleSubmit(handleAddPet)}>
              <Text style={styles.textAddPet}>Cadastrar Pet</Text>
            </TouchableOpacity>
          </View>
            
        </View>
    )
} 