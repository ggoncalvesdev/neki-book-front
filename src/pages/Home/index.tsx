import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  useColorScheme,
  Platform,
} from "react-native";

import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

import { Api } from "../../services/Api/api";
import { DataContext } from "../../context/DataContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { DadosLivroLocalType } from "../../models/DadosLivroLocalType";
import * as ImagePicker from "expo-image-picker";
import Alerta from "../../components/Alerta";

export function Home({ navigation }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [input, setInput] = useState("");
  const [listaLivros, setListaLivros] = useState([]);
  const [data, setData] = useState<DadosLivroLocalType[]>([]);
  const [dadosLivro, setDadosLivro] = useState<DadosLivroLocalType>();
  const [listaAmizadeSeguidores, setAmizadeSeguidores] = useState([]);

  const { dadosUsuarioLogin } = useContext(DataContext);

  // const to save image
  const [image, setImage] = useState([]);
  const [GalleryPermission, setGalleyPermission] = useState(null);

  const navigateToLivro2 = (idLivro: any) => {
    navigation.navigate("PageLivro", { idLivro: idLivro });
  };

  const Item = ({ item, eventoPressionarBotao }) => (
    <View style={styles.livrohist}>
      <Text style={[styles.status, themeTextStyle]}>{item.status}</Text>
      <TouchableOpacity
        onPress={eventoPressionarBotao}
        accessibilityLabel="Card capa do livro."
        accessibilityHint="Quer saber mais detalhes do livro? Clique aqui."
      >
        {(item?.livros?.imagem != null && (
          <ImageBackground
            source={{ uri: item?.livros?.imagem }}
            style={styles.imgLivros}
            imageStyle={{ borderRadius: 25 }}
          ></ImageBackground>
        )) || (
          <ImageBackground
            source={require("../../assets/img/livrocapa.jpg")}
            style={styles.imgLivros}
            imageStyle={{ borderRadius: 25 }}
          ></ImageBackground>
        )}
      </TouchableOpacity>
    </View>
  );

  // const CardBook = ({ item }) => {
  //   return (
  //     <>
  //       <TouchableOpacity
  //         onPress={() => navigateToLivro(item.idLivro)}
  //         accessibilityLabel="Card capa do livro."
  //         accessibilityHint="Quer saber mais sobre o seu status de leitura? Clique aqui."
  //       >
  //         <View style={styles.cardBook}>
  //           <View style={styles.cardBookBorder}>
  //             {item?.imagem != null ? (
  //               <Image style={styles.imgItem} source={{ uri: item?.imagem }} />
  //             ) : (
  //               <Image
  //                 style={styles.imgItem}
  //                 source={require("../../assets/img/livrocapa.jpg")}
  //               />
  //             )}
  //             <View style={styles.cardBookTitle}>
  //               {item?.nomeLivro != null ? (
  //                 <Text style={styles.cardBookName}>{item?.nomeLivro}</Text>
  //               ) : (
  //                 <Text style={styles.cardBookName}>Título não encontrado</Text>
  //               )}
  //               {item.autor != null ? (
  //                 <Text style={styles.cardBookAutor}>Autor: {item.autor}</Text>
  //               ) : (
  //                 <Text style={styles.cardBookAutor}>Autor não encontrado</Text>
  //               )}
  //             </View>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //     </>
  //   );
  // };

  const onChangeText = async (text: string) => {
    console.log(text);
    try {
      setInput(text);
      if (text.length > 3) {
        getBook();
      } else {
        setData([]);
      }
    } catch (error) {}
  };

  const getBook = async () => {
    try {
      const get = await Api.get(`/api/livros/nome/${input}`, {
        headers: {
          Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
        },
      }).then((resp) => {
        // console.log(JSON.stringify("retorno api: " + resp.data));
        setData(resp.data);
        console.log(JSON.stringify("retorno api: " + JSON.stringify(data)));
      });
    } catch (error) {}
  };

  // useEffect(() => {
  //   getLivrosByUsuario();
  // }, []);

  // const componentDidMount = () => {
  //   const {navigation} = this.props
  //   this.focusListener = navigation.addListener("focus", () => {
  //     getLivrosByUsuario();
  //   })
  // }

  const getLivrosByUsuario = async () => {
   
    await Api.get(`/api/user/${dadosUsuarioLogin?.id}`, {
      headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
    })
      .then((resultado) => {
        setDadosLivro(resultado?.data?.leituras);
        setListaLivros(resultado?.data?.leituras);
        setAmizadeSeguidores(resultado.data.amizadeSeguidores);
      })
      .catch((error) => {
        console.log(
          "Ocorreu um erro ao recuperar os dados dos Livros: " +
            JSON.stringify(error)
        );
      });
  };
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        eventoPressionarBotao={() => {
          getLivrosByUsuario();
          navigateToLivro2(item?.livros?.idLivro)}}
      />
    );
  };

  useEffect(()=>{
    navigation.addListener("focus", () => {
      getLivrosByUsuario();
    })
  },[])

  // gallery permission
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleyPermission(galleryStatus.status === "granted");
    })();
  }, []);

  //pickImage configuration
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled){
            console.log("Result"+ JSON.stringify(result));

            setImage(result.assets)
            await transformingImage(result.assets);
    }

    if (GalleryPermission == false) {
      return (
        <Text>Conceda permissão a galeria para poder selecionar uma foto.</Text>
      );
    }
  };

    // console.log("aquiii==" + JSON.stringify(image));
   
    
    // put Image in backend
    const transformingImage = async(PerfImage) =>{
        try{
          
            const img = PerfImage[0];
            console.log("-------------------IMG PURO: " + JSON.stringify(PerfImage));
            
            console.log("IMG URI -------------------" + img.uri);
            
            const uri = img.uri;
            const filename=uri.substring(uri.lastIndexOf('/')+1);
            
            const type = "image/jpeg";
            const data = {
                uri: uri,
                name: filename,
                type: type
            }
            
            const formData = new FormData();
            formData.append('filename', data)

      console.log("FORM DATA = ", data);

      Api.put(
        `/api/user/alterar-foto-usuario/${dadosUsuarioLogin?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((response) => {
          console.log("image uploaded");
        })
        .catch((err) => {
          console.log(err);
        });

      Alerta("UHULLL", "Sua foto de perfil atualizada com sucesso e estará disponivel quando você realizar o login novamente");
    } catch (e) {
      console.error(e);
      Alerta("Aviso", "Não possível alterar o produto.");
    }
  };

  // console.log("SEGUE AI A IMAGEM AI ====>" + image);

  return (
    <>
      <ImageBackground
        source={require("../../assets/img/fundoHome.png")}
        style={[styles.imageBackground, themeContainerStyle]}
      >
        {/* <View style={styles.containerInput}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={input}
            placeholder="Digite o nome do livro..."
            onChangeText={onChangeText}
            style={styles.input}
          />
          {data[0] != null && (
            <FlatList
              data={data}
              renderItem={CardBook}
              keyExtractor={(item) => item.idLivro}
            />
          )}
          {input != "" && data[0] == null ? (
            <>
              <View style={styles.containerText}>
                <Text style={styles.text}>Livro não encontrado!</Text>
                <MaterialIcons
                  name="mood-bad"
                  size={38}
                  color="black"
                  top={0}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View> */}
        <SafeAreaView style={styles.container}>
          <View style={styles.containerImg}>
            <View style={styles.bordaImg}>
              <TouchableOpacity
                onPress={() => {
                  pickImage();
                }}
              >
                {dadosUsuarioLogin?.imagemUrl != null ? (
                  <Image
                    style={styles.imgperfil}
                    source={{
                      uri: dadosUsuarioLogin?.imagemUrl,
                    }}
                  />
                ) : (
                  <Image
                    style={styles.imgperfil}
                    source={require("../../assets/img/user.jpg")}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.identificacao}>
            <Text style={styles.nome}>{dadosUsuarioLogin?.nome}</Text>
            <Text style={styles.userName}>{dadosUsuarioLogin?.email}</Text>
          </View>
          <View style={styles.infos}>
            <Text style={[styles.infotext, themeTextStyle]}>
              Livros{"\n"}Adicionados{"\n"}
              {listaLivros?.length}
            </Text>
            <Text style={[styles.infotext, themeTextStyle]}>
              Amigos{"\n"}Adicionados{"\n"}
              {listaAmizadeSeguidores?.length}
            </Text>
          </View>
          <Text style={[styles.history, themeTextStyle]}> Meu Histórico</Text>
          <View style={styles.imagens}>
            <FlatList
              data={dadosLivro}
              renderItem={renderItem}
              keyExtractor={(item) => item?.livros?.idLivro}
              numColumns={2}
              // extraData={dadosLivro}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
