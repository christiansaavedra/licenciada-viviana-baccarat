import { motion } from "framer-motion";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  const phoneNumber = "5491144444444"; // Replace with actual number
  const message =
    "Hola, me gustaría solicitar una consulta con la Lic. Viviana";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91m3.19 13.91c-.25.71-1.21 1.29-2 1.39c-.54.07-.99.09-2.89-.61c-2.37-.88-3.88-3.07-4-3.22c-.11-.15-.93-1.17-.93-2.23c0-1.06.54-1.58.74-1.81c.19-.23.42-.29.56-.29c.14 0 .28 0 .4.01c.12.01.29-.03.45.32c.16.35.56 1.21.61 1.3c.05.09.09.19.01.31c-.08.12-.09.19-.17.29c-.08.09-.18.21-.25.28c-.09.08-.17.14-.25.23c-.08.09-.07.17-.04.26c.04.09.21 1.05.84 2.08c.61 1 2.09 2.13 2.39 2.33c.3.2.49.16.68.09c.19-.06 1.21-.5 1.38-.98c.17-.48.17-.89.12-.98c-.05-.09-.19-.14-.39-.23c-.2-.09-1.21-.6-1.4-.67c-.19-.07-.33-.1-.47.1c-.14.19-.55.67-.68.81c-.13.14-.26.16-.48.05c-.22-.11-.93-.34-1.77-1.1c-.65-.57-1.09-1.28-1.21-1.5c-.13-.22-.01-.34.09-.45c.1-.1.22-.25.33-.37c.11-.12.15-.22.22-.37c.07-.15.04-.28-.02-.39c-.06-.11-.56-1.34-.77-1.84c-.2-.51-.41-.44-.56-.45c-.15-.01-.32-.01-.49-.01c-.17 0-.44.06-.67.31c-.23.25-.89.87-.89 2.12c0 1.25.91 2.46 1.04 2.63c.13.17 1.83 2.78 4.46 3.91c2.63 1.13 2.63.75 3.1.71c.47-.04 1.52-.62 1.73-1.22c.21-.6.21-1.12.16-1.22c-.05-.1-.22-.16-.47-.26" />
      </svg>
      <motion.span
        className={styles.tooltip}
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        ¡Escribime por WhatsApp!
      </motion.span>

      {/* Pulsing ring effect */}
      <motion.div
        className={styles.pulseRing}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
