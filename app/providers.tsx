'use client'

import {NextUIProvider} from '@nextui-org/react'
import { IconContext } from "react-icons";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {/* <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}> */}
      <IconContext.Provider value={{}}>
      {children}
      </IconContext.Provider>
    </NextUIProvider>
  )
}


