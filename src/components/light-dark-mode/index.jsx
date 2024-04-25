
import './theme.css';
import useLocalStorage from './useLocalStorage';

export default function ThemeChanger(){
   const [theme,setTheme] = useLocalStorage('theme','light');

   const btnToggle = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }

   console.log(theme);


   return(
      <div className="dark-light-container" data-theme={theme}>
         <div className="container">
            <p>Hello World</p>
            <button onClick={btnToggle}>Change Theme</button>
         </div>
      </div>
   )
}