import styled from 'styled-components'

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
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

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 16px;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
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
