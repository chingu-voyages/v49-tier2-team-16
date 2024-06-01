import './App.css';
import Header from './Header';

import UserData from './components/UserData';
import DisplayColours from './components/DisplayColours';

function App() {
  const colors = [
    {
      name: "Complementary Blue",
      hex: "#00f",
      description: "A bright, electric blue that provides a striking contrast to the fiery red."
    },
    {
      name: "Analogous Green",
      hex: "#34c759",
      description: "A muted, earthy green that creates a harmonious balance with the bold red."
    },
    {
      name: "Triadic Yellow",
      hex: "#ffff00",
      description: "A vibrant, sunny yellow that provides a playful contrast to the intense red."
    },
    {
      name: "Split-Complementary Purple",
      hex: "#800080",
      description: "A rich, jewel-toned purple that adds depth and sophistication to the color scheme."
    }
  ]
  return (
    <>
      <Header />
      <UserData />
      <DisplayColours colors={colors} />
    </>
  );
}

export default App;
