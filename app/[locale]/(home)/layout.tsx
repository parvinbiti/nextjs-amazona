// import Header from '@/components/shared/header';
// import Footer from '@/components/shared/footer';
// import { Suspense } from 'react';

// export default function HomeLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Suspense fallback={<div>Loading...</div>}>
//         <Header />
//       </Suspense>
//       <main className="flex-1 flex flex-col">{children}</main>
//       <Footer />
//     </div>
//   );
// }

// app/components/shared/header.tsx
'use client'; // যদি client-side interactivity থাকে

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <h1>SMS IT AGENCY</h1>
    </header>
  );
}
