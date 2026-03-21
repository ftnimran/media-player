import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Player() {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/media/${id}`)
      .then(res => setMedia(res.data));
  }, [id]);

  if (!media) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{media.title}</h2>
      <video controls width="100%">
        <source src={media.videoUrl} />
      </video>
    </div>
  );
}
