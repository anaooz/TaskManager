import { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Tela, Titulo, TituloBack, Add, TextoBotao } from '../components/Home'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Nota from './Nota';

export default function HomeScreen({ navigation }) {
  const [notas, setNotas] = useState([]);

  async function getNotas() {
    const data = await AsyncStorage.getItem('nota');
    const currentData = data ? JSON.parse(data) : [];
    setNotas(currentData);
  }

  useEffect(() => {
    getNotas();
  }, [notas]);

  return (
    <Tela>
      <TituloBack>
        <Titulo>Mateus To-Do List</Titulo>
      </TituloBack>
      <FlatList
          data={notas}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleNavigateToDetails(item)}>
              <View>
                <Nota title={item.titulo} mensagem={item.mensagem} index={index} />
              </View>
            </TouchableOpacity>
          )}
        />
      <Add onPress={() => navigation.navigate("MyModal")}>
        <TextoBotao>Add To Do</TextoBotao>
      </Add>
    </Tela>
  );
}