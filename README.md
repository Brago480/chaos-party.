# Chaos Party! — kendi sitende oynamak için

Bağımlılık yok: sadece Node.js (18+) yeterli. `server.js` hem oyunu (index.html) sunar hem de arkadaşların arasındaki canlı odayı yönetir.

## 1) Bilgisayarında dene
1. Bu klasörde: `node server.js`
2. Tarayıcıda `http://localhost:3000` aç. Aynı Wi‑Fi'deki arkadaşlar `http://SENIN-IP:3000` ile girer.

## 2) İnternette yayınla (arkadaşlar herhangi bir yerden girsin)
Render.com (ücretsiz katman) en kolayı:
1. Bu klasörü bir GitHub deposuna yükle.
2. Render → New → Web Service → depoyu seç.
3. Build Command boş, **Start Command: `node server.js`** → Create.
4. Çıkan `https://....onrender.com` adresini arkadaşlarına gönder. Oyun Kur → kodu paylaş → Oyuna Katıl.
(Ücretsiz katman bir süre kullanılmazsa uyur; ilk açılış ~30 sn sürebilir. Railway, Fly.io, Glitch de aynı şekilde çalışır.)

Not: Netlify / GitHub Pages gibi sadece dosya sunan yerler tek başına yetmez, çünkü canlı oda için sunucu gerekir.

## 3) Güncelleme nasıl yapılır
1. Claude'a ne istediğini söyle (yeni mini oyun, harita, ayar…).
2. Sana yeni `index.html` verilir. GitHub'daki `index.html` dosyasını onunla değiştir.
3. Render otomatik yeniden yayınlar. Arkadaşlar sayfayı yenileyince yeni sürümü görür (ayarlar → en altta sürüm numarası yazar).

## Yönetici paneli
Takma adı `BBRAGO` olan oyuncuda 🛠️ paneli açılır (ışınlanma, istediğin mini oyunu başlatma). Bu sadece isme bağlıdır, gizli şifre değil.
