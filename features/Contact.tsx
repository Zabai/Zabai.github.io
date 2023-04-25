import Field from '@/components/Field';
import Section from '@/components/Section';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation(undefined, { keyPrefix: 'contact' });
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Section id="contact" subtitle={t('subtitle')} title={t('title')}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const subject = subjectRef.current?.value ?? '';
          const message = messageRef.current?.value ?? '';

          const anchorElement = document.createElement('a');
          anchorElement.href = `mailto:zarmasherrera@gmail.com?subject=${subject}&body=${message}`;
          anchorElement.click();
          anchorElement.remove();
        }}
      >
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="box">
              <Field label={t('form.subject')}>
                <input
                  className="input"
                  name="subject"
                  placeholder={t('form.subjectPlaceholder')}
                  ref={subjectRef}
                  type="text"
                />
              </Field>

              <Field label={t('form.message')}>
                <textarea
                  className="textarea"
                  name="body"
                  placeholder={t('form.messagePlaceholder')}
                  ref={messageRef}
                ></textarea>
              </Field>

              <Field
                styles={{ container: 'is-grouped is-justify-content-center' }}
              >
                <button className="button is-link is-large" type="submit">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>{t('form.submit')}</span>
                </button>
              </Field>
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
}
