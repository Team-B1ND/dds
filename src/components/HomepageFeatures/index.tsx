import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Jetpack Compose',
    image: '/img/ComposeLogo.png',
    description: (
      <>
        Android에서도 DDS와 함께하세요.
      </>
    ),
  },
  {
    title: 'SwiftUI',
    image: '/img/SwiftUILogo.png',
    description: (
      <>
        iOS에서도 DDS와 함께하세요.
      </>
    ),
  },
  {
    title: 'React',
    image: '/img/ReactLogo.png',
    description: (
      <>
        Web에서도 DDS와 함께하세요.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
