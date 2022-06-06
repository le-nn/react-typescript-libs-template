import React from "react"

export const Lib = () => {
    return <div> Hello libs </div>
}

const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout))

export const count = async (timeout: number) => {
    await delay(timeout)
}

const data: any = {}

export const chain = data?.a?.b?.c ?? "a"