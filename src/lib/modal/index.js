import { render, h } from 'vue';
import TsModal from './TsModal.vue';

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
    debugger
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
        show(modal, options = {}) {
            return mountElement(modal, {
                props: { ...options },
            });
        },
        clear() {},
    };
};

export default service();
