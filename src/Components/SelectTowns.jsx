import * as React from 'react';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
      
      <Autocomplete
        freeSolo
        className='border-b-2 border-white pt-4'
        id="free-solo-1-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputLabelProps={{
                sx: { color: "grey" },
              }}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { color: "white" }
            }}
          />
        )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Albacete ' },
  { title: 'Alicante '},
  { title: 'Almería '},
  { title: 'Asturias '},
  { title: 'Ávila  '},
  { title: 'Badajoz '},
  { title: 'Barcelona'},
  { title: 'Burgos '},
  { title: 'Cáceres '},
  { title: 'Balearic Islands'},
  { title: 'Cádiz '},
  { title: 'Cantabria '},
  { title: 'Castellón '},
  { title: 'Ciudad Real '},
  { title: ' Córdoba '},
  { title: 'Coruña '},
  { title: 'Cuenca '},
  { title: 'Girona '},
  { title: 'Granada '},
  { title: 'Guadalajara '},
  { title: 'Guipúzcoa '},
  { title: ' Huelva '},
  { title: 'Huesca '},
  { title: 'Jaén '},
  { title: 'León '},
  { title: 'Lérida '},
  { title: 'Lugo '},
  { title: 'Madrid '},
  { title: 'Málaga '},
  { title: 'Murcia '},
  { title: 'Navarra '},
  { title: 'Ourense '},
  { title: 'Palencia '},
  { title: 'Pontevedra '},
  { title: 'Salamanca '},
  { title: 'Segovia '},
  { title: 'Sevilla '},
  { title: 'Soria '},
  { title: 'Tarragona '},
  { title: 'Teruel '},
  { title: 'Toledo '},
  { title: 'Valencia '},
  { title: 'Valladolid '},
  { title: 'Zamora '},
  { title: 'Zaragoza'},
];
