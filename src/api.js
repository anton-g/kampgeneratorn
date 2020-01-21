export const getActivities = async count => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tempData.slice(0, count))
    }, 200)
  })
}

const tempData = [
  {
    id: 1,
    title: 'Spiktävling',
    description: 'Spika ner ett antal spikar i en bräda på kortast tid.',
    resources: ['Hammare', 'Spik', 'Bräda']
  },
  {
    id: 2,
    title: 'Visseltävling',
    description:
      'Varje deltagare stoppar samtidigt in 3-4 kex i munnen och sedan gäller det att vara först med att vissla en melodi.',
    resources: ['Torra kex']
  },
  {
    id: 3,
    title: 'Grevinnan och betjänten',
    description:
      'Utförs i par och varje par får 2 tidningar. Sedan går det ut på att transportera sig en viss sträcka där den ena deltagaren endast får stå på tidningarna och den andra får flytta på dem.',
    resources: ['Tidningar']
  },
  {
    id: 4,
    title: 'Äggstafett',
    description:
      'Deltagarna delas upp i lag, varje lag får en sked och ett ägg. Lagen ställer upp på led längs en startlinje. När startskottet går ska förste man springa en i förväg utstakad bana med ägget i skeden utan att tappa det. Skulle man tappa det får man stanna upp, lägga ägget tillrätta och sedan springa vidare. Det är inte tillåtet att hålla fast ägget mot skeden.',
    resources: ['Ägg', 'Skedar']
  },
  {
    id: 5,
    title: 'Godisstafett',
    description:
      'Med händerna bakom ryggen ska deltagarna tävla i att äta upp en lakritsrem snabbast. Denna lek fungerar även som stafett med lag.',
    resources: ['Godissnöre']
  }
]
