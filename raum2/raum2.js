/* AUTOMATISCH ERZEUGT aus _quelle/raum2.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Raum 2 „Die Zwinger-Stube“ · Mission 2 (Stand 01.11.2026, nach Rätselsteckbrief vom 13.10.2026)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum2/raum2.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Texte mit dem Vermerk ENTWURF stehen nicht im Steckbrief und brauchen die Freigabe der Lehrkraft. */
TRESOR.room({
  base: '../',
  id: 'raum2',
  version: 'Testraum Mendel V7 · Raum 2 · 01.11.2026',
  title: 'Die Zwinger-Stube',
  subtitle: 'Genetik · Der Einspruch des Züchters',
  image: '../bilder/stube.jpg',
  imageAlt: 'Ein nüchterner Raum: links ein hohes Bücherregal mit einem dunkelroten Buch, in der Mitte ein Fenster über einer Holzkiste mit drei schlafenden Welpen, rechts ein blaugrauer Tisch mit Stuhl und einem Blatt Papier.',
  size: [1024, 768],
  flashlight: false,
  unlockMode: 'auto',
  wall: true,
  audioLabel: 'Aufnahme anhören',

  caseText: function (T) {
    var t = 'Im neuen Wurf ist ein langhaariger Welpe, obwohl alle Elterntiere kurzhaarig aussehen. Das Zuchtbuch, Teil 2, soll klären, wo die Anlage für langes Fell war.\n\nEin Züchter widerspricht schon.';
    if (T.isSolved('probe-hyp-beleg')) t += '\n\nIhr habt eine Hypothese gestrichen. Die Anlage für langes Fell ist nicht verloren gegangen.';
    return t;
  },

  end: { title: 'Teil 3 des Gutachtens fertig', text: 'Sichert jetzt euren Spielstand. Im Unterricht schreibt ihr Teil 4, die Empfehlung an den Vorstand, und gebt euren Regeln Namen.' },

  missions: [
    { id: 'mendel-2', title: 'Mission 2 · Der Einspruch des Züchters', unlock: 'a288344dcdd1700dc9fa508bb526e866679d864a8867162a1df62a45c387b304',
      intro: { from: 'kemal', text: 'Willkommen zurück. Teil 2 des Gutachtens habt ihr im Unterricht geschrieben: Hypothesen und ein Münzmodell. Jetzt kommt Teil 3: Welche Erklärung halten die Daten aus?\n\nDas Zuchtbuch, Teil 2, enthält sechs Würfe. Die Eltern dieser Würfe sind Welpen aus Teil 1. Danach meldet sich ein Züchter und widerspricht.\n\nHabt ihr eure Hypothesen und die Klassensumme aus dem Münzwurf im Logbuch? Dann könnt ihr starten.' },
      requires: ['probe-hyp-zahl', 'probe-hyp-beleg', 'probe-einspruch-markup', 'probe-einspruch-skizze'],
      doneTitle: 'Mission 2 abgeschlossen · Gutachten fertig',
      doneText: 'Teil 3 des Gutachtens ist fertig. Die Daten halten nur eine Erklärung aus: Die Anlage für langes Fell war die ganze Zeit da. Man hat sie bei den kurzhaarigen Eltern nur nicht gesehen.\n\nSchreibt die Skizze mit den Pfeilen und eure Erklärung in euer Logbuch. Teil 4 folgt im Unterricht.' }
  ],

  hotspots: [
    { id: 'zuchtbuch2', label: 'Zuchtbuch, Teil 2, im Regal', rect: [4, 10, 26.5, 75.5], states: [
      { if: { unlocked: 'mendel-2', notSolved: 'probe-hyp-zahl' }, action: { type: 'puzzle', puzzle: 'probe-hyp-zahl' } },
      { if: { unlocked: 'mendel-2', solved: 'probe-hyp-zahl', notSolved: 'probe-hyp-beleg' }, action: { type: 'puzzle', puzzle: 'probe-hyp-beleg' } },
      { if: { unlocked: 'mendel-2' }, action: { type: 'doc', doc: 'm3' } },
      { action: { type: 'text', text: 'Im Regal steht ein zweites Zuchtbuch. Startet zuerst die Mission.' } } ] },
    { id: 'wurfkiste', label: 'Wurfkiste', rect: [31.5, 68, 37, 27], states: [
      { if: { unlocked: 'mendel-2' }, action: { type: 'docs', title: 'Wurfkiste, Auftrag, Begriffe und Modell', docs: ['foto-wurf-neu', 'auftrag', 'begriffe', 'm4'] } },
      { action: { type: 'text', text: 'Eine Wurfkiste mit Welpen. Startet zuerst die Mission.' } } ] },
    { id: 'zuechter', label: 'Pult des Züchters', rect: [70, 52.5, 30, 43], states: [
      { if: { unlocked: 'mendel-2', solved: 'probe-hyp-beleg', notSolved: 'probe-einspruch-markup' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-markup' } },
      { if: { unlocked: 'mendel-2', solved: 'probe-einspruch-markup', notSolved: 'probe-einspruch-skizze' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-skizze' } },
      { action: { type: 'text', text: 'Hier liegt der Einspruch eines Züchters. Erst muss das Zuchtbuch, Teil 2, geprüft werden.' } } ] }
  ],

  docs: {
    'auftrag': { title: 'Auftrag des Vorstands', tag: 'Auftrag (nachempfunden)', style: 'paper',
      text: 'Der Vorstand bittet euch um ein Gutachten zum Zuchtbuch.\n\nTeil 1 (im Spiel): Was behauptet die Käuferin, und was steht im Zuchtbuch?\nTeil 2 (im Unterricht): Welche Erklärungen sind denkbar?\nTeil 3 (im Spiel): Welche Erklärung halten die Daten aus, und was sagt der Züchter dazu?\nTeil 4 (im Unterricht): Eure Empfehlung an den Vorstand.\n\nDanach entscheidet der Vorstand, ob das Zuchtbuch geändert wird.' },
    'begriffe': { title: 'Begriffskarte', tag: 'Karte', style: 'paper',
      text: 'Behauptung: Jemand sagt etwas, ohne einen Beleg zu nennen.\nBeobachtung: Man kann es sehen oder messen.\nDeutung: Eine Erklärung dafür, warum etwas so ist.\nHypothese: Eine Vermutung, die man prüfen kann.\nAnlage: Das, was in einem Tier festlegt, welches Fell es bekommt. Den Fachbegriff dafür lernt ihr später.\nGutachten: Eine begründete Einschätzung für den Vorstand.' },
    'm4': { title: 'M4 · Modellkarte aus dem Unterricht', tag: 'Karte', style: 'paper',
      text: '1. Jeder Welpe bekommt von jedem Elterntier eine Anlage.\n2. Jedes Elterntier hat zwei Anlagen für das Fell und gibt davon eine weiter, zufällig.\n3. Anlage K = kurzes Fell, Anlage l = langes Fell.\n4. Langes Fell zeigt ein Welpe nur, wenn er zweimal l hat.' },
    'foto-wurf-neu': { title: 'Foto: der neue Wurf', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-gemischt.jpg',
      text: 'Zwei Welpen aus Teil 1 wurden verpaart. Im neuen Wurf ist ein Welpe mit langem Fell. Die Elterntiere haben beide kurzes Fell.' },
    'm3': { title: 'M3 · Zuchtbuch, Teil 2 (Würfe aus Verpaarungen der Welpen untereinander)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern dieser sechs Würfe sind Welpen aus Teil 1.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'kurzhaarig', 'langhaarig'], rows: [['1', '5', '1'], ['2', '6', '1'], ['3', '3', '2'], ['4', '6', '2'], ['5', '5', '1'], ['6', '6', '2']] } }
  },

  puzzles: {
    'probe-hyp-zahl': { id: 'probe-hyp-zahl', type: 'code', inputmode: 'numeric', title: 'Das Verhältnis in den Würfen',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Berechnet aus allen sechs Würfen von M3 das Verhältnis kurzhaarig zu langhaarig (kurz geteilt durch lang) und tragt es auf eine ganze Zahl gerundet ein.\n\nDie Eltern der sechs Würfe sind Welpen aus Teil 1.',
      placeholder: 'Zahl', button: 'Prüfen',
      hash: ['038a73c1c362444ae7aeb35cb42bde18b45636b77fd084f1effbc59dbb516270', '8e16d88b40876b2b6292f2edf8b006e069ac50c9909d13713f4c3aea7fb81591', '65f0aa96cc714995560df38a6730f1221f787e1991e69634e45e5cf904046eef', 'f0ba5b7fd8d177f297052898e07fd9f6eff0700d3a1700f94115ac934d83f077'],
      wrongText: 'Nichts passiert. Gefragt ist kurz geteilt durch lang, für alle sechs Würfe zusammen.',
      hints: ['Ein Wurf allein ist zu wenig. Zählt alles zusammen.',
              'Teilt die größere Summe durch die kleinere.',
              '31 kurzhaarige und 9 langhaarige Welpen. Das Ergebnis liegt knapp über 3.'],
      rescue: 'WnVzYW1tZW4gc2luZCBlcyAzMSBrdXJ6aGFhcmlnZSB1bmQgOSBsYW5naGFhcmlnZSBXZWxwZW4uIDMxIGdldGVpbHQgZHVyY2ggOSBzaW5kIGV0d2EgMyw0LCBnZXJ1bmRldCAzLg==',
      rescueTask: 'Rechnet im Logbuch und schreibt das Ergebnis auf.',
      onSolve: { text: 'Die Zahl hängt an der Sammelwand. Vergleicht sie mit der Klassensumme aus eurem Münzwurf und notiert beide im Logbuch.',
        wall: [{ id: 'w-hyp-zahl', title: 'Verhältnis in Teil 2', tag: 'Ergebnis', kind: 'ergebnis', text: '31 kurzhaarige und 9 langhaarige Welpen. Auf einen langhaarigen kommen etwa 3 kurzhaarige.' }], then: 'probe-hyp-beleg' } },

    'probe-hyp-beleg': { id: 'probe-hyp-beleg', type: 'pick', count: 1, title: 'Welche Hypothese fällt?',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Wählt den Beleg, der die Hypothese H1 „Die Anlage ist verloren“ widerlegt.',
      cards: [
        { id: 'b1', tag: 'B1', label: 'Obwohl alle Eltern kurzhaarig waren, gibt es 9 langhaarige Welpen.' },
        { id: 'b2', tag: 'B2', label: 'Die meisten Welpen sind kurzhaarig.' },
        { id: 'b3', tag: 'B3', label: 'Die Würfe sind unterschiedlich groß.' },
        { id: 'b4', tag: 'B4', label: 'Alle Eltern waren kurzhaarig.' },
        { id: 'b5', tag: 'B5', label: 'Langhaarige Welpen sind seltener als kurzhaarige.' }
      ],
      traps: [
        { id: 'b2', text: 'Nichts passiert. Dass die meisten kurzhaarig sind, hatten schon die ersten Würfe gezeigt.' },
        { id: 'b4', text: 'Nichts passiert. Das sagt nichts darüber, was in den Eltern steckt.' },
        { id: 'b5', text: 'Nichts passiert. Eine Häufigkeit sagt nicht, ob die Anlage verloren gegangen ist.' }
      ],
      hash: '2d018b69a95af2762206d3ad47704c228df31ada26653abafb3804bd427c0670',
      wrongText: 'Nichts passiert. Sucht den Beleg, der H1 nicht stehen lassen kann.',
      hints: ['Welche Hypothese kann ein langhaariger Welpe nicht stehen lassen?',
              'Sucht den Beleg, der etwas Neues zeigt, nicht das Bekannte.',
              'Es geht um die langhaarigen Welpen, obwohl kein Elterntier langhaarig war.'],
      rescue: 'QjEgd2lkZXJsZWd0IEgxLiBXw6RyZSBkaWUgQW5sYWdlIGbDvHIgbGFuZ2VzIEZlbGwgdmVybG9yZW4sIGvDtm5udGUgZXMga2VpbmUgbGFuZ2hhYXJpZ2VuIFdlbHBlbiBnZWJlbi4gRXMgZ2lidCBhYmVyIDksIG9id29obCBhbGxlIEVsdGVybiBrdXJ6aGFhcmlnIHdhcmVuLg==',
      rescueTask: 'Schreibt auf, welche Hypothese ihr streicht und warum. Erklärt, warum B2 und B5 H1 nicht widerlegen.',
      onSolve: { message: { from: 'zuechter', text: 'Ich züchte seit 30 Jahren. Kurzes Fell ist stärker, deshalb verschwinden langhaarige Welpen aus der Zucht. Außerdem sind langhaarige Hunde weniger gesund. In Ihren sechs Würfen sind die meisten Welpen kurzhaarig, und langhaarige sind deutlich seltener. Das beweist es.' }, message2: { from: 'kemal', text: 'Der Züchter legt Einspruch ein. Prüft jeden seiner Sätze an den Zahlen aus Teil 2.' },
        wall: [{ id: 'w-h1', title: 'Hypothese H1 gestrichen', tag: 'Ergebnis', kind: 'ergebnis', text: 'H1 „Die Anlage ist verloren“ ist widerlegt: In den Würfen gibt es 9 langhaarige Welpen, obwohl alle Eltern kurzhaarig waren.' }], then: 'probe-einspruch-markup' } },

    'probe-einspruch-markup': { id: 'probe-einspruch-markup', type: 'markup', title: 'Der Einspruch',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Prüft jeden Satz des Einspruchs an M3: Er wird durch M3 gestützt, durch M3 widerlegt oder lässt sich mit M3 nicht prüfen.',
      passes: [{ id: 'ges', label: 'gestützt', tag: 'gestützt', hint: 'Die Zahlen in M3 passen zu diesem Satz.' },
               { id: 'wid', label: 'widerlegt', tag: 'widerlegt', hint: 'Die Zahlen in M3 passen nicht zu diesem Satz.' },
               { id: 'nic', label: 'nicht prüfbar', tag: 'nicht prüfbar', hint: 'M3 sagt dazu nichts.' }],
      segments: [
        { id: 'z4', nr: 'S1', text: '„Langhaarige Hunde sind außerdem weniger gesund.“' },
        { id: 'z5', nr: 'S2', text: '„In den sechs Würfen sind die meisten Welpen kurzhaarig.“' },
        { id: 'z2', nr: 'S3', text: '„Kurzes Fell ist stärker.“' },
        { id: 'z3', nr: 'S4', text: '„Deshalb verschwinden langhaarige Welpen aus der Zucht.“' },
        { id: 'z6', nr: 'S5', text: '„Langhaarige Welpen sind deutlich seltener als kurzhaarige.“' },
        { id: 'z1', nr: 'S6', text: '„Ich züchte seit 30 Jahren.“' }
      ],
      hash: 'c05e23c16478dc8b18f07b75c0042432a609620199b35d4737ce38261b4264f0',
      passHash: { ges: '62d3cd656f20a909e17398afb9f8f24fc13cc6c6ac087eee79921d7b3fbd89f8', wid: 'cd3c53f42e95717078cf778522a7d73182eee385032e99e09123b34aa6800a4f', nic: '64bc1b36f517763fe4e443a1a3bf51db5540d00ed4ab7a91333325eca3a625a3' },
      wrongText: 'Nichts passiert. Mindestens eine Zuordnung passt nicht.',
      hints: ['Prüft jeden Satz an den Zahlen in M3: 31 kurzhaarige und 9 langhaarige Welpen.',
              '„Häufiger“ ist nicht dasselbe wie „stärker“.',
              'Ein Satz wird widerlegt, zwei werden gestützt, drei lassen sich mit M3 nicht prüfen.'],
      rescue: 'R2VzdMO8dHp0IHdlcmRlbiBTMiAoMzEgdm9uIDQwIFdlbHBlbiBzaW5kIGt1cnpoYWFyaWcpIHVuZCBTNSAoOSB2b24gNDAgc2luZCBsYW5naGFhcmlnKS4gV2lkZXJsZWd0IHdpcmQgUzQ6IEluIE0zIGdpYnQgZXMgOSBsYW5naGFhcmlnZSBXZWxwZW4sIHNpZSB2ZXJzY2h3aW5kZW4gYWxzbyBuaWNodC4gTmljaHQgcHLDvGZiYXIgc2luZCBTMSAoR2VzdW5kaGVpdCksIFMzIChTdMOkcmtlKSB1bmQgUzYgKEVyZmFocnVuZyk6IE0zIHrDpGhsdCBudXIgRmVsbC4gSMOkdWZpZ2VyIGhlacOfdCBuaWNodCBzdMOkcmtlci4=',
      rescueTask: 'Schreibt den widerlegten Satz ab und nennt die Zahl aus M3, die ihm widerspricht. Erklärt, warum „häufiger“ nicht „stärker“ bedeutet.',
      onSolve: { text: 'Der Einspruch ist geprüft. Jetzt zeigt ihr mit dem Modell, wo die Anlage geblieben ist.', then: 'probe-einspruch-skizze' } },

    'probe-einspruch-skizze': { id: 'probe-einspruch-skizze', type: 'net', title: 'Wo ist die Anlage geblieben?',
      ref: { title: 'Zum Nachschlagen: M4 · Modellkarte', docs: ['m4'] },
      prompt: 'Wendet das Modell aus M4 an: Erklärt mit Pfeilen, wie aus zwei kurzhaarigen Elterntieren ein langhaariger Welpe entstehen kann. Ein Pfeil zeigt, was woraus folgt.',
      items: [
        { id: 'a', tag: 'A', label: 'Elterntier 1: K und l (kurzes Fell)' },
        { id: 'b', tag: 'B', label: 'Elterntier 2: K und l (kurzes Fell)' },
        { id: 'c', tag: 'C', label: 'Elterntier 1 gibt l weiter' },
        { id: 'd', tag: 'D', label: 'Elterntier 2 gibt l weiter' },
        { id: 'e', tag: 'E', label: 'Welpe hat l und l' },
        { id: 'f', tag: 'F', label: 'Welpe hat langes Fell' },
        { id: 'g', tag: 'G', label: 'Anlage l ist verloren' },
        { id: 'h', tag: 'H', label: 'Das Fell der Eltern mischt sich' }
      ],
      slots: [[16, 15], [16, 85], [50, 15], [50, 85], [84, 50], [50, 50], [16, 50], [84, 15]], height: 460,
      minEdges: 5, edgeCount: 5,
      edgeHash: ['78b825113091b3cf7a0c1c1f03dcc8648ef8daeb99f3904a8695017e903d91a1', '962dadcb0c9b3b91ce173097be56f1fb873249c58baf2e4367c8f5a360587698', 'e49eec27c04ddea38253694342ee453cd60505be0d0a234b2a9d5edc0fb51e56', '3cd5881fb922bcc8b569a458cea2bf7c179c5afe7be4ac31b55918f1ec641ee8', '78c8b509361839cf82a4d430eca867f3487977d0c222ecad2c8b6b51811bcd24'],
      hash: '3e5a51524bdaacafe3ecbf3274f6663145e6e72657d489d769526b41adee32d7',
      wrongText: 'Nichts passiert. Fragt: Was gibt jedes Elterntier weiter, und was entsteht daraus?',
      hints: ['Beginnt bei den Elterntieren: Was gibt jedes von ihnen an den Welpen weiter?',
              'Langes Fell zeigt ein Welpe nur, wenn er zweimal l hat.',
              'In einer Karte laufen zwei Pfeile zusammen.'],
      rescue: 'SmVkZXMgRWx0ZXJudGllciBoYXQgSyB1bmQgbCB1bmQgZ2lidCB6dWbDpGxsaWcgZWluZSBkZXIgYmVpZGVuIEFubGFnZW4gd2VpdGVyLiBHZWJlbiBiZWlkZSBsIHdlaXRlciwgaGF0IGRlciBXZWxwZSBsIHVuZCBsIHVuZCBkYW1pdCBsYW5nZXMgRmVsbC4gRGllIEthcnRlbiDigJ5BbmxhZ2UgbCBpc3QgdmVybG9yZW7igJwgdW5kIOKAnkRhcyBGZWxsIGRlciBFbHRlcm4gbWlzY2h0IHNpY2jigJwgZ2Vow7ZyZW4gbmljaHQgZGF6dS4=',
      rescueTask: 'Zeichnet die Skizze ins Logbuch und schreibt unter jeden Pfeil, was er bedeutet.',
      onSolve: { message: { from: 'kemal', text: 'Teil 3 des Gutachtens steht. Die Anlage war die ganze Zeit da. Man hat sie bei den kurzhaarigen Eltern nur nicht gesehen.\n\nDas hat vor rund 160 Jahren schon jemand bei Erbsen herausgefunden. Er war Mönch und hieß Gregor Mendel.\n\nTeil 4, eure Empfehlung an den Vorstand, schreibt ihr im Unterricht. Dort gebt ihr euren Regeln auch Namen.' },
        wall: [{ id: 'w-skizze', title: 'Wo die Anlage geblieben ist', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'Beide Elterntiere: K und l, kurzes Fell. Jedes gibt l weiter. Welpe: l und l. Ergebnis: langes Fell.' }] } }
  }
});
