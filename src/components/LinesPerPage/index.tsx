import * as Select from '@radix-ui/react-select'
import { MdCheck, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { Table } from '../../pages/Home/tableOptions'
import * as S from './styles'

interface LinesPerPageProps {
  table: Table
}

const OPTIONS = ['10', '20', '30', '40', '50']

export const LinesPerPage = ({ table }: LinesPerPageProps) => {
  const pageSize = String(table.extensions.pageSize)
  const setPageSize = (e: string) => table.extensions.setPageSize(Number(e))

  // TODO: arrumar a paginação ao escolher outro page size

  return (
    <S.Container>
      <span>Linhas por página</span>

      <Select.Root value={pageSize} onValueChange={(e) => setPageSize(e)}>
        <S.SelectButton aria-label="Seletor de quantidade de linhas por página">
          <Select.Value aria-label={`Quantidade selecionada: ${pageSize}`}>{pageSize}</Select.Value>

          <S.SelectIcon>
            <MdKeyboardArrowDown size={14} />
          </S.SelectIcon>
        </S.SelectButton>

        <S.SelectPortal>
          <Select.Content>
            <S.ScrollUpButton>
              <MdKeyboardArrowUp size={14} />
            </S.ScrollUpButton>

            <Select.Viewport>
              {OPTIONS.map((option) => (
                <S.Item key={`select-${option}`} value={option}>
                  <Select.ItemText>{option}</Select.ItemText>

                  <S.CheckIcon>
                    <MdCheck size={10} />
                  </S.CheckIcon>
                </S.Item>
              ))}
            </Select.Viewport>

            <S.ScrollDownButton>
              <MdKeyboardArrowDown size={14} />
            </S.ScrollDownButton>
          </Select.Content>
        </S.SelectPortal>
      </Select.Root>
    </S.Container>
  )
}
