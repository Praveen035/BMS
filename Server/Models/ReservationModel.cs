using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
	public class ReservationModel
	{
		[Key]
		public Guid? ReservationId { get; set; }	
		public string? CustomerName { get; set; }	
		public string? CustomerPhNumber { get; set; }	
		public string? EmailId { get; set; }
		public int NumberOfGuest { get; set; }
		public string? TableName { get; set; }
		public Guid? TableId { get; set; }
		public string? RecipeName { get; set; }
		public Guid? RecipeId { get; set; }
		public DateTime VisitDate { get; set; }
		public DateTime VisitTime { get; set; }
	}
}
