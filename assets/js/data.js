/**
 * Data & Configuration voor Scouts & Gidsen Kramaai Mollem
 * Zero-dependency data store & API fetchers
 */

// Sponsors gegevens
const SPONSORS_DATA = {
    head: [
        { name: "Elbo BVBA", site: "https://www.facebook.com/ELBObvba", logo: "assets/images/sponsors/elbo.jpeg" },
        {
            name: "'T Gouden Fritje",
            site: "https://www.facebook.com/T-Gouden-Fritje-790272917985589/",
            logo: "assets/images/sponsors/gouden-fritje.png",
        },
        { name: "Techsquad", site: "https://techsquad.be/", logo: "assets/images/sponsors/techsquad.png" },
        { name: "KI Music", site: "https://ki-music.be/", logo: "assets/images/sponsors/ki-music.png" },
        {
            name: "Premium E-Bike Store Asse",
            site: "https://www.ebikestoreasse.be/nl/",
            logo: "assets/images/sponsors/ebike-store.jpg",
        },
        { name: "Lonost BV", site: "", logo: "assets/images/sponsors/lonost.jpg" },
    ],
    platinum: [
        { name: "Praktijk Vitalis", site: "https://www.praktijkvitalis.be/", logo: "assets/images/sponsors/vitalis.jpg" },
        { name: "Heyvaert Verzekeringen", site: "http://www.heyvaert.eu", logo: "assets/images/sponsors/heyvaert.png" },
        { name: "Mechanic International", site: "https://www.m-i.be/", logo: "assets/images/sponsors/mi.png" },
        {
            name: "Albert Heijn Merchtem",
            site: "https://www.facebook.com/ahmerchtem/",
            logo: "assets/images/sponsors/ah-merchtem.png",
        },
    ],
    golden: [
        { name: "Wijnbar-t", site: "https://wijnbar-t.be/", logo: "assets/images/sponsors/wijnbart.jpg" },
        { name: "Belz", site: "", logo: "assets/images/sponsors/belz.jpeg" },
        { name: "Cornet", site: "https://www.cornetbier.be", logo: "assets/images/sponsors/cornet.png" },
        { name: "Wouter Tistaert BVBA", site: "", logo: "assets/images/sponsors/wouter-tistaert.png" },
        { name: "White4you", site: "https://www.white4you.be/", logo: "assets/images/sponsors/white4you.png" },
        {
            name: "Schrijnwerkerij Lauwers",
            site: "https://www.bouwersgids.be/zoek_een_vakman?aannemer=198",
            logo: "assets/images/sponsors/lauwers.jpg",
        },
        { name: "BrightBoard", site: "https://brightboard.eu/", logo: "assets/images/sponsors/brightboard.jpeg" },
        { name: "To Bounce", site: "https://www.tobounce.be/", logo: "assets/images/sponsors/to-bounce.png" },
        {
            name: "Peugeot Van Weyenberg Asse",
            site: "https://garage.peugeot.be/nl/vanweyenbergh/?location=Asse%7C0",
            logo: "assets/images/sponsors/van-weyenberg.png",
        },
        { name: "JD Works", site: "https://jdworks.be", logo: "assets/images/sponsors/jdworks.jpeg" },
    ],
};

