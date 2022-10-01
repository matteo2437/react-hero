import { Box } from "../components/Box";
import { Hero } from "../components/Hero";

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