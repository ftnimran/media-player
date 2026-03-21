import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/media")
      .then(res => setData(res.data));
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>Media Player</h1>
      <a href="/upload">Upload</a>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
        {data.map(m => <MovieCard key={m.id} media={m} />)}
      </div>
    </div>
  );
}