const LEADERS_DATA = {
    Tijs: { name: "Tijs De Jonge", totem: "Speelse Kauw", email: "tijs@kramaai.be" },
    Romain: { name: "Romain Wouters", totem: "Respectvolle Schaarbek", email: "romain@kramaai.be" },
    KobeB: { name: "Kobe Bogaert", totem: "Stoutmoedige Walrus", email: "kobeBogaert@kramaai.be" },
    Wout: { name: "Wout Huysman", totem: "Respectvol Grijs Bokje", email: "wout@kramaai.be", number: "+32 470 09 30 61" },
    Robbe: { name: "Robbe Tops", totem: "Betrouwbare Dolfijn", email: "robbe@kramaai.be" },
    VictorB: { name: "Victor Boterdaele", totem: "Zorgzame Golden Retriever", email: "victor@kramaai.be", number: "+32 478 67 03 78" },
    Remco: { name: "Remco Looverie", totem: "Goedhartige Vink", email: "remco@kramaai.be" },
    Amber: { name: "Amber Gysens", totem: "Stoutmoedige Arassari", email: "amber@kramaai.be" },
    Toon: { name: "Toon Esselens", totem: "Nonchalante Pumba", email: "toon@kramaai.be" },
    Wiebe: { name: "Wiebe Luppens", totem: "Amusante Kolibrie", email: "wiebe@kramaai.be" },
    Elise: { name: "Elise Asselman", totem: "Spontane scholekster", email: "elise@kramaai.be" },
    Laura: { name: "Laura De Smedt", totem: "Attente Anoa", email: "laura@kramaai.be" },
    Miel: { name: "Miel Meskens", totem: "Empathische Ooievaar", email: "miel@kramaai.be" },
    Luka: { name: "Luka Heyvaert", totem: "Zorgeloze Secretarisvogel", email: "luka@kramaai.be" },
    Leyla: { name: "Leyla Hoornaert", totem: "Tedere lepelaar", email: "leyla@kramaai.be", number: "+32 486 31 61 79" },
    Matthijs: { name: "Matthijs Huysman", totem: "Enthousiaste Parkiet", email: "matthijs@kramaai.be" },
    Luca: { name: "Luca Tastenoy", totem: "Onverschrokken Agame", email: "luca@kramaai.be" },
    Emma: { name: "Emma Lammens", totem: "Goedgelovige Simia", email: "emma@kramaai.be" },
    Lara: { name: "Lara Vebelen", totem: "Zorgzame sifaka", email: "lara@kramaai.be" },
    Daan: { name: "Daan Heyvaert", totem: "Gezellige Streepmuis", email: "daan@kramaai.be" },
    Fien: { name: "Fien De Baerdemaeker", totem: "Vastberaden spreeuw", email: "fien@kramaai.be" },
    Jutte: { name: "Jutte Luppens", totem: "Standvastige Karekiet", email: "jutte@kramaai.be" },
    Lente: { name: "Lente Wermoes", totem: "Competitief zeepaardje", email: "lente@kramaai.be" },
    Nils: { name: "Nils Verbeken", totem: "Trotse Chimpansee", email: "nils@kramaai.be" },
    Nora: { name: "Nora Koopmans", totem: "Uitbundige Noko", email: "nora@kramaai.be" },
    Seppe: { name: "Seppe Engels", totem: "Ongeremde boxer", email: "seppe@kramaai.be" },
    Lina: { name: "", totem: "", email: "lina@kramaai.be" },
    Dante: { name: "", totem: "", email: "dante@kramaai.be" },
    Lore: { name: "", totem: "", email: "lore@kramaai.be" },
    Nina: { name: "", totem: "", email: "nina@kramaai.be" },
    LouiseVB: { name: "", totem: "", email: "" },
    Jarne: { name: "", totem: "", email: "jarne@kramaai.be" },
    Tuur: { name: "", totem: "", email: "tuur@kramaai.be" },
    Elle: { name: "Elle De Smedt", totem: "Guitige Groenling", email: "elle@kramaai.be" },
    Noor: { name: "Noor Desseyn", totem: "Zorgzame Kapucijnaap", email: "noor@kramaai.be" },
    LouiseB: { name: "", totem: "", email: "@kramaai.be" },
    Kato: { name: "", totem: "", email: "kato@kramaai.be" },
}

