'use client';

import { Mail, MessageSquare } from 'lucide-react';

import { Heading } from '@coobrastur/ui/components/data-display/heading';
import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Title } from '@coobrastur/ui/components/data-display/title';

import RecoveryEmailForm from './recovery-email-form';
import RecoverySMSForm from './recovery-sms-form';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ui/components/data-display/tabs';
import { Text } from '@ui/components/data-display/text';

export function RecoveryTabs() {
  return (
    <>
      <Heading className="pb-10 ml-0 pl-0">
        <Title>Redefinir sua senha</Title>
        <Text>Escolha a forma mais conveniente para redefinir sua senha.</Text>
      </Heading>
      <Tabs defaultValue="email" className="w-full">
        <TabsList className="flex gap-5 p-1 bg-neutral-100 rounded-lg mb-[60px] justify-start">
          <TabsTrigger
            value="email"
            className="flex flex-col justify-center w-[115px] h-[115px] rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all border border-neutral-300 data-[state=active]:border-highlight-100"
          >
            <Icon icon={Mail} size="lg" className="text-highlight" />
            <Text className="text-sm">
              Recuperar <br />
              via email
            </Text>
          </TabsTrigger>
          <TabsTrigger
            value="sms"
            className="flex flex-col justify-center w-[115px] h-[115px] rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all border border-neutral-300 data-[state=active]:border-highlight-100"
          >
            <Icon icon={MessageSquare} size="lg" className="text-highlight" />
            <Text className="text-sm">
              Recuperar <br />
              via SMS
            </Text>
          </TabsTrigger>
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
