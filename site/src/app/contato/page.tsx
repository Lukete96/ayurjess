import { EditorialSplit } from "@/components/sections/editorial-split";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsAppCta } from "@/components/sections/whatsapp-cta";
import { contactPageContent } from "@/lib/site-content";

export default function ContatoPage() {
  return (
    <main>
      <PageHero {...contactPageContent.hero} />
      <EditorialSplit {...contactPageContent.intro} reverse />
      <WhatsAppCta
        title="Quando fizer sentido, e so chamar."
        body="O canal principal continua sendo o WhatsApp, com um contato direto e sem friccao."
      />
    </main>
  );
}
