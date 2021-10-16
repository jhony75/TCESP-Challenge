import React from 'react';
import { saveAs } from "file-saver";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
// import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
// import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import styles from './download.module.css'


const faJsonIcon = <FontAwesomeIcon icon={faFileCode} />
// const faCsvIcon = <FontAwesomeIcon icon={faFileCsv} />
// const faOdtIcon = <FontAwesomeIcon icon={faFileExcel} />
// const faPdfIcon = <FontAwesomeIcon icon={faFilePdf} />

const saveFile = () => {

  saveAs(
    "","data.json"
  );
}

const Download = (data, filename) => {
  return(
    <div className={styles.GridContainer}>
    {/* <a id="download_link" download="my_exported_file.txt" href=”” >Download as Text File</a> */}
      <button
        className={styles.DownloadButton}
        onClick={() => saveFile()}
      >
        { faJsonIcon }
      </button>
      {/* <button
        className={styles.DownloadButton}
        onClick={saveFile}
      >
        { faCsvIcon }
      </button>
      <button
        className={styles.DownloadButton}
        onClick={saveFile}
      >
        { faOdtIcon }
      </button>
      <button
        className={styles.DownloadButton}
        onClick={saveFile}
      >
        { faPdfIcon }
      </button> */}
    </div>
  )
}

export default Download