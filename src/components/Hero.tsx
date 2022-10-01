import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { HeroContext } from "../App";

interface HeroProps {
  readonly Element: any,
  readonly className?: string,
  readonly heroId: string,
}

export function Hero(props: HeroProps) {
  const { setClassName, setRect, elementRect } = useContext(HeroContext)
  const ref = useRef<any>()

  useEffect(() => {
    setClassName(props.className ?? '')
  }, [props.className])

  useEffect(() => {
    if(!ref.current)
      return

    const rect = ref.current.getBoundingClientRect() as DOMRect
    setRect(rect)
  }, [ref.current])

  return (
    <div
      ref={ref}
      style={{
        width: elementRect?.width,
        height: elementRect?.height,
      }}
    >
      <HeroPortal Element={props.Element} />
    </div>
  )
}

function HeroPortal(props: { Element: any }) {
  const ref = useRef<any>()
  const { setElementRect } = useContext(HeroContext)

  useEffect(() => {
    if(!ref.current)
      return

    const rect = ref.current.getBoundingClientRect() as DOMRect
    setElementRect(rect)
  }, [ref.current])

  if(!document.getElementById('hero'))
    return  null

  return createPortal(
    <div ref={ref}>
      <props.Element/>
    </div>,
    document.getElementById('hero') as Element
  )
}