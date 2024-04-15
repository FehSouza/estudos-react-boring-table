import { useState } from 'react'
import { useTable } from 'react-boring-table'
import { Controls, Filters } from '../../components'
import * as S from './styles'
import { tableOptions } from './tableOptions'

export const Home = () => {
  const [options] = useState(() => tableOptions)
  const table = useTable(options)

  return (
    <S.Container>
      <Filters table={table} />

      <table>
        <thead>
          {table.head.map((row) => (
            <tr key={row.id}>{row.cells.map((cell) => cell.value)}</tr>
          ))}
        </thead>
        <tbody>
          {table.customBody.map((row) => (
            <tr key={row.id}>{row.cells.map((cell) => cell.value)}</tr>
          ))}
        </tbody>
      </table>

      <Controls table={table} />
    </S.Container>
  )
}
