import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useZenuiStore = defineStore('zenui', () => {
    const withDarkClasses = ref(false);
    const theme = ref(localStorage.getItem('zenuiTheme') || 'light');

    function handleToggle() {
        withDarkClasses.value = !withDarkClasses.value;
    }

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        localStorage.setItem('zenuiTheme', theme.value);
    }

    return {
        withDarkClasses,
        handleToggle,
        theme,
        toggleTheme,
    };
});
