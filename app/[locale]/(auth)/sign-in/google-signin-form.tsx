'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SignInWithGoogle } from '@/lib/actions/user.actions';

export function GoogleSignInForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    await SignInWithGoogle();
    setPending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button disabled={pending} className="w-full" variant="outline">
        {pending ? 'Redirecting to Google...' : 'Sign In with Google'}
      </Button>
    </form>
  );
}
