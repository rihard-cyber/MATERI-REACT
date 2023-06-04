import React from 'react';

const Input = (props) =>
  
    (<> <input
        type="button"
            onClick={props._ubahNama}
            Value="Klik Untuk Mengubah Nama"
         />
         <br />
         <label>Nama Baru </label>
         <input
            type="text"
            onBlur={(event) => props._ubahNama2(event.target.value)}
         />
         <br />
         <label>Umur Baru </label>
         <input
            type="number"
            onBlur={(event) => props._ubahUmur2(event.target.value)}
          />
     </>)

export default Input;