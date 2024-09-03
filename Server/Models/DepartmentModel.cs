using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("Department")]

    public class DepartmentModel
    {
        [Key]
        public Guid? DepartmentId { get; set; }

        public string? DepartmentName { get; set; }

    }
}
