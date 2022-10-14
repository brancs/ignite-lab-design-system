import { ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { Text } from './Text';

export interface CheckboxProps {
  children?: ReactNode,
  className?: string
}

export function Checkbox({children, className}:CheckboxProps) {
  return (
    <div className={`flex items-center gap-2 ${className ? className : ''}`}>
      <CheckboxPrimitive.Root id='accept' className="w-6 h-6 p-[2px] rounded bg-gray-800">
        <CheckboxPrimitive.Indicator asChild>
          <Check weight='bold' className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Text size='sm' asChild={true}><label htmlFor='accept'>Lembrar de mim por 30 dias</label></Text>
    </div>
  )
}