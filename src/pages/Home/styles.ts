import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px;
  margin: 0 auto;
`

export const TableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-collapse: collapse;

  thead,
  tbody {
    display: flex;
    flex-direction: column;
  }

  tbody tr:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  tr {
    display: flex;
    transition-duration: 350ms;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary200};
    }

    &[aria-checked='true'] {
      background-color: ${({ theme }) => theme.colors.secondary400};
    }
  }

  th,
  td {
    width: calc((100% - 260px) / 2);
    padding: 12px 20px;
    text-align: left;

    @media (max-width: 768px) {
      width: calc((100% - 164px) / 2);
      padding: 10px;
      align-items: center;
    }

    &:first-child {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(2) {
      width: 80px;
      display: flex;
      text-transform: uppercase;

      @media (max-width: 768px) {
        width: 64px;
      }
    }
  }

  th {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textLight};
    text-transform: uppercase;
  }
`

export const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 350ms;

  &[aria-checked='true'] {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Warning = styled.p`
  width: 100%;
  height: 45px;
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;
`
