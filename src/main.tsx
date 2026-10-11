import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Startpage from "./Startpage.tsx";
import Guide from "./Guide.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Guide></Guide>
    <Startpage />
  </StrictMode>,
)
