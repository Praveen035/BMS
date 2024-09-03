using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class RecipeCategoryModel
    {
        [Key]
        public Guid? RecipeCategoryId { get; set; }

        public string? RecipeCategoryName { get; set; }
    }
}
