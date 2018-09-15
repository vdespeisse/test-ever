import Sugar from 'sugar'
window.Sugar = Sugar
Sugar.Object.defineInstance({
  vl: Sugar.Object.values
  })

Sugar.Date.addLocale('fr', {
  plural: true,
  units: 'milliseconde:|s,seconde:|s,minute:|s,heure:|s,jour:|s,semaine:|s,mois,an:|s|née|nee',
  months: 'Janv:ier|,Févr:ier|+Fevr:ier|,Mars,Avr:il|,Mai,Juin,Juil:let|,Août,Sept:embre|,Oct:obre|,Nov:embre|,Déc:embre|+Dec:embre|',
  weekdays: 'dim:anche|,lun:di|,mar:di|,mer:credi|,jeu:di|,ven:dredi|,sam:edi|',
  numerals: 'zéro,un:|e,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
  tokens: "l'|la|le,er",
  short: '{dd}/{MM}/{yyyy}',
  medium: '{d} {month} {yyyy}',
  long: '{d} {month} {yyyy} {time}',
  full: '{weekday} {d} {month} {yyyy} {time}',
  stamp: '{dow} {d} {mon} {yyyy} {time}',
  time: '{H}:{mm}',
  past: '{sign} {num} {unit}',
  future: '{sign} {num} {unit}',
  duration: '{num} {unit}',
  timeMarkers: 'à',
  ampm: 'am,pm',
  modifiers: [
    { name: 'day', src: 'hier', value: -1 },
    { name: 'day', src: "aujourd'hui", value: 0 },
    { name: 'day', src: 'demain', value: 1 },
    { name: 'sign', src: 'il y a', value: -1 },
    { name: 'sign', src: "dans|d'ici", value: 1 },
    { name: 'shift', src: 'derni:èr|er|ère|ere', value: -1 },
    { name: 'shift', src: 'prochain:|e', value: 1 },
  ],
  parse: [
    '{months} {year?}',
    '{sign} {num} {unit}',
    '{0?} {unit:5-7} {shift}',
  ],
  timeParse: [
    '{day|weekday} {shift?}',
    '{weekday?},? {0?} {date}{1?} {months}\\.? {year?}',
  ],
  timeFrontParse: [
    '{0?} {weekday} {shift}',
    '{weekday?},? {0?} {date}{1?} {months}\\.? {year?}',
  ],
})


Sugar.Date.extend()
Sugar.Function.extend()
Sugar.Number.extend()
Sugar.String.extend()
Sugar.Array.extend()
Sugar.Object.extend({
  objectPrototype: true,
  methods: ['add', 'filter', 'find', 'keys', 'vl', 'map', 'reduce', 'some'],
})
