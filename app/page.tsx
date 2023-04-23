import cn from 'classnames';
import styles from './page.module.scss';

import { fontLobster } from '@/src/Helpers/fontsHelper';
import { Base, PageLink } from '@/src/Constants/base';
import AppButton from '@/src/Components/AppButton';
import AppHeader from '@/src/Composite/AppHeader';
import AppImage from '@/src/Components/AppImage';
import AppLink from '@/src/Components/AppLink';
import AppLayout from '@/src/Layouts';

export default async function HomePage() {
  return (
    <AppLayout>
      <AppHeader />
      <main className={styles.main}>
        <span className={styles.welcomeOverlay} />
        <AppImage
          src="/ui/welcome-bg.jpg"
          alt="welcome"
          width={2400}
          height={1200}
          className={styles.welcomeBg}
          priority
        />
        <section className={styles.headineSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.wrapper}>
                  <h2 className={cn(styles.title, fontLobster.className)}>
                    <mark>Taste Shown Every Step</mark>
                  </h2>
                  <h4 className={styles.desc}>
                    {Base.Title} offers you an unforgettable dining experience
                    with delicious food, stylish atmosphere and unmatched
                    service.
                  </h4>
                  <div className={styles.btnLayer}>
                    <AppLink href={PageLink.Meals} className={styles.link}>
                      <AppButton color="white" className={styles.btn}>
                        Meals
                      </AppButton>
                    </AppLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
