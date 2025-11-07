import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useZenuiStore = defineStore('useZenuiStore', () => {
    const theme = ref(localStorage.getItem('zenui-vue-theme') || 'light')

    function toggleTheme() {
        const newTheme = theme.value === 'light' ? 'dark' : 'light'
        theme.value = newTheme
        localStorage.setItem('zenui-vue-theme', newTheme)
    }

    function isDark() {
        return theme.value === 'dark'
    }

    if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
    }

    return {theme, toggleTheme, isDark}
})
