import styles from './FeatureSplit.module.css';

export default function FeatureSplitRight() {
  return (
    <section className={styles.splitSection}>
      <div className={`${styles.container} ${styles.containerReverse}`}>
        
        <div className={styles.contentSide}>
          <h2 className={styles.title}>
            Turn Google Maps<br />
            Into Structured<br />
            <span className="glow-text">Leads.</span>
          </h2>
          <p className={styles.description}>
            Build robust lead generation pipelines. We provide the tools to reliably extract local business data at scale without official API limits.
          </p>
          <button className="btn-primary" style={{ marginTop: '24px' }}>Watch Demo</button>
        </div>

        <div className={styles.visualSide}>
          {/* Dashboard Mockup 2 */}
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Data Pipeline</div>
            </div>
            <div className={styles.mockupCode}>
              <div className={styles.codeLine}>
                <span style={{ color: 'var(--accent-orange)' }}>const</span> <span style={{ color: '#fff' }}>leads</span> = <span style={{ color: 'var(--accent-orange)' }}>await</span> scrapy.<span style={{ color: 'var(--accent-green)' }}>extract</span>({'{'}
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '16px' }}>
                source: <span style={{ color: 'var(--text-secondary)' }}>'google_maps'</span>,
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '16px' }}>
                query: <span style={{ color: 'var(--text-secondary)' }}>'restaurants in New York'</span>,
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '16px' }}>
                limit: <span style={{ color: 'var(--accent-orange)' }}>500</span>
              </div>
              <div className={styles.codeLine}>{'}'});</div>
            </div>
            
            <div className={styles.mockupTable}>
              <div className={styles.tableRow} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <span>ID</span><span>Status</span><span>Date</span>
              </div>
              <div className={styles.tableRow}>
                <span>#123</span><span style={{ color: 'var(--accent-green)' }}>Success</span><span>Today</span>
              </div>
              <div className={styles.tableRow}>
                <span>#124</span><span style={{ color: 'var(--accent-orange)' }}>Pending</span><span>Yesterday</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
