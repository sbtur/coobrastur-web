import { Metadata } from 'next';

import LoginForm from './components/login-form';

export const metadata: Metadata = {
  title: 'Coobrastur | Login',
  description: 'Efetue o login para acessar o sistema',
};

export default function Login() {
  return <LoginForm />;
}