// Takken informatie
const TAKKEN_DATA = [
  {
    id: "kapoenen",
    name: "Kapoenen",
    age: "6 - 8 jaar",
    grades: "1ste & 2de leerjaar",
    badgeColor: "#2a9d8f",
    shortDesc: "Vol spel, fantasie en de eerste stapjes in het scoutingleven.",
    description: "Kapoenen zijn 6 tot 8 jaar. Ze ontdekken al spelend wat het is om scout of gids te zijn. Het leven van een kapoen is vol spel en fantasie. De leiding bedenkt spelen op maat van kapoenen en laat genoeg ruimte om op hun eigen impulsen in te gaan. Wat vinden ze leuk en wat kunnen ze al op die leeftijd?",
    leidingMail: "kapoenen@kramaai.be",
    leaders: [ ]
  },
  {
    id: "welpen",
    name: "Welpen",
    age: "8 - 10 jaar",
    grades: "3de & 4de leerjaar",
    badgeColor: "#e76f51",
    shortDesc: "Guitige tieners die zelf dingen leren doen en volop fantasie beleven.",
    description: "Welpen zijn tussen 8 en 10 jaar, ze zijn dus guitige (bijna-) tieners die in het derde of vierde leerjaar zitten. Typisch voor de welpen is dat ze zelf dingen leren doen. Ze krijgen de ruimte en de kans om dingen uit te proberen en van elkaar te leren. De werking wordt ingekleed met verhalen en fantasie. Een welp groeit een millimeter per week, krijgt er op een jaar drie tanden bij en wordt elke week 5 gram zwaarder.",
    leidingMail: "welpen@kramaai.be",
    leaders: [ ]
  },
  {
    id: "bevers",
    name: "Bevers",
    age: "10 - 12 jaar",
    grades: "5de & 6de leerjaar",
    badgeColor: "#f4a261",
    shortDesc: "Samenwerken, technieken en sjorren ontdekken met volop plezier!",
    description: "Na 2 jaar welp te zijn, word je een stoere bever! Wie tussen 10 en 12 jaar is, dus in het 5e en 6e leerjaar zit, is een bever. Bever zijn betekent groeien, samenwerken, nog meer dingen zelfstandig leren doen, al meerdere knopen en sjorringen leren leggen. Spelenderwijs leren ze de werking van scouting kennen en raken ze vertrouwd met allerlei technieken. Stapsgewijs leren ze ook kennis maken met verantwoordelijkheid. Maar amuseren staat nog steeds op de eerste plaats!",
    leidingMail: "bevers@kramaai.be",
    leaders: [ ]
  },
  {
    id: "jonggivers",
    name: "Jong-Givers",
    age: "11 - 13 jaar",
    grades: "1ste & 2de middelbaar",
    badgeColor: "#457b9d",
    shortDesc: "Avontuur, vlotten bouwen, koken op houtvuur en patrouilletenten.",
    description: "Jong-givers zijn tussen 11 en 13 jaar oud. Jonggivers houden van avontuur en steken graag de handen uit de mouwen. Ze vinden het leuk om inspraak te hebben en gaan graag nieuwe uitdagingen aan: vlottentocht, koken op houtvuur, slapen in patrouilletenten. Jonggivers leren samenwerken, engagement tonen en zich inzetten voor anderen. Zo ontdekken ze stilaan wat scouting echt inhoudt en leggen hun belofte met trots af. Jonggivers zitten op de wip tussen kind en puber. Hun leefwereld verandert razendsnel en wordt plots veel complexer. Al die veranderingen zijn soms overweldigend.",
    leidingMail: "jonggivers@kramaai.be",
    leaders: [ ]
  },
  {
    id: "givers",
    name: "Givers",
    age: "14 - 17 jaar",
    grades: "3de t/m 5de middelbaar",
    badgeColor: "#1d3557",
    shortDesc: "Grote projecten, leefweken, 3-daagse met de fiets en onvergetelijke vriendschap.",
    description: "Giver staat voor ‘Gidsen – Verkenners’. Hierbij horen de 14 tot 17-jarigen, dus weeral een tak hoger dan bij de jonggivers: meer verantwoordelijkheid, ruimte voor grotere projecten, met de groep zelf een snuifje avontuur realiseren, of uitgedaagd worden door elkaar… Dit vertaalt zich in onder andere gezellige vrijdagavondjes, een toffe fuif, op weekend met de trein, een 3-daagse met de fiets op kamp, leefweek, in-het-oog-springende constructies, enzoverder.",
    leidingMail: "givers@kramaai.be",
    leaders: [ ]
  },
  {
    id: "jins",
    name: "Jins",
    age: "17 - 18 jaar",
    grades: "6de middelbaar",
    badgeColor: "#e63946",
    shortDesc: "Jij en Ik een Noodzaak: eigen jaar plannen en op buitenlands kamp!",
    description: "JIN staat voor ‘Jij en Ik een Noodzaak’ en zijn 17-18 jaar. Ze leven één jaar intens samen in hun tak als een speciale overstap van lid naar leiding. JIN’s werken gekke activiteiten uit in hun eigen jonge stijl. Al doende leren ze samenwerken en verantwoordelijkheid opnemen. Hieruit groeit engagement voor de groep en voor de samenleving. Jins steken hun eigen jaar en kamp ineen en gaan elk jaar op legendarisch buitenlands kamp.",
    leidingMail: "jins@kramaai.be",
    leaders: [ ]
  },
  {
    id: "groepsleiding",
    name: "Groepsleiding",
    age: "Leiding",
    grades: "Algemene coördinatie",
    badgeColor: "#2d6a4f",
    shortDesc: "De fakkel van de groep die leiding en leden warm en enthousiast gidst.",
    description: "Groepsleiding zijn is een nobele taak. Ze zijn als een fakkel voor de groep: de personen die de groep door het donker gidsen. Ze lopen voorop en nemen medeleiding mee op sleeptouw. Als fakkel houden ze de groep samen met warmte en sfeer. Bij hen brandt het vuur van engagement.",
    leidingMail: "groepsleiding@kramaai.be",
    leaders: [
	  LEADERS_DATA.VictorB,
	  LEADERS_DATA.Wout,
    ]
  }
];

