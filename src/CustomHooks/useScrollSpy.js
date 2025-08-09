import {onMounted, onUnmounted, ref} from 'vue';

export function useScrollSpy(sectionIds, offset = 0) {
    const activeSection = ref(null);
    let observer = null;

    const cleanupObserver = () => {
        if (observer) {
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
            observer.disconnect();
            observer = null;
        }
    };

    const initObserver = () => {
        cleanupObserver();

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                    }
                });
            },
            {
                rootMargin: `-${offset}px 0px -60% 0px`
            }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    };

    onMounted(() => {
        initObserver();
    });

    onUnmounted(() => {
        cleanupObserver();
    });

    return activeSection;
}
