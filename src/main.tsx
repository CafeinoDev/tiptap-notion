import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from "@/theme";
import App from './App.tsx'
import "./index.css";
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </StrictMode>,
)