// Ledenblad De Kramaai PDF downloads
const KRAMAAI_ARCHIEF = [
  {
    year: "2025 - 2026",
    editions: [
      { title: "Maart - April - Mei", url: "https://kramaaiblog.wordpress.com/wp-content/uploads/2026/02/kramaai-maart-april-mei_2025-2026.pdf", badge: "Nieuwste" },
      { title: "December - Januari - Februari", url: "https://kramaaiblog.wordpress.com/wp-content/uploads/2025/11/kramaai-dec-jan-feb-2025-2026.pdf" },
      { title: "September - Oktober - November", url: "https://kramaaiblog.wordpress.com/wp-content/uploads/2025/09/kramaai-sept-okt-nov-20255-2026.pdf" }
    ]
  },
  {
    year: "2024 - 2025",
    editions: [
      { title: "Maart - April - Mei", url: "https://kramaaiblog.wordpress.com/wp-content/uploads/2025/03/kramaai-maart-april-mei_2024-2025-1.pdf" },
      { title: "December - Januari - Februari", url: "https://kramaaiblog.wordpress.com/wp-content/uploads/2024/11/kramaai-dec-jan-feb.pdf" },
      { title: "September - Oktober - November", url: "https://kramaaiblog.wordpress.com/wp-content/uploads/2024/09/kramaai-sept-okt-nov.pdf" }
    ]
  },
  {
    year: "2023 - 2024",
    editions: [
      { title: "Maart - April - Mei", url: "https://kramaaiblog.files.wordpress.com/2024/02/kramaai-maart-april-mei.pdf" },
      { title: "December - Januari - Februari", url: "https://kramaaiblog.files.wordpress.com/2023/12/kramaai-dec-jan-feb.pdf" },
      { title: "September - Oktober - November", url: "https://kramaaiblog.files.wordpress.com/2023/09/kramaai-sept-okt-nov.pdf" }
    ]
  }
];

// Foto-archieven
const FOTO_ALBUMS = [
  { year: "2025", location: "Onhaye", url: "https://photos.app.goo.gl/tnhreeoqGiJooQqH7", type: "kamp" },
  { year: "2024", location: "Couvin", url: "https://photos.app.goo.gl/vH6kvyCp79UZZNRP9", type: "kamp" },
  { year: "2023", location: "Gerpinnes", url: "https://photos.app.goo.gl/ukm1MCSjzQvtgcdY7", type: "kamp" },
  { year: "2022", location: "Couvin", url: "https://photos.app.goo.gl/iPpWPCeNvj8Ew8dH6", type: "kamp" },
  { year: "2021", location: "Recht / Manderfeld", url: "https://photos.app.goo.gl/LdUKBFExDFBQeTCa8", type: "kamp" },
  { year: "2020", location: "Opont", url: "https://photos.app.goo.gl/Y2YRduK9mKTBF66L6", type: "kamp" },
  { year: "2019", location: "Büllingen", url: "https://photos.app.goo.gl/bJoayEJ1DuZJqZmP7", type: "kamp" },
  { year: "2018", location: "Bomal", url: "https://photos.app.goo.gl/1DeTtBUqbpsZUCd36", type: "kamp" },
  { year: "2017", location: "Opont", url: "https://goo.gl/photos/TwQUEufTCw4YvBmJ8", type: "kamp" }
];

