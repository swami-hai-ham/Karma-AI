import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <RecoilRoot>
        <App />
        </RecoilRoot>
    </ChakraProvider>
)
