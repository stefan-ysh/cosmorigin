'use client';

import { socials } from '@/constants';
import { company } from '@/lib/site';
import styles from '@/styles';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname() ?? '';
  const isEnglish = pathname.startsWith('/en');

  return (
    <div className={`site-footer ${styles.xPaddings} py-10 relative border-none`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="flex flex-col gap-3 items-start">
            {/* <div className="w-[160px]">
              <Image
                src="/light-logo.png"
                alt="扬州宇元新材有限公司 cosmorigin Logo"
                width={160}
                height={80}
              />
            </div> */}
            <h4 className="font-bold text-[20px] text-white">{isEnglish ? company.enName : company.zhName}</h4>
            <p className="text-[14px] text-[#d3d3d3]">
              {isEnglish ? `Address: ${company.addressEn}` : `地址：${company.addressZh}`}
            </p>
            <p className="text-[14px] text-[#d3d3d3]">Tel：{company.phone}</p>
            <p className="text-[14px] text-[#d3d3d3]">{isEnglish ? 'Email' : '邮箱'}：{company.email}</p>
            <div className="flex items-center gap-4 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-[28px] h-[28px] relative opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src={social.url}
                      alt={social.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-[12px] text-[#d3d3d3]">{isEnglish ? 'WeChat Official Account' : '微信公众号'}</p>
            <div className="w-28 h-28 relative bg-white p-1">
              <Image
                src={company.wechatQr}
                alt="扬州宇元新材有限公司微信公众号二维码"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-[12px] text-[#d3d3d3] flex flex-col gap-2 items-center md:flex-row md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} Cosmorigin. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Image
              alt="备案图标"
              src="/备案图标.png"
              width={16}
              height={16}
              className="w-4 h-4 mr-1"
            />
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=32100302011598"
              rel="noreferrer"
              target="_blank"
            >
              苏公网安备32100302011598号
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
