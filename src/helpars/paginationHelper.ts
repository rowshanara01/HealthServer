type IOptions = {
  page?: number;
  limit?: number;
  sortOrder?: string; // ? optional field
  sortBy?: string;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: string;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  const page: number = Number(options.page) || 1;
  const limit: number = Number(options.limit) || 10; // per page 10 data limit
  const skip: number = (Number(page) - 1) * limit; // those data for 1st page are skip for second page and so on

  const sortBy: string = options.sortBy || "createdAt"; // sorting by data creation time
  const sortOrder: string = options.sortOrder || "desc";

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export const paginationHelper = {
  calculatePagination,
};
