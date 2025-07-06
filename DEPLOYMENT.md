# Instrukcje Deployu na GitHub Pages

## Automatyczny Deploy (Zalecany)

Po wypchnięciu zmian do gałęzi `main` lub `master`, GitHub Actions automatycznie zbuduje i wdroży stronę na GitHub Pages.

### Kroki:
1. Wypchnij zmiany do repozytorium:
   ```bash
   git add .
   git commit -m "Dodano konfigurację GitHub Pages"
   git push origin master
   ```

2. Sprawdź status deployu:
   - Przejdź do zakładki "Actions" w repozytorium GitHub
   - Sprawdź, czy workflow "Deploy to GitHub Pages" się uruchomił

3. Włącz GitHub Pages:
   - Przejdź do Settings → Pages
   - W sekcji "Source" wybierz "Deploy from a branch"
   - Wybierz gałąź `gh-pages` i folder `/ (root)`
   - Kliknij "Save"

## Ręczny Deploy

Jeśli chcesz ręcznie wdrożyć stronę:

```bash
npm run deploy
```

## Dostęp do strony

Po udanym deployu strona będzie dostępna pod adresem:
`https://kasciupkow.github.io/portfolio/`

## Rozwiązywanie problemów

### Routing nie działa
- Upewnij się, że pliki `404.html` i skrypty w `index.html` są obecne
- Sprawdź, czy `base: '/portfolio/'` jest ustawione w `vite.config.js`

### Obrazy się nie ładują
- Sprawdź, czy ścieżki do obrazów są względne
- Upewnij się, że obrazy są w katalogu `public/`

### Build nie przechodzi
- Sprawdź logi w zakładce "Actions"
- Uruchom lokalnie `npm run build` aby zobaczyć błędy 