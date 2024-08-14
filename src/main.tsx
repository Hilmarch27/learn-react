import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/custome/theme-provider.tsx';
// import { TodoProvider } from './context/todo-context/index.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        {/* <TodoProvider> */}
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
        {/* </TodoProvider> */}
    </Provider>
  </StrictMode>
);
