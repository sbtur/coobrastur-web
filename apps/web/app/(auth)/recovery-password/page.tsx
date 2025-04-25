import { Metadata } from 'next';

import { Mail, MessageSquare } from 'lucide-react';

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Title } from '@coobrastur/ui/components/data-display/title';

import RecoveryEmailForm from './components/recovery-email-form';
import RecoverySMSForm from './components/recovery-sms-form';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ui/components/data-display/tabs';
import { Text } from '@ui/components/data-display/text';

export const metadata: Metadata = {
  title: 'Recuperar senha ',
  description: 'Recupere sua senha através do email ou SMS',
};

export default function RecoveryPassword() {
  const tabsTitle = [
    {
      value: 'email',
      icon: Mail,
      title: 'Recuperar via email',
    },
    {
      value: 'sms',
      icon: MessageSquare,
      title: 'Recuperar via SMS',
    },
  ];

  return (
    <>
      <Heading className="text-center lg:text-left p-0 gap-1">
        <Title>Redefinir sua senha</Title>
        <Text>Escolha a forma mais conveniente para redefinir sua senha.</Text>
      </Heading>

      <Tabs defaultValue="email" className="w-full mt-3">
        <TabsList className="h-fit flex gap-4 justify-start">
          {tabsTitle.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="grid place-items-center place-content-center w-[145px] h-[90px] py-3 rounded-md border border-neutral-300 group hover:bg-secondary-100 hover:border-highlight-100 data-[state=active]:bg-secondary-100 data-[state=active]:border-2 data-[state=active]:border-highlight-100 transition-all"
            >
              <Icon
                icon={tab.icon}
                className="w-[24px] h-[24px] group-hover:text-highlight-100 group-data-[state=active]:text-highlight-100"
              />
              <Text className="w-[80px] text-wrap group-data-[state=active]:font-semibold">
                {tab.title}
              </Text>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="email">
          <RecoveryEmailForm />
        </TabsContent>
        <TabsContent value="sms">
          <RecoverySMSForm />
        </TabsContent>
      </Tabs>
    </>
  );
}
