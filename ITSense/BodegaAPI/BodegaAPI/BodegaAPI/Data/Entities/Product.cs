using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodegaAPI.Data.Entities
{
    public class Product
    {
        public Product()
        {

        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Status { get; set; }
        public bool Defective { get; set; }
    }
}
