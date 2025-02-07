import React from 'react'
import { Box, Flex, Group, Heading, IconButton, Image, Input } from '@chakra-ui/react'
import { InputGroup } from "../components/ui/input-group"
import { useAuth } from '../providers/AuthProvider'
import { Plus, Search } from 'lucide-react'
import Table from '../components/Table'
import { useCreate } from '../providers/CreateProvider'
import Create from '../components/Create'

function Dashboard() {
    const { user } = useAuth()
    const { setOpen } = useCreate()

    return (
        <>
            <Create />
            <Flex direction={{ base: 'column', lg: 'row' }} h={'dvh'} p={6} gap={6}>
                <Flex gap={16} direction={{ base: 'row', lg: 'column' }} rounded={'full'} bgImg={'url(/gradient-dashboard.png)'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}>
                    <Box px={4} py={7}>
                        <Image src={'/circle.png'} w={'68px'} h={'68px'} />
                    </Box>
                    <Flex direction={{ base: 'row', lg: 'column' }} justify={'center'} align={'center'} gap={4}>
                        {
                            Array.from({ length: 4 }).map((_, i) => (
                                <Image alt='star' key={i} maxW={'20px'} maxH={'20px'} src={'/star.png'} />
                            ))
                        }
                    </Flex>
                </Flex>
                <Flex flex={1} gap={6} direction={'column'} overflow={'auto'}>
                    <Flex justify={'space-between'} align={'center'}>
                        <Heading fontWeight={'normal'}>{user?.name || 'NOME USUÁRIO'}</Heading>
                        <Group gap={4}>
                            <InputGroup color={'columbusGreen'} startElement={<Search transform='rotate(90)' color={'#008171'} />}>
                                <Input _placeholder={{ color: 'columbusGreen' }} borderColor={'columbusGreen'} rounded={'lg'} ps={12} w={{
                                    base: 'auto',
                                    lg: 'sm'
                                }} placeholder='Pesquisar' />
                            </InputGroup>

                            <IconButton onClick={() => setOpen(true)} px={6} rounded={'xl'} bgColor={'columbusGreen'}>
                                <Plus />
                            </IconButton>
                        </Group>
                    </Flex>
                    <Box flex={1} overflow={'auto'} rounded={'lg'} bgColor={'gray.100'} p={6}>
                        <Table />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Dashboard