import React from 'react'

export default function ButtonModal({setModal}) {
  return (
    <button onClick={() => setModal(true)}>
      abrir
    </button>
  )
}
