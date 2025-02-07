export class CurrencySeed1738897159993 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO currencies (id, code) VALUES
            (1, 'USD'),
            (2, 'BRL'),
            (3, 'EUR');
        `)
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM currencies WHERE id IN (1, 2, 3);
        `)
    }
}
