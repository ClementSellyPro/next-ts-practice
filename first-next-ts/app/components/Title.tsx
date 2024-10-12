import React from 'react'

export default function Title({title, children}
    :
    {title: string, children:string}) {
  return (
    <>
        <h1 className="font-bold text-3xl text-indigo-800">{title}</h1>
        <p className="text-slate-400 text-sm mt-2">{children}</p>
    </>
  )
}
