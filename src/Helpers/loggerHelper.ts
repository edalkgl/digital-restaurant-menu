const isDev = process.env.NODE_ENV === 'development';

export const Logger = {
  log(message: any, ...optionalParams: any[]) {
    if (isDev) {
      console.log(message, ...optionalParams);
    }
  },
  table(message: any, ...optionalParams: any[]) {
    if (isDev) {
      console.table(message, ...optionalParams);
    }
  },
  error(message: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams);
  },
  warn(message: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }
};
