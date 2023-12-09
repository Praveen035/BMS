using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Department
{
    [Table("Department")]

    public class DepartmentModel
    {
        [Key]
        public int DepartmentId { get; set; }

        public string? DepartmentName { get; set; }

    }
}
