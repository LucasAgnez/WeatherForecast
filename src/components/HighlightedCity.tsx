import { Box, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export type HighlightedCityProps = {
    children?: any
    city: string
    state: string
    country: string
    max: number
    min: number
    temp: number
    sensation: number
    wind: number
    humid: number
    weather: string
}

export function HighlightedCity(props: HighlightedCityProps) {

    const [max, setMax] = useState(props.max)
    const [min, setMin] = useState(props.min)
    const [city, setCity] = useState(props.city)
    const [state, setState] = useState(props.state)
    const [country, setCountry] = useState(props.country)
    const [temp, setTemp] = useState(props.temp)
    const [sensation, setSensation] = useState(props.sensation)
    const [wind, setWind] = useState(props.wind)
    const [humid, setHumid] = useState(props.humid)
    const [weather, setWeather] = useState(props.weather)




    

    return (

        <Box bg={"#FFFAF4"} borderRadius={"16px"} py={"1.25rem"} px={"1.78rem"}>
            <VStack spacing={"2.5rem"}>
                <Text>{city}, {state}-{country} </Text>
                <Heading color={"#27374D"}>
                    {temp}ºC {weather}
                </Heading>
                <HStack>
                    <Text>{min}º {max}º </Text>
                    <Text>Thermal sensation {sensation}ºC </Text>
                </HStack>
                <HStack>
                    <Text>Wind {wind} km/h </Text>
                    <Text>Humidity {humid}%</Text>
                </HStack>
                <HStack>
                    <VStack>
                        <Text>Mon</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                    <VStack>
                        <Text>Tue</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                    <VStack>
                        <Text>Wed</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                    <VStack>
                        <Text>Thu</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                    <VStack>
                        <Text>Fri</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                    <VStack>
                        <Text>Sat</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                    <VStack>
                        <Text>Sun</Text>
                        <Text>{min}º {max}º </Text>
                    </VStack>
                </HStack>
  
            </VStack>
        </Box>

    )

}

