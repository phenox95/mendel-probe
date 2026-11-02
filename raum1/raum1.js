/* AUTOMATISCH ERZEUGT aus _quelle/raum1.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Raum 1 „Das Vereinsbüro“ · Mission 1 (Stand 01.11.2026, nach Rätselsteckbrief vom 13.10.2026)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum1/raum1.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Texte mit dem Vermerk ENTWURF stehen nicht im Steckbrief und brauchen die Freigabe der Lehrkraft. */
TRESOR.room({
  base: '../',
  id: 'raum1',
  version: 'Testraum Mendel V4 · Raum 1 · 01.11.2026',
  title: 'Das Vereinsbüro',
  subtitle: 'Genetik · Der Brief der Käuferin',
  image: '../bilder/buero.jpg',
  imageAlt: 'Ein helles Vereinsbüro: links ein grüner Tisch mit einem Brief, in der Mitte ein roter Tisch mit einem aufgeschlagenen Zuchtbuch, an der Wand zwei Bilderrahmen, rechts eine Zimmerpflanze und ein gelber Sessel am Fenster.',
  size: [1024, 768],
  flashlight: false,
  unlockMode: 'auto',
  wall: true,
  audioLabel: 'Aufnahme anhören',

  caseText: function (T) {
    var t = 'Eine Käuferin zweifelt am Zuchtbuch eines Hundezuchtvereins. Ihr Welpe ist kurzhaarig, der Vater aber langhaarig und die Mutter kurzhaarig. Das könne nicht stimmen.\n\nIhr prüft als Gutachterinnen und Gutachter, ob sie recht hat.';
    if (T.isSolved('probe-brief')) t += '\n\nIhr habt den Brief gelesen und getrennt, was die Käuferin sieht und was sie daraus macht.';
    if (T.isSolved('probe-wuerfe-zahl')) t += '\n\nIhr habt das Zuchtbuch geprüft. In den Würfen der Käuferin gibt es keinen langhaarigen Welpen. Zwei der Welpen wurden verpaart, und im neuen Wurf ist ein langhaariger Welpe.';
    return t;
  },

  end: { title: 'Teil 1 des Gutachtens fertig', text: 'Sichert jetzt euren Spielstand. Teil 2 schreibt ihr im Unterricht: Hypothesen und ein Münzmodell. Danach geht es im zweiten Raum weiter.' },

  missions: [
    { id: 'mendel-1', title: 'Mission 1 · Der Brief der Käuferin', unlock: '7794dcd432e29cbf025f430a0ddb233334c81dd3306b226d24b8878637f573c2',
      intro: { from: 'kemal', text: 'Im Zuchtverein ist ein Brief angekommen. Eine Käuferin ist sicher, dass das Zuchtbuch falsch ist, und will, dass der Vorstand es ändert. Der Vorstand weiß nicht, wer recht hat. Deshalb bittet er euch um ein Gutachten, eine begründete Einschätzung.\n\nDas Gutachten hat vier Teile. Teil 1 und Teil 3 schreibt ihr im Spiel, Teil 2 und Teil 4 im Unterricht. Teil 1 lautet: Was behauptet die Käuferin, und was steht wirklich im Zuchtbuch?\n\nBrief, Zuchtbuch und Fotos sind nachempfunden und für dieses Spiel vereinfacht. Die Bilder sind KI-Bilder.' },
      requires: ['probe-brief', 'probe-wuerfe-tabelle', 'probe-wuerfe-zahl'],
      doneTitle: 'Mission 1 abgeschlossen',
      doneText: 'Teil 1 des Gutachtens ist fertig. Das Zuchtbuch ist nicht widerlegt: Alle Welpen sind kurzhaarig, und keiner hat Fell mittlerer Länge. Ob die Anlage für langes Fell verloren ist, sagen die Zahlen aber nicht.\n\nZwei dieser Welpen wurden später verpaart, und im neuen Wurf ist einer mit langem Fell. In der nächsten Unterrichtsstunde schreibt ihr Teil 2: Welche Erklärungen sind denkbar?' }
  ],

  hotspots: [
    { id: 'fotowand', label: 'Fotos der Elterntiere an der Wand', rect: [32.5, 15.5, 35, 25], action: { type: 'docs', title: 'Die Elterntiere', docs: ['foto-vater', 'foto-mutter'] } },
    { id: 'brief', label: 'Pult mit dem Brief der Käuferin', rect: [0.5, 55, 26, 35], states: [
      { if: { unlocked: 'mendel-1', notSolved: 'probe-brief' }, action: { type: 'puzzle', puzzle: 'probe-brief' } },
      { if: { solved: 'probe-brief' }, action: { type: 'docs', title: 'Auftrag, Brief, Foto und Begriffe', docs: ['auftrag', 'm1', 'foto-welpe', 'begriffe'] } },
      { action: { type: 'text', text: 'Auf dem Pult liegt ein Brief. Startet zuerst die Mission.' } } ] },
    { id: 'zuchtbuch', label: 'Zuchtbuch, Teil 1', rect: [36, 71, 31.5, 27], states: [
      { if: { solved: 'probe-brief', notSolved: 'probe-wuerfe-tabelle' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-tabelle' } },
      { if: { solved: 'probe-wuerfe-tabelle', notSolved: 'probe-wuerfe-zahl' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-zahl' } },
      { if: { solved: 'probe-wuerfe-zahl' }, action: { type: 'docs', title: 'Zuchtbuch, Teil 1', docs: ['m2', 'foto-wurf', 'foto-wurf-neu'] } },
      { action: { type: 'text', text: 'Das Zuchtbuch ist zugeklappt. Lest zuerst den Brief der Käuferin und prüft ihn.' } } ] }
  ],

  docs: {
    'auftrag': { title: 'Auftrag des Vorstands', tag: 'Auftrag (nachempfunden)', style: 'paper',
      text: 'Der Vorstand bittet euch um ein Gutachten zum Zuchtbuch.\n\nTeil 1 (im Spiel): Was behauptet die Käuferin, und was steht im Zuchtbuch?\nTeil 2 (im Unterricht): Welche Erklärungen sind denkbar?\nTeil 3 (im Spiel): Welche Erklärung halten die Daten aus, und was sagt der Züchter dazu?\nTeil 4 (im Unterricht): Eure Empfehlung an den Vorstand.\n\nDanach entscheidet der Vorstand, ob das Zuchtbuch geändert wird.' },
    'm1': { title: 'M1 · Der Brief der Käuferin', tag: 'Brief (nachempfunden)', style: 'paper',
      text: 'Von: Frau Sommer\nAn: den Vorstand des Zuchtvereins\n\nSehr geehrter Vorstand,\n\n„Mein Welpe hat kurzes Fell.“\n„Sein Vater ist langhaarig, seine Mutter kurzhaarig.“\n„Ihr Zuchtbuch muss falsch sein.“\n„Das lange Fell des Vaters ist einfach nicht weitergegeben worden.“\n„Die Welpen hätten Fell mittlerer Länge haben müssen.“\n\nFrau Sommer' },
    'foto-welpe': { title: 'Foto: der Welpe der Käuferin', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/welpe-kurz.jpg',
      text: 'Der Welpe der Käuferin, etwa 10 Wochen alt.' },
    'foto-vater': { title: 'Foto: der Vater', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/dackel-lang.jpg',
      text: 'Der Vater des Welpen. Er stammt aus einer reinen Zuchtlinie: zehn Generationen nur langhaarig. Ein Gentest bestätigt: In ihm steckt nur die Anlage für langes Fell.' },
    'foto-mutter': { title: 'Foto: die Mutter', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/dackel-kurz.jpg',
      text: 'Die Mutter des Welpen. Sie stammt aus einer reinen Zuchtlinie: zehn Generationen nur kurzhaarig. Ein Gentest bestätigt: In ihr steckt nur die Anlage für kurzes Fell.' },
    'begriffe': { title: 'Begriffskarte', tag: 'Karte', style: 'paper',
      text: 'Behauptung: Jemand sagt etwas, ohne einen Beleg zu nennen.\nBeobachtung: Man kann es sehen oder messen.\nDeutung: Eine Erklärung dafür, warum etwas so ist.\nHypothese: Eine Vermutung, die man prüfen kann.\nAnlage: Das, was in einem Tier festlegt, welches Fell es bekommt. Den Fachbegriff dafür lernt ihr später.\nGutachten: Eine begründete Einschätzung für den Vorstand.' },
    'm2': { title: 'M2 · Zuchtbuch, Teil 1 (Würfe der Käuferin)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern stammen aus reinen Zuchtlinien: je zehn Generationen nur kurzhaarig bzw. nur langhaarig. Ein Gentest bestätigt: In den Elterntieren steckt nur die Anlage für ihre eigene Fellart.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [['1', '8', '0'], ['2', '9', '0'], ['3', '7', '0']] } },
    'foto-wurf-neu': { title: 'Foto: der neue Wurf', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-gemischt.jpg',
      text: 'Zwei Welpen aus Teil 1 wurden verpaart. Im neuen Wurf ist ein Welpe mit langem Fell. Die Elterntiere haben beide kurzes Fell.' },
    'foto-wurf': { title: 'Foto: ein Wurf aus Teil 1', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-kurz.jpg',
      text: 'Ein Wurf aus dem Zuchtbuch, Teil 1. Alle Welpen haben kurzes Fell.' }
  },

  puzzles: {
    'probe-brief': { id: 'probe-brief', type: 'markup', title: 'Der Brief',
      ref: { title: 'Zum Nachschlagen: Begriffskarte', docs: ['begriffe'] },
      prompt: 'Lest den Brief M1. Markiert jeden Satz als Beobachtung, Deutung oder Behauptung.',
      passes: [{ id: 'beo', label: 'Beobachtung', tag: 'Beobachtung', hint: 'Das kann man sehen oder messen.' },
               { id: 'deu', label: 'Deutung', tag: 'Deutung', hint: 'Die Käuferin erklärt, warum etwas so ist.' },
               { id: 'beh', label: 'Behauptung', tag: 'Behauptung', hint: 'Sie sagt etwas, ohne einen Beleg zu nennen.' }],
      segments: [
        { id: 'b3', nr: 'S1', text: '„Ihr Zuchtbuch muss falsch sein.“' },
        { id: 'b1', nr: 'S2', text: '„Mein Welpe hat kurzes Fell.“' },
        { id: 'b5', nr: 'S3', text: '„Die Welpen hätten Fell mittlerer Länge haben müssen.“' },
        { id: 'b2', nr: 'S4', text: '„Sein Vater ist langhaarig, seine Mutter kurzhaarig.“' },
        { id: 'b4', nr: 'S5', text: '„Das lange Fell des Vaters ist einfach nicht weitergegeben worden.“' }
      ],
      hash: 'afd7965242c46231c1b3c9dd2b1e5544466f12e648d924b1796566d94d0ea72c',
      passHash: { beo: '177dd9332cacec81f80da6c0649326a5fa66f3eb93543cef6ebc4f19ceb7a115', deu: '1dc00e1ec77196ba0635df61d68a55dad6b183e94721f607732ccd53f68f29be', beh: 'd7405b36d2d2754aa03f812f5d6466312a7393d16ef5591929826d7d75a95cac' },
      wrongText: 'Nichts passiert. Mindestens eine Markierung passt nicht.',
      hints: ['Trennt, was man sehen kann, von dem, was jemand daraus schließt.',
              'Eine Behauptung nennt keinen Beleg.',
              'Fragt bei jedem Satz: Könnte das so im Zuchtbuch stehen?'],
      rescue: 'QmVvYmFjaHR1bmdlbiBzaW5kIFMyIHVuZCBTNCwgZGVubiBzaWUgYmVzY2hyZWliZW4sIHdhcyBtYW4gc2llaHQuIERldXR1bmdlbiBzaW5kIFMzIHVuZCBTNSwgZGVubiBzaWUgZXJrbMOkcmVuLCB3YXJ1bSBldHdhcyBzbyBpc3QuIFMxIGlzdCBlaW5lIEJlaGF1cHR1bmc6IEVzIHN0ZWh0IG51ciBkYSwgd2FzIGRpZSBLw6R1ZmVyaW4gZ2xhdWJ0LCBvaG5lIGVpbmVuIEJlbGVnLg==',
      rescueTask: 'Schreibt die fünf Sätze ins Logbuch und setzt vor jeden B, D oder H.',
      onSolve: { message: { from: 'kemal', text: 'Prüfen wir, was wirklich im Buch steht.' },
        wall: [{ id: 'w-brief', title: 'Der Brief, getypt', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'Beobachtung: Der Welpe hat kurzes Fell. Vater langhaarig, Mutter kurzhaarig.\nDeutung: Das lange Fell wurde nicht weitergegeben. Es hätte Fell mittlerer Länge geben müssen.\nBehauptung: Das Zuchtbuch muss falsch sein.' }], then: 'probe-wuerfe-tabelle' } },

    'probe-wuerfe-tabelle': { id: 'probe-wuerfe-tabelle', type: 'tabelle', title: 'Was sagen die Würfe wirklich?',
      ref: { title: 'Zum Nachschlagen: M2 · Zuchtbuch, Teil 1', docs: ['m2'] },
      prompt: 'Beurteilt jede Aussage an jedem Beleg. Tippt eine Zelle so oft an, bis die passende Angabe dort steht.\n\nAussage A: Alle Welpen haben Fell mittlerer Länge.\nAussage B: Bei allen Welpen setzt sich das Fell eines Elternteils durch.\nAussage C: Die Anlage für langes Fell ist in den Welpen verloren gegangen.\n\nBeleg E1: Alle 24 Welpen sind kurzhaarig.\nBeleg E2: Die Würfe haben 7 bis 9 Welpen.\nBeleg E3: Über die Nachkommen der Welpen steht noch nichts im Zuchtbuch.',
      cornerLabel: 'Aussage',
      rows: [{ id: 'a', label: 'A · Fell mittlerer Länge' }, { id: 'b', label: 'B · Fell eines Elternteils setzt sich durch' }, { id: 'c', label: 'C · Anlage ist verloren' }],
      cols: [{ id: 'e1', label: 'E1 · Alle 24 kurzhaarig' }, { id: 'e2', label: 'E2 · Würfe mit 7 bis 9 Welpen' }, { id: 'e3', label: 'E3 · Über Nachkommen steht nichts' }],
      states: [{ id: 's', label: 'stützt' }, { id: 'w', label: 'widerspricht' }, { id: 'n', label: 'nicht entscheidbar' }, { id: 'k', label: 'kein Bezug' }],
      colHash: { e1: '58f0ea5fcb7e345220f6a4d4bfa15aa19155def6c4547849fc9673bec5921710', e2: 'c34773cb720ce7d0b01d18cf23b1df22bc76811c3d4fb4921fecdd250ba58c7e', e3: '1f712e29bb5d8e799a33ff9fe147e972cb9b960248dc4c7db30c6955f4b693cb' },
      hash: 'ddc1998c473c79ea044d704abcec6d478258c32212435ff079583deadaa94c32',
      wrongText: 'Nichts passiert. Fragt bei jeder Zelle: Was folgt aus dem Beleg für die Aussage, was folgt nicht?',
      hints: ['Schaut nur auf das, was im Zuchtbuch steht.',
              'Fragt bei jeder Zelle: Was folgt aus dem Beleg für die Aussage, was folgt nicht?',
              'Zu Aussage C sagen die Zahlen nichts.'],
      rescue: 'QmVsZWcgRTEgKGFsbGUgMjQga3VyemhhYXJpZyk6IEEgd2lkZXJzcHJpY2h0LCBCIHN0w7x0enQsIEMgbmljaHQgZW50c2NoZWlkYmFyLiBCZWxlZyBFMiAoV3VyZmdyw7bDn2UpOiBrZWluIEJlenVnIHp1IEEsIEIgdW5kIEMuIEJlbGVnIEUzICjDvGJlciBkaWUgTmFjaGtvbW1lbiBzdGVodCBuaWNodHMpOiBrZWluIEJlenVnIHp1IEEgdW5kIEIsIGJlaSBDIG5pY2h0IGVudHNjaGVpZGJhci4=',
      rescueTask: 'Erklärt in eigenen Worten, warum E1 zu Aussage C nicht entscheidbar ist.',
      onSolve: { merksatz: 'Ein Beleg kann zu einer Aussage passen, ihr widersprechen oder nichts darüber sagen.',
        text: 'Die Tabelle hängt an der Sammelwand.',
        wall: [{ id: 'w-tabelle', title: 'Die Würfe und die drei Aussagen', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'A (mittlere Länge): widerspricht dem Beleg „alle 24 kurzhaarig“.\nB (ein Elternteil setzt sich durch): wird gestützt.\nC (Anlage verloren): nicht entscheidbar. Dazu sagen die Zahlen nichts.' }], then: 'probe-wuerfe-zahl' } },

    'probe-wuerfe-zahl': { id: 'probe-wuerfe-zahl', type: 'code', inputmode: 'numeric', title: 'Wie viele langhaarig?',
      ref: { title: 'Zum Nachschlagen: M2 · Zuchtbuch, Teil 1', docs: ['m2'] },
      prompt: 'Bestimmt aus M2, wie viele der 24 Welpen langes Fell haben, und tragt die Zahl ein.',
      placeholder: 'Zahl', button: 'Prüfen',
      hash: ['df71ce003180134461c721067e82d9570034abbc20cc76094facd4f1b264967b', '43684825781784a6c2aa2703d02dd78f42c4d475b15116f19265544115568f14'],
      wrongText: 'Nichts passiert. Zählt in der Spalte „Welpen langhaarig“.',
      hints: ['Lest die Spalte „Welpen langhaarig“.', 'Zählt die Zahlen in dieser Spalte zusammen.', 'Es sind drei Würfe mit jeweils derselben Zahl.'],
      rescue: 'SW4gYWxsZW4gZHJlaSBXw7xyZmVuIHN0ZWh0IGluIGRlciBTcGFsdGUg4oCeV2VscGVuIGxhbmdoYWFyaWfigJwgZGllIFphaGwgMC4gVm9uIDI0IFdlbHBlbiBoYXQgYWxzbyBrZWluZXIgbGFuZ2VzIEZlbGwu',
      rescueTask: 'Schreibt die Rechnung ins Logbuch.',
      onSolve: { message: { from: 'kemal', text: 'Teil 1 steht. Zwei dieser Welpen wurden später verpaart, und im neuen Wurf ist ein Welpe mit langem Fell. Wo kommt das lange Fell her? Darüber schreibt ihr im Unterricht Teil 2.' },
        wall: [{ id: 'w-zahl', title: 'Welpen mit langem Fell in Teil 1', tag: 'Ergebnis', kind: 'ergebnis', text: '0 von 24 Welpen sind langhaarig.\n\nIm neuen Wurf der verpaarten Welpen ist ein langhaariger Welpe.' }] } },
  }
});
