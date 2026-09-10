'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

import { company } from '@/lib/site';

type Locale = 'zh' | 'en';

const copy = {
  zh: {
    title: '快速留言',
    note: '填写后点击发送，将自动打开你电脑/手机上的邮件应用并填好内容，确认后即可发送给我们的商务邮箱。',
    name: '姓名',
    namePh: '怎么称呼你',
    company: '公司 / 单位（选填）',
    companyPh: '公司或单位名称',
    email: '邮箱',
    emailPh: '用于回复你的邮箱',
    type: '需求类型',
    types: ['样品咨询', '批量采购', '联合研发', '防辐射材料验证', '其他'],
    message: '需求描述',
    messagePh: '应用场景、规格需求、期望时间节点、预估数量等',
    submit: '发送邮件',
    required: '请填写姓名、邮箱和需求描述。',
  },
  en: {
    title: 'Quick Inquiry',
    note: 'Fill in the form and click send — your email app will open with the message pre-filled, ready to send to our team.',
    name: 'Name',
    namePh: 'Your name',
    company: 'Company (optional)',
    companyPh: 'Company or organization',
    email: 'Email',
    emailPh: 'Where we can reply to you',
    type: 'Inquiry type',
    types: ['Sample request', 'Bulk purchase', 'Joint R&D', 'Radiation-shielding validation', 'Other'],
    message: 'Message',
    messagePh: 'Application scenario, specifications, timeline, estimated quantity, etc.',
    submit: 'Open Email Draft',
    required: 'Please fill in name, email and message.',
  },
} as const;

const ContactForm = ({ locale = 'zh' }: { locale?: Locale }): JSX.Element => {
  const t = copy[locale];
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [org, setOrg] = useState('');
  const [inquiryType, setInquiryType] = useState<string>(t.types[0]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !fromEmail.trim() || !message.trim()) {
      setError(t.required);
      return;
    }

    const subject = encodeURIComponent(
      locale === 'zh' ? `[官网询盘][${inquiryType}] ${name}` : `[Website inquiry][${inquiryType}] ${name}`,
    );
    const body = encodeURIComponent(
      [
        `${t.name}: ${name}`,
        `${t.email}: ${fromEmail}`,
        org ? `${t.company}: ${org}` : '',
        `${t.type}: ${inquiryType}`,
        '',
        `${t.message}:`,
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary';

  return (
    <div className="panel-soft p-6">
      <h3 className="border-b border-primary pb-3 text-lg font-semibold text-foreground">{t.title}</h3>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">{t.note}</p>

      <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor={`contact-name-${locale}`} className="mb-1 block text-xs font-semibold text-foreground">
            {t.name} *
          </label>
          <input
            id={`contact-name-${locale}`}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.namePh}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor={`contact-email-${locale}`} className="mb-1 block text-xs font-semibold text-foreground">
            {t.email} *
          </label>
          <input
            id={`contact-email-${locale}`}
            type="email"
            value={fromEmail}
            onChange={(event) => setFromEmail(event.target.value)}
            placeholder={t.emailPh}
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor={`contact-org-${locale}`} className="mb-1 block text-xs font-semibold text-foreground">
            {t.company}
          </label>
          <input
            id={`contact-org-${locale}`}
            type="text"
            value={org}
            onChange={(event) => setOrg(event.target.value)}
            placeholder={t.companyPh}
            className={inputClass}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor={`contact-type-${locale}`} className="mb-1 block text-xs font-semibold text-foreground">
            {t.type}
          </label>
          <select
            id={`contact-type-${locale}`}
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            className={inputClass}
          >
            {t.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor={`contact-message-${locale}`} className="mb-1 block text-xs font-semibold text-foreground">
            {t.message} *
          </label>
          <textarea
            id={`contact-message-${locale}`}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={t.messagePh}
            rows={5}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {t.submit}
          </button>
          {error && <p className="text-xs font-medium text-red-600">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
