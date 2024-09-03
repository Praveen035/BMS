using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class RecipeModel
    {
        [Key]
        public Guid? RecipeId { get; set; }
        public string? RecipeName { get; set; }
        public DateTime RecipePrepareDate { get; set; }
        public DateTime RecipeExpireDate { get; set; }
        public string? RecipeCategoryName { get; set; }
        public Guid? RecipeCategoryId { get; set; }
    }
}
