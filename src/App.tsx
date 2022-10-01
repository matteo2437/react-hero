import { createContext, ReactNode, useState } from 'react';
import { Route, BrowserRouter, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Page } from './pages/page';

function App() {
  return (
    <BrowserRouter>
      <HeroWrapper>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/page' element={<Page/>}></Route>
        </Routes>
      </HeroWrapper>
    </BrowserRouter>
  );
}


interface HeroWrapperProps {
  readonly children: ReactNode
}

interface HeroContextProps {
  readonly setClassName: (className: string) => void,
  readonly setRect: (rect: DOMRect) => void,
  readonly setElementRect: (rect: DOMRect) => void,
  readonly elementRect?: DOMRect
}

export const HeroContext  = createContext<HeroContextProps>({
  setClassName: () => { return },
  setElementRect: () => { return },
  setRect: () => { return },
})

function HeroWrapper(props: HeroWrapperProps) {
  const [className, setClassName] = useState('') 
  const [rect, setRect] = useState<DOMRect>() 
  const [elementRect, setElementRect] = useState<DOMRect>() 

  return (
    <HeroContext.Provider 
      value={{
        setClassName, 
        setRect, 
        setElementRect,
        elementRect
      }}
    >
      <div 
        id="hero" 
        className={`hero-wrapper ${className}`}
        style={{
          top: rect?.top,
          left: rect?.left
        }}
      />
      {props.children}
    </HeroContext.Provider>
  )
}

function NavBar() {
  const navigate = useNavigate()

  const goTo = (e: any, url: string) => {
    e.preventDefault()
    navigate(url);
  }

  return (
    <header>
      <button
        onClick={e => goTo(e, '/')}
      >
        HOME
      </button>
      <button
        onClick={e => goTo(e, '/page')}
      >
        PAGINA
      </button>
    </header>
  )
}

export default App;
