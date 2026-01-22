import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState("")

  async function takeImageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality:0.5,
      aspect:[16, 9]
    })
    setPickedImage(image.assets[0].uri)
    
  }

  let imagePreview=<Text style={styles.text}>No image taken!</Text>
  if (pickedImage) {
    imagePreview= <Image style={styles.image} source={{uri: pickedImage}}/>
  }

  return (
    <View>
      <View style={styles.imagePreviewContainer}>
        {imagePreview}
      </View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </View>
  )
}

export default ImagePicker;

const styles = StyleSheet.create({
  text:{
    margin:8,
    textAlign:"center"
  },
  imagePreviewContainer:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.primary100,
    borderRadius:4
  },
  image:{
    width:"100%",
    height:"100%"
  }
})