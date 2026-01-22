import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlaceList({places}) {

  function renderPlaces (item) {
    return (
      <PlaceItem place={item}/>
    )
  }

  if (!places?.length) {
    return <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>No places added yet!</Text>
    </View>
  }

  return <FlatList 
    data={places}
    renderItem={renderPlaces}
    keyExtractor={(item)=> item.id}
  />
}

export default PlaceList;

const styles = StyleSheet.create({
  fallbackContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText:{
    fontSize: 16
  }
})