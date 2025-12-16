import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PageItem {
  name: string;
  status?: string;
}

interface PagePlaceholderProps {
  eyebrow?: string;
  title: string;
  description: string;
  items?: PageItem[];
  cta?: {
    label: string;
    href: string;
  };
}

const badgeClassName = (status?: string): string => {
  if (!status) {
    return "";
  }

  if (status.includes("上线") || status.includes("Ready")) {
    return "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20";
  }

  if (status.includes("规划") || status.includes("Roadmap")) {
    return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20";
  }

  return "";
};

const PagePlaceholder = ({ eyebrow, title, description, items, cta }: PagePlaceholderProps): JSX.Element => (
  <section className="bg-background text-foreground px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-5xl">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      )}
      <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        {description}
      </p>

      {items && items.length > 0 && (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  {item.status && (
                    <Badge variant="secondary" className={badgeClassName(item.status)}>
                      {item.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {cta && (
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      )}
    </div>
  </section>
);

export default PagePlaceholder;
