using BodegaAPI.Data.Entities;
using BodegaAPI.Models;
using System;
using System.Collections.Generic;

namespace BodegaAPI.Services
{
    public interface IProductRepository
    {
        public bool ProductExists(Guid id);

        public List<Product> GetProducts();

        public Product GetProduct(Guid id);

        public bool DeleteProduct(Guid id);

        public Product EnterProduct(Product newProduct);

        public Product UpdateProduct(Guid id, NewProductModel newProduct);

    }
}