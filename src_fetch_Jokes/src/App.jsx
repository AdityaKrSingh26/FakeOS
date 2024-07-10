import FlexBox from "./components/FlexBox/FlexBox";
// import Card from "./components/Card/Card";
// import taskList from "./data/data.json";
import JokesLoaderContainer from "./containers/JokesLoaderContainer";

function App() {
  return (
    <>
      <FlexBox>
        <JokesLoaderContainer />
        {/* {taskList.map((taskList) => (
          <Card task={taskList.task} priority={taskList.priority} />
        ))} */}
      </FlexBox>
    </>
  );
}

export default App;
