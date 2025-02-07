export class StatusSeed1738894180324 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO statuses(id, description) VALUES
            (1, 'Pendente'), 
            (2, 'Enviado'), 
            (3, 'Em Trânsito'), 
            (4, 'Entregue'), 
            (5, 'Devolvido'), 
            (6, 'Cancelado');
        `)
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM statuses WHERE id IN (1, 2, 3, 4, 5, 6);
        `)
    }
}
