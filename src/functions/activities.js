exports.handler = async (event, context) => {
  const count = event.queryStringParameters.count || 3

  const activities = getRandom(tempData, count)

  return {
    statusCode: 200,
    body: JSON.stringify(activities),
  }
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available')
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const tempData = [
  {
    id: 1,
    title: 'Spiktävling',
    description: 'Spika ner ett antal spikar i en bräda på kortast tid.',
    resources: ['Hammare', 'Spik', 'Bräda'],
  },
  {
    id: 2,
    title: 'Visseltävling',
    description:
      'Varje deltagare stoppar samtidigt in 3-4 kex i munnen och sedan gäller det att vara först med att vissla en melodi.',
    resources: ['Torra kex'],
  },
  {
    id: 3,
    title: 'Grevinnan och betjänten',
    description:
      'Utförs i par och varje par får 2 tidningar. Sedan går det ut på att transportera sig en viss sträcka där den ena deltagaren endast får stå på tidningarna och den andra får flytta på dem.',
    resources: ['Tidningar'],
  },
  {
    id: 4,
    title: 'Äggstafett',
    description:
      'Deltagarna delas upp i lag, varje lag får en sked och ett ägg. Lagen ställer upp på led längs en startlinje. När startskottet går ska förste man springa en i förväg utstakad bana med ägget i skeden utan att tappa det. Skulle man tappa det får man stanna upp, lägga ägget tillrätta och sedan springa vidare. Det är inte tillåtet att hålla fast ägget mot skeden.',
    resources: ['Ägg', 'Skedar'],
  },
  {
    id: 5,
    title: 'Godisstafett',
    description:
      'Med händerna bakom ryggen ska deltagarna tävla i att äta upp en lakritsrem snabbast. Denna lek fungerar även som stafett med lag.',
    resources: ['Godissnöre'],
  },
  {
    id: 6,
    title: 'Plocka ärtor',
    description:
      'Alla deltagare får ett sugrör. Framför deltagarna ställer man tallrikar med ärtor. När starten går ska man suga upp en ärta i taget med sugröret och släppa ner den på antingen en tom tallrik eller i en mugg. Den som flyttat flest ärtor när tiden går ut vinner.',
    resources: ['Sugrör', 'Ärtor', 'Tallrik/Mugg'],
  },
  {
    id: 7,
    title: 'Dragkamp',
    description:
      'Dela upp i två lag som gör upp om vilka som snabbast kan dra det andra laget över mittlinjen.',
    resources: ['Starkt rep'],
  },
  {
    id: 8,
    title: 'Säckhoppning',
    description:
      'Här gäller det att kliva i en säck och hoppa en viss sträcka så snabbt som möjligt. Går enkelt att variera genom att tex göra det till en stafett eller lägga ut hinder.',
    resources: ['Säckar (tex sopsäck eller jute)'],
  },
  {
    id: 9,
    title: 'Blinda skottkärran',
    description:
      'Här ska man tävla i par där en person sitter i en skottkärra medan den andre styr. Det gäller att snabbast ta sig igenom en bana (tex slalom) men problemet är bara att föraren även har en ögonbindel på sig så det gäller för passageraren att guida. För ytterliggare klurighet kan passageraren ha på sig hörlurar så den ej hör vad föraren säger.',
    resources: ['Skottkärror', 'Ögonbindlar', 'Hinder'],
  },
  {
    id: 10,
    title: '1 meter',
    description:
      'En enkel lek som går ut på att varje deltagare ska gå fram till ett snöre och klippa av exakt 1 meter (eller vilken längd ni nu bestämt), närmast rätt längd vinner. För att tävla i lag kan allas totala längd läggas ihop och jämföras.',
    resources: ['Tråd/snöre', 'Sax', 'Måttband'],
  },
  {
    id: 11,
    title: 'Ballongrace',
    description:
      'Varje deltagare sätter en lagomt uppblåst ballong mellan sina knän och när startsignalen går så ska man ta sig genom en bana och tillbaka igen. Tappar en deltagare ballongen måste hen börja om. Snabbast vinner. För att köra i lag fungerar stafett alldeles utmärkt.',
    resources: ['Ballonger'],
  },
  {
    id: 12,
    title: 'Galgrace',
    description:
      'Varje deltagare sätter en klädgalge mellan sina knän och när startsignalen går så ska man ta sig genom en bana och tillbaka igen. Tappar en deltagare galgen måste hen börja om. Snabbast vinner. För att köra i lag fungerar stafett alldeles utmärkt.',
    resources: ['Klädgalgar'],
  },
  {
    id: 13,
    title: 'Legotornet',
    description:
      'Lagtävling där varje lag får en likadan samling med legobitar och sedan gäller det att bygga det högsta tornet på en viss tid. Går att variera väldigt mycket genom att sätta kort eller lång tid, bygga andra saker än torn som tex en bro eller ha en regel att den som rör legobitarna måste ha ögonbindel.',
    resources: ['Lego'],
  },
  {
    id: 14,
    title: 'Rockringstrubbel',
    description:
      'Lagtävling där alla i laget ställer sig på rad och håller varandra i händerna. En av personerna i slutet av ledet får en rockring till sin fria hand och sen gäller det att trä rockringen genom alla personer i laget utan att släppa händerna. Tappar någon greppet måste rockringen börja om på personen innan. Snabbast att få rockringen till andra sidan ledet vinner.',
    resources: ['Rockringar'],
  },
  {
    id: 15,
    title: 'Kasta stövel',
    description:
      'Kasta en stövel så långt som möjligt genom att svinga den mellan benen. Fungerar både att kasta den framåt eller över ryggen, om än något farligare.',
    resources: ['Stövlar'],
  },
  {
    id: 16,
    title: 'Sänka pinne',
    description:
      'Ställ upp lagen på rad mitt emot varandra och med utsträckta armar pekandes med pekfingrarna. Lägg pinnen på fingrarna så de får balansera detta. Sedan gäller det att på given signal sänka pinnen mot marken utan att någon i laget inte nuddar pinnen. Alla måste alltså nudda pinnen hela tiden. Tips: Kvastskaft fungerar bra som pinnar!',
    resources: ['Långa pinnar'],
  },
  {
    id: 17,
    title: 'Sugproppskast',
    description:
      'Tänk dig kasta yxa fast istället för yxor så kastar ni avloppsrensare med sugpropp. Sätt upp en stor poängtavla där olika fält ger olika poäng, tex innerst 5 poäng, sen 3 poäng och ytterst 1 poäng. Därefter gäller det bara att hitta ett bra avstånd att kasta ifrån och låta det roliga starta.',
    resources: ['Avloppsrensare', 'Stor poängtavla'],
  },
  {
    id: 18,
    title: 'Pennan i flaskan',
    description:
      'Fäst en penna i ett snöre och knyt det runt midjan på deltagarna. Därefter gäller det att pricka pennan i en flaska genom att stå ovanför den och böja på benen.',
    resources: ['Snöre', 'Pennor', 'Flaskor'],
  },
  {
    id: 19,
    title: 'Tampongen i flaskan',
    description:
      'En variant på Pennan i flaskan. Fäst en tampong i ett snöre och knyt det runt midjan på deltagarna. Därefter gäller det att pricka tampongen i en flaska fylld med vatten genom att stå ovanför den och böja på benen. När tampongen doppas i vattnet i flaskan så kommer den svälla och då göra att deltagaren kan lyfta upp flaskan och springa med den i en bana. Passar perfekt för stafett.',
    resources: ['Snöre', 'Tamponger', 'Flaskor', 'Vatten'],
  },
  {
    id: 20,
    title: 'Kubbstafett',
    description:
      'Placera ut 5 kubbar i 2 olika rader och ställ lagen i lagom avstånd till sin rad. Därefter ska lagen kasta ner närmsta kubben, springa och hämta kastpinnen och lämna till nästa person som ska kasta. Första lag att få ner alla kubbar vinner.',
    resources: ['Kubb'],
  },
  {
    id: 21,
    title: 'Äta godissnöre',
    description:
      'Varje deltagare får ett varsnitt godissnöre, placerar ena änden i munnen och sätter händerna bakom ryggen. Sedan gäller det att äta upp det så snabbt som möjligt utan att använda händerna.',
    resources: ['Godissnören'],
  },
  {
    id: 22,
    title: 'Hakbollsrace',
    description:
      'Varje deltagare klämmer fast en tennisboll under hakan och sedan gäller det att så snabbt som möjligt ta sig igenom en bana och tillbaka in i mål. Passar perfekt som stafett för att köra i lag.',
    resources: ['Tennisbollar'],
  },
  {
    id: 23,
    title: 'Hakbollskram',
    description:
      'Laget ställer sig på rad nära varandra och skall flytta en tennisboll mellan varandra. Den första i laget klämmer fast bollen med hjälp av hakan, vänder sig till tvåan i laget som skall ta bollen och får bara använda hakan och bröstet. Det lag som är klara först vinner.',
    resources: ['Tennisbollar'],
  },
  {
    id: 24,
    title: 'Petflaskepost',
    description:
      'Varje lag ställer sig i en ring med varsin petflaska. Petflaskan ska sedan skickas runt mellan benen på varje lagmedlem. Tappar man flaskan måste man börja om. Första laget där alla fått flaskan vinner.',
    resources: ['Petflaskor'],
  },
  {
    id: 25,
    title: 'Funny Bunny',
    description:
      'Se vem som får in flest marshmallows i munnen. Börja med en och säg "funny bunny". Sedan två o.s.v. Flest marshmallows i munnen och fortfarande kan säga "funny bunny" vinner.',
    resources: ['Marshmallows'],
  },
  {
    id: 26,
    title: 'Pinka prick',
    description:
      'Varje deltagare ställer sig på lagom avstånd från ett glas som står på marken. Sedan får de en varsin PET-flaska som är fylld med vatten och där korken har ett litet hål. När signalen går så gäller det att placera flaskan mellan benen och klämma åt så att vattnet sprutar ur flaskan och ner i glaset. Mest vatten i glaset när tiden går ut har vunnit.',
    resources: ['PET-flaskor', 'Glas'],
  },
  {
    id: 27,
    title: 'Natursköna ord',
    description:
      'Varje lag får först välja ett varsitt ord med infon om att ju längre desto bättre. När de valt ord får de veta att de ska leta upp saker ur naturen som börjar på varje bokstav i ordet. Så tex om ordet är "kamrat" kan de hämta en kotte för K, ett asplöv för A osv.',
    resources: [],
  },
  {
    id: 28,
    title: 'Sugrör & Ärtor',
    description:
      'Lägg fram en tallrik med ärtor, en tom tallrik och ett sugrör till varje deltagare. Det gäller sedan att så snabbt som möjligt flytta alla ärtor till den tomma tallriken genom att suga fast dem med sugröret. För att köra i lag kan man istället köra flera tomma tallrikar på rad där ärtorna måste flyttas mellan varje och varje deltagare har en tallrik.',
    resources: ['Sugrör', 'Tallrikar', 'Ärtor'],
  },
  {
    id: 29,
    title: 'Pappersremsan',
    description:
      'Ett A4-papper ska rivas i en så lång sammanhängande remsa som möjligt. Går remsan sönder så är det den längden som gäller. Ge poäng för antingen längsta remsa eller för olika nivåer, tex 40cm ger 5 poäng men 50cm ger 10 poäng.',
    resources: ['Papper'],
  },
  {
    id: 30,
    title: 'Klädsnöre',
    description:
      'Här gäller det att så snabbt som möjligt trä ett snöre genom alla lagmedlemmars kläder, medan de fortfarande sitter på kroppen. Så snöret ska gå in genom vänster arm, ut genom vänster ben, in genom höger ben, ut genom höger arm och sedan börja om på samma sätt i nästa lagmedlem.',
    resources: ['Långt snöre'],
  },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // },
  // {
  //   id: ,
  //   title: '',
  //   description: '',
  //   resources: []
  // }
]
