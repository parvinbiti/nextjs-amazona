'use client';

import { Button } from '@/components/ui/button';
import { SignInWithGoogle } from '@/lib/actions/user.actions';

export function GoogleSignInForm() {
  return (
    <form action={SignInWithGoogle}>
      <Button className="w-full" variant="outline">
        Sign In with Google
      </Button>
    </form>
  );
}
