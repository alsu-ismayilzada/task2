import Wine from "./Wine";

export default function App() {
  return <div><Wine
     title = "Sparkling wine Le Grand Noir Brut Reserve Rose"
     description = "France,rose,0.75l."
     rating = {3.6}
     like = {true}
       />
       <Wine 
     title = "Wine"
     description = "Italy,rose,0.5l."
     rating = {3.6}
     like = {false}
       />
       </div>
}
