# Modul 7 - Slutexamination

## 7.1

**Film:** https://vimeo.com/653011054

### Airbean

Du ska bygga en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

**Figmaskiss:** https://www.figma.com/file/b6b1D1Skjb1n3sTCaTqlSB/AirBean-v.1.2---React-(Copy)?node-id=0%3A1

## Instruktioner

**För att få Godkänt ska du:**
* Gjort enligt Figma skissen (viss variation på färger, typsnitt etc är tillåtet)
* Använder sig av Redux med en Redux store
* Gå att lägga till produkter i en varukorg (varukorgen ligger i din Redux store)
* Hämta alla produkter med fetch
* Kunna skicka sin order med `fetch` och alla produkter och få ett svar med en ETA och ordernummer

**För att Väl Godkänt ska du:**
* I varukorgen ändra antal/ta bort produkter
* Eftersom Göteborg fyller 400 år vill Airbean fira med ett kampanjerbjudande! Om du köper en bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris av 40 kr (49 kr billigare totalt). Det är alltså enbart med denna kombination som kampanjerbjudandet gäller.

## Inlämning

Gör en fork på detta repo och skicka sedan ett meddelande när du är klar.

## Airbean API

Endpoint: `http://localhost:5000/api/beans`

Metod: `GET`

Beskrivning: För att hämta menyn

---

Endpoint: `http://localhost:5000/api/beans`

Metod: `POST`

Beskrivning: För att posta en beställning