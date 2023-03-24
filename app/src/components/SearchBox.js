import React from 'react';

import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

export default function SearchBox({ handleChangeTitle, handleClickSearch }) {

  function keyPress(e) {
    if (e.keyCode === 13) {
      handleClickSearch();
    }
  }

  return (
    <FormGroup row sx={{ justifyContent: 'right' }}>

      <TextField
        id="search"
        label="Title"
        type="search"
        size='small'
        sx={{ width: '40%', float: 'right' }}
        onChange={handleChangeTitle}
        onKeyDown={keyPress}
      />

      <Button
        variant="contained"
        size="small"
        onClick={handleClickSearch}
        l
        sx={{ ml: '10px' }}
      >
        Search
      </Button>

    </FormGroup>
  )

}
