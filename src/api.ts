import axios from 'axios';
import { useSnackbar } from 'notistack';
import pako from 'pako';
import base64 from 'base64-js';

export function useAPI(snackbar: boolean = true) {
  const { enqueueSnackbar } = useSnackbar();
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    transformResponse: [resp => {
      //console.log(resp);
      const data = JSON.parse(resp);
      if (200 <= data.status && data.status < 300) {
        const gzipData = base64.toByteArray(data.data);
        return JSON.parse(pako.inflate(gzipData, { to: 'string' }));
      }
      if (snackbar) {
        enqueueSnackbar(data.message, {
          variant: 'error',
        });
      }
      return data;
    }],
  });
  return instance;
}