import * as React, { useState } from "react"


export interface HelloProps { compiler:string; framework:string }

export const Hello = (props: HelloProps) => {
  const [count, setCount] =  useState<number | null >(initialState)
  return (
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
  )
}