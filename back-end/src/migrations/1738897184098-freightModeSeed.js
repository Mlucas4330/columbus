export class FreightModeSeed1738897184098 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO freight_modes (id, name) VALUES
            (1, 'CIF'),
            (2, 'FOB'),
            (3, 'EXW'),
            (4, 'DDP'),
            (5, 'DAP');
        `)
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM freight_modes WHERE id IN (1, 2, 3, 4, 5);
        `)
    }
}
