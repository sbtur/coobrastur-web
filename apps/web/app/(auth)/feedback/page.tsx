import { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@coobrastur/ui/components/data-display/heading";
import { Text } from "@coobrastur/ui/components/data-display/text";
import { Title } from "@coobrastur/ui/components/data-display/title";
import { Button } from "@coobrastur/ui/components/data-entry/button";

export const metadata: Metadata = {
    title: 'Feedback Sucesso',
    description: 'Feedback Sucesso',
  };



export default function FeedbackPage() {
  return (
    <div>
      <Heading className="px-0 pb-5">
        <Title>Feedback Sucesso</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Heading>


      <div className="flex justify-center">
        <Button className="w-full">
          <Link href="/login"> Acessar Minha Conta</Link>
        </Button>
      </div>

    </div>
  )
}