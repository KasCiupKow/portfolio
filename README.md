# Portfolio HR - Katarzyna Ciupek-Kownacka

Profesjonalne portfolio HR stworzone w React z Tailwind CSS. Strona prezentuje projekty, umiejętności i doświadczenie w obszarze zasobów ludzkich, komunikacji wewnętrznej i analizy danych HR.

## 🚀 Funkcje

- **Responsywny design** - Optymalizowany dla wszystkich urządzeń
- **Nowoczesny UI** - Elegancki design z animacjami i przejściami
- **Sekcje portfolio** - Hero, O mnie, Projekty HR, Wizualizacja danych, Kontakt
- **Formularz kontaktowy** - Funkcjonalny formularz z walidacją
- **Filtrowanie projektów** - Według kategorii (Komunikacja, Analiza danych, Onboarding)
- **Wizualizacja danych HR** - Wykresy i tabele z rzeczywistych projektów
- **Smooth scrolling** - Płynne przewijanie między sekcjami
- **SEO friendly** - Zoptymalizowane meta tagi i struktura

## 🛠️ Technologie

- **React 18** - Biblioteka UI
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool
- **React Icons** - Ikony
- **PostCSS** - Przetwarzanie CSS

## 📦 Instalacja

1. **Sklonuj repozytorium**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski**
   ```bash
   npm run dev
   ```

4. **Otwórz w przeglądarce**
   ```
   http://localhost:3000
   ```

## 🏗️ Struktura projektu

```
src/
├── components/
│   ├── Header.jsx          # Nawigacja i logo
│   ├── Hero.jsx           # Sekcja główna
│   ├── About.jsx          # O mnie i umiejętności
│   ├── Projects.jsx       # Galeria projektów
│   ├── Contact.jsx        # Formularz kontaktowy
│   └── Footer.jsx         # Stopka
├── App.jsx                # Główny komponent
├── main.jsx              # Punkt wejścia
└── index.css             # Style globalne
```

## 🎨 Dostosowywanie

### Kolory
Kolory można zmienić w pliku `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Główny kolor
    // ...
  },
  secondary: {
    500: '#64748b', // Kolor drugorzędny
    // ...
  }
}
```

### Treść
Wszystkie teksty znajdują się w odpowiednich komponentach. Główne sekcje do edycji:
- **Hero.jsx** - Imię, tytuł, opis
- **About.jsx** - O mnie, umiejętności, doświadczenie
- **Projects.jsx** - Projekty i ich opisy
- **Contact.jsx** - Dane kontaktowe

### Obrazy
Zastąp linki do obrazów w `Projects.jsx` własnymi obrazami:
```javascript
image: 'https://twoj-obrazek.jpg'
```

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🚀 Deployment

### Vercel (zalecane)
1. Połącz repozytorium z Vercel
2. Vercel automatycznie wykryje konfigurację Vite
3. Strona będzie dostępna pod adresem `https://twoj-projekt.vercel.app`

### Netlify
1. Zbuduj projekt: `npm run build`
2. Prześlij folder `dist` do Netlify
3. Strona będzie dostępna pod adresem `https://twoj-projekt.netlify.app`

## 📄 Licencja

Ten projekt jest dostępny na licencji MIT. Zobacz plik `LICENSE` dla szczegółów.

## 🤝 Współpraca

Zachęcam do zgłaszania błędów i propozycji ulepszeń poprzez Issues na GitHub.

## 📞 Kontakt

- **Email**: katarzyna.ciupek.kownacka@gmail.com

- **LinkedIn**: [linkedin.com/in/katarzyna-ciupek-kownacka](https://linkedin.com)

---

**Informacje**: Portfolio HR dla Katarzyny Ciupek-Kownackiej prezentujące rzeczywiste projekty z zakresu komunikacji wewnętrznej, analizy potrzeb rozwojowych i procesów onboardingowych. 