import { Ionicons } from "@expo/vector-icons"
import { Pressable, StyleSheet, View } from "react-native";

function IconButton({ size, color, icon, onPress }) {
  return <View>
          <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed }>
            <View style={styles.button}>
              <Ionicons name={icon} size={size} color={color}/> 
            </View>
          </Pressable>
        </View> 
}

export default IconButton;

const styles = StyleSheet.create({
  button:{
    padding:8,
    margin:4,
    justifyContent:"center",
    alignItems:"center"
  },
  pressed:{
    opacity:0.2
  }
})