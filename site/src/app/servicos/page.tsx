import { HighlightGrid } from "@/components/sections/highlight-grid";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsAppCta } from "@/components/sections/whatsapp-cta";
import { servicesContent } from "@/lib/site-content";

export default function ServicosPage() {
  return (
    <main>
      <PageHero {...servicesContent.hero} />
      <HighlightGrid {...servicesContent.benefits} />
      <WhatsAppCta {...servicesContent.closing} />
    </main>
  );
}
