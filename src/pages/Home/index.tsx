import { FilterPlugin, PaginationPlugin, createOptions, useTable, RowSelectPlugin } from 'react-boring-table'
import * as S from './styles'
import { faker } from '@faker-js/faker'
import { useState } from 'react'

interface Data {
  id: number
  name: string
  age: number
}

const data: Data[] = []

for (let index = 0; index < 100; index++) {
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
          <input type="checkbox" checked={extra.getRow()?.selected} onChange={() => extra.getRow()?.toggleSelect?.()} />
        </td>
      ),
    },
    {
      head: (extra) => <th key={extra.id}>ID</th>,
      body: (item, extra) => <td key={extra.id}>{item.id}</td>,
    },
    {
      head: (extra) => <th key={extra.id}>NOME</th>,
      body: (item, extra) => <td key={extra.id}>{item.name}</td>,
    },
    {
      head: (extra) => <th key={extra.id}>IDADE</th>,
      body: (item, extra) => <td key={extra.id}>{item.age}</td>,
    },
  ],
  plugins: [
    new FilterPlugin<Data[], { name: string; age: number }>({
      initialValue: { name: '', age: 0 },
      filter: (item, criteria) => {
        if (criteria.name === '' && criteria.age === 0) return true
        if (item.name.toLowerCase().includes(criteria.name.toLowerCase())) return true
        if (criteria.age === item.age) return true
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

  return (
    <S.Container>
      <input
        placeholder="Digite um nome"
        value={table.extensions.criteria.name}
        onChange={(e) => table.extensions.filter((prev) => ({ ...prev, name: e.target.value }))}
      />

      <input
        placeholder="Digite uma idade"
        type="number"
        value={table.extensions.criteria.age}
        onChange={(e) => table.extensions.filter((prev) => ({ ...prev, age: e.target.valueAsNumber }))}
      />

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

      <button onClick={table.extensions.prevPage}>Anterior</button>
      <p>{table.extensions.page}</p>
      <button onClick={table.extensions.nextPage}>Próximo</button>

      <p>Selected: {table.extensions.selectedRows.length}</p>

      <button onClick={table.extensions.selectAll}>Select all</button>
    </S.Container>
  )
}
