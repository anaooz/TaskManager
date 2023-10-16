import styled from "styled-components/native";

export const ModalView = styled.View`
  background-color: #ffcfd7;
  align-items: center;
  margin-vertical: 70%;
  margin-horizontal: 10;
`

export const SecaoTitulo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 10px;
`

export const ModalTitulo = styled.Text`
  color: #f54260;
  font-size: 20px;
`

export const InputTexto = styled.TextInput`
  border-width: 1px;
  border-color: grey;
  background-color: #FFFFFF;
  padding: 10px;
  margin-vertical: 5px;
  border-radius: 5px;
`

export const ModalBotao = styled.TouchableOpacity`
  padding: 10px;
  margin-vertical: 5px;
  background-color: #ff002b;
  border-radius: 5px;
`

export const ModalBotaoTexto = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
`