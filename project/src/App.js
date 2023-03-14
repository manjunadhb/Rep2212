import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This heading is added by Manjunadh from Local Repository</h1>
      <h1>This is the heading added by other developer</h1>

      <h1>This is heading, added by sivamaheshallam </h1>
      <h1>This is the heading, added by sivamaheshallam </h1>
      <h1>this is heading added by Sunil kumar sahoo </h1>
      <h1>
        This is the fifth headings added by Imran Hussain from Local Repository
      </h1>
      <h1>
        This is the heading added by SivamaheshAllam from local Repository
      </h1>
      <h1>This is the heading added by Imran Hussain from github/remote repository</h1>

      <h1 style={{color: "blue"}}>Audio sections</h1>
      <div className="audioContainer">
      <img src="./images/man_meri_jaan_song.jpg"></img>
      <h2>Title: Mann Meri Jaan</h2>
      <audio src="./audio/man_meri_jaan.mp3" controls muted></audio>
    </div>

    <div className="audioContainer">
      <img src="./images/pathaan_poster.jpg"></img>
      <h2>Title: Jhoome Jo Pathaan</h2>
      <audio src="./audio/jhume_jo_pathaan.mp3" controls muted></audio>
    </div>

    <div className="audioContainer">
      <img src="./images/Manike-From-Thank-God.jpg"></img>
      <h2>Title: Manike_Mange</h2>
      <audio src="./audio/manike_songs.mp3" controls muted></audio>
    </div>

    <div className="audioContainer">
      <img src="./images/meri_jindahi_h_tu.jpg"></img>
      <h2>Title: Meri Jindagi hai</h2>
      <audio src="./audio/Meri_jindagi_hai_tu.mp3" controls muted></audio>
    </div>

    <div className="audioContainer">
      <img src="./images/Pyaar-Karte-Ho-Na.jpg"></img>
      <h2>Title: Pyar karte ho na</h2>
      <audio src="./audio/pyar karte ho na.mp3" controls muted></audio>
    </div>

    </div>
  );
}


export default App;
