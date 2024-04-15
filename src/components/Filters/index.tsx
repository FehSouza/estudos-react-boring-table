import { MdClose } from 'react-icons/md'
import { Table } from '../../pages/Home/tableOptions'
import * as S from './styles'

interface FiltersProps {
  table: Table
}

interface HandleFilter {
  e: React.ChangeEvent<HTMLInputElement>
  type: string
}

export const Filters = ({ table }: FiltersProps) => {
  const criteriaName = table.extensions.criteria.name
  const criteriaAge = table.extensions.criteria.age

  const handleFilter = ({ e, type }: HandleFilter) => table.extensions.filter((prev) => ({ ...prev, [type]: e.target.value }))
  const handleReset = () => table.extensions.filter((prev) => ({ ...prev, name: '', age: '' }))

  return (
    <S.Filters>
      <S.FilterInput placeholder="Filtre por um nome" value={criteriaName} onChange={(e) => handleFilter({ e, type: 'name' })} />

      <S.FilterInput
        placeholder="Filtre por uma idade"
        type="number"
        value={criteriaAge}
        onChange={(e) => handleFilter({ e, type: 'age' })}
      />

      {(criteriaName !== '' || (criteriaAge !== '' && !Number.isNaN(criteriaAge))) && (
        <S.ResetButton onClick={handleReset}>
          Limpar <MdClose />
        </S.ResetButton>
      )}
    </S.Filters>
  )
}
