import constants from "@/commons/wildcards";

export function pluginInstall(app) {
    app.config.globalProperties.$constants = constants;
}