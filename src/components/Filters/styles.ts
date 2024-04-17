import styled from 'styled-components'

export const Filters = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FilterInput = styled.input`
  width: 250px;
  height: 32px;
  display: flex;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  transition-duration: 350ms;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.textLight};
  }
`

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border-radius: 6px;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
