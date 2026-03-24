'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

interface MaterialProperty {
  item: string;
  method: string;
  unit: string;
  data: string;
}

interface ProductData {
  name: string;
  spec: string;
  note?: string;
  properties: MaterialProperty[];
}

const peProducts: ProductData[] = [
  {
    name: 'PE发光膜',
    spec: 'A01B01',
    note: '建议使用前用80℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '0.693' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '26.33' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '4.85' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '5.57' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '238.54' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '7.05' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '102' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '31.33' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '6.19' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '244.54' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '27.33' },
    ],
  },
  {
    name: 'PE发光线',
    spec: 'A01B01',
    note: '建议使用前用80℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '0.743' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '67' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '>>100' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '>>200' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '>>100' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '>>200' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '50-100' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '76' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '>>200' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '>>100' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '65.5' },
    ],
  },
  {
    name: 'PE发光线',
    spec: 'A01B02',
    note: '建议使用前用80℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '1.138' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '44.33' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '20.7' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '22.52' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '336' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '21.93' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '273.35' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '65' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '21.77' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '330' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '46' },
    ],
  },
];

const plaProducts: ProductData[] = [
  {
    name: 'PLA发光线',
    spec: 'A02B02',
    note: '建议使用前用60℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '0.935' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '72.17' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '>>100' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '>>200' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '>>100' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '>>200' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '50-100' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '77' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '>>200' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '>>100' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '72.5' },
    ],
  },
  {
    name: 'PLA发光线',
    spec: 'A02B03',
    note: '建议使用前用60℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '1.795' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '76' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '>>100' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '>>200' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '>>100' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '>>200' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '>>50' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '85' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '>>200' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '>>100' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '75.5' },
    ],
  },
  {
    name: 'PLA温致发光线',
    spec: 'A02C01',
    note: '建议使用前用60℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '0.845' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '65.33' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '>>100' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '>>200' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '>>100' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '>>200' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '50-100' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '78.5' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '>>200' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '>>100' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '67.5' },
    ],
  },
  {
    name: 'PLA温致发光线',
    spec: 'A02C02',
    note: '建议使用前用60℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '1.074' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '71.67' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '>>100' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '>>200' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '>>100' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '>>200' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '50-100' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '75' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '>>200' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '>>100' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '71.5' },
    ],
  },
];

const tpuProducts: ProductData[] = [
  {
    name: 'TPU发光线',
    spec: 'A05B02',
    note: '建议使用前用80℃ 烘料4小时。',
    properties: [
      { item: '密度', method: 'ASTM D792', unit: 'g/cm3', data: '1.133' },
      { item: '邵氏硬度 (ShoreD, 10sec, 23℃)', method: 'ASTM D2240', unit: 'HD', data: '37.17' },
      { item: '100%定伸强度 垂直流向 23℃', method: 'ASTM D412', unit: 'Mpa', data: '3.67' },
      { item: '拉伸强度 垂直流向 23℃', method: 'ASTM D 412', unit: 'Mpa', data: '>>50' },
      { item: '断裂伸长率 垂直流向 23℃', method: 'ASTM D412', unit: '%', data: '>>700' },
      { item: '空气中拉伸强度 (100℃, 168hr)', method: 'ASTM D573', unit: 'Mpa', data: '>>50' },
      { item: '空气中断裂伸长率 (100℃, 168hr)', method: 'ASTM D573', unit: '%', data: '>>500' },
      { item: '空气中硬度 (100℃, 168hr)', method: 'ASTM D573', unit: 'HD', data: '43' },
      { item: '紫外365nm拉伸强度 (20℃, 168hr)', method: 'ASTM G154', unit: 'Mpa', data: '>>50' },
      { item: '紫外365nm断裂伸长率(20℃, 168hr)', method: 'ASTM G154', unit: '%', data: '>>700' },
      { item: '紫外365nm硬度 (20℃, 168hr)', method: 'ASTM G154', unit: 'HD', data: '36' },
    ],
  },
];

const ResourcesClient = () => {
  const [activeTab, setActiveTab] = useState<'PE' | 'PLA' | 'TPU'>('PE');

  const products = activeTab === 'PE' ? peProducts : activeTab === 'PLA' ? plaProducts : tpuProducts;

  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <div className="tab-nav">
          <button
            type="button"
            className={clsx('tab-link', activeTab === 'PE' && 'active')}
            onClick={() => setActiveTab('PE')}
          >
            PE 系列
          </button>
          <button
            type="button"
            className={clsx('tab-link', activeTab === 'PLA' && 'active')}
            onClick={() => setActiveTab('PLA')}
          >
            PLA 系列
          </button>
          <button
            type="button"
            className={clsx('tab-link', activeTab === 'TPU' && 'active')}
            onClick={() => setActiveTab('TPU')}
          >
            TPU 系列
          </button>
        </div>
      </div>

      <div className="space-y-12 animate-fadeIn" key={activeTab}>
        {products.map((product, index) => (
          <div key={`${product.name}-${product.spec}-${index}`} className="panel p-6 md:p-8">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">规格: {product.spec}</p>
              </div>
              {product.note && (
                <div className="bg-muted/50 px-4 py-2 rounded text-xs text-muted-foreground border border-black/5">
                  <span className="font-semibold text-primary/80 mr-1">备注:</span> {product.note}
                </div>
              )}
            </div>

            <div className="relative">
              {/* Mobile scroll hint */}
              <div className="md:hidden absolute -top-6 right-0 text-xs text-muted-foreground/60 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>左右滑动查看</span>
              </div>

              <div className="overflow-x-auto rounded-md border border-border bg-white shadow-sm">
                <table className="min-w-full text-left text-sm">
                  <thead className="sticky top-0 bg-muted/30 backdrop-blur-sm">
                    <tr className="text-muted-foreground">
                      <th className="px-5 py-3 font-medium">测试项目</th>
                      <th className="px-5 py-3 font-medium w-32">测试方法</th>
                      <th className="px-5 py-3 font-medium w-24">单位</th>
                      <th className="px-5 py-3 font-medium w-32">测试数据</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {product.properties.map((prop, idx) => (
                      <tr key={idx} className="hover:bg-muted/10 transition-colors">
                        <td className="px-5 py-3 font-medium text-foreground">{prop.item}</td>
                        <td className="px-5 py-3 text-muted-foreground font-mono text-xs">{prop.method}</td>
                        <td className="px-5 py-3 text-muted-foreground">{prop.unit}</td>
                        <td className="px-5 py-3 font-semibold text-primary">{prop.data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesClient;
