import React from 'react'
import { Badge, Table as ChakraTable, FormatNumber } from '@chakra-ui/react'

function Table() {
    const mockedData = [
        {
            id: 1,
            status: 'Em trânsito',
            exportador: 'Global Exports Ltd.',
            importador: 'Comércio Brasil S.A.',
            valorTotal: 2312,
            moeda: 'USD',
            modalidadeFrete: 'CIF',
            transporte: 'Marítimo',
            origem: 'Xangai, China',
            destino: 'Santos, Brasil',
            dataEnvio: '2024-01-15',
            dataPrevistaEntrega: '2024-02-10',
            númeroConhecimento: 'BL987654321'
        },
        {
            id: 2,
            status: 'Despachado',
            exportador: 'EuroTech GmbH',
            importador: 'Indústria Alfa LTDA',
            valorTotal: 15230,
            moeda: 'EUR',
            modalidadeFrete: 'FOB',
            transporte: 'Aéreo',
            origem: 'Frankfurt, Alemanha',
            destino: 'Guarulhos, Brasil',
            dataEnvio: '2024-01-20',
            dataPrevistaEntrega: '2024-01-25',
            númeroConhecimento: 'AWB123456789'
        },
        {
            id: 3,
            status: 'Aguardando desembaraço aduaneiro',
            exportador: 'Texas Chemicals Inc.',
            importador: 'Química do Brasil S/A',
            valorTotal: 7850,
            moeda: 'USD',
            modalidadeFrete: 'EXW',
            transporte: 'Rodoviário',
            origem: 'Houston, EUA',
            destino: 'Curitiba, Brasil',
            dataEnvio: '2024-02-01',
            dataPrevistaEntrega: '2024-02-20',
            númeroConhecimento: 'TRK567890123'
        },
        {
            id: 4,
            status: 'Entregue',
            exportador: 'Southeast Asia Textiles',
            importador: 'Moda Brasil EIRELI',
            valorTotal: 4325,
            moeda: 'USD',
            modalidadeFrete: 'DAP',
            transporte: 'Ferroviário',
            origem: 'Hanoi, Vietnã',
            destino: 'São Paulo, Brasil',
            dataEnvio: '2023-12-15',
            dataEntrega: '2024-01-05',
            númeroConhecimento: 'RAIL098765432'
        }
    ]

    const status = {
        'Em trânsito': 'yellow',
        'Entregue': 'green'
    }

    return (
        <ChakraTable.Root size={'lg'} variant={'line'} showColumnBorder>
            <ChakraTable.Header>
                <ChakraTable.Row>
                    <ChakraTable.ColumnHeader>Destino</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Status</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Exportador</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Importador</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Valor Total</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Origem</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Transporte</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Moeda</ChakraTable.ColumnHeader>
                    <ChakraTable.ColumnHeader>Modalidade Frete</ChakraTable.ColumnHeader>
                </ChakraTable.Row>
            </ChakraTable.Header>
            <ChakraTable.Body>
                {mockedData.map(item => (
                    <ChakraTable.Row key={item.id}>
                        <ChakraTable.Cell>{item.destino}</ChakraTable.Cell>
                        <ChakraTable.Cell><Badge colorPalette={status[item.status]}>{item.status}</Badge></ChakraTable.Cell>
                        <ChakraTable.Cell>{item.exportador}</ChakraTable.Cell>
                        <ChakraTable.Cell>{item.importador}</ChakraTable.Cell>
                        <ChakraTable.Cell textAlign={'end'}><FormatNumber value={item.valorTotal} style="currency" currency={item.moeda} /></ChakraTable.Cell>
                        <ChakraTable.Cell>{item.origem}</ChakraTable.Cell>
                        <ChakraTable.Cell>{item.transporte}</ChakraTable.Cell>
                        <ChakraTable.Cell>{item.moeda}</ChakraTable.Cell>
                        <ChakraTable.Cell>{item.modalidadeFrete}</ChakraTable.Cell>
                    </ChakraTable.Row>
                ))}
            </ChakraTable.Body>
        </ChakraTable.Root>
    )
}

export default Table