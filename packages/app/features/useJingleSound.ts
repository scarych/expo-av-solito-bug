import { Audio } from 'expo-av'
import { useEffect, useRef } from 'react'

export const useJingleSound = () => {
  const jingleSound = useRef<Audio.Sound | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      jingleSound.current = (
        await Audio.Sound.createAsync(
          {
            uri: 'https://scarych-test.storage.yandexcloud.net/2023/03/21/6419d95d0a6eb6a996d55e2e-night.mp3',
          },
          { volume: 0.5 }
        )
      ).sound
    })()
  }, [])

  return { jingleSound }
}
