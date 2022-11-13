import DataViewer from "./components/DataViewer";
import dataArr from "./data";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.app}>
      {dataArr.map((dataObj) => {
        return <DataViewer data={{ ...dataObj }} key={dataObj.id} color={0} />;
      })}
    </div>
  );
};

export default App;
