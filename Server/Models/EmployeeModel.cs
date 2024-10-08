﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    [Table("Employee")]
    public class EmployeeModel
    {
        [Key]
        public Guid? EmployeeID { get; set; }
        public string? EmployeeName { get; set; }
        public string? Department { get; set; }
        public string? EmailId { get; set; }
        public DateTime DOJ { get; set; }
    }
}
