import * as React from 'react'

import { cn } from '@/lib/utils/cn'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:ring-ring shadow-xs focus-visible:outline-hidden flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
