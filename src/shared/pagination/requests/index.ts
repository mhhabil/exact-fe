export class PaginationRequest {
  page: number;
  limit?: number;

  constructor(filter: IPaginationRequest) {
    this.page = filter.page;
    this.limit = filter.limit ?? 10;
  }

  stringify = () => {
    let str = ''
    for (const prop in this) {
      if (this.hasOwnProperty(prop) && (typeof this[prop] === 'string' || typeof this[prop] === 'number') && this[prop]) {
        if (str === '') {
          str += `${prop  }=${  this[prop]}`;
        } else {
          str += `&${  prop  }=${  this[prop]}`;
        }
      } else if (this.hasOwnProperty(prop) && typeof this[prop] === 'boolean') {
        const value = this[prop] ? 'true' : 'false';
        if (str === '') {
          str += `${prop  }=${  value}`;
        } else {
          str += `&${  prop  }=${  value}`;
        }
      }
    }
    return str;
  }
}

export interface IPaginationRequest {
  page: number;
  limit?: number;
}
