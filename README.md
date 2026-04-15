# 🎬 Film Arama Uygulaması

TMDB API kullanılarak geliştirilmiş React tabanlı film arama uygulaması.

🔗 **[Canlı Demo](https://goit-react-hw-05.vercel.app)** &nbsp;|&nbsp; 📁 **[Kaynak Kod](https://github.com/kullanici-adi/goit-react-hw-05)**

---

## Ekran Görüntüleri (Mockup)

### Ana Sayfa — Trend Filmler

```
┌─────────────────────────────────────────────────────────┐
│  🎬 FilmApp          [ Home ]  [ Movies ]               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Trending Today                                         │
│                                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │        │  │        │  │        │  │        │        │
│  │ poster │  │ poster │  │ poster │  │ poster │        │
│  │        │  │        │  │        │  │        │        │
│  │        │  │        │  │        │  │        │        │
│  ├────────┤  ├────────┤  ├────────┤  ├────────┤        │
│  │ Film 1 │  │ Film 2 │  │ Film 3 │  │ Film 4 │        │
│  └────────┘  └────────┘  └────────┘  └────────┘        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Film Arama Sayfası

```
┌─────────────────────────────────────────────────────────┐
│  🎬 FilmApp          [ Home ]  [ Movies ]               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Movie Search                                           │
│                                                         │
│  ┌──────────────────────────────────┐  ┌──────────┐    │
│  │  inception...                    │  │  Search  │    │
│  └──────────────────────────────────┘  └──────────┘    │
│                                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐                    │
│  │        │  │        │  │        │                    │
│  │ poster │  │ poster │  │ poster │                    │
│  │        │  │        │  │        │                    │
│  ├────────┤  ├────────┤  ├────────┤                    │
│  │Inception│ │Inc. 2  │  │Inc. 3  │                    │
│  └────────┘  └────────┘  └────────┘                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Film Detay Sayfası

```
┌─────────────────────────────────────────────────────────┐
│  🎬 FilmApp          [ Home ]  [ Movies ]               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ← Go back                                             │
│                                                         │
│  ┌──────────┐   Inception (2010)                        │
│  │          │   User Score: 87%                         │
│  │          │                                           │
│  │  poster  │   Overview                                │
│  │          │   A thief who steals corporate secrets    │
│  │          │   through dream-sharing technology...     │
│  │          │                                           │
│  └──────────┘   Genres                                  │
│                 Action, Adventure, Science Fiction       │
│                                                         │
│  Additional information                                 │
│  ┌────────┐  ┌─────────┐                               │
│  │  Cast  │  │ Reviews │                               │
│  └────────┘  └─────────┘                               │
│                                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐         │
│  │ 👤   │ │ 👤   │ │ 👤   │ │ 👤   │ │ 👤   │         │
│  │ foto │ │ foto │ │ foto │ │ foto │ │ foto │         │
│  │ Ad   │ │ Ad   │ │ Ad   │ │ Ad   │ │ Ad   │         │
│  │ rol  │ │ rol  │ │ rol  │ │ rol  │ │ rol  │         │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 404 Sayfası

```
┌─────────────────────────────────────────────────────────┐
│  🎬 FilmApp          [ Home ]  [ Movies ]               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                        404                              │
│                                                         │
│               Oops! Page not found.                     │
│                                                         │
│                  [ Go to Home ]                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Özellikler

- Günün trend filmleri ana sayfada listelenir
- Anahtar kelimeyle film arama (URL'de `?query=` parametresi korunur)
- Film detay sayfasında poster, puan, özet ve türler
- Oyuncu kadrosu ve kullanıcı incelemeleri (iç içe rotalar)
- "Go back" butonu — gelinen sayfaya geri döner
- `React.lazy` + `Suspense` ile kod bölünmesi
- CSS Modules ile bileşen bazlı stil yönetimi

---

## Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| React 19 | UI kütüphanesi |
| React Router v7 | Sayfa yönlendirme |
| Axios | HTTP istekleri |
| TMDB API | Film verisi |
| Vite | Build aracı |
| CSS Modules | Stil yönetimi |

---

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# .env dosyası oluştur ve TMDB tokenını ekle
echo "VITE_TMDB_TOKEN=senin_tokenin" > .env

# Geliştirme sunucusunu başlat
npm run dev
```

> TMDB API tokenı için [themoviedb.org](https://www.themoviedb.org) adresinde ücretsiz hesap oluşturup **Settings → API → API Read Access Token** bölümünden alabilirsin.

---

## Proje Yapısı

```
src/
├── components/
│   ├── App/             # Rota yapılandırması
│   ├── Navigation/      # Header navigasyon linkleri
│   ├── MovieList/       # Film kartları listesi
│   ├── MovieCast/       # Oyuncu kadrosu
│   └── MovieReviews/    # Kullanıcı incelemeleri
├── pages/
│   ├── HomePage/        # Trend filmler
│   ├── MoviesPage/      # Film arama
│   ├── MovieDetailsPage/# Film detayı + iç içe rotalar
│   └── NotFoundPage/    # 404
└── services/
    └── tmdb.js          # Tüm API çağrıları
```
