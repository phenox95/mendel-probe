/* AUTOMATISCH ERZEUGT aus _quelle/raum2.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Raum 2 „Die Zwinger-Stube“ · Mission 2 (Stand 01.11.2026, nach Rätselsteckbrief vom 13.10.2026)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum2/raum2.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Texte mit dem Vermerk ENTWURF stehen nicht im Steckbrief und brauchen die Freigabe der Lehrkraft. */
TRESOR.room({
  base: '../',
  id: 'raum2',
  version: 'Testraum Mendel V3 · Raum 2 · 01.11.2026',
  title: 'Die Zwinger-Stube',
  subtitle: 'Genetik · Der Einspruch des Züchters',
  image: '../bilder/stube.jpg',
  imageAlt: 'Eine warme Stube: links ein hohes Bücherregal mit einem dunkelroten Zuchtbuch, in der Mitte eine hölzerne Wurfkiste mit drei schlafenden Welpen und ein Fenster, rechts ein blauer Tisch mit einem Blatt Papier.',
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

  end: { title: 'Gutachten abgeschlossen', text: 'Sichert jetzt euren Spielstand. In der Präsenzstunde gebt ihr euren Regeln Namen.' },

  missions: [
    { id: 'mendel-2', title: 'Mission 2 · Der Einspruch des Züchters', unlock: 'a288344dcdd1700dc9fa508bb526e866679d864a8867162a1df62a45c387b304',
      intro: { from: 'kemal', text: 'Eure Hypothesen liegen auf Papier. Jetzt entscheidet das Zuchtbuch, Teil 2: sechs Würfe aus Verpaarungen der Welpen untereinander. Danach meldet sich ein Züchter.' },
      requires: ['probe-hyp-zahl', 'probe-hyp-beleg', 'probe-einspruch-markup', 'probe-einspruch-skizze'],
      doneTitle: 'Mission 2 abgeschlossen · Gutachten fertig',
      doneText: 'Die Anlage für langes Fell war die ganze Zeit da. Man hat sie bei den Eltern und den Welpen nur nicht gesehen.\n\nSchreibt die Skizze mit den Pfeilen und eure Erklärung in euer Logbuch.' }
  ],

  hotspots: [
    { id: 'zuchtbuch2', label: 'Zuchtbuch, Teil 2, im Regal', rect: [2, 11, 24.5, 79], states: [
      { if: { unlocked: 'mendel-2', notSolved: 'probe-hyp-zahl' }, action: { type: 'puzzle', puzzle: 'probe-hyp-zahl' } },
      { if: { unlocked: 'mendel-2', solved: 'probe-hyp-zahl', notSolved: 'probe-hyp-beleg' }, action: { type: 'puzzle', puzzle: 'probe-hyp-beleg' } },
      { if: { unlocked: 'mendel-2' }, action: { type: 'doc', doc: 'm3' } },
      { action: { type: 'text', text: 'Im Regal steht ein zweites Zuchtbuch. Startet zuerst die Mission.' } } ] },
    { id: 'wurfkiste', label: 'Wurfkiste', rect: [33.5, 64, 34.5, 26], states: [
      { if: { unlocked: 'mendel-2' }, action: { type: 'doc', doc: 'foto-wurf-neu' } },
      { action: { type: 'text', text: 'Eine Wurfkiste mit Welpen. Startet zuerst die Mission.' } } ] },
    { id: 'zuechter', label: 'Pult des Züchters', rect: [74.5, 56, 25, 34], states: [
      { if: { unlocked: 'mendel-2', solved: 'probe-hyp-beleg', notSolved: 'probe-einspruch-markup' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-markup' } },
      { if: { unlocked: 'mendel-2', solved: 'probe-einspruch-markup', notSolved: 'probe-einspruch-skizze' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-skizze' } },
      { action: { type: 'text', text: 'Hier liegt der Einspruch eines Züchters. Erst muss das Zuchtbuch, Teil 2, geprüft werden.' } } ] }
  ],

  docs: {
    'foto-wurf-neu': { title: 'Foto: der neue Wurf', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-gemischt.jpg',
      text: 'Zwei Welpen aus Teil 1 wurden verpaart. Im neuen Wurf ist ein Welpe mit langem Fell. Die Elterntiere haben beide kurzes Fell.' },
    'm3': { title: 'M3 · Zuchtbuch, Teil 2 (Würfe aus Verpaarungen der Welpen untereinander)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern dieser sechs Würfe sind Welpen aus Teil 1.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'kurzhaarig', 'langhaarig'], rows: [['1', '5', '1'], ['2', '6', '1'], ['3', '3', '2'], ['4', '6', '2'], ['5', '5', '1'], ['6', '6', '2']] } }
  },

  puzzles: {
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
      onSolve: { message: { from: 'zuechter', text: 'Ich züchte seit 30 Jahren. Kurzes Fell ist stärker. Deshalb verschwinden langhaarige Welpen aus der Zucht. Euer Zuchtbuch muss falsch sein.' }, message2: { from: 'kemal', text: 'Der Züchter legt Einspruch ein. Prüft seine Sätze am Zuchtbuch, Teil 2.' },
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
