import { Box, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Text } from '@chakra-ui/react'
import axios from "axios";

export type CityWeatherMiniProps = {
    children?: any
    city: string
    max: number
    min: number

}

export function CityWeatherMini(props: CityWeatherMiniProps) {

    const [max, setMax] = useState(props.max)
    const [min, setMin] = useState(props.min)
    const [city, setCity] = useState(props.city)

    return (

        <Box py={"1.25rem"} px={"1.78rem"}>
            <HStack spacing={"2.5rem"}>
                <Text fontSize='15px' color='232323'>
                    {min}º 
                </Text>
                <Text fontSize='15px' color='232323'>
                    {max}º
                </Text>
                <Text fontSize='15px' color='232323'>
                    {city}
                </Text>
            </HStack>
        </Box>

    )

}

