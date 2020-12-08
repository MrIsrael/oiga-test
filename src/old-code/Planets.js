  const data = {
    values: [
      {
        'name': 'Naboo',
        'rotation_period': '26',
        'orbital_period': '312',
        'diameter': '12120',
        'climate': 'temperate',
        'gravity': '1 standard',
        'terrain': 'grassy hills, swamps, forests, mountains',
        'surface_water': '12',
        'population': '4500000000',
        'residents': [
          'http://swapi.dev/api/people/61/',
          'http://swapi.dev/api/people/66/'
        ],
        'films': [
          'http://swapi.dev/api/films/3/',
          'http://swapi.dev/api/films/4/',
          'http://swapi.dev/api/films/5/',
          'http://swapi.dev/api/films/6/'
        ],
        'created': '2014-12-10T11:52:31.066000Z',
        'edited': '2014-12-20T20:58:18.430000Z',
        'url': 'http://swapi.dev/api/planets/8/'
      }
    ],
    actions: [
      {
        label: 'Go to Films',
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
      }
    ]
  }