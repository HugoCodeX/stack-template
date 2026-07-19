'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [pending, setPending] = useState(false)

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    window.setTimeout(() => router.push('/admin'), 650)
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Correo electrónico
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Ingrese su correo electrónico"
          required
          autoComplete="email"
          className="mt-1.5"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Contraseña
          </label>
          <button
            type="button"
            className="text-[13px] font-medium text-primary hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
        <div className="relative mt-1.5">
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Ingrese su contraseña"
            required
            minLength={8}
            autoComplete="current-password"
            className="pr-10"
          />
          <button
            type="button"
            className="absolute right-1 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-2" disabled={pending}>
        {pending && <Loader2 className="size-4 animate-spin" />}
        {pending ? 'Ingresando…' : 'Ingresar al sistema'}
      </Button>
    </form>
  )
}
