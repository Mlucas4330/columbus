export class TransportSeed1738897213216 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO transports (id, name) VALUES
            (1, 'Marítimo'),
            (2, 'Ferroviário'),
            (3, 'Aéreo');
        `)
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM transports WHERE id IN (1, 2, 3);
        `)
    }
}
