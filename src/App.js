
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import foto from './assets/IMG_20210626_202331996.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/index';

const App = () => {
 
  function handleRedeSocial(rede_social){

    switch(rede_social){
      case 'Linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/')
        break
      case 'Facebook':
        Alert.alert('Meu Facebook','https://www.facebook.com')
        break
      case 'Github':
        Alert.alert('Meu Github','https://github.com/junior25dunedain')
        break
    }
  }

  return (
    <>
      <View style ={style.page}>
        <View style ={style.container_cabeca}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>JUNIOR AGRA</Text>
          <Text style={style.funcao}>Desenvolvedor Python | Engenheiro Eletricista</Text>
          <View style={style.redes_socias}>
            <TouchableOpacity onPress={() => handleRedeSocial('Github')}>
              <Icon name="Github" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('Linkedin')}>
              <Icon name="Linkedin" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('Facebook')}>
              <Icon name="Facebook" size={30}/>
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Academica:">
            <Text style={style.card_text}>UFCG</Text>
            <Text style={style.card_text}>DATACAMP</Text>
            <Text style={style.card_text}>DIO</Text>
        </Card>
        <Card titulo="Experiencias Profissional:">
            <Text style={style.card_text}>Aplicação de Machine Learning</Text>
            <Text style={style.card_text}>Análise de dados</Text>
            
        </Card>

      </View>
    </>
  );
};

const style = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
    
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container_cabeca:{
    
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  nome:{
    fontSize: 28,
    fontWeight: 'bold',  
    color: 'black',
    marginTop: 10,
  },
  funcao:{
    color: 'gray',
    marginBottom: 10,
  },
  redes_socias:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 10,
    marginBottom: 10,
  },
  card_text: {
    color: 'black',
    marginBottom: 10,
  },
  
});

export default App;
