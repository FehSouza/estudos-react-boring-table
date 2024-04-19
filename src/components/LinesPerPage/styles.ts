import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SelectButton = styled(Select.Trigger)`
  width: 70px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
`

export const SelectIcon = styled(Select.Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SelectPortal = styled(Select.Portal)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  overflow: hidden;
`

export const Item = styled(Select.Item)`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border: 1px solid transparent;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
    cursor: pointer;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid transparent;
    outline: none;
  }
`

export const CheckIcon = styled(Select.ItemIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ScrollUpButton = styled(Select.ScrollUpButton)`
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ScrollDownButton = styled(Select.ScrollDownButton)`
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`
