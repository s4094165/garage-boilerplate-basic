'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/dashboard')
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/dashboard')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="w-full">
      <h1 className="mb-5 ml-8 text-4xl font-semibold text-white">
        Login
      </h1>

      <div className="rounded-[48px] bg-zinc-800 px-8 py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-base font-semibold text-white"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
              {...register('email')}
            />

            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-base font-semibold text-white"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
              className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
              {...register('password')}
            />

            {errors.password && (
              <p
                id="password-error"
                className="mt-1 text-xs text-red-400"
                role="alert"
              >
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-blue-500 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-600" />
          <span className="text-xs text-zinc-400">OR</span>
          <div className="h-px flex-1 bg-zinc-600" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full rounded-xl border border-zinc-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Continue with Google
        </button>
      </div>

      <p className="mt-7 text-center text-base text-zinc-300">
        Don&apos;t have an account?{' '}
        <Link
          href="/auth/signup"
          className="font-semibold text-blue-500 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  )
}
