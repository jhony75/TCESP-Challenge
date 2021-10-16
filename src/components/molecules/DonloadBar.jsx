import React from 'react';

import  {JsonIcon, CsvIcon, OdtIcon, PdfIcon}  from '../atoms/Download'

const DownloadBar = () => {
  return(
    <>
      <h1>Download Icons</h1>
        <p>Json icon:{JsonIcon}</p>
        <p>Csv icon:{CsvIcon}</p>
        <p>Odt icon:{OdtIcon}</p>
        <p>PDF icon:{PdfIcon}</p>
    </>
  )
}

export default DownloadBar