import React from "react";
import {
  Html,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Head,
  Tailwind,
} from "@react-email/components";

type contactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function contactFormEmail({
  message,
  senderEmail,
}: contactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message From Portfolio Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You Received The Following Message From The Contact Form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The Sender's Email is: {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
