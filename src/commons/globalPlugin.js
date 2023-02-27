import constants from "@/commons/wildcards";
import toasts from '@/lib/toast';
import modal from '@/lib/modal';

export function pluginInstall(app) {
    app.config.globalProperties.$constants = constants;
    app.config.globalProperties.$toast = toasts;
    app.config.globalProperties.$modal = modal;

    app.mixin({
        mounted() {
            const me = this;
            if(me.$el && me.$el.getVueInstance) {
                me.$el.getVueInstance = () => {
                    return this;
                }
            }
        }
    })
}