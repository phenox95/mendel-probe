#!/usr/bin/env python3
"""Erzeugt raum/mendel.js aus _quelle/mendel.src.js: ersetzt {{H:id:Antwort}} durch SHA-256 und {{B:Text}} durch Base64.
Die Normalisierung entspricht der Engine (norm): Großbuchstaben, Ä/Ö/Ü/ß aufgelöst, nur A-Z und 0-9."""
import hashlib, base64, re, sys, pathlib
root = pathlib.Path(__file__).parent
src = (root / '_quelle' / 'mendel.src.js').read_text(encoding='utf-8')

def norm(s):
    s = s.upper().replace('Ä', 'AE').replace('Ö', 'OE').replace('Ü', 'UE').replace('ẞ', 'SS')
    return re.sub(r'[^A-Z0-9]', '', s)

def h(m):
    return hashlib.sha256(('tresor|' + m.group(1) + '|' + norm(m.group(2))).encode('utf-8')).hexdigest()

def b(m):
    return base64.b64encode(m.group(1).encode('utf-8')).decode('ascii')

out = re.sub(r'\{\{H:([^:}]+):([^}]*)\}\}', h, src)
out = re.sub(r'\{\{B:([^}]*)\}\}', b, out)
if '{{' in out:
    sys.exit('Übrig gebliebener Marker: ' + out[out.index('{{'):][:80])
head = '/* AUTOMATISCH ERZEUGT aus _quelle/mendel.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */\n'
(root / 'raum' / 'mendel.js').write_text(head + out, encoding='utf-8')
print('raum/mendel.js geschrieben,', len(out), 'Zeichen')
