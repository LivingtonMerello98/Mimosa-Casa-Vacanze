import { reactive } from 'vue';

export const store = reactive({
    showMenu: false,
    visibleComponents: {},
    animationClasses: {
        hidden: 'opacity-0 translate-y-5 transition-opacity transition-transform duration-1000 ease-out',
        visible: 'opacity-100 translate-y-0'
    },

    toggleMenu() {
        this.showMenu = !this.showMenu;
    },

    showComponentWithDelay(componentName, delay = 2100) {
        setTimeout(() => {
            this.visibleComponents[componentName] = true;
        }, delay);
    },

    hideComponent(componentName) {
        this.visibleComponents[componentName] = false;
    },

    observeElementsWithFadeIn() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                if (entry.isIntersecting) {
                    target.classList.add('fade-in');
                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.5,
        });

        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach((el) => observer.observe(el));
    }
});
