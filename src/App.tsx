import { Center, VStack, Input, Text, HStack, Heading } from "@chakra-ui/react";
import { CityWeatherMini } from "./components/CityWeatherMini";
import { HighlightedCity } from "./components/HighlightedCity";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        //8f973e61
        const response = await axios.get("https://api.hgbrasil.com/weather");
      } catch (err) {
      } finally {
      }
    };
    getData();
  });

  return (
    <>
      <Center bg={"#E08E6D"} width={"100vw"} height={"100vh"}>
        <VStack>
          <Heading>Weather Forecast</Heading>
          <HighlightedCity
            city={"Coronel Ezequiel"}
            state={"RN"}
            country={"Brazil"}
            max={35}
            min={24}
            temp={29}
            sensation={32}
            wind={5}
            humid={30}
            weather={"Sunny"}
          />
          <Input bg={"#FFFAF4"} placeholder="Search for a city here" />
          <HStack>
            <Text> min </Text>
            <Text> max </Text>
          </HStack>
          <CityWeatherMini city={"Natal"} max={30} min={20} />
        </VStack>
      </Center>
    </>
  );
}

export default App;
