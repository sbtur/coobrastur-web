'use client';

import Image from 'next/image';

import { Mail, MessageSquare } from 'lucide-react';

import { Icon } from '@coobrastur/ui/components/data-display/icon';
import { Title } from '@coobrastur/ui/components/data-display/title';
import { Button } from '@coobrastur/ui/components/data-entry/button';

import RecoveryEmail from './components/recovery-email';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ui/components/data-display/tabs';
import { Text } from '@ui/components/data-display/text';

export default function RecoveryPassword() {
  return (
    <>
      <Title variant="primary">Redefinir sua senha</Title>
      <Text className="pb-10">
        Escolha a forma mais conveniente para redefinir sua senha.
      </Text>
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
          <RecoveryEmail />
        </TabsContent>
        <TabsContent value="sms">Recovery Form SMS</TabsContent>
      </Tabs>
    </>
  );
}
