const translations = {
  "select" : {},
  "malay" : {
    "Hi" : "Hai",
    "Welcome" : "Selamat Datang",
    "Goodbye" : "Selamat Tinggal",
  },
  "spanish" : {
    "Hi" : "Hola",
    "Welcome" : "Bienvenido",
    "Goodbye" : "Adios",
  },
};

export function translate(language, inputText) {
  const word =  translations[language][inputText];

  if (word) {
    return `Translation: ${word}`;
  } else {
    return "Input not found or language not choossed";
  }
};
