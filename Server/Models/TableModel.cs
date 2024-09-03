using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class TableModel
    {
        [Key]
        public Guid? TableId { get; set; }

        public string? TableName { get; set; }

        public int TableCapacity { get; set; }
    }
}
