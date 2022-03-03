import { Subscription } from 'egg';

class ResetInventoryCron extends Subscription {

    async subscribe() {
        this.ctx.logger.info('Start ResetInventoryCron');
        const reset = this.ctx.service.inventory.reset();
        this.ctx.logger.info('end ResetInventoryCron: {}', reset);
    }

    static get schedule() {
        return {
            // 每0点准点执行一次
            cron: '0 0 0 * * *',
            type: 'all',
        };
    }
}

module.exports = ResetInventoryCron;
