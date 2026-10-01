# bevindingen

## 1. hoeveel declaraties?

| | declaraties | regels |
| --- | --- | --- |
| `met-reset/css/style.css` | 32 | 66 |
| `met-normalize/css/style.css` | 32 | 60 |

Even lang, en dat verrast de meeste studenten. De verwachting is dat de normalize-versie veel
korter is, want "de browserstijlen blijven toch staan". Dat klopt voor de *opmaak* (vet, cursief,
bolletjes, blauwe links), maar niet voor de *marges*: de user agent stylesheet zet op elke kop,
paragraaf en lijst een marge boven én onder. Dit ontwerp gebruikt enkel marge onder, dus moet je
die bovenmarges stuk voor stuk met `margin-top: 0` wegwerken. Wat je bij de koppen en de lijst
uitspaart, geef je bij de marges weer uit.

## 2. enkel nodig in de reset-versie

| declaratie | wat de reset weggooit |
| --- | --- |
| `h1 { font-weight: bold; }` | de UA zet `h1` op `font-weight: bold`; `all: unset` maakt er `normal` van |
| `strong { font-weight: bold; }` | idem voor `strong` |
| `em { font-style: italic; }` | de UA zet `em` op `font-style: italic` |
| `a { text-decoration: underline; }` | de UA onderlijnt links; de reset haalt de onderlijning weg |
| `ul { list-style: disc; }` | de reset zet expliciet `list-style: none` op `ol, ul, menu, summary` |
| `body { color: #000; }` | `all: unset` zet `color` op `inherit`; strikt genomen erft `body` het zwart van `html` (dat buiten de reset valt), dus deze declaratie mag ook weg |

De kleur van de link (`rebeccapurple`) staat in beide versies, want in beide gevallen wijken we af
van de standaard: de reset maakt de link zwart, de normalize laat hem blauw.

## 3. enkel nodig in de normalize-versie

| declaratie | waarom |
| --- | --- |
| `h1 { margin-top: 0; }` | de UA zet `margin: 0.67em 0` op `h1`; de reset had die marge al weggegooid |
| `h2 { margin-top: 0; }` | idem, `margin: 0.83em 0` |
| `p { margin-top: 0; }` | idem, `margin: 1em 0` |
| `ul { margin-top: 0; }` | idem, `margin: 1em 0` |
| `h2 { font-weight: normal; }` | de UA zet `h2` op `bold`, en in dit ontwerp mag de ondertitel dat niet zijn |
| `button { line-height: 1.5; }` | modern-normalize zet zelf `line-height: 1.15` op formulierelementen; zonder deze regel is de knop een paar pixels lager dan in de reset-versie |

De `padding-left: 24px` op de `ul` staat in beide versies, maar om een andere reden: met de reset
is er geen inspringing meer en voeg je er een toe, met de normalize is de standaard `40px` en breng
je ze terug naar `24px`.

## 4. welke zou je kiezen?

Voor **dit** ontwerp maakt het weinig uit: de twee stylesheets zijn even lang. De reset-versie leest
wel wat eerlijker: elke declaratie staat er omdat het ontwerp dat vraagt. In de normalize-versie
staan zes declaraties die niets toevoegen aan het ontwerp, maar enkel iets wegnemen dat de browser
oplegt (`margin-top: 0`, `font-weight: normal`). Dat soort "ongedaan maken" wordt lastig zodra de
pagina groeit, want je moet voor elk nieuw element eerst uitzoeken wat de browser er al mee doet.

Voor een pagina met **enkel lange lappen tekst** draait de keuze om: daar wil je net wél dat koppen
groot en vet zijn, dat paragrafen vanzelf ruimte krijgen en dat lijsten bolletjes hebben. Met een
normalize ben je dan na een handvol regels klaar, met een reset moet je de hele typografie zelf
opbouwen voor je iets leesbaars hebt.

Vuistregel: hoe meer de pagina een **eigen design** is (kaarten, knoppen, navigatie), hoe meer de
reset loont. Hoe meer de pagina **gewone tekst** is, hoe meer de normalize loont.
