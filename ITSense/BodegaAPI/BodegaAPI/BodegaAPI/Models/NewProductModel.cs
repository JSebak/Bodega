using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BodegaAPI.Models
{
    public class NewProductModel
    {
        [Required]
        public string Name { get; set; }
        public int Status { get; set; }
        public bool Defective { get; set; }
    }
}
