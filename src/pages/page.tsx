import { Box } from "../components/Box";
import { Hero } from "../components/Hero";

export function Page() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <div
        style={{
          width: 500,
          height: 500,
          margin: 16,
          background: 'gray'
        }}
      >

      </div>
      <div>
        Pagina
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Hero
          className="test"
          heroId="1"
          Element={Box}
        />
        Pagina
      </div>
    </div>
  )
}