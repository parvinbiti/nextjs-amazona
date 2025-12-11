// import BrowsingHistoryList from '@/components/shared/browsing-history-list'
// import { HomeCard } from '@/components/shared/home/home-card'
// import { HomeCarousel } from '@/components/shared/home/home-carousel'
// import ProductSlider from '@/components/shared/product/product-slider'
// import { Card, CardContent } from '@/components/ui/card'

// import {
//   getProductsForCard,
//   getProductsByTag,
//   getAllCategories,
// } from '@/lib/actions/product.actions'
// import { getSetting } from '@/lib/actions/setting.actions'
// import { toSlug } from '@/lib/utils'
// import { getTranslations } from 'next-intl/server'

// export default async function HomePage() {
//   const t = await getTranslations('Home')
//   const { carousels } = await getSetting()
//   const todaysDeals = await getProductsByTag({ tag: 'todays-deal' })
//   const bestSellingProducts = await getProductsByTag({ tag: 'best-seller' })

//   const categories = (await getAllCategories()).slice(0, 4)
//   const newArrivals = await getProductsForCard({
//     tag: 'new-arrival',
//   })
//   const featureds = await getProductsForCard({
//     tag: 'featured',
//   })
//   const bestSellers = await getProductsForCard({
//     tag: 'best-seller',
//   })
//   const cards = [
//     {
//       title: t('Categories to explore'),
//       link: {
//         text: t('See More'),
//         href: '/search',
//       },
//       items: categories.map((category) => ({
//         name: category,
//         image: `/images/${toSlug(category)}.jpg`,
//         href: `/search?category=${category}`,
//       })),
//     },
//     {
//       title: t('Explore New Arrivals'),
//       items: newArrivals,
//       link: {
//         text: t('View All'),
//         href: '/search?tag=new-arrival',
//       },
//     },
//     {
//       title: t('Discover Best Sellers'),
//       items: bestSellers,
//       link: {
//         text: t('View All'),
//         href: '/search?tag=new-arrival',
//       },
//     },
//     {
//       title: t('Featured Products'),
//       items: featureds,
//       link: {
//         text: t('Shop Now'),
//         href: '/search?tag=new-arrival',
//       },
//     },
//   ]

//   return (
//     <>
//       <HomeCarousel items={carousels} />
//       <div className='md:p-4 md:space-y-4 bg-border'>
//         <HomeCard cards={cards} />
//         <Card className='w-full rounded-none'>
//           <CardContent className='p-4 items-center gap-3'>
//             <ProductSlider title={t("Today's Deals")} products={todaysDeals} />
//           </CardContent>
//         </Card>
//         <Card className='w-full rounded-none'>
//           <CardContent className='p-4 items-center gap-3'>
//             <ProductSlider
//               title={t('Best Selling Products')}
//               products={bestSellingProducts}
//               hideDetails
//             />
//           </CardContent>
//         </Card>
//       </div>

//       <div className='p-4 bg-background'>
//         <BrowsingHistoryList />
//       </div>
//     </>
//   )
// }
'use client'; // যদি এই component client-side state/interaction ব্যবহার করে

import React, { useEffect, useState } from 'react';

interface BrowsingItem {
  id: string;
  name: string;
  href: string;
}

// Example function to fetch browsing history (replace with your logic)
async function fetchBrowsingHistory(): Promise<BrowsingItem[]> {
  // এই part তুমি API call বা localStorage থেকে ডেটা নিতে পারো
  return [
    { id: '1', name: 'Product 1', href: '/product/1' },
    { id: '2', name: 'Product 2', href: '/product/2' },
    { id: '3', name: 'Product 3', href: '/product/3' },
  ];
}

export default function BrowsingHistoryList() {
  const [history, setHistory] = useState<BrowsingItem[] | null>(null);

  useEffect(() => {
    async function loadHistory() {
      const data = await fetchBrowsingHistory();
      setHistory(data);
    }
    loadHistory();
  }, []);

  // Loading state
  if (history === null) {
    return <div>Loading browsing history...</div>;
  }

  // Empty state
  if (history.length === 0) {
    return <div>No browsing history found.</div>;
  }

  return (
    <div className="space-y-2">
      {history.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="block p-2 border rounded hover:bg-gray-100"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
