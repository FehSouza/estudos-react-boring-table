import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const SelectedRowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const SelectedRowsText = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`

export const SelectButton = styled.button`
  width: fit-content;
  padding: 7px 12px;
  border-radius: 6px;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const PageInfo = styled.span`
  min-width: 112px;
  text-align: center;
`

export const PageButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const PageButton = styled.button<{ disabled: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  transition-duration: 350ms;

  svg {
    fill: ${({ theme, disabled }) => (disabled ? theme.colors.secondary : theme.colors.text)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const LinesPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const LinesPerPageSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const LinesPerPageButton = styled.button`
  min-width: 70px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;

  svg {
    transform: rotate(90deg);
  }
`

export const LinesPerPageList = styled.ul`
  min-width: 96px;
  display: flex;
  flex-direction: column;
  padding: 4px;
  position: absolute;
  bottom: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  z-index: 1;
`

export const LinesPerPageItem = styled.li`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  border-radius: 4px;
  transition-duration: 350ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const teste = styled(Select.Item)`
background-color: red;
`