import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is Best Together?',
    content: () => (
      <>
        We are an online community driven support group to help people during COVID pandemic.
      </>
    ),
  },
  {
    title: 'What is a support group?',
    content: () => (
      <>
      In a support group, members provide each other with various types of help, usually nonprofessional and nonmaterial, for a particular shared, usually burdensome, characteristic. Members with the same issues can come together for sharing coping strategies, to feel more empowered and for a sense of community.
      </>
    ),
  },
  {
    title: 'How do I join BestTogether support group?',
    content: () => (
      <>
        You can register for a support group session at <a href="https://besttogether.in">besttogether.in</a>. BestTogeter support group sessions are completely online and free. We will send you an online meeting link two hours prior to session timing.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
