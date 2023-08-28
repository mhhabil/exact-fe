export interface IPaginateMeta {
  totalItems: number,
  itemCount: number,
  itemsPerPage: number,
  totalPages: number,
  currentPage: number,
}

export interface IPaginateLink {
  first: string,
  previous: string,
  next: string,
  last: string,
}

export interface IPaginateData {
  items?: Array<any>,
  meta: IPaginateMeta,
  links?: IPaginateLink,
}

export interface IPaginateOption {
  page?: number,
  limit?: number,
  name?: string,
}

export const InitialPaginateMeta = {
  totalItems: 0,
  itemCount: 0,
  itemsPerPage: 0,
  totalPages: 0,
  currentPage: 0,
};
