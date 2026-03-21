import { useState, useEffect } from "react";
import axios from "axios";

export default function Upload() {
  const [form, setForm] = useState({
    title: "",
    videoUrl: "",
    thumbnail: ""
  });

  const [data, setData] = useState([]);

  // 🔄 Fetch data
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/media");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ➕ Upload
  const submit = async () => {
    await axios.post("http://localhost:5000/api/media", form);

    // reset form
    setForm({ title: "", videoUrl: "", thumbnail: "" });

    // refresh list
    fetchData();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Upload Media</h1>

      {/* Form */}
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      /><br/>

      <input
        placeholder="Video URL"
        value={form.videoUrl}
        onChange={e => setForm({ ...form, videoUrl: e.target.value })}
      /><br/>

      <input
        placeholder="Thumbnail URL"
        value={form.thumbnail}
        onChange={e => setForm({ ...form, thumbnail: e.target.value })}
      /><br/>

      <button onClick={submit}>Upload</button>

      <hr />

      {/* 🎬 Uploaded List */}
      <h2>Uploaded Media</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 10
      }}>
        {data.map(item => (
          <div key={item.id} style={{ border: "1px solid gray", padding: 10 }}>
            <img src={item.thumbnail} width="100%" />
            <h3>{item.title}</h3>

            <video width="100%" controls>
              <source src={item.videoUrl} />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}