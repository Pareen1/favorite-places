import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    insertPlace(place);
    // .then((id) => {
    //   navigation.navigate("AllPlaces", {
    //     place: { ...place, id: id },
    //   });
    // })
    // .catch((error) => {
    //   console.error("Failed to insert place:", error);
    // });
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
