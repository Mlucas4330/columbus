import React, { useEffect, useState } from 'react'
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle } from "../components/ui/dialog"
import { Field } from "../components/ui/field"
import { Button } from "../components/ui/button"
import { useCreate } from '../providers/CreateProvider'
import { Fieldset, Group, Input } from '@chakra-ui/react'
import { NativeSelectField, NativeSelectRoot } from "../components/ui/native-select"
import { useProducts } from '../providers/ProductsProvider'
import { toaster } from "../components/ui/toaster"
import { productSchema } from '../schemas/productSchema'

function Create() {
    const { create } = useProducts()
    const { open, setOpen } = useCreate()
    const [statuses, setStatuses] = useState([])
    const [locations, setLocations] = useState([])
    const [companies, setCompanies] = useState([])
    const [currencies, setCurrencies] = useState([])
    const [freightModes, setFreightMoodes] = useState([])
    const [transports, setTransports] = useState([])
    const [status, setStatus] = useState('')
    const [destination, setDestination] = useState('')
    const [origin, setOrigin] = useState('')
    const [importer, setImporter] = useState('')
    const [exporter, setExporter] = useState('')
    const [currency, setCurrency] = useState('')
    const [freightMode, setFreightMode] = useState('')
    const [transport, setTransport] = useState('')
    const [totalValue, setTotalValue] = useState(10)

    const handleCreate = () => {
        return new Promise(async (resolve, reject) => {
            const result = productSchema.safeParse({ totalValue, status, destination, origin, importer, exporter, currency, freightMode, transport })

            if (!result.success) {
                return reject(result.error.issues[0].message)
            }

            const [success, error] = await create(result.data)

            if (error) {
                return reject(error)
            }

            resolve()
        })
    }

    const handleSubmit = () => {
        toaster.promise(handleCreate, {
            success: {
                title: "Produto cadastrado com sucesso",
            },
            error: error => ({
                title: "Erro ao cadastrar produto",
                description: error
            }),
            loading: {
                title: "Carregando..."
            }
        })
    }

    const getStatus = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/statuses')

            const data = await response.json()

            setStatuses(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getLocation = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/locations')

            const data = await response.json()

            setLocations(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getCompany = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/companies')

            const data = await response.json()

            setCompanies(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getCurrencies = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/currencies')

            const data = await response.json()

            setCurrencies(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getTransports = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/transports')

            const data = await response.json()

            setTransports(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const getFreightModes = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/freight_modes')

            const data = await response.json()

            setFreightMoodes(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const clear = () => {
        setStatus('')
        setDestination('')
        setOrigin('')
        setImporter('')
        setExporter('')
        setCurrency('')
        setFreightMode('')
        setTransport('')
        setTotalValue(10)
    }

    useEffect(() => {
        if (open) {
            clear()
            getStatus()
            getCompany()
            getLocation()
            getCurrencies()
            getTransports()
            getFreightModes()
        }
    }, [open])

    return (
        <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Novo Produto</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Fieldset.Root>
                        <Fieldset.Content>
                            <Group>
                                <Field w={'auto'} label={'Moeda'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={currency} onChange={(e) => setCurrency(e.currentTarget.value)}>
                                            {
                                                currencies.map(currency => (
                                                    <option key={currency.id} value={currency.id}>{currency.code}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                                <Field flex={1} label={'Valor Total'}>
                                    <Input type={'number'} value={totalValue} step={.5} onChange={e => setTotalValue(e.target.value)} min={10} />
                                </Field>
                            </Group>

                            <Field label={'Status'}>
                                <NativeSelectRoot>
                                    <NativeSelectField placeholder="Selecione" value={status} onChange={(e) => setStatus(e.currentTarget.value)}>
                                        {
                                            statuses.map(status => (
                                                <option key={status.id} value={status.id}>{status.description}</option>
                                            ))
                                        }
                                    </NativeSelectField>
                                </NativeSelectRoot>
                            </Field>

                            <Group>
                                <Field label={'Importador'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={importer} onChange={(e) => setImporter(e.currentTarget.value)}>
                                            {
                                                companies.map(company => (
                                                    <option key={company.id} value={company.id}>{company.name}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                                <Field label={'Exportador'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={exporter} onChange={(e) => setExporter(e.currentTarget.value)}>
                                            {
                                                companies.map(company => (
                                                    <option key={company.id} value={company.id}>{company.name}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                            </Group>


                            <Group>
                                <Field label={'Origem'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={origin} onChange={(e) => setOrigin(e.currentTarget.value)}>
                                            {
                                                locations.map(location => (
                                                    <option key={location.id} value={location.id}>{location.name}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                                <Field label={'Destino'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={destination} onChange={(e) => setDestination(e.currentTarget.value)}>
                                            {
                                                locations.map(location => (
                                                    <option key={location.id} value={location.id}>{location.name}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                            </Group>


                            <Group>
                                <Field label={'Transporte'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={transport} onChange={(e) => setTransport(e.currentTarget.value)}>
                                            {
                                                transports.map(transport => (
                                                    <option key={transport.id} value={transport.id}>{transport.name}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                                <Field label={'Modalidade Frete'}>
                                    <NativeSelectRoot>
                                        <NativeSelectField placeholder="Selecione" value={freightMode} onChange={(e) => setFreightMode(e.currentTarget.value)}>
                                            {
                                                freightModes.map(freightMode => (
                                                    <option key={freightMode.id} value={freightMode.id}>{freightMode.name}</option>
                                                ))
                                            }
                                        </NativeSelectField>
                                    </NativeSelectRoot>
                                </Field>
                            </Group>
                        </Fieldset.Content>
                    </Fieldset.Root>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DialogActionTrigger>
                    <Button onClick={handleSubmit}>Criar</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}

export default Create