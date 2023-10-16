import { NotaView, TituloNota, Mensagem, ContainerButtons, Start, StartTexto } from '../components/NotaView';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Trash2, FileEdit  } from 'lucide-react-native';

export default function Nota({ titulo, mensagem, index }) {
  const navigation = useNavigation();

  async function removeNote() {
    Alert.alert('Remover nota', 'Deseja remover a nota?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          const data = await AsyncStorage.getItem('nota');
          const currentData = data ? JSON.parse(data) : [];

          currentData.splice(index, 1);

          await AsyncStorage.setItem('nota', JSON.stringify(currentData));
        }
      }
    ])
  }

  return (
    <NotaView>
      <TituloNota>{titulo}</TituloNota>
      <Mensagem>{mensagem}</Mensagem>
      <ContainerButtons>
        <TouchableOpacity onPress={() => removeNote()}>
          <Trash2 color={"red"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
        <FileEdit size={20}/>
        </TouchableOpacity>
      </ContainerButtons>
      <Start onPress={() => navigation.navigate("Timer")}>
        <StartTexto>Start</StartTexto>
      </Start>
    </NotaView>
  );
}