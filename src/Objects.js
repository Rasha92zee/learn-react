import './App.css';

const content = "Cybersquare professional";
const obj = {"title":"Cybersquare", "name":"Baabtra"};

function Objects() {
  return (
    <div>
      <h1>{content}</h1>
      <p>{obj.title} courses provided by {obj.name}</p>
    </div>
  );
}

export default Objects;