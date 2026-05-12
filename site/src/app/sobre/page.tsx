import { EditorialSplit } from "@/components/sections/editorial-split";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsAppCta } from "@/components/sections/whatsapp-cta";
import { aboutContent } from "@/lib/site-content";

export default function SobrePage() {
  return (
    <main>
      <PageHero {...aboutContent.hero} />
      <EditorialSplit {...aboutContent.story} />
      <WhatsAppCta
        title="Se quiser conhecer melhor a proposta, podemos continuar no WhatsApp."
        body="Esse primeiro site ja organiza o essencial. O restante pode amadurecer em conversa."
      />
    </main>
  );
}
