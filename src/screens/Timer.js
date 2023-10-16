import { View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Timer({ navigation }) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CountdownCircleTimer
      isPlaying
      duration={1500}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        navigation.goBack()
      }}
    >
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return `${minutes}:${seconds}`
}}
    </CountdownCircleTimer>
    </View>
  )
}