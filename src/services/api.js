import axios from "axios";

const API_URL =
  "https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People";

//Handling API calls through axios and calling this fetchData function in useEffect of the component
export async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
