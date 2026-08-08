import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98] shadow-[0_0_0_1px_rgba(212,175,106,0.35)]',
        outline:
          'border border-primary/50 text-primary bg-transparent hover:bg-primary/10 active:scale-[0.98]',
        ghost: 'text-foreground hover:bg-white/5 active:scale-[0.98]',
        whatsapp:
          'bg-[#25D366] text-[#062712] hover:brightness-105 active:scale-[0.98] shadow-lg',
      },
      size: {
        default: 'h-11 px-6 py-2 has-[>svg]:px-5',
        sm: 'h-9 px-4 has-[>svg]:px-3',
        lg: 'h-14 px-9 text-base has-[>svg]:px-7',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
