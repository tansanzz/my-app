import { render, h } from 'vue';
import toast from './TsToast.vue';

const removeElement = (el) => {
    if (typeof el.remove !== 'undefined') {
        el.remove();
    } else {
        el.parentNode.removeChild(el);
    }
};

const createElement = () => typeof document !== 'undefined' && document.createElement('div');

const mountElement = (component, { props, children, element, app } = {}) => {
    let el = element ? element : createElement();

    let vNode = h(component, props, children);
    if (app && app._context) {
        vNode.appContext = app._context;
    }

    render(vNode, el);

    const destroy = () => {
        if (el) {
            render(null, el);
        }
        el = null;
        vNode = null;
    };

    return { vNode, destroy, el };
};

const service = () => {
    return {
        show(message, options = {}) {
            return mountElement(toast, {
                props: { message, ...options },
            });
        },
        success(message, options = {}) {
            options.type = 'success';
            return this.show(message, options);
        },
        error() {
            options.type = 'error';
            return this.show(message, options);
        },
        info() {
            options.type = 'info';
            return this.show(message, options);
        },
        warning() {
            options.type = 'warning';
            return this.show(message, options);
        },
        clear() {},
    };
};

export default service();
