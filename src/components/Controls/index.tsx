import * as Select from '@radix-ui/react-select'
import { useState } from 'react'
import {
  MdCheck,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'
import { Table } from '../../pages/Home/tableOptions'
import * as S from './styles'

interface ControlsProps {
  table: Table
}

export const Controls = ({ table }: ControlsProps) => {
  const totalItems = table.body.length
  const isAllSelected = table.extensions.isAllSelected
  const page = table.extensions.page
  const totalPages = table.extensions.totalPages
  const disablePrev = page === 1
  const disableNext = page === totalPages || totalPages === 0

  const [valueSelect, setValueSelect] = useState('10')

  const options = ['10', '20', '30', '40', '50']

  return (
    <S.Controls>
      <S.SelectedRowsContainer>
        <S.SelectedRowsText>
          {table.extensions.selectedRows.length} de {totalItems} linhas selecionadas.
        </S.SelectedRowsText>

        {isAllSelected && <S.SelectButton onClick={table.extensions.resetSelections}>Limpe a seleção de todas</S.SelectButton>}
        {!isAllSelected && !!totalItems && <S.SelectButton onClick={table.extensions.selectAll}>Selecione todas</S.SelectButton>}
      </S.SelectedRowsContainer>

      <S.Pagination>
        <S.LinesPerPageContainer>
          <span>Linhas por página</span>

          <Select.Root value={valueSelect} onValueChange={setValueSelect}>
            <Select.Trigger aria-label="Food">
              <Select.Value aria-label={valueSelect}>{valueSelect}</Select.Value>

              <Select.Icon>
                <MdKeyboardArrowDown />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content>
                <Select.ScrollUpButton>
                  <MdKeyboardArrowUp />
                </Select.ScrollUpButton>

                <Select.Viewport>
                  {options.map((option) => (
                    <Select.Item key={option} value={option}>
                      <Select.ItemText>{option}</Select.ItemText>
                      <Select.ItemIndicator>
                        <MdCheck />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>

                <Select.ScrollDownButton>
                  <MdKeyboardArrowDown />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </S.LinesPerPageContainer>

        <S.PageInfo>
          Página {page} de {totalPages !== 0 ? totalPages : 1}
        </S.PageInfo>

        <S.PageButtons>
          <S.PageButton onClick={table.extensions.firstPage} disabled={disablePrev}>
            <MdKeyboardDoubleArrowLeft />
          </S.PageButton>
          <S.PageButton onClick={table.extensions.prevPage} disabled={disablePrev}>
            <MdKeyboardArrowLeft />
          </S.PageButton>
          <S.PageButton onClick={table.extensions.nextPage} disabled={disableNext}>
            <MdKeyboardArrowRight />
          </S.PageButton>
          <S.PageButton onClick={table.extensions.lastPage} disabled={disableNext}>
            <MdKeyboardDoubleArrowRight />
          </S.PageButton>
        </S.PageButtons>
      </S.Pagination>
    </S.Controls>
  )
}
