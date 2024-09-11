import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "../config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
  <h1 className={title()}>Join&nbsp;</h1>
  <h1 className={`${title()} text-[#2cbff0]`}>RecycLink&nbsp;</h1>
  <br />
  <h1 className={title()}></h1>
  <h2 className={subtitle({ class: "mt-4" })}>
  Empowering communities to recycle, donate, share, reuse, and reduce waste.
  </h2>
</div>
    </section>
  );
}
