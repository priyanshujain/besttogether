import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description:
    'During these times, we want to focus not only on managing our stress and anxiety,\
     but also on finding our resilience and hope through joy, laughter, and community.\
      No one should suffer alone during this time, that why you invited\
       to come join our support group.',
  title: 'BestTogether- A community driven online support group',
  url: 'besttogether.in',
  author: '',
  keywords: [
    'Best Together',
    'free online support group',
    'anxiety',
    'stress',
    'covid',
    'loneliness',
    'support group',
    'Best Together',
  ],
  img: '',
  twitterId: '',
  facebookId: '',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
