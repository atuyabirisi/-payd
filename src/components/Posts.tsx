import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Alert,
  AlertIcon,
  AlertTitle,
  Skeleton,
  Stack,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { updateTotalPosts } from "../slices/pagination";
import { usePagination } from "../services/usePagination";
import Paginate from "./Paginate";

interface PostData {
  body: string;
  id: number;
  title: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);

    apiClient
      .get("/posts")
      .then((res) => {
        setisLoading(false);
        setPosts(res.data);
        dispatch(updateTotalPosts(res.data.length));
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const dispatch: AppDispatch = useDispatch();
  const { currentPage, postsPerPage } = useSelector(
    (store: RootState) => store.paginate
  );

  const { firstIndex, lastIndex } = usePagination(currentPage, postsPerPage);
  const paginatedPosts = posts.slice(firstIndex, lastIndex);

  const [skeletons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      {isLoading ? (
        <Stack>
          {skeletons.map((skeleton) => (
            <Skeleton height="40px" key={skeleton} />
          ))}
        </Stack>
      ) : (
        <>
          <TableContainer
            maxW="90%"
            marginX="auto"
            pt="15px"
            fontSize="lg"
            border="1px"
            boxShadow={"md"}
            marginY="10px"
            borderRadius="10px"
          >
            <Table variant="striped" colorScheme="green">
              <Thead bg="#e2e8f0" py="3px">
                <Tr>
                  <Th fontSize={"lg"} color="black">
                    PostId
                  </Th>
                  <Th fontSize={"lg"} color="black">
                    Tittle
                  </Th>
                  <Th fontSize={"lg"} color="black">
                    Body
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {paginatedPosts.map((post, index) => (
                  <Tr key={index}>
                    <Td>{post.id}</Td>
                    <Td>{post.title}</Td>
                    <Td>{post.body}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Container maxW="fit-content">
            <Paginate />
          </Container>
        </>
      )}
    </>
  );
}
