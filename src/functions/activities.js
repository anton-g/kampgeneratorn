exports.handler = async (event, context) => {
  const count =
    !event.queryStringParameters.count || event.queryStringParameters.count > 10
      ? 3
      : event.queryStringParameters.count

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
      'Varje deltagare sätter en klädgalge mellan sina knän, klämmer fast ett mynt i ett av sina ögon och håller i en galge med båda händerna som ett styre. När startsignalen går så ska man ta sig genom en bana och tillbaka igen. Tappar en deltagare något måste hen börja om några steg tillbaka. Snabbast vinner. För att köra i lag fungerar stafett alldeles utmärkt.',
    resources: ['Klädgalgar', 'Mynt'],
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
    resources: ['Kubbspel'],
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
      'Varje lag ställer sig i en ring med varsin petflaska. Petflaskan ska sedan skickas runt mellan benen på varje lagmedlem. Tappar man flaskan måste man börja om på personen som nyss klarade av att skicka flaskan. Första laget där alla fått flaskan vinner.',
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
  {
    id: 31,
    title: 'Bomullsnos',
    description:
      'Förbered leken genom att placera ut stolar med några meters mellanrum. På den ena stolen ställs en skål med bomullstussar och på den andra stolen placeras en tom skål. Tävlingsdeltagarna får sedan en klick vaselin på näsan. Nu gäller det för deltagarna att på 2 minuter förflytta flest bomullstussar från den ena skålen till den andra utan att använda något annat än sin näsa. Det gäller alltså att skaka och kränga med huvudet tills bomullstussen lossnar och förhoppningsvis hamnar i skålen.',
    resources: ['Bomullstussar', 'Skålar', 'Vaselin'],
  },
  {
    id: 32,
    title: 'Flytta vatten',
    description:
      'För varje deltagare eller lag, placera ut två hinkar på lagom avstånd från varandra och fyll den ena med vatten. Sedan gäller det att flytta vattnet från den fyllda hinken till den tomma genom att endast använda en tvättsvamp. Snabbast vinner. Passar utmärkt för att köra stafett.',
    resources: ['Hinkar', 'Tvättsvampar', 'Vatten'],
  },
  {
    id: 33,
    title: 'Förflytta frukt',
    description:
      'Här gäller det för två personer att förflytta en frukt, tex en apelsin, en viss sträcka genom att klämma ihop frukten mellan sina magar och hålla händerna bakom ryggen. Tappas frukten måste man plocka upp den igen och börja om några steg tillbaka.',
    resources: ['Runda frukter'],
  },
  {
    id: 34,
    title: 'Irländsk julafton',
    description:
      'Lägg ut en lagom lång pinne ca 15 meter framför varje lag eller deltagare. När startskottet går ska deltagarna springa fram till sina pinnar, ställa dessa upp så att ena änden är mot marken och sedan sätta sin panna mot den andra. Sen ska man snurra 5-10 varv runt sin pinne och därefter ta sig tillbaka till startlinjen så snabbt som möjligt. Funkar även utmärkt som stafett.',
    resources: ['Långa pinnar'],
  },
  {
    id: 35,
    title: 'Megaporträtt',
    description:
      'Här gäller det att rita av någonting på flera papper i ett blädderblock, med twisten att pappren inte får tas bort från blädderblocket. Så deltagaren från veta att 16 papper måste användas och att de sedan kommer läggas upp i ett 4x4 rutnät, och då gäller det att använda alla papper för att försöka rita så att motivet blir fint när papprena läggs ihop. Roligast om det är ett blädderblock i A3-storlek.',
    resources: ['Blädderblock', 'Pennor'],
  },
  {
    id: 36,
    title: 'Ballongdjursagility',
    description:
      'Varje lag får varsin petwalker-ballong och får direkt uppgiften att döpa den. När de är döpta så gäller det för deltagarna att guida sina djur runt en hinderbana med diverse hinder, tex balansgång, hoppa över eller gå under något, etc. Efter varje hinder måste djuret högljutt få beröm och då även namnet användas. Det måste se ut som att djuret går så man får inte bara dra ballongen efter sig. Snabbast runt vinner, fungerar fint som stafett.',
    resources: ['Petwalker-ballonger', 'Helium', 'Hinder'],
  },
  {
    id: 37,
    title: 'Skattjakt',
    description:
      'Här gäller det för lagen att samla ihop så många saker på listan som möjligt på en viss tid. Endast fantasin sätter gränser på saker men här är några exempel: En kotte, något som börjar på G, en pensionär, något rosa, en odiskad tallrik, något man inte vill röra, två likadana mössor, och så vidare.',
    resources: ['Lista över saker'],
  },
  {
    id: 38,
    title: 'Spotta råtta',
    description:
      'Varje deltagare ska försöka spotta en geléråtta så långt som möjligt. Man får inte bita av någon del av råttan utan den måste vara hel. Längst vinner. Vid lagtävling kan nästa person i laget fortsätta från där råttan landade.',
    resources: ['Geléråttor'],
  },
  {
    id: 39,
    title: 'Kextrapets',
    description:
      'Varje deltagare sitter på en stol med huvudet lutat bakåt och får ett kex placerat på pannan. Vid given signal gäller det att snabbast äta upp kexet utan att använda händerna. Ramlar det ner får man placera det i pannan igen.',
    resources: ['Kex'],
  },
  {
    id: 40,
    title: 'Klä av toarullen',
    description:
      'Alla deltagare förses med varsin toarulle. När startsignalen går gäller det att snabbast få av allt papper från sin rulle för att sedan ropa “Jag är färdig!” igenom rullen.',
    resources: ['Toapapper'],
  },
  {
    id: 41,
    title: 'Limbo',
    description:
      'Låt deltagarna, en och en, gå under en pinne som två personer håller i utan att nudda den. Man får inte sätta händerna i marken och man måste böja sig bakåt. För varje omgång sänks pinnen till en lägre nivå.',
    resources: ['Pinne'],
  },
  {
    id: 42,
    title: 'Tennisboll i strumpbyxa',
    description:
      'Ställ upp ett antal flaskor fyllda med lite vatten på marken för varje deltagare. Lägg en tennisboll i en strumpbyxa för varje deltagare som ska köra. Sedan gäller det för deltagarna att trä strumpbyxan på huvudet och med händerna bakom ryggen så snabbt som möjligt välta sina flaskor genom att svinga tennisbollen på dem.',
    resources: ['Tennisbollar', 'Strumpbyxor', 'Flaskor', 'Vatten'],
  },
  {
    id: 43,
    title: 'Gemkedja',
    description:
      'Lägg upp gem i lika många skålar som antalet deltagare/lag. Sedan gäller det helt enkelt att på en viss tid sätta ihop så många gem som möjligt till en kedja.',
    resources: ['Gem', 'Skålar'],
  },
  {
    id: 44,
    title: 'Klädnypor i ansiktet',
    description:
      'Sätt så många klädnypor i ansiktet som möjligt på 1 minut. Om klädnypor känns smärtsamt så kan de bytas ut mot Ahlgrens bilar som ska klistras fast i ansiktet efter en kort ajour i munnen.',
    resources: ['Klädnypor'],
  },
  {
    id: 45,
    title: 'Tårtbygge',
    description:
      'Här behövs inget annat en massor av material för att göra tårtor. Sedan gäller det att bygga den högsta, snyggaste, roligaste eller knasigaste tårtan som då bedöms av en dommare.',
    resources: ['Tårtmaterial'],
  },
  {
    id: 46,
    title: 'Ballongblåsning',
    description:
      'Blås upp en ballong tills den smäller på så kort tid som möjligt.',
    resources: ['Ballonger'],
  },
  {
    id: 47,
    title: 'Tugga Brio',
    description:
      'Alla tävlande ska äta en påse Brio. Först klar gapar och visar en tom mun.',
    resources: ['Brio'],
  },
  {
    id: 48,
    title: 'Sockermunken',
    description:
      'Ät en sockrad munk utan att slicka dig om munnen. Först klar utan att ha slickat sig om munnen vinner.',
    resources: ['Sockermunkar'],
  },
  {
    id: 49,
    title: 'Ballongkull',
    description:
      'Alla tävlande får två ballonger att knyta fast runt foten. Sen ska du försöka spränga ballongerna på din motståndares fötter genom att springa runt och jaga varandra. Sisten kvar vinner. Går även att dela ',
    resources: ['Ballonger', 'Snöre'],
  },
  {
    id: 50,
    title: 'Kubbtorn',
    description:
      'Här gäller det att på en begränsad tid bygga upp ett torn med hjälp av alla delar i ett kubbspel. Högst torn som inte faller på 20-30 sekunder vinner.',
    resources: ['Kubbspel'],
  },
  {
    id: 51,
    title: 'Plocka potatis',
    description:
      'Rulla ihop pappren till strutar som deltagarna får sätta över ansiktet så att de bara ser ut ur ett litet hål. Sprid ut potatis på marken över ett lite större område. Sedan gäller det för alla att springa runt och plocka så mycket potatis som möjligt på en utsatt tid. Tänk på risken att krocka eftersom man ej ser så bra.',
    resources: ['Stora papper', 'Potatis'],
  },
  {
    id: 52,
    title: 'Färg och form',
    description:
      'Först får alla deltagare skriva två lappar, en med ett föremål och en med en färg, och läggs sedan i två högar. Sedan får varje lag dra en lapp ur varje hög och då gäller det att så snabbt som möjligt hitta det föremålet på lappen i färgen på den andra lappen.',
    resources: ['Papper', 'Pennor'],
  },
  {
    id: 53,
    title: 'Potatisremsa',
    description:
      'Plocka fram ett gäng med verktyg och redskap, tex hammare, skohorn, kapsylöppnare, träslev, kniv etc. Be sedan varje deltagare/lag att välja 1-2 verktyg utan att berätta vad som ska ske härnäst. När det är gjort så gäller det för deltagarna att med sina verktyg skapa en så lång sammanhängande bit potatis som möjligt. Längst potatis vinner.',
    resources: ['Potatisar', 'Verktyg/redskap'],
  },
  {
    id: 54,
    title: 'Sista slaget',
    description:
      'En lite större spik slås fast lite lätt i en träbit. Sedan gäller det för deltagarna att turas om att slå ned spiken med hammaren. Den som slår det slaget som får spiken att vara helt nerspikad vinner. Ett enkelt sätt att testa om den är helt nerspikad är att dra ett kreditkort eller liknande över spiken och känna om det tar emot.',
    resources: ['Hammare', 'Spik', 'Träbit'],
  },
  {
    id: 55,
    title: 'Banan runt midjan',
    description:
      'Knyt en banan runt midjan så att den hänger ner mellan benen. Sedan gäller det för deltagarna att flytta en tennisboll fram och tillbaka runt en markering genom att svinga bananen. Försten tillbaka vinner. Går lätt att göra till stafett för lagtävlingar.',
    resources: ['Bananer', 'Snöre', 'Tennisbollar'],
  },
  {
    id: 56,
    title: 'Ett långt sugrör',
    description:
      'Köp ett långt sugrör eller tejpa ihop flera små till ett långt. Sedan gäller det att lyfta 5-10 godisar (tex Brio) ur en hög mugg så snabbt som möjligt genom att bara använda sugröret.',
    resources: ['Sugrör', 'Brio', 'Muggar'],
  },
  {
    id: 57,
    title: 'Nynna låten',
    description:
      'En person i varje lag får sätta på sig hörlurar och lyssna på en låt. Sedan ska personen få sina lagkamrater att gissa rätt låt genom att humma utan att öppna munnen. Såklart får man inte säga ord eller göra rörelser för att hjälpa till. Kom ihåg att kolla så att man inte hör musiken utanför hörlurarna.',
    resources: ['Hörlurar'],
  },
  {
    id: 58,
    title: 'Pingisblås',
    description:
      'Placera fyra flaskor med en pingisboll på toppen av varje flaska. Framför flaskorna ställer du fyra glas med vatten i med olika avstånd till flaskorna. Sen ska de tävlande på kortast tid blåsa ner pingisbollarna i respektive vattenglas.',
    resources: ['Flaskor', 'Pingisbollar', 'Glas'],
  },
  {
    id: 59,
    title: 'Stå upp',
    description:
      'Två personer från laget sätter sig rygg mot rygg med fötterna rakt ut och krokar ihop armarna. På startsignalen ska lagen utan hjälp av händerna resa sig upp så snabbt som möjligt. Laget som först står upp har vunnit.',
    resources: [],
  },
  {
    id: 60,
    title: 'Gissa vikten',
    description:
      'Här gäller det varje lag/deltagare att försöka samla ihop något som väger en viss vikt, tex 20kg. När man valt ut något man tror har rätt vikt så väger man det på vågen (tex en badrumsvåg) och ser vem som var närmast.',
    resources: ['Våg'],
  },
  {
    id: 61,
    title: 'Jättesäckhoppning',
    description:
      'Här gäller det att hoppa säck i grupp, så säckarna behöver vara tillräckligt stora för att minst 3-4 personer ska få plats i dem. Det går tex att använda "Big Bags" som används för byggavfall. I övrigt är reglerna samma som vid vanlig säckhoppning. Försten in i mål vinner.',
    resources: ['Jättestora säckar'],
  },
  {
    id: 62,
    title: 'Vika flygplan',
    description:
      'I lag om två och två ska varje lag vika ett pappersflygplan med målet att det ska flyga så långt som möjligt. Twisten är att varje person bara får använda 1 hand för att vika planet, medan den andra hålls bakom ryggen. När planen är färdigvikta så kastas de alla från samma plats för att mäta vilken som flyger längst.',
    resources: ['Papper'],
  },
  {
    id: 63,
    title: 'Fotbollsbowling',
    description:
      'Ställ upp tio koner som bowlingkäglor. Sedan gäller det att få ner så många käglor som möjligt genom att sparka en fotboll på dem från en viss punkt.',
    resources: ['Koner', 'Fotboll'],
  },
  {
    id: 64,
    title: 'Blixtluffarschack',
    description:
      'Skapa ett spelbräde för luffarschack på något lämpligt sätt och dela upp deltagarna i två lag. Lagen ställer sedan upp sig led ett antal meter från spelbrädet och på startsignalen så springer varje lags första deltagare fram och placerar sitt lags tecken på spelbrädet. Sedan springer deltagaren tillbaka igen och växlar till nästa person som gör samma sak. Båda lagen gör det alltså samtidigt och man behöver inte följa någon turordning mellan lagen. Första laget som får 3 i rad vinner.',
    resources: ['Spelbräde'],
  },
  {
    id: 65,
    title: 'Fotbollscurling',
    description:
      'Skapa ett bo likt det i vanlig curling med tex ett hopprep eller genom att måla på marken. Därefter får deltagarna ställa sig på lagom avstånd och försöka sparka fotbollen så att den stannar i boet. Om ni har flera fotbollar så kan ni fortsätta med regeln att närmast boet får poäng.',
    resources: ['Fotbollar', 'Markeringar'],
  },
  {
    id: 66,
    title: 'Tandpetartorn',
    description:
      'Tre tandpetare placeras på en platt yta i en formation som en triangel där ändarna korsar varandra längst ut. Därefter gäller det för deltagarna att lägga på en tandpetare i samma mönster för att fortsätta bygga tornet. Den som lägger tandpetaren som tippar tornet förlorar. För att kora vinnare kan man spela flera omgångar där förloraren ej är med i nästkommande.',
    resources: ['Tandpetare'],
  },
  {
    id: 67,
    title: 'Tandemskidor',
    description:
      'En klassiker där man bygger ett par skidor med hjälp av brädor och gör öglor för fötter med spik och snöre. På varje skidpar sätter man flera öglor så det blir plats för 4-5 personer. Därefter gäller det för varje lag att ta plats på sina skidor och gemensamt ta sig igenom en bana så snabbt som möjligt.',
    resources: ['Brädor', 'Spik', 'Snöre'],
  },
  {
    id: 68,
    title: 'Kubben på kungen',
    description:
      'Sätt en kubb ovanpå kungen och försök fälla den utan att också kungen tippar.',
    resources: ['Kubbspel'],
  },
  {
    id: 69,
    title: 'Skruvar och muttrar',
    description:
      'Varje lag får en likadan hög med olika skruvar och muttrar och sedan gäller det att så snabbt som möjligt skruva ihop rätt skruv med rätt mutter.',
    resources: ['Skruvar', 'Muttrar'],
  },
  {
    id: 70,
    title: 'Legobilen',
    description:
      'I denna kamp i två delar gäller det att först bygga ihop en legobil. När det är klart fäster man ett långt snöre i fronten på bilen och i andra änden knyter man fast en penna som det går att snurra upp snöret på. När det är dags för att tävla så placerar alla deltagare sina bilar och drar sen ut snöret till sin fulla längd. Sedan gäller det att snurra upp snöret på pennan och på så sätt få bilen att åka mot sig. Inte tillåtet att rycka eller dra i snöret och först över mållinjen vinner.',
    resources: ['Lego', 'Snöre', 'Pennor'],
  },
  {
    id: 71,
    title: 'Väggen',
    description:
      'Varje lag ställer sig på ett led 4-5 meter från en vägg. Sedan ska en deltagare ur varje lag ta på sig en ögonbindel, sätta händerna bakom ryggen och gå mot väggen. Målet är att stanna så nära väggen som möjligt utan att nudda den. Om man nuddar väggen är man ute. Det lag som står närmast väggen får 1 poäng och sen fortsätter man med resten i laget.',
    resources: ['Ögonbindlar'],
  },
  {
    id: 72,
    title: 'Äggrullning',
    description:
      'Varje deltagare ska rulla ett ägg så långt som möjligt utan att det går sönder. Om man inte har någon bra plan mark att köra på går det även att lägga upp plankor som plan.',
    resources: ['Ägg'],
  },
  {
    id: 73,
    title: 'Tidbana',
    description:
      'Skapa en bana som deltagarna ska ta sig fram på. Det spelar ingen större roll hur lång eller kort banan. Sedan får deltagarna ta sig runt banan på vilket sätt de vill och när de kommer i mål så antecknas tiden. Lite senare får de ta sig runt banan en gång till, men då gäller det att göra det på samma tid som tidigare. Den med minst tidsskillnad mellan omgångarna vinner.',
    resources: [],
  },
  {
    id: 74,
    title: 'Huvudboll',
    description:
      'Här gäller det att driva en boll en viss sträcka, runda ett märke och tillbaka igen. Twisten är att man får bara nudda bollen med huvudet. Fungerar fint som stafett och med olika bollar!',
    resources: ['Bollar'],
  },
  {
    id: 75,
    title: 'Minnesstafett',
    description:
      'Lägg en av grupperna med saker i en hög på en plats som inte syns från långt håll. Ställ sedan den andra gruppen på ett led ca 10 meter bort men som inte syns från den första platsen.. Det gäller sedan för deltagarna att springa från högen med saker till den andra platsen, titta hur sakerna står uppställda, springa tillbaka och försöka ställa upp högen med saker på exakt samma sätt. Sakerna måste alltså stå i exakt rätt ordning men också vända åt rätt håll och så vidare. Man får springa flera gånger, men inte ta med sig några saker eller ta kort. Snabbast vinner.',
    resources: ['Två likadana grupper av saker'],
  },
  {
    id: 76,
    title: 'Smakleken',
    description:
      'Välj ut ett antal "smaker" utifrån antalet i varje lag. En person i laget får komma in i ett rum och genom blindtest smaka från en liten sked eller liknande och sen gissa vad det är. Några smaker kan tex vara gräddfil, senap, kapris etc.',
    resources: ['Saker som smakar'],
  },
  {
    id: 77,
    title: 'Gåtan',
    description:
      'Ett upplägg stulet direkt från Fångarna på Fortet. En deltagare får gå till en gåtmästare och försöka svara på en gåta för att vinna poäng.',
    resources: [],
  },
  {
    id: 78,
    title: 'Rulla sovsäck',
    description:
      'Istället för att hoppa säck så kan man rulla sovsäck. Snabbast från punkt A till B vinner. Går enkelt att göra till stafett genom att ha flera sovsäckar eller att laget måste använda samma och byta vid växling.',
    resources: ['Sovsäckar'],
  },
  {
    id: 79,
    title: 'Blindbock',
    description:
      'En person i laget får ögonbindel och ska sedan ta sig från punkt A till B med hjälp av sina skrikande lagkamrater. Här går det också att variera mycket genom att tex göra en hinderbana eller att deltagaren måste bära med sig ett par hinkar med vatten eller liknande.',
    resources: ['Ögonbindlar'],
  },
  {
    id: 80,
    title: 'Nypa nypor',
    description:
      'Sätt upp en tvättlina och sätt fast massor av klädnypor i olika färger. Här gäller det sen för deltagarna att plocka flest nypor i sitt lags färg och ta de tillbaka till laget. Man får dock endast använda 1 hand. Tappar man en klädnypa måste man släppa alla och springa tillbaka till laget för att byta.',
    resources: ['Klädlina', 'Klädnypor'],
  },
]
