import { faker } from '@faker-js/faker'
import { BoringTable, FilterPlugin, PaginationPlugin, RowSelectPlugin, createOptions } from 'react-boring-table'
import { MdCheck } from 'react-icons/md'
import * as S from './styles'

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
          <S.Checkbox
            role="checkbox"
            aria-checked={extra.getRow()?.isAllVisibleSelected}
            aria-label="Checkbox"
            onClick={() => {
              const row = extra.getRow()
              if (row.isAllVisibleSelected) return row.resetVisibleSelections?.()
              row.allVisibleSelect?.()
            }}
          >
            {extra.getRow()?.isAllVisibleSelected && <MdCheck size={12} />}
          </S.Checkbox>
        </th>
      ),
      body: (_item, extra) => (
        <td key={extra.id}>
          <S.Checkbox
            role="checkbox"
            aria-checked={extra.getRow()?.selected}
            aria-label="Checkbox"
            onClick={() => extra.getRow().toggleSelect?.()}
          >
            {extra.getRow()?.selected && <MdCheck size={12} />}
          </S.Checkbox>
        </td>
      ),
    },
    {
      head: (extra) => <th key={extra.id}>ID</th>,
      body: (item, extra) => <td key={extra.id}>user-{String(item.id).padStart(3, '0')}</td>,
    },
    {
      head: (extra) => <th key={extra.id}>Nome</th>,
      body: (item, extra) => <td key={extra.id}>{item.name}</td>,
    },
    {
      head: (extra) => <th key={extra.id}>Idade</th>,
      body: (item, extra) => (
        <td key={extra.id}>
          {item.age} {item.age === 1 ? 'ano' : 'anos'}
        </td>
      ),
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

        if ((emptyName && emptyAge) || (validName && emptyAge) || (emptyName && validAge) || (validName && validAge)) return true
        return false
      },
    }),

    new PaginationPlugin({
      pageSize: 10,
    }),

    new RowSelectPlugin(),
  ],
})

type TableOptions = typeof tableOptions
export type Table = BoringTable<TableOptions['data'], Exclude<TableOptions['plugins'], undefined>, TableOptions['columns']>
