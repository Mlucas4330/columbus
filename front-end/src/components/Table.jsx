import React, { useEffect, useState } from 'react'
import { Table as ChakraTable, FormatNumber, Group, HStack, IconButton, VStack } from '@chakra-ui/react'
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from "../components/ui/pagination"
import { useProducts } from '../providers/ProductsProvider'
import { toaster } from "../components/ui/toaster"
import { HiTrash } from 'react-icons/hi2'

function Table() {
    const { products, get, destroy } = useProducts()
    const [page, setPage] = useState(1)
    const pageSize = 8
    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const handleDestroy = (id) => {
        toaster.promise(destroy(id), {
            success: {
                title: "Produto excluído com sucesso",
            },
            error: error => ({
                title: "Erro ao excluir produto",
                description: error
            }),
            loading: {
                title: "Carregando..."
            }
        })
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <>
            <VStack>
                <ChakraTable.Root flex={1} size={'lg'} variant={'line'} showColumnBorder>
                    <ChakraTable.Header>
                        <ChakraTable.Row>
                            <ChakraTable.ColumnHeader>Transporte</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Modalidade Frete</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Status</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Importador</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Exportador</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Origem</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Destino</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Moeda</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Valor Total</ChakraTable.ColumnHeader>
                            <ChakraTable.ColumnHeader>Ações</ChakraTable.ColumnHeader>
                        </ChakraTable.Row>
                    </ChakraTable.Header>
                    <ChakraTable.Body>
                        {products.length > 0 && products.slice(startRange, endRange).map(product => (
                            <ChakraTable.Row key={product.id}>
                                <ChakraTable.Cell>{product.destination.name}</ChakraTable.Cell>
                                <ChakraTable.Cell>{product.status.description}</ChakraTable.Cell>
                                <ChakraTable.Cell>{product.exporter.name}</ChakraTable.Cell>
                                <ChakraTable.Cell>{product.importer.name}</ChakraTable.Cell>
                                <ChakraTable.Cell textAlign={'end'}><FormatNumber value={product.totalValue} style="currency" currency={product.currency.code} /></ChakraTable.Cell>
                                <ChakraTable.Cell>{product.origin.name}</ChakraTable.Cell>
                                <ChakraTable.Cell>{product.transport.name}</ChakraTable.Cell>
                                <ChakraTable.Cell>{product.currency.code}</ChakraTable.Cell>
                                <ChakraTable.Cell>{product.freightMode.name}</ChakraTable.Cell>
                                <ChakraTable.Cell>
                                    <Group>
                                        <IconButton variant={'plain'} onClick={() => handleDestroy(product.id)}>
                                            <HiTrash />
                                        </IconButton>
                                    </Group>
                                </ChakraTable.Cell>
                            </ChakraTable.Row>
                        ))}
                    </ChakraTable.Body>
                </ChakraTable.Root>
                <PaginationRoot count={products.length} pageSize={pageSize} page={page} onPageChange={(e) => setPage(e.page)}>
                    <HStack>
                        <PaginationPrevTrigger />
                        <PaginationItems />
                        <PaginationNextTrigger />
                    </HStack>
                </PaginationRoot>
            </VStack>
        </>
    )
}

export default Table