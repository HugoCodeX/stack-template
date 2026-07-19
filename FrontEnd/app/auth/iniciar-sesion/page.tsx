import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <main className="relative flex min-h-svh items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06),transparent_50%)]" />
      <div className="relative w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25">
            <span className="text-lg font-bold text-primary-foreground">N</span>
          </div>
          <h1 className="text-[22px] font-semibold tracking-tight">Iniciar sesión</h1>
        </div>
        <div className="rounded-2xl border bg-card px-7 py-8 shadow-lg shadow-black/5">
          <LoginForm />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          Nexo Fitness &middot; Centro de rendimiento
        </p>
      </div>
    </main>
  )
}
