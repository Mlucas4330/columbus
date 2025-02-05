import { Box, Container, Fieldset, Flex, Heading, Input } from '@chakra-ui/react'
import { Button } from "../components/ui/button"
import React, { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { signUpSchema } from '../schemas/signUpSchema'
import { toaster } from "../components/ui/toaster"

function SignUp() {
    const { signUp } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRPassword] = useState('')

    const handleSignUp = () => {
        return new Promise((resolve, reject) => {
            const result = signUpSchema.safeParse({ name, email, password, rPassword })

            if (result.success) {
                signUp(result.data)

                resolve()
            }

            reject(result.error.issues[0].message)
        })
    }

    const handleSubmit = () => {
        toaster.promise(handleSignUp, {
            success: {
                title: "Usuário cadastrado com sucesso",
            },
            error: error => ({
                title: "Erro ao cadastrar usuário",
                description: error
            }),
            loading: {
                title: "Carregando..."
            }
        })
    }

    return (
        <Flex bgImg={'url(/gradient-auth.png)'} bgRepeat={'no-repeat'} bgSize={'cover'} h={'dvh'} px={6} align={'center'} justify={'center'}>
            <Container maxW={'3xl'} px={{ base: 16, lg: 44 }} py={16} backdropFilter={'blur(3px)'} bgGradient={'to-b'} gradientFrom="gray.50/10" gradientTo="gray.600/10" rounded={'3xl'} color={'columbus'}>
                <Box textAlign={'center'}>
                    <Heading fontSize={'3xl'} fontWeight={'bold'}>Bem vindo!</Heading>
                    <Heading fontSize={'4xl'} fontWeight={'light'} mt={6}>CADASTRE-SE</Heading>
                </Box>
                <Fieldset.Root mt={16}>
                    <Fieldset.Content gap={6}>
                        <Input onChange={e => setName(e.target.value)} px={4} py={6} rounded={'lg'} background={'columbusSubtle/30'} _placeholder={{ color: 'columbusSubtle' }} variant={'subtle'} type='text' placeholder='Nome' />
                        <Input onChange={e => setEmail(e.target.value)} px={4} py={6} rounded={'lg'} background={'columbusSubtle/30'} _placeholder={{ color: 'columbusSubtle' }} variant={'subtle'} type='email' placeholder='E-mail' />
                        <Input onChange={e => setPassword(e.target.value)} px={4} py={6} rounded={'lg'} background={'columbusSubtle/30'} _placeholder={{ color: 'columbusSubtle' }} variant={'subtle'} type='password' placeholder='Senha' />
                        <Input onChange={e => setRPassword(e.target.value)} px={4} py={6} rounded={'lg'} background={'columbusSubtle/30'} _placeholder={{ color: 'columbusSubtle' }} variant={'subtle'} type='password' placeholder='Confirmação de senha' />
                    </Fieldset.Content>
                </Fieldset.Root>
                <Box mt={12}>
                    <Flex gap={4}>
                        <Button _hover={{ bgColor: 'transparent' }} rounded={'lg'} color={'columbus'} as={'a'} href={'/sign-in'} flex={1} variant={'outline'}>Já tenho conta</Button>
                        <Button onClick={handleSubmit} rounded={'lg'} color={'columbusGreen'} bgColor={'columbus'} flex={2}>Cadastrar</Button>
                    </Flex>
                </Box>
            </Container>
        </Flex>
    )
}

export default SignUp