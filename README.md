<p align="center"><img src="icons/icon.svg" width="96" alt=""></p>

# ImageDesigner – Bildtafel-Designer

Layout wählen → Bilder hineinziehen → Maßstab, Labels und Beschriftung → als PNG, TIFF, SVG, PDF oder für Word exportieren.

Eine einzelne HTML-Datei ohne Build-Schritt und ohne externe Bibliotheken. Alles läuft lokal im Browser; die Bilder verlassen den Rechner nicht. Das Gegenstück für Diagramme ist der Diagramm-Designer (PlotTransformer).

## Funktionen

- **Layout:** Vorlagen (einzeln, 2/3/4 nebeneinander oder untereinander, 2×2, 3×2, 1 groß + 2/3 klein …), freies Raster und **Smart**: ordnet die Bilder zeilenweise so an, dass sie nach ihren Seitenverhältnissen ohne Beschnitt die Breite füllen. Höhe automatisch oder fest, Abstand und Außenrand in mm.
- **Platzhalter:** in der Vorschau verschieben und skalieren (mit Einrasten an Kanten und Abständen; Alt = ohne Einrasten, Shift = Seitenverhältnis halten) oder per Zahlenfeld. Ergänzen, entfernen, duplizieren, Reihenfolge per Ziehen ändern.
- **Ausrichten & Verteilen:** Mehrfachauswahl mit Shift/Strg + Klick, gemeinsam verschieben; links/Mitte/rechts, oben/Mitte/unten, gleichmäßig verteilen, mit eingestelltem Abstand aneinanderreihen, gleiche Breite/Höhe/Größe.
- **Zeilen- und Spaltenüberschriften** (z. B. „vorher/nachher“, „Probe A/B“), Platz wird automatisch freigehalten; Zeilenüberschriften senkrecht oder waagerecht.
- **Diagramme einfügen:** SVG und PNG aus dem Diagramm-Designer per Datei, Drag & Drop oder Strg+V. Diagramme werden ganz gezeigt (Einpassen), mit weißem Grund und schwarzem Label; „Originalgröße“ setzt den Platzhalter auf die Größe des Diagramms, damit Schriftgrößen erhalten bleiben. Im SVG-/PDF-Export bleibt ein SVG-Diagramm Vektorgrafik. Transparente PNGs zeigen den Abbildungshintergrund.
- **Gleiche Vergrößerung:** alle kalibrierten Bilder im selben Maßstab (gleiche µm je cm), gleiche Maßstabsbalken, gemeinsamer Zoom.
- **Vorlagen & Stile:** eingebaute Vorlagen (helle/dunkle Bilder, Kästen, Zeitschrift 1-/2-spaltig, Präsentation), eigene Stile im Browser, ein gemeinsamer Stil-Ordner (Edge/Chrome, z. B. auf dem Netzlaufwerk) sowie Export/Import als JSON.
- **Bild und Maske:** Werkzeug „Platzhalter“ skaliert den Platzhalter samt Bild. Werkzeug „Bild“ verschiebt/skaliert nur das Bild (Eckgriffe oder Mausrad); der Platzhalter bleibt starr und schneidet alles außerhalb ab. „Füllen“, „Einpassen“, Drehen um 90°.
- **Dateien:** PNG, JPG, TIFF (eigener Decoder: unkomprimiert, LZW, Deflate, PackBits; 1/8/16/32 bit, Graustufen, RGB, Palette). Mehrere Dateien auf einmal ablegen füllt leere Platzhalter und ergänzt fehlende.
- **TIFF-Metadaten:** Pixelgröße aus FEI/Thermo-, Zeiss- und ImageJ-Dateien; Messdaten (Hochspannung, Detektor, WD …) anzeigen und als Textfeld einfügen; **Infobalken** (REM-Datenleiste) erkennen und ausblenden, dazu freier Zuschnitt.
- **Helligkeit, Kontrast, Gamma, Invertieren** je Bild, Auto-Kontrast, „auf alle übertragen“.
- **Maßstabsbalken:** Kalibrieren durch Nachzeichnen eines vorhandenen Maßstabs (oder Pixelgröße eingeben, auf alle Bilder übertragen). Länge automatisch (1-2-5-Werte) oder fest, passt sich beim Skalieren des Bildes an. Farbe, Dicke, Schrift, Beschriftung oben/unten, Endstriche, Kasten, Ecke; optional gleiche Länge in allen Bildern.
- **Bildlabels** a, b, c / A, B, C / (a) / a) / i, ii … mit Größe, Farbe, Fett/Kursiv, Kasten und Ecke; je Platzhalter überschreibbar.
- **Textfelder** in sechs Positionen (Ecken und Mitte oben/unten), mehrzeilig, links-/rechtsbündig oder zentriert. Elemente in derselben Ecke werden automatisch gestapelt.
- **Insets:** eigenes Bild oder vergrößerter Ausschnitt (im Bild aufziehen) mit Markierung und Verbindungslinien; Ecke per Ziehen wählen.
- **Annotationen:** Pfeil, Linie, Rechteck, Ellipse, Text – sie hängen am Bild und wandern beim Verschieben/Zoomen mit.
- **Rahmen** um die Platzhalter (Farbe, Breite, je Platzhalter an/aus), **Bildunterschrift** mit **fett**/*kursiv* und Blocksatz.
- **Export:** PNG, TIFF (LZW) und JPG mit dpi-Angabe (150–1200 dpi), SVG (Bilder eingebettet, Text als Vektor), PDF über Drucken, „Für Word kopieren“ in Originalgröße. Hinweis bei zu geringer Bildauflösung.
- **Rückgängig/Wiederholen** (Strg+Z / Strg+Y), automatisches Speichern im Browser (IndexedDB, inkl. Bilder), Projektdatei `.bildtafel.json` mit allen Bildern.

## Tastenkürzel

| Taste | Wirkung |
|---|---|
| V / B / M / A / I | Werkzeug Platzhalter / Bild / Maßstab / Annotation / Inset |
| Doppelklick | leerer Platzhalter: Bild öffnen · sonst zwischen Platzhalter und Bild wechseln |
| Pfeiltasten (Shift = ×10) | Platzhalter, Bild oder Annotation verschieben |
| Entf | gewählte Annotation, Inset oder Platzhalter löschen |
| Strg + Mausrad | Vorschau zoomen |

## Nutzung

`ImageDesigner.html` per Doppelklick in Edge oder Chrome öffnen. Für die Installation als App (inkl. „Öffnen mit“ für TIFF/PNG/JPG) muss die Seite über `https://` oder `http://localhost` geladen werden, wie beim Diagramm-Designer.
