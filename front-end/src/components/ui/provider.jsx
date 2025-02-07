'use client'

import { ChakraProvider, createSystem, defaultConfig, mergeConfigs } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

const config = mergeConfigs(defaultConfig, {
  globalCss: {
    "html, body": {
      fontSize: '14px',
      fontFamily: 'Century Gothic, Arial, sans-serif'
    }
  },
  theme: {
    tokens: {
      colors: {
        columbus: '#FFE5FF',
        columbusSubtle: '#D9D9D9',
        columbusGreen: '#008171'
      }
    }
  }
})

const customSystem = createSystem(config)

export function Provider(props) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
