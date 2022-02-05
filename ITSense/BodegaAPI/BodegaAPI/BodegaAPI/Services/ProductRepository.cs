using BodegaAPI.Data;
using BodegaAPI.Data.Entities;
using BodegaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodegaAPI.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext _productContext;
        public ProductRepository(ProductContext productContext)
        {
            _productContext = productContext ?? throw new ArgumentNullException(nameof(productContext));
        }

        public bool ProductExists(Guid id)
        {
            return _productContext.Products.Any(p => p.Id == id);
        }

        public List<Product> GetProducts()
        {
            return _productContext.Products.ToList();
        }

        public Product GetProduct(Guid id)
        {
            return _productContext.Products.Where(p => p.Id == id).First();
        }

        public bool DeleteProduct(Guid id)
        {
            var product = GetProduct(id);
            _productContext.Products.Remove(product);
            return Save();
        }

        public Product EnterProduct(Product newProduct)
        {
            var product = _productContext.Add(newProduct);
            Save();
            return product.Entity;
        }

        public Product UpdateProduct(Guid id, NewProductModel newProduct)
        {
            var product = GetProduct(id);
            _productContext.Entry(product).CurrentValues.SetValues(newProduct);
            Save();
            return GetProduct(id);
        }
        public bool Save()
        {
            return _productContext.SaveChanges() > 0;
        }
    }
}
