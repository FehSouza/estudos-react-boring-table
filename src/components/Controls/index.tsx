import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Table } from '../../pages/Home/tableOptions'
import { LinesPerPage } from '../LinesPerPage'
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
        <LinesPerPage table={table} />

        <S.PageContent>
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
        </S.PageContent>
      </S.Pagination>
    </S.Controls>
  )
}
