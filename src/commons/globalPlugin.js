import constants from "@/commons/wildcards";
import toasts from '@/lib/toast';

export function pluginInstall(app) {
    app.config.globalProperties.$constants = constants;
    app.config.globalProperties.$toast = toasts;

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