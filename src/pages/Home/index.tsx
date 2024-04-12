import { FilterPlugin, PaginationPlugin, createOptions, useTable, RowSelectPlugin } from 'react-boring-table'
import * as S from './styles'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'

interface Data {
  id: number
  name: string
  age: number
}

const data: Data[] = []

for (let i = 0; i < 100; i++) {
  data.push({ id: data.length, name: faker.person.firstName(), age: faker.number.int({ min: 1, max: 100 }) })
}

const tableOptions = createOptions({
  getId: (item) => String(item.id),
  data: data,
  columns: [
    {
      head: (extra) => (
        <th key={extra.id}>
          <input
            type="checkbox"
            checked={extra.getRow()?.isAllSelected}
            onChange={() => {
              const row = extra.getRow()
              if (row.isAllSelected) return row.resetSelections?.()
              row.selectAll?.()
            }}
          />
        </th>
      ),
      body: (_item, extra) => (
        <td key={extra.id}>
          <input type="checkbox" checked={extra.getRow()?.selected} onChange={() => extra.getRow().toggleSelect?.()} />
        </td>
      ),
    },
    {
      head: (extra) => <th key={extra.id}>ID</th>,
      body: (item, extra) => <td key={extra.id}>{item.id}</td>,
    },
    {
      head: (extra) => <th key={extra.id}>Nome</th>,
      body: (item, extra) => <td key={extra.id}>{item.name}</td>,
    },
    {
      head: (extra) => <th key={extra.id}>Idade</th>,
      body: (item, extra) => <td key={extra.id}>{item.age}</td>,
    },
  ],
  plugins: [
    new FilterPlugin<Data[], { name: string; age: number | string }>({
      initialValue: { name: '', age: '' },
      filter: (item, criteria) => {
        const emptyName = criteria.name === ''
        const emptyAge = criteria.age === '' || Number.isNaN(criteria.age)
        const validName = item.name.toLowerCase().includes(criteria.name.toLowerCase())
        const validAge = String(item.age).includes(String(criteria.age))

        if (emptyName && emptyAge) return true
        if (validName && emptyAge) return true
        if (emptyName && validAge) return true
        if (validName && validAge) return true
        return false
      },
    }),

    new PaginationPlugin({
      pageSize: 20,
    }),

    new RowSelectPlugin(),
  ],
})

export const Home = () => {
  const [options] = useState(() => tableOptions)
  const table = useTable(options)
  const criteriaName = table.extensions.criteria.name
  const criteriaAge = table.extensions.criteria.age

  return (
    <S.Container>
      <S.Filters>
        <S.FilterInput
          placeholder="Filtre por um nome"
          value={criteriaName}
          onChange={(e) => table.extensions.filter((prev) => ({ ...prev, name: e.target.value }))}
        />

        <S.FilterInput
          placeholder="Filtre por uma idade"
          type="number"
          value={criteriaAge}
          onChange={(e) => table.extensions.filter((prev) => ({ ...prev, age: e.target.valueAsNumber }))}
        />

        {(criteriaName !== '' || (criteriaAge !== '' && !Number.isNaN(criteriaAge))) && (
          <S.ResetButton onClick={() => table.extensions.filter((prev) => ({ ...prev, name: '', age: '' }))}>
            Limpar <MdClose />
          </S.ResetButton>
        )}
      </S.Filters>

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

      <S.Controls>
        <div>
          <p>
            {table.extensions.selectedRows.length} de {table.extensions.totalItems} linhas selecionadas.
          </p>

          <button onClick={table.extensions.selectAll}>Selecione todas</button>
        </div>

        <div>
          <button onClick={table.extensions.firstPage}>Primeira página</button>
          <button onClick={table.extensions.prevPage}>Anterior</button>
          <p>{table.extensions.page}</p>
          <button onClick={table.extensions.nextPage}>Próximo</button>
          <button onClick={table.extensions.lastPage}>Última página</button>
        </div>
      </S.Controls>
    </S.Container>
  )
}
