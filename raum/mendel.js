/* AUTOMATISCH ERZEUGT aus _quelle/mendel.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Testraum Mendel (Stand 01.11.2026, nach Rätselsteckbrief vom 13.10.2026 und Gesamtplan)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum/mendel.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Texte mit dem Vermerk ENTWURF stehen nicht im Steckbrief und brauchen die Freigabe der Lehrkraft. */
TRESOR.room({
  base: '../',
  id: 'mendel',
  version: 'Testraum Mendel V1 · 01.11.2026',
  title: 'Der Hundezuchtverein',
  subtitle: 'Genetik · Zuchtbuch prüfen',
  image: '../bilder/vereinsheim.svg',
  imageAlt: 'Ein Vereinsheim: links ein Pult mit einem Brief, in der Mitte ein Tisch mit aufgeschlagenem Zuchtbuch und einem zweiten Buch, rechts das Pult des Züchters. Darüber Fotos von Hunden an einer Wand.',
  size: [1024, 681],
  flashlight: false,
  unlockMode: 'auto',
  wall: true,
  audioLabel: 'Aufnahme anhören',

  caseText: function (T) {
    var t = 'Eine Käuferin zweifelt am Zuchtbuch eines Hundezuchtvereins. Ihr Welpe ist kurzhaarig, der Vater aber langhaarig und die Mutter kurzhaarig. Das könne nicht stimmen.\n\nIhr prüft als Gutachterinnen und Gutachter, ob sie recht hat.';
    if (T.isSolved('probe-brief')) t += '\n\nIhr habt den Brief gelesen und getrennt, was die Käuferin sieht und was sie daraus macht.';
    if (T.isSolved('probe-wuerfe-zahl')) t += '\n\nIhr habt das Zuchtbuch geprüft. In den Würfen der Käuferin gibt es keinen langhaarigen Welpen. Zwei der Welpen wurden verpaart, und im neuen Wurf ist ein langhaariger Welpe.';
    if (T.isSolved('probe-hyp-beleg')) t += '\n\nIhr habt eine Hypothese gestrichen. Die Anlage für langes Fell ist nicht verloren gegangen.';
    return t;
  },

  end: { title: 'Gutachten abgeschlossen', text: 'Sichert jetzt euren Spielstand. In der Präsenzstunde gebt ihr euren Regeln Namen.' },

  missions: [
    { id: 'mendel-1', title: 'Mission 1 · Der Brief der Käuferin', unlock: '7794dcd432e29cbf025f430a0ddb233334c81dd3306b226d24b8878637f573c2',
      intro: { from: 'kemal', text: 'Im Verein ist ein Brief angekommen. Eine Käuferin ist sicher, dass ihr Zuchtbuch falsch ist. Lest ihren Brief und prüft dann, was im Zuchtbuch wirklich steht.\n\nBrief und Zuchtbuch sind nachempfunden und für dieses Spiel vereinfacht.' },
      requires: ['probe-brief', 'probe-wuerfe-tabelle', 'probe-wuerfe-zahl'],
      doneTitle: 'Mission 1 abgeschlossen',
      doneText: 'Ihr habt den Brief geprüft und das Zuchtbuch ausgewertet. In den Würfen der Käuferin gibt es keinen langhaarigen Welpen. Zwei dieser Welpen wurden verpaart, und im neuen Wurf ist einer mit langem Fell.\n\nIn der Präsenzstunde formuliert ihr dazu eigene Hypothesen.' },
    { id: 'mendel-2', title: 'Mission 2 · Der Einspruch des Züchters', unlock: 'a288344dcdd1700dc9fa508bb526e866679d864a8867162a1df62a45c387b304',
      intro: { from: 'kemal', text: 'Eure Hypothesen liegen auf Papier. Jetzt entscheidet das Zuchtbuch, Teil 2: sechs Würfe aus Verpaarungen der Welpen untereinander. Danach meldet sich ein Züchter.' },
      requires: ['probe-hyp-zahl', 'probe-hyp-beleg', 'probe-einspruch-markup', 'probe-einspruch-skizze'],
      doneTitle: 'Mission 2 abgeschlossen · Gutachten fertig',
      doneText: 'Die Anlage für langes Fell war die ganze Zeit da. Man hat sie bei den Eltern und den Welpen nur nicht gesehen.\n\nSchreibt die Skizze mit den Pfeilen und eure Erklärung in euer Logbuch.' }
  ],

  /* Bereiche in Prozent des Raumbilds (passend zu bilder/vereinsheim.svg). */
  hotspots: [
    { id: 'brief', label: 'Pult mit dem Brief der Käuferin', rect: [3, 40, 25, 42], states: [
      { if: { unlocked: 'mendel-1', notSolved: 'probe-brief' }, action: { type: 'puzzle', puzzle: 'probe-brief' } },
      { if: { solved: 'probe-brief' }, action: { type: 'docs', title: 'Brief und Begriffe', docs: ['m1', 'begriffe'] } },
      { action: { type: 'text', text: 'Auf dem Pult liegt ein Brief. Startet zuerst die Mission.' } } ] },
    { id: 'zuchtbuch', label: 'Zuchtbuch, Teil 1', rect: [36, 44, 27, 24], states: [
      { if: { solved: 'probe-brief', notSolved: 'probe-wuerfe-tabelle' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-tabelle' } },
      { if: { solved: 'probe-wuerfe-tabelle', notSolved: 'probe-wuerfe-zahl' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-zahl' } },
      { if: { solved: 'probe-wuerfe-zahl' }, action: { type: 'doc', doc: 'm2' } },
      { action: { type: 'text', text: 'Das Zuchtbuch ist zugeklappt. Lest zuerst den Brief der Käuferin und prüft ihn.' } } ] },
    { id: 'zuchtbuch2', label: 'Zuchtbuch, Teil 2', rect: [36, 70, 27, 18], states: [
      { if: { unlocked: 'mendel-2', notSolved: 'probe-hyp-zahl' }, action: { type: 'puzzle', puzzle: 'probe-hyp-zahl' } },
      { if: { unlocked: 'mendel-2', solved: 'probe-hyp-zahl', notSolved: 'probe-hyp-beleg' }, action: { type: 'puzzle', puzzle: 'probe-hyp-beleg' } },
      { if: { unlocked: 'mendel-2' }, action: { type: 'doc', doc: 'm3' } },
      { action: { type: 'text', text: 'Ein zweites Zuchtbuch liegt auf dem Tisch. Es gehört zur nächsten Mission.' } } ] },
    { id: 'zuechter', label: 'Pult des Züchters', rect: [71, 38, 26, 44], states: [
      { if: { unlocked: 'mendel-2', solved: 'probe-hyp-beleg', notSolved: 'probe-einspruch-markup' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-markup' } },
      { if: { unlocked: 'mendel-2', solved: 'probe-einspruch-markup', notSolved: 'probe-einspruch-skizze' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-skizze' } },
      { action: { type: 'text', text: 'Hier liegt der Einspruch eines Züchters. Erst muss das Zuchtbuch, Teil 2, geprüft werden.' } } ] }
  ],

  docs: {
    'm1': { title: 'M1 · Der Brief der Käuferin', tag: 'Brief (nachempfunden)', style: 'paper',
      text: 'Sehr geehrter Zuchtverein,\n\n„Mein Welpe hat kurzes Fell.“\n„Sein Vater ist langhaarig, seine Mutter kurzhaarig.“\n„Ihr Zuchtbuch muss falsch sein.“\n„Das lange Fell des Vaters ist einfach nicht weitergegeben worden.“\n„Die Welpen hätten Fell mittlerer Länge haben müssen.“' },
    'begriffe': { title: 'Begriffskarte', tag: 'Karte', style: 'paper',
      text: 'Behauptung: Jemand sagt etwas, ohne einen Beleg zu nennen.\nBeobachtung: Man kann es sehen oder messen.\nDeutung: Eine Erklärung dafür, warum etwas so ist.\nHypothese: Eine Vermutung, die man prüfen kann.' },
    'm2': { title: 'M2 · Zuchtbuch, Teil 1 (Würfe der Käuferin)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern stammen aus reinen Zuchtlinien: je zehn Generationen nur kurzhaarig bzw. nur langhaarig.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [['1', '8', '0'], ['2', '9', '0'], ['3', '7', '0']] } },
    'm3': { title: 'M3 · Zuchtbuch, Teil 2 (Würfe aus Verpaarungen der Welpen untereinander)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern dieser sechs Würfe sind Welpen aus Teil 1.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'kurzhaarig', 'langhaarig'], rows: [['1', '5', '1'], ['2', '6', '1'], ['3', '3', '2'], ['4', '6', '2'], ['5', '5', '1'], ['6', '6', '2']] } }
  },

  puzzles: {
    /* ---------------- Mission 1 ---------------- */
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
      onSolve: { message: { from: 'kemal', text: 'Zwei dieser Welpen wurden verpaart. Im neuen Wurf ist ein langhaariger Welpe. Wo kommt der her?' },
        wall: [{ id: 'w-zahl', title: 'Welpen mit langem Fell in Teil 1', tag: 'Ergebnis', kind: 'ergebnis', text: '0 von 24 Welpen sind langhaarig.\n\nIm neuen Wurf der verpaarten Welpen ist ein langhaariger Welpe.' }] } },

    /* ---------------- Mission 2 ---------------- */
    'probe-hyp-zahl': { id: 'probe-hyp-zahl', type: 'code', inputmode: 'numeric', title: 'Das Verhältnis in den Würfen',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Berechnet aus allen sechs Würfen von M3, wie viele kurzhaarige Welpen auf einen langhaarigen kommen (kurz geteilt durch lang, auf eine ganze Zahl gerundet), und tragt die Zahl ein.\n\nDie Eltern der sechs Würfe sind Welpen aus Teil 1.',
      placeholder: 'Zahl', button: 'Prüfen',
      hash: ['038a73c1c362444ae7aeb35cb42bde18b45636b77fd084f1effbc59dbb516270', '8e16d88b40876b2b6292f2edf8b006e069ac50c9909d13713f4c3aea7fb81591', '65f0aa96cc714995560df38a6730f1221f787e1991e69634e45e5cf904046eef', 'f0ba5b7fd8d177f297052898e07fd9f6eff0700d3a1700f94115ac934d83f077'],
      wrongText: 'Nichts passiert. Gefragt ist kurz geteilt durch lang, für alle sechs Würfe zusammen.',
      hints: ['Ein Wurf allein ist zu wenig. Zählt alles zusammen.',
              'Teilt die größere Summe durch die kleinere.',
              '31 kurzhaarige und 9 langhaarige Welpen. Das Ergebnis liegt knapp über 3.'],
      rescue: 'WnVzYW1tZW4gc2luZCBlcyAzMSBrdXJ6aGFhcmlnZSB1bmQgOSBsYW5naGFhcmlnZSBXZWxwZW4uIDMxIGdldGVpbHQgZHVyY2ggOSBzaW5kIGV0d2EgMyw0LCBnZXJ1bmRldCAzLg==',
      rescueTask: 'Rechnet im Logbuch und schreibt das Ergebnis auf.',
      onSolve: { text: 'Die Zahl hängt an der Sammelwand.',
        wall: [{ id: 'w-hyp-zahl', title: 'Verhältnis in Teil 2', tag: 'Ergebnis', kind: 'ergebnis', text: '31 kurzhaarige und 9 langhaarige Welpen. Auf einen langhaarigen kommen etwa 3 kurzhaarige.' }], then: 'probe-hyp-beleg' } },

    'probe-hyp-beleg': { id: 'probe-hyp-beleg', type: 'pick', count: 1, title: 'Welche Hypothese fällt?',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Wählt den Beleg, der die Hypothese H1 „Die Anlage ist verloren“ widerlegt.',
      cards: [
        { id: 'b1', tag: 'B1', label: 'In den Würfen gibt es 9 langhaarige Welpen.' },
        { id: 'b2', tag: 'B2', label: 'Die meisten Welpen sind kurzhaarig.' },
        { id: 'b3', tag: 'B3', label: 'Die Würfe sind unterschiedlich groß.' },
        { id: 'b4', tag: 'B4', label: 'Alle Eltern waren kurzhaarig.' }
      ],
      traps: [
        { id: 'b2', text: 'Nichts passiert. Dass die meisten kurzhaarig sind, hatten schon die ersten Würfe gezeigt.' },
        { id: 'b4', text: 'Nichts passiert. Das sagt nichts darüber, was in den Eltern steckt.' }
      ],
      hash: '2d018b69a95af2762206d3ad47704c228df31ada26653abafb3804bd427c0670',
      wrongText: 'Nichts passiert. Sucht den Beleg, der etwas Neues zeigt, nicht das Bekannte.',
      hints: ['Welche Hypothese kann ein langhaariger Welpe nicht stehen lassen?',
              'Sucht den Beleg, der etwas Neues zeigt, nicht das Bekannte.',
              'Es geht um die langhaarigen Welpen.'],
      rescue: 'QjEgd2lkZXJsZWd0IEgxLiBXZW5uIGRpZSBBbmxhZ2UgZsO8ciBsYW5nZXMgRmVsbCB2ZXJsb3JlbiB3w6RyZSwga8O2bm50ZSBlcyBrZWluZSBsYW5naGFhcmlnZW4gV2VscGVuIGdlYmVuLiBFcyBnaWJ0IGFiZXIgOS4=',
      rescueTask: 'Schreibt auf, welche Hypothese ihr streicht und warum.',
      onSolve: { message: { from: 'kemal', text: 'Dann war die Anlage die ganze Zeit da. Aber ein Züchter sieht das anders.' },
        wall: [{ id: 'w-h1', title: 'Hypothese H1 gestrichen', tag: 'Ergebnis', kind: 'ergebnis', text: 'H1 „Die Anlage ist verloren“ ist widerlegt: In den Würfen gibt es 9 langhaarige Welpen.' }], then: 'probe-einspruch-markup' } },

    'probe-einspruch-markup': { id: 'probe-einspruch-markup', type: 'markup', title: 'Der Einspruch',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Markiert im Einspruch den Satz, der den Daten in M3 widerspricht.',
      passes: [{ id: 'wid', label: 'Widerspruch', tag: 'Widerspruch', hint: 'Dieser Satz passt nicht zu den Zahlen in M3.' }],
      segments: [
        { id: 'z1', nr: 'S1', text: '„Ich züchte seit 30 Jahren.“' },
        { id: 'z2', nr: 'S2', text: '„Kurzes Fell ist stärker.“' },
        { id: 'z3', nr: 'S3', text: '„Deshalb verschwinden langhaarige Welpen aus der Zucht.“' },
        { id: 'z4', nr: 'S4', text: '„Das Zuchtbuch muss falsch sein.“' }
      ],
      hash: '2770a933c78b22e305f7c146f17457d06fddf494b3232a81648261cfef35ac8b',
      wrongText: 'Nichts passiert. Welcher Satz passt nicht zu den 9 langhaarigen Welpen?',
      hints: ['Welcher Satz passt nicht zu den 9 langhaarigen Welpen?',
              'Es geht um das, was mit den langhaarigen Welpen passiert.',
              'Er beginnt mit „Deshalb“.'],
      rescue: 'UzMgd2lkZXJzcHJpY2h0IGRlbiBEYXRlbjogSW4gTTMgZ2lidCBlcyA5IGxhbmdoYWFyaWdlIFdlbHBlbiwgc2llIHZlcnNjaHdpbmRlbiBhbHNvIG5pY2h0LiBTNCBpc3QgZWluZSBCZWhhdXB0dW5nLCBkaWUgbmljaHQgYmVsZWd0IHdpcmQuIFMyIHNhZ3QgZXR3YXMsIHdvenUgTTMgbmljaHRzIHNhZ3Qu',
      rescueTask: 'Schreibt den Satz ab und nennt die Zahl aus M3, die ihm widerspricht.',
      onSolve: { text: 'Der Satz ist markiert. Jetzt zeigt ihr, wo die Anlage geblieben ist.', then: 'probe-einspruch-skizze' } },

    'probe-einspruch-skizze': { id: 'probe-einspruch-skizze', type: 'net', title: 'Wo ist die Anlage geblieben?',
      prompt: 'Erklärt mit Pfeilen, wo die Anlage für langes Fell geblieben ist. Ein Pfeil zeigt, was woraus folgt.',
      items: [
        { id: 'a', tag: 'A', label: 'kurzhaarige Eltern' },
        { id: 'b', tag: 'B', label: 'Anlage für langes Fell' },
        { id: 'c', tag: 'C', label: 'neuer Wurf' },
        { id: 'd', tag: 'D', label: 'zwei Anlagen für langes Fell' },
        { id: 'e', tag: 'E', label: 'langhaariger Welpe' },
        { id: 'f', tag: 'F', label: 'Anlage verloren' },
        { id: 'g', tag: 'G', label: 'Fell mischt sich' }
      ],
      slots: [[14, 18], [50, 18], [84, 18], [14, 82], [41, 82], [68, 82], [90, 50]], height: 400,
      minEdges: 4, edgeCount: 4,
      edgeHash: ['e256015ce9b391bc117a3a00c98f8d8b33e680a212dba52c3881a1fe31326ad3', '121b2c816ca7560566c0d9fdfde41917792f0a580984b527861ec8bfff68c737', 'cca76d0069d6aba55f9a982ccb4b9222c739b67ebfed3672d9409772e73e08f4', '3cd5881fb922bcc8b569a458cea2bf7c179c5afe7be4ac31b55918f1ec641ee8'],
      hash: '773fc0af0919806a2c38a2595c5d17f800bc453ea92ee18cd316bedf82f99ad2',
      wrongText: 'Nichts passiert. Wo war die Anlage in der ersten Generation?',
      hints: ['Wo war die Anlage in der ersten Generation?',
              'Die Anlage war da, aber man hat sie nicht gesehen.',
              'Elternpaar, Anlage, neuer Wurf, zwei Anlagen, langhaariger Welpe: in dieser Reihenfolge.'],
      rescue: 'RGllIGt1cnpoYWFyaWdlbiBFbHRlcm4gdHJhZ2VuIGRpZSBBbmxhZ2UgZsO8ciBsYW5nZXMgRmVsbCwgbWFuIHNpZWh0IHNpZSBuaWNodC4gSW0gbmV1ZW4gV3VyZiBrw7ZubmVuIHp3ZWkgQW5sYWdlbiBmw7xyIGxhbmdlcyBGZWxsIHp1c2FtbWVudHJlZmZlbi4gRGFubiBpc3QgZGVyIFdlbHBlIGxhbmdoYWFyaWcuIERpZSBLYXJ0ZW4g4oCeQW5sYWdlIHZlcmxvcmVu4oCcIHVuZCDigJ5GZWxsIG1pc2NodCBzaWNo4oCcIGdlaMO2cmVuIG5pY2h0IGRhenUu',
      rescueTask: 'Zeichnet die Skizze ins Logbuch und schreibt unter jeden Pfeil, was er bedeutet.',
      onSolve: { message: { from: 'kemal', text: 'Das hat vor rund 160 Jahren schon jemand bei Erbsen herausgefunden. Er war Mönch und hieß Gregor Mendel.\n\nIn der nächsten Stunde gebt ihr euren Regeln Namen.' },
        wall: [{ id: 'w-skizze', title: 'Wo die Anlage geblieben ist', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'kurzhaarige Eltern → Anlage für langes Fell → neuer Wurf → zwei Anlagen für langes Fell → langhaariger Welpe' }] } }
  }
});
