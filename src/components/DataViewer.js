import style from "./DataViewer.module.css";

const DataViewer = ({ data, nested, color }) => {
  const colors = [
    "#A0E4CB",
    "#5DA7DB",
    "#7DE5ED",
    "#F8C4B4",
    "#7978FF",
    "#749F82",
    "#98A8F8",
    "#D58BDD",
  ];
  return (
    <div
      className={style["main-container"]}
      style={{
        backgroundColor: colors[color],
        minWidth: `${nested ? "200px" : "300px"}`,
        marginLeft: `${nested ? "auto" : ""}`,
      }}
    >
      <p>Id: {data.id}</p>
      <p>Site Name: {data.name}</p>
      <a href={`http://${data.url}`} target="_blank" rel="noreferrer">
        <p>Site Url: {data.name}</p>
      </a>
      {data.subData?.map((data) => {
        return (
          <DataViewer data={data} key={data.id} nested color={color + 1} />
        );
      })}
    </div>
  );
};

export default DataViewer;
