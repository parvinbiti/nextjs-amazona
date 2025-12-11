// import React from 'react'

// import Header from '@/components/shared/header'
// import Footer from '@/components/shared/footer'

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className='flex flex-col min-h-screen'>
//       <Header />
//       <main className='flex-1 flex flex-col p-4'>{children}</main>
//       <Footer />
//     </div>
//   )
// }

// app/components/shared/header.tsx
'use client';

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <h1>SMS IT AGENCY</h1>
    </header>
  );
}
