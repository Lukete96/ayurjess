import { EditorialSplit } from "@/components/sections/editorial-split";
import { HighlightGrid } from "@/components/sections/highlight-grid";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsAppCta } from "@/components/sections/whatsapp-cta";
import { homeContent } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main>
      <PageHero {...homeContent.hero} />
      <EditorialSplit {...homeContent.intro} />
      <HighlightGrid {...homeContent.pillars} />
      <WhatsAppCta {...homeContent.closing} />
    </main>
  );
}
