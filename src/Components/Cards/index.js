export default function Cards(props) {
  const { icon, title, details } = props;
  return (
    <>
      <div className="card">
        <div className="cardcontent">
          {icon}
          <h2>{title}</h2>
          <p className="cardcontents">{details}</p>
        </div>
      </div>
    </>
  );
}
