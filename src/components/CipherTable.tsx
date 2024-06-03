import { alphabets } from '@/utils/encryptionFunctions'
import React from 'react'

type Props = {
  keyValue: number
}

const CipherTable = ({ keyValue }: Props) => {
  const { alphabet, alphabetShifted } = alphabets(keyValue);
  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            { alphabet.split("").map((letter) => {
              return (
                <td key={letter}>
                  <div>{ letter }</div>
                </td>
              )
            }) }
          </tr>
          <tr>
            { alphabetShifted.split("").map((letter) => {
              return (
                <td key={letter + "+"}>
                  <div>{ letter }</div>
                </td>
              )
            }) }
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CipherTable