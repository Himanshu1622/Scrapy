import { PieChart, LineChart, BarChart2, Activity } from 'lucide-react';
import styles from './FeatureSplit.module.css';

export default function FeatureSplitLeft() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.container}>
        
        <div className={styles.visualSide}>
          {/* Dashboard Mockup */}
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupSidebar}>
              <div className={styles.mockupLogo}></div>
              <div className={styles.mockupNavItem}></div>
              <div className={styles.mockupNavItem}></div>
              <div className={styles.mockupNavItem}></div>
            </div>
            <div className={styles.mockupMain}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupTitle}>Overview</div>
                <div className={styles.mockupUser}></div>
              </div>
              <div className={styles.mockupStats}>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Total Revenue</div>
                  <div className={styles.statValue}>$12,345</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Active Users</div>
                  <div className={styles.statValue}>1,234</div>
                </div>
              </div>
              <div className={styles.mockupChart}>
                <div className={styles.chartBar} style={{ height: '40%' }}></div>
                <div className={styles.chartBar} style={{ height: '70%' }}></div>
                <div className={styles.chartBar} style={{ height: '50%' }}></div>
                <div className={styles.chartBar} style={{ height: '90%', background: 'var(--accent-green)' }}></div>
                <div className={styles.chartBar} style={{ height: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentSide}>
          <h2 className={styles.title}>
            Bypass Google's<br />
            Rate<br />
            <span className="glow-text">Limits.</span>
          </h2>
          <p className={styles.description}>
            Stop worrying about IP bans. Scrapy handles proxy rotation and pagination automatically so you get every single result.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><PieChart size={16} color="var(--accent-orange)" /></div>
              <span>Proxy Pool</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><LineChart size={16} color="var(--accent-orange)" /></div>
              <span>Auto-Pagination</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Activity size={16} color="var(--accent-orange)" /></div>
              <span>Auto-Retries</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><BarChart2 size={16} color="var(--accent-orange)" /></div>
              <span>Geotargeting</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
