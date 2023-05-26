import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import "./CareGuides.scss";

const CareCardPagination = () => {
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

export default CareCardPagination