import { Card, Title } from "@mantine/core";

export default async function Home() {
  return (
    <div className="flex mt-10 mx-20 align-middle flex-col">
      <Title size="30px" className="mb-4">
        Choose a language
      </Title>

      <Card withBorder={true}>Test</Card>
    </div>
  );
}
