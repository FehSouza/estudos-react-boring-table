import { useState } from 'react'
import { useTable } from 'react-boring-table'
import { Controls, Filters } from '../../components'
import * as S from './styles'
import { tableOptions } from './tableOptions'

export const Home = () => {
  const [options] = useState(() => tableOptions)
  const table = useTable(options)

  const totalItems = table.body.length
  const customTotalItems = table.extensions.totalItems

  return (
    <S.Container>
      <Filters table={table} />

      <S.TableContainer>
        <S.Table>
          <thead>
            {table.head.map((row) => (
              <tr key={row.id}>{row.cells.map((cell) => cell.value)}</tr>
            ))}
          </thead>
          <tbody>
            {table.customBody.map((row) => (
              <tr key={row.id} aria-checked={row.selected}>
                {row.cells.map((cell) => cell.value)}
              </tr>
            ))}
          </tbody>
        </S.Table>

        {totalItems === 0 && <S.Warning>Sem dados cadastrados</S.Warning>}
        {totalItems !== 0 && customTotalItems === 0 && <S.Warning>Sem resultados para a busca</S.Warning>}
      </S.TableContainer>

      <Controls table={table} />
    </S.Container>
  )
}
