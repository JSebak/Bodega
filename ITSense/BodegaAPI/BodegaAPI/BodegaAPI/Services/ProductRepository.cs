using AutoMapper;
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
        private readonly IMapper _mapper;
        public ProductRepository(ProductContext productContext, IMapper mapper)
        {
            _productContext = productContext ?? throw new ArgumentNullException(nameof(productContext));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
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

        public Product UpdateProduct(Product newProduct)
        {
            if (!ProductExists(newProduct.Id)) return null;
            var product = GetProduct(newProduct.Id);
            _productContext.Entry(product).CurrentValues.SetValues(newProduct);
            Save();
            return GetProduct(newProduct.Id);
        }
        public bool Save()
        {
            return _productContext.SaveChanges() > 0;
        }

        public bool ValidateProduct(ProductModel product)
        {
            return ValidateProduct(_mapper.Map<NewProductModel>(product));
        }
        public bool ValidateProduct(NewProductModel product)
        {
            var name = false;

            if (!String.IsNullOrWhiteSpace(product.Name))
            {
                name = true;
            }

            return name;
        }
    }
}
