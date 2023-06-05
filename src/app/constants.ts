export const games: listItem[] = [
{ name: 'God of War', status: 'Completed', rank: 1}, 
{ name: 'Last of Us', status: 'Started', rank:2},
{ name: 'Persona 3 Portable', status: 'Completed', rank: 3},
{ name: 'Persona 4 Golden', status: 'Completed', rank: 4},
{ name: 'Animal Crossing: New Horizons', status: 'Started', rank: 5}
];

export const movies: string[] = [
    'Dark Knight',
    'Saw',
    'Fellowship of the Ring',
    'The Two Towers',
    'Dune',
    'A New Hope',
    'Shutter Island'
];

export const shows: string[] = [
    'Masterchef',
    'Masterchef Junior',
    'Bobs Burgers',
    'JoJo'
];

export const items: string[] = [
    'eating',
    'cleaning',
    'driving'
];

export interface listItem {
    name: string;
    rank?: number;
    status: string;
}