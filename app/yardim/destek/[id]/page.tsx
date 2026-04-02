import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Talep ${id} – Randevu.co Destek`,
    description: `Randevu.co destek talebiniz ${id} için durum takibi.`,
  };
}

function getMockTalep(id: string) {
  return {
    id,
    konu: 'Randevu iptali iadem henüz gelmedi',
    durum: 'incelemede' as 'acik' | 'incelemede' | 'cozuldu',
    kategori: 'İade Talebi',
    kullaniciTipi: 'Müşteri',
    oncelik: 'Normal',
    olusturulma: new Date(Date.now() - 1000 * 60 * 60 * 3).toLocaleString('tr-TR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    guncelleme: new Date(Date.now() - 1000 * 60 * 30).toLocaleString('tr-TR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    aciklama:
      '48 saat öncesinden randevumu iptal ettim ancak henüz iademi almadım. Sipariş referansı: #ANT-9921.',
  };
}

const durumEtiketi: Record<string, string> = {
  acik:        'Açık',
  incelemede:  'İncelemede',
  cozuldu:     'Çözüldü',
};

const durumSinifi: Record<string, string> = {
  acik:        styles.statusOpen,
  incelemede:  styles.statusInReview,
  cozuldu:     styles.statusResolved,
};

const durumNokta: Record<string, string> = {
  acik:        '🔵',
  incelemede:  '🟡',
  cozuldu:     '🟢',
};

export default async function DestekTalepDetayPage({ params }: Props) {
  const { id } = await params;
  const talep = getMockTalep(id);

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Anasayfa</Link> /{' '}
          <Link href="/yardim">Yardım Merkezi</Link> /{' '}
          Talep {id}
        </p>

        <h1 className={styles.formTitle}>Destek Talebi</h1>
        <p className={styles.formSub}>Destek talebinizin durumunu ve ayrıntılarını takip edin.</p>

        <div className={styles.ticketCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>
                {talep.konu}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Talep No: <strong>{id}</strong></p>
            </div>
            <span className={`${styles.statusBadge} ${durumSinifi[talep.durum]}`}>
              {durumNokta[talep.durum]} {durumEtiketi[talep.durum]}
            </span>
          </div>

          <div className={styles.ticketMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Kategori</span>
              <span className={styles.metaValue}>{talep.kategori}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Kullanıcı Türü</span>
              <span className={styles.metaValue}>{talep.kullaniciTipi}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Öncelik</span>
              <span className={styles.metaValue}>{talep.oncelik}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Oluşturulma</span>
              <span className={styles.metaValue}>{talep.olusturulma}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Son Güncelleme</span>
              <span className={styles.metaValue}>{talep.guncelleme}</span>
            </div>
          </div>
        </div>

        <div className={styles.ticketCard}>
          <h2 className={styles.sectionTitleLeft}>Mesajınız</h2>
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.75' }}>{talep.aciklama}</p>
        </div>

        <div className={styles.ticketCard}>
          <h2 className={styles.sectionTitleLeft}>Zaman Tüneli</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
              <span>🎫</span>
              <span>Talep oluşturuldu — <em style={{ color: 'var(--muted)' }}>{talep.olusturulma}</em></span>
            </li>
            {talep.durum !== 'acik' && (
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
                <span>👀</span>
                <span>Destek ekibi inceliyor — <em style={{ color: 'var(--muted)' }}>{talep.guncelleme}</em></span>
              </li>
            )}
            {talep.durum === 'cozuldu' && (
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#555' }}>
                <span>✅</span>
                <span>Talep çözüldü — <em style={{ color: 'var(--muted)' }}>{talep.guncelleme}</em></span>
              </li>
            )}
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '16px' }}>
          <Link href="/yardim" className={styles.backLink}>← Yardım Merkezine Dön</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
