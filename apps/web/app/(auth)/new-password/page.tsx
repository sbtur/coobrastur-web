import { Metadata } from 'next';

import NewPasswordForm from './components/new-password-form';

export const metadata: Metadata = {
  title: 'Coobrastur | Nova senha',
  description: 'Redefina sua senha',
};

export default function NewPassword() {
  return <NewPasswordForm />;
}
