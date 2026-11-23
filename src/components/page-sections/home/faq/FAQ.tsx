import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faqData";
import { trackEvent } from "@/common/analytics";
import { whatsappURL } from "@/common/phone";
import styles from "./FAQ.module.css";

const renderText = (text: string) =>
  text.split(/(\*\*.*?\*\*|\[[^\]]+\]\(whatsapp\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(whatsapp\)$/);
    if (link) {
      return (
        <a
          key={i}
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "faq" })}
        >
          {link[1]}
        </a>
      );
    }
    return part;
  });

const FAQ = () => {
  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <h2 className={styles.sectionLabel}>Conocé más</h2>
        <h3 className={styles.sectionTitle}>Preguntas frecuentes</h3>

        <Accordion.Root
          type="single"
          collapsible
          className={styles.accordionRoot}
        >
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className={styles.accordionItem}
            >
              <Accordion.Header className={styles.accordionHeader}>
                <Accordion.Trigger className={styles.accordionTrigger}>
                  <span>{faq.question}</span>
                  <ChevronDown className={styles.chevron} aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles.accordionContent}>
                <p className={styles.accordionBody}>{renderText(faq.answer)}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQ;
