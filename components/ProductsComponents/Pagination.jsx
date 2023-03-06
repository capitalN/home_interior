import { Text, HStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export function Pagination({ handlePagination, lastEl }) {
  const [page, setPage] = useState(1);
  const Router = useRouter();

  useEffect(() => {
    handlePagination(page);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [Router.query]);

  return (
    <HStack height="4rem" width="100%" zIndex="2" bgColor="white" position="sticky" top="0px" gap={"20px"} fontSize="20px" p="20px" align={"center"}>
      <Button
        onClick={() => setPage((prev) => prev - 1)}
        isDisabled={page === 1}
        style={{ fontWeight: "bold" }}
      >
        {"<<"}
      </Button>
      <button>{page - 1}</button>
      <Text fontWeight={"bold"}>{page}</Text>
      <button>{page + 1}</button>
      <Button
        onClick={() => setPage((prev) => prev + 1)}
        style={{ fontWeight: "bold" }}
        isDisabled={!lastEl}
      >
        {">>"}
      </Button>
    </HStack>
  );
}
