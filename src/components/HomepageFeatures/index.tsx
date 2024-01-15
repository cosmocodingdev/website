import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  embedCode: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'My Latest Video',
    embedCode: 'P8accXNcwjs?si=d_4fX9uJouuDV5Ub',
  },
  {
    title: 'Popular now',
    embedCode: '7DKv5H5Frt0?si=MlUv-0GtGHakWHbC',
  },
  {
    title: "Other creator's content",
    embedCode: 'UMeKxBcNBE0?si=ELvXqkCfgYB2l4xj',
  },
];

const iFrameStyle = {
  width: '100%',
  aspectRatio: 'calc(16/9)',
  borderRadius: '8px'
};

function Feature({title, embedCode}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <iframe src={"https://www.youtube-nocookie.com/embed/" + embedCode}
                title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={iFrameStyle}>
                </iframe>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
