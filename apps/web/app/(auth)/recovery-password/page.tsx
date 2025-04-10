import { Metadata } from 'next';

import { RecoveryTabs } from './components/recovery-tabs';

export const metadata: Metadata = {
  title: 'Coobrastur | Recuperar senha ',
  description: 'Recupere sua senha através do email ou SMS',
};

export default function RecoveryPassword() {
  return <RecoveryTabs />;
}
