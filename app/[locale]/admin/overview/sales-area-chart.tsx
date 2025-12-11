// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';

// import ProductPrice from '@/components/shared/product/product-price';
// import { Card, CardContent } from '@/components/ui/card';
// import useColorStore from '@/hooks/use-color-store';
// import { formatDateTime } from '@/lib/utils';
// import { useTheme } from 'next-themes';
// import React from 'react';
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   TooltipProps,
//   XAxis,
//   YAxis,
// } from 'recharts';

// interface CustomTooltipProps extends TooltipProps<number, string> {
//   active?: boolean;
//   payload?: { value: number }[];
//   label?: string;
// }

// const CustomTooltip: React.FC<CustomTooltipProps> = ({
//   active,
//   payload,
//   label,
// }) => {
//   if (active && payload && payload.length) {
//     return (
//       <Card>
//         <CardContent className="p-2">
//           <p>{label && formatDateTime(new Date(label)).dateOnly}</p>
//           <p className="text-primary text-xl">
//             <ProductPrice price={payload[0].value} plain />
//           </p>
//         </CardContent>
//       </Card>
//     );
//   }
//   return null;
// };

// const CustomXAxisTick: React.FC<any> = ({ x, y, payload }) => {
//   return (
//     <text x={x} y={y + 10} textAnchor="start" fill="#666" className="text-xs">
//       {formatDateTime(new Date(payload.value)).dateOnly}
//       {/* {`${payload.value.split('/')[1]}/${payload.value.split('/')[2]}`} */}
//     </text>
//   );
// };
// const STROKE_COLORS: { [key: string]: { [key: string]: string } } = {
//   Red: { light: '#980404', dark: '#ff3333' },
//   Green: { light: '#015001', dark: '#06dc06' },
//   Gold: { light: '#ac9103', dark: '#f1d541' },
// };

// export default function SalesAreaChart({ data }: { data: any[] }) {
//   const { theme } = useTheme();
//   const { cssColors, color } = useColorStore(theme);

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <AreaChart data={data}>
//         <CartesianGrid horizontal={true} vertical={false} stroke="" />
//         <XAxis dataKey="date" tick={<CustomXAxisTick />} interval={3} />
//         <YAxis fontSize={12} tickFormatter={(value: number) => `$${value}`} />
//         <Tooltip content={<CustomTooltip />} />
//         <Area
//           type="monotone"
//           dataKey="totalSales"
//           stroke={STROKE_COLORS[color.name][theme || 'light']}
//           strokeWidth={2}
//           fill={`hsl(${cssColors['--primary']})`}
//           fillOpacity={0.8}
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import ProductPrice from '@/components/shared/product/product-price';
import { Card, CardContent } from '@/components/ui/card';
import useColorStore from '@/hooks/use-color-store';
import { formatDateTime } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';

// SAFE Tooltip interface (no ESLint warning)
interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: { value: number | undefined }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length && payload[0].value !== undefined) {
    return (
      <Card>
        <CardContent className="p-2">
          <p>{label ? formatDateTime(new Date(label)).dateOnly : ''}</p>
          <p className="text-primary text-xl">
            <ProductPrice price={payload[0].value} plain />
          </p>
        </CardContent>
      </Card>
    );
  }
  return null;
};

// Strong type for tick props
interface TickProps {
  x?: number;
  y?: number;
  payload?: { value: string | number };
}

const CustomXAxisTick: React.FC<TickProps> = ({ x = 0, y = 0, payload }) => {
  const value = payload?.value;
  const date =
    value !== undefined ? formatDateTime(new Date(value)).dateOnly : '';

  return (
    <text
      x={x}
      y={y + 10}
      textAnchor="start" // FIXED (Left ❌ → start ✔️)
      fill="#666"
      className="text-xs"
    >
      {date}
    </text>
  );
};

// Safe color mapping
const STROKE_COLORS: Record<string, Record<string, string>> = {
  Red: { light: '#980404', dark: '#ff3333' },
  Green: { light: '#015001', dark: '#06dc06' },
  Gold: { light: '#ac9103', dark: '#f1d541' },
};

interface SalesAreaChartProps {
  data: { date: string; totalSales: number }[];
}

export default function SalesAreaChart({ data }: SalesAreaChartProps) {
  const { theme = 'light' } = useTheme();
  const { cssColors, color } = useColorStore(theme);

  // Safe fallback color
  const strokeColor = STROKE_COLORS[color.name]?.[theme] || '#0070f3';

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid horizontal={true} vertical={false} stroke="" />
        <XAxis dataKey="date" tick={<CustomXAxisTick />} interval={3} />
        <YAxis fontSize={12} tickFormatter={(value: number) => `$${value}`} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="totalSales"
          stroke={strokeColor}
          strokeWidth={2}
          fill={`hsl(${cssColors['--primary']})`}
          fillOpacity={0.8}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
