import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendKey = process.env.RESEND_API_KEY;
const resendClient = resendKey ? new Resend(resendKey) : null;
const recipientList = (process.env.CONTACT_FORM_RECIPIENT ?? 'contact@cosmorigin.com')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean);

const crmWebhook = process.env.CRM_WEBHOOK_URL;

const respond = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

export async function POST(request: NextRequest) {
  const { name, company, contact, projectType, message } = await request.json();

  if (!name || !contact || !message) {
    return respond({ error: '请填写姓名、联系方式与需求描述。' }, 400);
  }

  const emailSubject = `官网表单 | ${projectType ?? '新咨询'} - ${name}`;
  const emailBody = [
    `姓名: ${name}`,
    `公司/机构: ${company || '未填写'}`,
    `联系方式: ${contact}`,
    `需求类型: ${projectType || '未填写'}`,
    '------------------------------',
    message,
  ].join('\n');

  try {
    if (resendClient) {
      await resendClient.emails.send({
        from: 'Cosmorigin 官网 <onboarding@resend.dev>',
        to: recipientList,
        subject: emailSubject,
        text: emailBody,
      });
    }

    if (crmWebhook) {
      await fetch(crmWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          contact,
          projectType,
          message,
          submittedAt: new Date().toISOString(),
          source: 'cosmorigin-website',
        }),
      }).catch((error) => {
        console.warn('CRM webhook failed', error);
      });
    }

    if (!resendClient) {
      console.warn('RESEND_API_KEY 未配置，邮件未发送。');
    }

    return respond({
      success: true,
      message: resendClient
        ? '提交成功，我们已发送提醒给顾问团队。'
        : '提交成功，我们会尽快联系（请尽快配置邮件通知）。',
    });
  } catch (error) {
    console.error('Contact form error', error);
    return respond({ error: '提交失败，请稍后再试或直接邮件联系。' }, 500);
  }
}
