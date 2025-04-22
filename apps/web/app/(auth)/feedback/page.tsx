import { Metadata } from "next";

import { Heading } from "@coobrastur/ui/components/data-display/heading";
import { Text } from "@coobrastur/ui/components/data-display/text";
import { Title } from "@coobrastur/ui/components/data-display/title";

export const metadata: Metadata = {
    title: 'Feedback Sucesso',
    description: 'Feedback Sucesso',
  };



export default function FeedbackPage() {
  return (
    <div>
      <Heading>
        <Title>Feedback Sucesso</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Heading>

    </div>
  )
}