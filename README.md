<b>React Hero v0</b>

This is a simple way for simulating Flutter Hero component in react.

This version doesn't permit:
  - to change the Hero Element props and children.
  - to have multiple Hero component
  - to use different Element between pages

You can run the demo project with <code>npm start</code>

For using the Hero you should:

1) Wrap Routes with HeroWrapper like this <br/>
```
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
```
2) Insert the first Hero in your page <br/>
```
  export function Home() {
    return (
      <div>
        Home
        <Hero
          heroId="1"
          Element={Box}
        />
      </div>
    )
  }
```

3) Insert the reference of the Hero component in another page, use a class for changing the element style from the previous page
```
  export function Page1() {
    return (
      <div>
        Page1
        <Hero
          heroId="1"
          className="scale"
          Element={Box}
        />
      </div>
    )
  }
```
