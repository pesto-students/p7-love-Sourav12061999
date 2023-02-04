import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
function TableComp({ isComplete, rowData, setTodoData }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Heading</Th>
            <Th>Description</Th>
            <Th>Deadline</Th>
            {!isComplete ? <Th>Mark Complete</Th> : null}
          </Tr>
        </Thead>
        <Tbody>
          {rowData.map(({ isCompleted, title, deadline, description }) => (
            <Tr>
              <Td>{title}</Td>
              <Td>{description}</Td>
              <Td>{deadline}</Td>
              {!isComplete ? (
                <Td
                  onClick={() => {
                    setTodoData((prev) => {
                      return prev.map((el) => {
                        return { ...el, isComplete: true };
                      });
                    });
                  }}
                >
                  <Button colorScheme={"green"}>{"Mark Complete"}</Button>
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComp;
