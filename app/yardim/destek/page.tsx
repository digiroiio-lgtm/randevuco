'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';
import Link from 'next/link';

function talephNumarasi() {
  return 'RND-' + Math.floor(10000 + Math.random() * 89999);
}

export default function DestekTalepPage() {
  const router = useRouter();
  const [gonderiliyor, setGonderiliyor] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGonderiliyor(true);
    const id = talephNumarasi();
    await new Promise((r) => setTimeout(r, 800));
    router.push(`/yardim/destek/basarili?id=${id}`);
  }

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Anasayfa</Link> / <Link href="/yardim">Yardım Merkezi</Link> / Destek Talebi
        </p>

        <h1 className={styles.formTitle}>Destek Talebi Oluştur</h1>
        <p className={styles.formSub}>
          Formu doldurun, destek ekibimiz 24 saat içinde size yanıt versin.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Ad + E-posta */}
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="ad">
                Ad Soyad <span className={styles.required}>*</span>
              </label>
              <input id="ad" name="ad" type="text" className={styles.input} placeholder="Adınız ve soyadınız" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="eposta">
                E-posta Adresi <span className={styles.required}>*</span>
              </label>
              <input id="eposta" name="eposta" type="email" className={styles.input} placeholder="ornek@eposta.com" required />
            </div>
          </div>

          {/* Kullanıcı Tipi + Kategori */}
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="kullaniciTipi">
                Hesap Türüm <span className={styles.required}>*</span>
              </label>
              <select id="kullaniciTipi" name="kullaniciTipi" className={styles.select} required defaultValue="">
                <option value="" disabled>Seçiniz…</option>
                <option value="musteri">Müşteri</option>
                <option value="isletme">İşletme Sahibi</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="kategori">
                Konu Kategorisi <span className={styles.required}>*</span>
              </label>
              <select id="kategori" name="kategori" className={styles.select} required defaultValue="">
                <option value="" disabled>Seçiniz…</option>
                <option value="randevu">Randevu sorunu</option>
                <option value="odeme">Ödeme sorunu</option>
                <option value="iade">İade talebi</option>
                <option value="hesap">Hesap problemi</option>
                <option value="teknik">Teknik problem</option>
                <option value="diger">Diğer</option>
              </select>
            </div>
          </div>

          {/* Öncelik */}
          <div className={styles.field} style={{ maxWidth: '260px' }}>
            <label className={styles.label} htmlFor="oncelik">Öncelik Seviyesi</label>
            <select id="oncelik" name="oncelik" className={styles.select} defaultValue="normal">
              <option value="dusuk">Düşük</option>
              <option value="normal">Normal</option>
              <option value="acil">Acil</option>
            </select>
          </div>

          {/* Konu */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="konu">
              Konu <span className={styles.required}>*</span>
            </label>
            <input
              id="konu"
              name="konu"
              type="text"
              className={styles.input}
              placeholder="Sorununuzun kısa özeti"
              required
            />
          </div>

          {/* Açıklama */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="aciklama">
              Açıklama <span className={styles.required}>*</span>
            </label>
            <textarea
              id="aciklama"
              name="aciklama"
              className={styles.textarea}
              placeholder="Sorununuzu mümkün olduğunca ayrıntılı şekilde açıklayın…"
              required
            />
          </div>

          {/* Dosya Yükleme */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="dosya">Ek Dosya (İsteğe Bağlı)</label>
            <input id="dosya" name="dosya" type="file" className={styles.input} accept="image/*,.pdf" />
            <p className={styles.fileHint}>Varsa ekran görüntüsü yükleyin. Maks. 10 MB. Kabul edilen: JPG, PNG, PDF.</p>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={gonderiliyor}>
            {gonderiliyor ? 'Gönderiliyor…' : 'Talep Gönder'}
          </button>
        </form>

        <LegalFooter />
      </div>
    </div>
  );
}
