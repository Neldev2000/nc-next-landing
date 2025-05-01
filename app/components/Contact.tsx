import React from 'react';
import styles from './Contact.module.css';
// Adjust the import path as necessary for your i18n setup
import { getDictionary } from '@/app/i18n/utils/languageUtils'; 
import type { Lang } from '@/app/i18n/utils/types';

// Define the props for the Contact component
interface ContactProps {
  lang: Lang;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  // Prevent default form submission behavior
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted');
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>{dict.contact.title}</h2>
        <p className={styles.description}>{dict.contact.subtitle}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* First Name & Last Name Row */}
          <div className={styles.formRow}>
            <input 
              className={styles.input}
              type="text" 
              placeholder={dict.contact.form.firstName}
              aria-label={dict.contact.form.firstName}
            />
            <input 
              className={styles.input}
              type="text" 
              placeholder={dict.contact.form.lastName}
              aria-label={dict.contact.form.lastName}
            />
          </div>

          {/* Company Row - Apply specific class for styling */}
          <div className={`${styles.formRow} ${styles.companyRow}`}>
            <input 
              className={styles.input}
              type="text" 
              placeholder={dict.contact.form.company}
              aria-label={dict.contact.form.company}
            />
          </div>

          {/* Email & Phone Row - Apply specific class for styling */}
          <div className={`${styles.formRow} ${styles.emailPhone}`}>
            <input 
              className={styles.input}
              type="email" 
              placeholder={dict.contact.form.email}
              aria-label={dict.contact.form.email}
            />
            <input 
              className={styles.input}
              type="tel" 
              placeholder={dict.contact.form.phone}
              aria-label={dict.contact.form.phone}
            />
          </div>

          {/* Message Textarea */}
          <textarea 
            className={styles.textarea}
            placeholder={dict.contact.form.message}
            aria-label={dict.contact.form.message}
            rows={6} // JSX uses camelCase for attributes like rows
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            {dict.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
