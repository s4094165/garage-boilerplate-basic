'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { signupSchema, type SignupInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignUpPage() {
  const router = useRouter()
  const { user, loading, signUpWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  })

  useEffect(() => {
    if (!loading && !isSubmitting && user) {
      router.replace('/team')
    }
  }, [loading, isSubmitting, user, router])

  if (loading) return <FullPageSpinner />

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/team')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  const onSubmit = async (data: SignupInput) => {
    try {
      await signUpWithEmail(data.email, data.password, data.displayName)
      router.push('/auth/signin?verification=sent')
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        toast.error('An account with this email already exists')
      } else {
        toast.error('Failed to create account. Please try again.')
      }
    }
  }

  return (
    <div className="w-full">
      <h1 className="mb-5 ml-8 text-4xl font-semibold text-white">
        Sign Up
      </h1>

      <div className="rounded-[48px] bg-zinc-800 px-8 py-7">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label
              htmlFor="displayName"
              className="mb-2 block text-base font-semibold text-white"
            >
              Name
            </label>

            <input
              id="displayName"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.displayName}
              aria-describedby={errors.displayName ? 'display-name-error' : undefined}
              className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
              {...register('displayName')}
            />

            {errors.displayName && (
              <p
                id="display-name-error"
                className="mt-1 text-xs text-red-400"
                role="alert"
              >
                {errors.displayName.message}
              </p>
            )}
          </div>

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
              autoComplete="new-password"
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-base font-semibold text-white"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
              className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
              {...register('confirmPassword')}
            />

            {errors.confirmPassword && (
              <p
                id="confirm-password-error"
                className="mt-1 text-xs text-red-400"
                role="alert"
              >
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-blue-500 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Creating account…' : 'Create Account'}
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
        Already have an account?{' '}
        <Link
          href="/auth/signin"
          className="font-semibold text-blue-500 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  )
}
