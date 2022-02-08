using AutoMapper;
using BodegaAPI.Data.Entities;
using BodegaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodegaAPI.Data.Profiles
{
    public class ProductMappingProfile:Profile
    {
        public ProductMappingProfile()
        {
            CreateMap<Product, NewProductModel>().ReverseMap();
            CreateMap<Product, ProductModel>().ReverseMap();
            CreateMap<ProductModel, NewProductModel>().ReverseMap();
        }
    }
}
