using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodegaAPI.Models
{
    public class ProductModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Status { get; set; }

    }
}
