'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

import { socials } from '@/constants';
import styles from '@/styles';
import { footerVariants } from '@/utils/motion';
import { useEffect } from 'react';
import {
  Theme,
  resolveInitialTheme,
  subscribeToThemeChanges,
} from "@/lib/theme";
import { useState } from 'react';
  
const Footer = () => {
  const [mode, setMode] = useState<Theme>("light");
  useEffect(() => {
    setMode(resolveInitialTheme());
    const unsubscribe = subscribeToThemeChanges(setMode);
    return unsubscribe;
  }, []);
  return (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        携手点亮可持续未来
      </h4>

      <div className="flex flex-col">
        <div className="mb-12 h-[2px] bg-white opacity-10" />

        <div className="flex flex-col lg:flex-row items-start justify-between flex-wrap gap-10">
          {/* Left Side: Company Info */}
          <div className="flex flex-col gap-8 lg:w-1/2">
            <h4 className="font-extrabold text-[24px] text-white">扬州宇元新材有限公司</h4>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="font-normal text-[16px]">
                江苏省扬州市邢江区开发西路213号609室
              </p>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:contact@cosmorigin.com" className="font-normal text-[16px] hover:text-white">
                contact@cosmorigin.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p className="font-normal text-[16px]">+86 185 7841 2005</p>
            </div>
          </div>

          {/* Right Side: Socials and QR Code */}
          <div className="w-full sm:w-auto flex md:flex-row items-center md:items-end gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.url}
                      alt={social.name}
                      className="w-[32px] h-[32px] object-contain hover:opacity-80 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full">
              <p className="font-normal text-[14px] text-white/70">微信公众号</p>
              <img src={ mode === "light" ? "/wechat_official_light.png" : "/wechat_official_dark.png"} alt="扬州宇元新材有限公司微信公众号二维码" className="w-40 h-40 object-contain p-1 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-center font-normal text-[14px] text-white opacity-50">
        Copyright © 2025 Cosmorigin. All rights reserved.
      </p>
    </div>
    <p className="w-full text-center font-normal text-[12px] text-white opacity-50 flex items-center justify-center gap-2 mt-5">
      <img alt="备案图标" src="./备案图标.png" className="w-4 h-4" />{" "}
      <a
        href="https://beian.mps.gov.cn/#/query/webSearch?code=32100302011598"
        rel="noreferrer"
        target="_blank"
      >
        苏公网安备32100302011598号
      </a>
    </p>
  </motion.footer>
  );
};

export default Footer;
