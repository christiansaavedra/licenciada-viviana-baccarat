import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faqData";
import styles from "./FAQ.module.css";

const renderText = (text: string) =>
  text
    .split(/(\*\*.*?\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );

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
