import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Table from "./Table";
function Todo({ todoData, setTodoData }) {
  return (
    <Tabs mt={25}>
      <TabList>
        <Tab>My Todos</Tab>
        <Tab>Completed Todos</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Table
            isComplete={false}
            rowData={todoData.filter((el) => el.isComplete === false)}
            setTodoData={setTodoData}
          />
        </TabPanel>
        <TabPanel>
          <Table
            isComplete={true}
            rowData={todoData.filter((el) => el.isComplete === true)}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Todo;
