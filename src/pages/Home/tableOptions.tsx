import { faker } from '@faker-js/faker'
import { BoringTable, FilterPlugin, PaginationPlugin, RowSelectPlugin, createOptions } from 'react-boring-table'

interface Data {
  id: number
  name: string
  age: number
}

const data: Data[] = []

for (let i = 0; i < 100; i++) {
  data.push({ id: data.length, name: faker.person.firstName(), age: faker.number.int({ min: 1, max: 100 }) })
}

export const tableOptions = createOptions({
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

type TableOptions = typeof tableOptions
export type Table = BoringTable<TableOptions['data'], Exclude<TableOptions['plugins'], undefined>, TableOptions['columns']>
