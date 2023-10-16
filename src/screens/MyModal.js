import { useState } from 'react'
import { ModalView, ModalTitulo, SecaoTitulo, InputTexto, ModalBotao, ModalBotaoTexto } from '../components/ModalView'
import { TouchableOpacity } from 'react-native';
import { X } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyModal({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function salvaNota() {

    const nota = {
      titulo,
      mensagem
    }

    const data = await AsyncStorage.getItem('nota')
    const currentData = data ? JSON.parse(data) : []
    const formattedData = [
      ...currentData,
      nota
    ]
    await AsyncStorage.setItem('nota', JSON.stringify(formattedData))
    navigation.goBack()
  }


  return(
    <ModalView>
      <SecaoTitulo>
        <ModalTitulo>Task Manager</ModalTitulo>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X color={"red"}/>
        </TouchableOpacity>
      </SecaoTitulo>
      <InputTexto
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Title"
        />
      <InputTexto 
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Notes" 
        multiline 
        numberOfLines={4} 
        style={{paddingHorizontal: 19}}
        />
        <ModalBotao onPress={() => salvaNota()}>
          <ModalBotaoTexto>Save</ModalBotaoTexto>
        </ModalBotao>
    </ModalView>
  )
}