export class CompanySeed1738897150571 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO companies (id, name) VALUES
            (1, 'Tech Solutions'),
            (2, 'Global Logistics'),
            (3, 'Green Energy Ltd'),
            (4, 'Finance Experts'),
            (5, 'Health First'),
            (6, 'Auto Motors'),
            (7, 'Food Lovers'),
            (8, 'Build It'),
            (9, 'EduTech'),
            (10, 'Media Hub');
        `)
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM companies WHERE id BETWEEN 1 AND 10;
        `)
    }
}
