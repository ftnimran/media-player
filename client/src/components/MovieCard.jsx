import { Link } from "react-router-dom";

export default function MovieCard({ media }) {
  return (
    <Link to={`/player/${media.id}`}>
      <div style={{border:"1px solid gray",padding:10}}>
        <img src={media.thumbnail} width="100%" />
        <h3>{media.title}</h3>
      </div>
    </Link>
  );
}
