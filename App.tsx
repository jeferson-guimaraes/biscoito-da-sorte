import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function App() {
  const [image, setImage] = useState(require('./src/biscoito.png'))
  const [frase, setFrase] = useState('')

  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, penso no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setFrase(`" ${frases[numeroAleatorio]} "`)
    setImage(require('./src/biscoitoAberto.png'))
  }

  function novoBiscoito() {
    setFrase('')
    setImage(require('./src/biscoito.png'))
  }

  return (
    <View style={styles.container}>

      <Image
        source={image}
        style={styles.img}
      />

      <Text style={styles.textoMensagem}>{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={novoBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Novo biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoMensagem: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})