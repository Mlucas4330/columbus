import { Box, Container, Fieldset, Flex, Heading, Input, Link } from '@chakra-ui/react'
import { Checkbox } from "../components/ui/checkbox"
import { Button } from "../components/ui/button"
import React, { useState } from 'react'
import { signInSchema } from '../schemas/signInSchema'
import { toaster } from "../components/ui/toaster"
import { useAuth } from '../providers/AuthProvider'

function SignIn() {
    const { signIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = () => {
        return new Promise((resolve, reject) => {
            const result = signInSchema.safeParse({ email, password })

            if (result.success) {
                const erro = signIn(result.data)

                if (erro) {
                    reject(erro)
                }

                resolve()
            }

            reject(result.error.issues[0].message)
        })
    }

    const handleSubmit = () => {
        toaster.promise(handleSignIn, {
            success: {
                title: "Usuário logado com sucesso",
            },
            error: error => ({
                title: "Erro ao logar",
                description: error
            }),
            loading: {
                title: "Carregando..."
            }
        })
    }

    return (
        <>
            <Flex bgImg={'url(/gradient-auth.png)'} bgRepeat={'no-repeat'} bgSize={'cover'} h={'dvh'} px={6} align={'center'} justify={'center'}>
                <Container maxW={'3xl'} px={{ base: 16, lg: 44 }} py={16} backdropFilter={'blur(3px)'} bgGradient={'to-b'} gradientFrom="gray.50/10" gradientTo="gray.600/10" rounded={'3xl'} color={'columbus'}>
                    <Box textAlign={'center'}>
                        <Heading fontSize={'3xl'} fontWeight={'bold'}>Bem vindo!</Heading>
                        <Heading fontSize={'4xl'} fontWeight={'light'} mt={6}>LOGIN</Heading>
                    </Box>
                    <Fieldset.Root mt={16}>
                        <Fieldset.Content gap={6}>
                            <Input onChange={e => setEmail(e.target.value)} px={4} py={6} rounded={'lg'} background={'columbusSubtle/30'} _placeholder={{ color: 'columbusSubtle' }} variant={'subtle'} type='email' placeholder='E-mail' />
                            <Input onChange={e => setPassword(e.target.value)} px={4} py={6} rounded={'lg'} background={'columbusSubtle/30'} _placeholder={{ color: 'columbusSubtle' }} variant={'subtle'} type='password' placeholder='Senha' />
                            <Checkbox color={'columbusSubtle'} fontWeight={'light'}>Manter conectado</Checkbox>
                        </Fieldset.Content>
                    </Fieldset.Root>
                    <Box mt={12}>
                        <Link color={'columbus'} textDecoration={'underline'} fontWeight={'light'}>Esqueci minha senha</Link>
                        <Flex mt={6} gap={4}>
                            <Button _hover={{ bgColor: 'transparent' }} rounded={'lg'} color={'columbus'} as={'a'} href={'/sign-up'} flex={1} variant={'outline'}>Criar Conta</Button>
                            <Button onClick={handleSubmit} rounded={'lg'} color={'columbusGreen'} bgColor={'columbus'} flex={2}>Logar</Button>
                        </Flex>
                    </Box>
                </Container>
            </Flex>
        </>
    )
}

export default SignIn