# Chaos Party! — proje notları (sürüm 2026-10-24.2)

## Bu pakette ne var
- `index.html`: oyunun tamamı (tek dosya, kapak resmi gömülü). Hem Claude içinde hem kendi sunucunda çalışır.
- `server.js` + `package.json`: bağımlılıksız Node sunucusu (oyunu sunar + canlı oda). `node server.js`
- `README.md`: yayınlama adımları (GitHub + Render).

## Yayın durumu
- GitHub deposu: Brago480/chaos-party
- Render'da yayında olan sürüm ESKİ (2026-10-23.1). Bu paketteki yeni sürüm henüz siteye YÜKLENMEDİ.
- Yüklemek için: GitHub'da `index.html` → Add file → Upload files → yeni `index.html` → Commit. Render kendisi yeniden yayınlar.
- Claude içindeki test sürümü: https://claude.ai/artifact/HhoEw9Pf1W8iGyejeAYzoy (aynı kod)

## Yapılanlar
- Oda kodu ile oyun kur / katıl, 8 kişiye kadar, harita seçimi (🏔️ Kış Vadisi, 🏝️ Plato)
- 2B ve 3B görünüm, karakter takibi kamerası, zar animasyonu, adım adım yürüme, kare aralığı açık
- Haritada tek büyük sandık (40 🔑, 3 kez açan kazanır), sandığa giden parıltı yolu
- Kare türleri: altın, tuzak, ❓ iki kapı, 🔑 anahtar, 🥷 hırsız, 🎁 hediye, ❗ olay (Kış: Ters Akım, Plato: Meteor)
- Eşyalar: 🔫 pompalı, 💣 bomba, 🌀 teleport, 🚀 roket, 📦 kutu, 🌵 kaktüs zırhı
- Karakterler: Klasik, Robot, Beyefendi, Uzaylı, Soytarı; renk, ten, şapka, aksesuar; marketten oyun parasıyla alınır
- Mini oyunlar (10): Tıklama, Refleks, Hedef Avı, 🛗 Yürüyen Merdiven (ok tuşları), Hızlı Matematik, Tam Zamanında, Numaralı Boyama (yeşil/kırmızı ışık), Duvar Dikme, 🔫 Silahlanma Yarışı (3B arena, artı şekilli harita, ortadan silah al, fareyle ateş, isabet +50, alt skor tablosu; canlı senkron), Parkur
- Sonuç ekranı (podyum), tam ekran sıralama paneli, müzik (4 parça), ayarlar (Esc), yönetici paneli (ad: BBRAGO), güncelleme notları kutusu

## Yapılacaklar (sırayla)
1. Silahlanma yarışı ve yürüyen merdiven: gerçek 2+ kişiyle test edip ince ayar (hız, isabet toleransı, harita ölçüsü). Merdivende diğer oyuncuların canlı görünmesi.
2. İp atlama mini oyunu (herkes aynı ekranda, Boşluk, 3 can)
3. Parkurda diğer oyuncuların canlı görünmesi; tüm mini oyunlarda canlı ilerleme
4. Karakter kalitesini artırma, ikon kalitesini artırma (vektör ikonlar)
5. Eşya kullanırken karakterin baktığı yöne bakması (hedefe dönme yapıldı, ince ayar kaldı)
6. Gizli şifreli yönetici paneli (şu an sadece isme bağlı)
7. Ters Akım aktifken sandık yolunun ters yönü hesaba katması

## Yeni sohbette devam etmek için
Bu zip'i yükle ve şunu yaz: "Bu Chaos Party! projesine devam edeceğiz, NOTLAR.md'yi oku."
