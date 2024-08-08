import { createContext, useContext } from "react";

export const themeContexts = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider =  themeContexts.Provider;

export const useTheme = () =>{
    return useContext(themeContexts);
}


// import { createContext, useContext } from "react";

// export const themeContexts = createContext({
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {}
// });

// export const ThemeProvider = themeContexts.Provider;

// export const useTheme = () => {
//     return useContext(themeContexts);
// };
