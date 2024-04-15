import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Table } from '../../pages/Home/tableOptions'
import * as S from './styles'

interface ControlsProps {
  table: Table
}

export const Controls = ({ table }: ControlsProps) => {
  const page = table.extensions.page
  const totalPages = table.extensions.totalPages
  const disablePrev = page === 1
  const disableNext = page === totalPages

  return (
    <S.Controls>
      <S.SelectedRowsContainer>
        <S.SelectedRowsText>
          {table.extensions.selectedRows.length} de {table.extensions.totalItems} linhas selecionadas.
        </S.SelectedRowsText>

        {table.extensions.isAllSelected ? (
          <S.SelectedRowsButton onClick={table.extensions.resetSelections}>Limpe a seleção de todas</S.SelectedRowsButton>
        ) : (
          <S.SelectedRowsButton onClick={table.extensions.selectAll}>Selecione todas</S.SelectedRowsButton>
        )}
      </S.SelectedRowsContainer>

      <S.Pagination>
        <S.PageInfo>
          Página {page} de {totalPages}
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
