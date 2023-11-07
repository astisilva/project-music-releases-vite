import { Header } from "./Header";
import { Album } from './Album'

import data from "./data.json";

console.log(data);

export const App = () => {
  console.log(data)
  return (
    <div>
      <Header />
      <div className="albums"> {data.albums.items.map((album) => (
        <Album key={album.id} album={album} />
      ))}
      </div>
    </div>
  )
};
