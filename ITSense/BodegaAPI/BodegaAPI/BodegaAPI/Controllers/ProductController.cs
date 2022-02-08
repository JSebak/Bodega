using AutoMapper;
using BodegaAPI.Data;
using BodegaAPI.Data.Entities;
using BodegaAPI.Models;
using BodegaAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodegaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCorsImplementationPolicy")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public ProductController(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository ?? throw new ArgumentNullException(nameof(productRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public IActionResult Get()
        {
            var employeeEntities = _mapper.Map<List<ProductModel>>(_productRepository.GetProducts());
            if (!employeeEntities.Any()) return NotFound();
            return Ok(employeeEntities);
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(Guid id)
        {
            if (!_productRepository.ProductExists(id))
            {
                return NotFound();
            }
            var product = _mapper.Map <ProductModel>(_productRepository.GetProduct(id));
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            if (!_productRepository.ProductExists(id))
            {
                return NotFound();
            }
            var succes = _productRepository.DeleteProduct(id);
            return Ok(succes);
        }

        [HttpPost]
        public IActionResult RegisterProduct([FromBody] NewProductModel newProduct)
        {
            if (!_productRepository.ValidateProduct(newProduct)) return BadRequest("Invalid product");
            var mappedProduct = _mapper.Map<Product>(newProduct);
            var product = _mapper.Map<ProductModel>(_productRepository.EnterProduct(mappedProduct));
            return Created($"api/product/{product.Id}",product);
        }

        [HttpPut]
        public IActionResult UpdateProduct([FromBody] ProductModel modifiedProduct)
        {
            if (!_productRepository.ValidateProduct(modifiedProduct)) return BadRequest("Invalid product");
            var mappedProduct = _mapper.Map<Product>(modifiedProduct);
            var product = _mapper.Map<ProductModel>(_productRepository.UpdateProduct(mappedProduct));
            return Ok(product);
        }
    }
}
