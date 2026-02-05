'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
  href?: string;
  location?: string;
  highlight?: string;
}

interface NewsTabsProps {
  companyItems: NewsItem[];
  industryItems: NewsItem[];
}

const NewsTabs = ({ companyItems, industryItems }: NewsTabsProps) => {
  const [activeTab, setActiveTab] = useState<'company' | 'industry'>('company');

  const items = useMemo(
    () => (activeTab === 'company' ? companyItems : industryItems),
    [activeTab, companyItems, industryItems],
  );

  return (
    <div>
      <div className="flex justify-center">
        <div className="tab-nav">
          <button
            type="button"
            className={`tab-link ${activeTab === 'company' ? 'active' : ''}`}
            onClick={() => setActiveTab('company')}
          >
            公司动态
          </button>
          <button
            type="button"
            className={`tab-link ${activeTab === 'industry' ? 'active' : ''}`}
            onClick={() => setActiveTab('industry')}
          >
            行业资讯
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="panel-soft p-6 text-center text-sm text-muted-foreground">
          暂无内容，敬请期待。
        </div>
      ) : (
        <ul className="timeline-list">
          {items.map((item) => {
            const [year, month, day] = item.date.split('-');
            const isExternal = item.href?.startsWith('http');
            const summary = (
              <div className="timeline-content">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-2">{item.summary}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  {item.category}
                  {item.location ? ` · ${item.location}` : ''}
                  {item.highlight ? ` · ${item.highlight}` : ''}
                </div>
              </div>
            );

            return (
              <li key={`${item.title}-${item.date}`} className="timeline-item">
                {item.href ? (
                  isExternal ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
                      {summary}
                    </a>
                  ) : (
                    <Link href={item.href} className="block h-full">
                      {summary}
                    </Link>
                  )
                ) : (
                  summary
                )}
                <div className="timeline-time">
                  <p>{`${month}-${day}`}</p>
                  <span className="text-xs text-muted-foreground">{year}</span>
                </div>
                <div className="timeline-circle">
                  <i />
                  <span className="timeline-dot" />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NewsTabs;
