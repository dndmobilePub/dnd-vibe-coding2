import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'LS MnM · AI 분석 플랫폼', description: '토큰 기반 분석 플랫폼 퍼블리싱 샘플' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