// Veelgestelde vragen (FAQ)
const FAQS_DATA = [
  {
    q: "Waar kan ik Scouts Mollem vinden?",
    a: "Ons adres is: <strong>Kasteelstraat 47a, 1730 Mollem</strong>. Ons gebouw (met houten latjes) bevindt zich naast de gemeentelijke basisschool in Mollem. Je kan er niet naast kijken."
  },
  {
    q: "Wat is het rekeningnummer van Scouts Mollem?",
    a: "Overschrijvingen naar Scouts & Gidsen Kramaai Mollem gericht, kunnen gebeuren op volgend rekeningnummer: <strong>BE45 7340 7340 7989</strong>."
  },
  {
    q: "Kan ik nog aansluiten bij de scouts?",
    a: "Door de aanhoudende toestroom van leden naar onze scouts, zijn wij genoodzaakt om een ledenstop te hanteren. Meer informatie vinden jullie in de menubalk bij <a href=\"inschrijven.html\">inschrijven</a>."
  },
  {
    q: "Ik zou graag bij de scouts aansluiten, maar het werkjaar is al begonnen. Gaat dit nog?",
    a: "De inschrijvingen sluiten rond midden september. Spijtig genoeg kunnen wij vanaf dan niemand meer verzekeren en bijgevolg ook niet inschrijven. Volgend jaar ben je steeds welkom als we nog plaatsjes over hebben."
  },
  {
    q: "Wanneer valt het kamp dit jaar?",
    a: "Welpen, Bevers en Jong-Givers trekken van 4 augustus tot 14 augustus op kamp. Kapoenen gaan van 4 tot 8 augustus. Givers gaan voor 12 dagen op kamp en vertrekken al op 3 augustus. De Jins reizen traditiegetrouw naar het buitenland. Na hun buitenlands avontuur, is het de gewoonte dat ze samen met de andere takken het gewone kamp in de Ardennen afsluiten."
  },
  {
    q: "Waar kan ik Scouts Mollem volgen?",
    a: "Wij posten regelmatig leuke foto's van onze activiteiten met de leden op <a href=\"https://www.instagram.com/scoutskramaaimollem/\" target=\"_blank\" rel=\"noopener noreferrer\">Instagram</a>. Je kan ons ook volgen op <a href=\"https://www.facebook.com/groups/113217998689162/\" target=\"_blank\" rel=\"noopener noreferrer\">Facebook</a> voor meer info over wat er gebeurt in onze Scouts."
  },
  {
    q: "Kampinschrijving?",
    a: "De leiding vindt het belangrijk het hele kampgebeuren persoonlijk mede te delen aan ouders en leden van Kramaai Mollem. Daarom trekken ze eind juni, begin juli van deur tot deur om iedereen voor het scoutskamp in te schrijven."
  },
  {
    q: "Ledentijdschrift ‘De Kramaai’",
    a: "De Kramaai is het ledenmagazine van Scouts en Gidsen Kramaai Mollem. Hierin wordt vermeld wat er elke vergadering staat te gebeuren. Ook leuke weetjes, sprookjes, wedstrijden en dergelijke zijn er in terug te vinden. Heb jij de Kramaai niet gekregen via de mail? Geef je takleiding een seintje, dan is er vast en zeker een vergissing gebeurd. U kan de Kramaai ook steeds downloaden onder de rubriek <a href=\"kramaai.html\">Kramaai</a>."
  },
  {
    q: "Vanaf welke leeftijd ben je Scoutsrechtig?",
    a: "Elke kind dat 6 jaar wordt tijdens het lopende werkjaar is bij ons welkom, vanaf het eerste leerjaar dus. Op jongere leeftijd kunnen wij je spruit jammer genoeg niet verzekeren. Nog een jaartje wachten maar!"
  },
  {
    q: "Fiscale voordeel",
    a: "De jeugdactiviteiten van erkende jeugdbewegingen zijn jaarlijks fiscaal aftrekbaar, wel enkel voor kinderen onder de 12 jaar. Indien u hiervan wenst gebruik te maken, kan u <a href=\"https://kramaaiblog.wordpress.com/wp-content/uploads/2025/03/fiscaal-attest-scouts-kramaai-mollem-2024.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">hier</a> een fiscaal attest vinden om toe te voegen aan uw belastingsaangifte. Ook kan u bij uw ziektefonds voordelen in verband met het lidgeld en voordelen in verband met het kamp verkrijgen. De bedragen verschillen van ziektefonds tot ziektefonds, dus voor de specifieke bedragen en de precieze details neemt u best contact op met uw ziektefonds."
  },
  {
    q: "Verminderd lidgeld",
    a: "Als het voor u moeilijk is om het lidgeld van de scouts te betalen, dan kunt u verminderd lidgeld aanvragen. Indien u beroep doet op verminderd lidgeld, dient u slechts 1/3de van het lidgeld en bepaalde activiteiten zoals het weekend of het kamp te betalen. Als u niet zeker weet of u hiervoor in aanmerking komt of u meer informatie wenst, laat het ons dan zeker weten. Als u meer informatie wenst over wat er gebeurt met dit lidgeld, kan je dit <a href=\"lidgeld.html\">hier</a> vinden."
  }
];

// Live data fetchers zoals gespecificeerd door de gebruiker,
// met een failover naar de lokale public/ map bij CORS/offline situaties
let calendarPromise = new Promise((resolve) => {
  fetch("https://kramaai.be/public/calendar.json")
    .then((calendar) => calendar.json())
    .then(resolve)
    .catch(() => {
      fetch("public/calendar.json")
        .then((calendar) => calendar.json())
        .then(resolve)
        .catch(() => resolve([]));
    });
});

let newsPromise = new Promise((resolve) => {
  fetch("https://kramaai.be/public/news.json")
    .then((news) => news.json())
    .then(resolve)
    .catch(() => {
      fetch("public/news.json")
        .then((news) => news.json())
        .then(resolve)
        .catch(() => resolve([]));
    });
});
