import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            // Define custom behavior for CSS Modules
            localsConvention: 'camelCaseOnly',
            scopeBehaviour: 'local', // default is 'local', can also be 'global'
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        }
    },
})
