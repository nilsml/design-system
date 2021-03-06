import * as React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'
import { token } from './Cell/DataCell.tokens'

type StyledProps = Pick<RowProps, 'active'>

const TableBase = styled.tr<StyledProps>(({ active }) => ({
  background: active ? token.states.active?.background : null,
  ':hover': {
    background: token.states.hover?.background,
  },
}))

export type RowProps = {
  /** Hightlight row as active */
  active?: boolean
} & React.HTMLAttributes<HTMLTableRowElement>

export const Row = forwardRef<HTMLTableRowElement, RowProps>(function Row(
  { ...props },
  ref,
) {
  const { children } = props

  return (
    <TableBase {...props} ref={ref}>
      {children}
    </TableBase>
  )
})
