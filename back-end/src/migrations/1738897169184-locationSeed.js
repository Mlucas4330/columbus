export class DestinationSeed1738897169184 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO locations (id, name) VALUES
            (1, 'New York'),
            (2, 'São Paulo'),
            (3, 'Paris');
        `)
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM locations WHERE id IN (1, 2, 3);
        `)
    }
}
