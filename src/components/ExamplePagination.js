import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import "../index.css";

const ExamplePagination = () => {
  return (
    <Pagination>
      <PaginationItem disabled>
        <PaginationLink href="#" previous />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" next />
      </PaginationItem>
    </Pagination>
  );
}

export default ExamplePagination;