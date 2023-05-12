export interface CreateSaleDTO {
  idSeller: string;
  idClient: string;
}

export interface CreateSaleWithSoldItemsDTO extends CreateSaleDTO {
  idProduct: string;
  amount: number;
  price: number;
}

export interface CreateSaleArrayDTO {
  idSeller: string;
  idClient: string;
  items: {
    idProduct: string;
    amount: number;
    price: number;
  }[];
}

export interface DetailSaleDTO {
  id: string;
  idClient: string;
  idSeller: string; 
}

export interface DetailSoldItems {
  id: string;
  idSale: string;
  idProduct: string;
  amount: number;
  price: number;
}



