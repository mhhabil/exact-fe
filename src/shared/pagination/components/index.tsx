import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const paginationPageLimit = 4;

const AppPagination = (props: { currentPage: number, totalPages: number, itemsPerPage: number, totalItems: number, onChangePage: any }) => {

  const { currentPage, totalPages, itemsPerPage, totalItems, onChangePage } = props;

  const offset = (+currentPage * +itemsPerPage) - (+itemsPerPage);

  const isActive = (page: number) => {
    return page === currentPage;
  }

  const isPaginated = () => {
    return totalPages > 1;
  }

  const isFullyPaginated = () => {
    return totalPages > (paginationPageLimit * 2);
  }

  const isOnFirstPage = () => {
    return currentPage === 1;
  }

  const isOnLastPage = () => {
    return currentPage === totalPages;
  }

  const isOnLeft = () => {
    return (currentPage)
      && (currentPage <= paginationPageLimit)
      && (currentPage < (totalPages - paginationPageLimit));
  }

  const isOnMiddle = () => {
    return (currentPage)
      && (currentPage > paginationPageLimit)
      && (currentPage <= (totalPages - paginationPageLimit));
  }

  const isOnRight = () => {
    return (currentPage)
      && (currentPage > paginationPageLimit)
      && (currentPage > (totalPages - paginationPageLimit));
  }

  const RenderSimplePaginate = (limit: number = totalPages) => {
    let element: any = [];
    for (let i = 1; i <= limit; i++) {
      element = [
        ...element, (
          <PaginationItem key={i} active={isActive(i)}>
            <PaginationLink onClick={() => onChangePage(i)}>{ i }</PaginationLink>
          </PaginationItem>
        ),
      ];
    }
    return element;
  }

  const SimplePaginate = () => {
    return RenderSimplePaginate(totalPages);
  }

  const LeftSide = () => {
    let element: any = [];
    if (isOnLeft()) {
      const simplePaginate = RenderSimplePaginate(paginationPageLimit + 1);
      element = [...element, simplePaginate]
    }
    if (isOnMiddle() || isOnRight()) {
      element = [
        ...element, (
          <PaginationItem active={isActive(1)} key={1}>
            <PaginationLink onClick={() => onChangePage(1)}>{ 1 }</PaginationLink>
          </PaginationItem>
        ),
      ];
    }
    return element;
  }

  const MiddleSide = () => {
    let element: any = [];
    if (isOnLeft() || isOnRight()) {
      element = [
        ...element, (
          <PaginationItem key="middleSide">
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        ),
      ];
    }
    if (isOnMiddle()) {
      element = [
        ...element,
        (
          <PaginationItem key="leftCurrent">
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        ),
        (
          <PaginationItem active={isActive(currentPage - 1)} key={`page-${currentPage - 1}`}>
            <PaginationLink onClick={() => onChangePage(currentPage - 1)}>{ currentPage - 1 }</PaginationLink>
          </PaginationItem>
        ),
        (
          <PaginationItem active={isActive(currentPage)} key={`page-${currentPage}`}>
            <PaginationLink onClick={() => onChangePage(currentPage)}>{ currentPage }</PaginationLink>
          </PaginationItem>
        ),
        (
          <PaginationItem active={isActive(currentPage + 1)} key={`page-${currentPage + 1}`}>
            <PaginationLink onClick={() => onChangePage(currentPage + 1)}>{ currentPage + 1 }</PaginationLink>
          </PaginationItem>
        ),
        (
          <PaginationItem key="rightCurrent">
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        ),
      ];
    }
    return element;
  }

  const RightSide = () => {
    let element: any = [];
    if (isOnLeft() || isOnMiddle()) {
      element = [
        ...element, (
          <PaginationItem active={isActive(totalPages)} key={totalPages}>
            <PaginationLink onClick={() => onChangePage(totalPages)}>{ totalPages }</PaginationLink>
          </PaginationItem>
        ),
      ];
    }
    if (isOnRight()) {
      for (let i = (totalPages - paginationPageLimit); i <= totalPages; i++) {
        element = [
          ...element, (
            <PaginationItem key={i} active={isActive(i)}>
              <PaginationLink onClick={() => onChangePage(i)}>{ i }</PaginationLink>
            </PaginationItem>
          ),
        ];
      }
    }
    return element;
  }

  return (
    <div className="d-flex justify-content-between align-items-center my-1">
      <div>Showing { offset + 1 } to { (+offset) + (+itemsPerPage) } of { totalItems } entries</div>
      {
        isPaginated() && (
          <div>
            <Pagination className="d-flex">
              {
                !isOnFirstPage() && (
                  <PaginationItem className="prev-item">
                    <PaginationLink onClick={() => onChangePage(currentPage - 1)} />
                  </PaginationItem>
                )
              }
              {
                !isFullyPaginated() && (
                  <SimplePaginate />
                )
              }
              {
                isFullyPaginated() && (
                  <>
                    <LeftSide />
                    <MiddleSide />
                    <RightSide />
                  </>
                )
              }
              {
                !isOnLastPage() && (
                  <PaginationItem className="next-item">
                    <PaginationLink onClick={() => onChangePage(currentPage + 1)} />
                  </PaginationItem>
                )
              }
            </Pagination>
          </div>
        )
      }
    </div>
  )
}

export default AppPagination;
