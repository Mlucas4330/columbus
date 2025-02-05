import { Badge, Card, Flex, FormatNumber, HStack, Stat } from '@chakra-ui/react'
import { Plane, Ship, Train } from 'lucide-react'
import React from 'react'

function Cards() {
    const mockedData = [
        {
            id: 1,
            title: 'Marítimo',
            icon: <Ship />,
            value: 10396,
            increased: 5
        }, {
            id: 2,
            title: 'Rodoviário',
            icon: <Train />,
            value: 2396,
            increased: 12
        }, {
            id: 3,
            title: 'Aéreo',
            icon: <Plane />,
            value: 5096,
            increased: 10
        }
    ]

    return (
        <Flex gap={4}>
            {mockedData.map(item => (
                <Card.Root key={item.id}>
                    <Card.Header>{item.icon} {item.title}</Card.Header>
                    <Card.Body>
                        <Stat.Root>
                            <Stat.Label>Ao total</Stat.Label>
                            <HStack>
                                <Stat.ValueText>
                                    <FormatNumber value={item.value} style="currency" currency="BRL" />
                                </Stat.ValueText>
                                <Badge colorPalette="green" gap="0">
                                    <Stat.UpIndicator />
                                    {item.increased}%
                                </Badge>
                            </HStack>
                            <Stat.HelpText>Mês passado</Stat.HelpText>
                        </Stat.Root>
                    </Card.Body>
                </Card.Root>
            ))}
        </Flex>
    )
}

export default Cards