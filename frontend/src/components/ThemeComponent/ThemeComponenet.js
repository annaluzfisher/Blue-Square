import LazyImage from './LazyImage';
import './themecomponent.css'

function ThemeComponenet() {
  return (
    <div className="theme-component">
      <LazyImage text={"ROCK"} />
      <LazyImage text={"CAMPING"} />
      <LazyImage text={"HELMETS"} />
      <LazyImage text={"FOOTWARE"} />
    </div>
  );
}

export default ThemeComponenet;