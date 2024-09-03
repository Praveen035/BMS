using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
	public interface IReservationService
	{
		Task<IEnumerable<ReservationModel>> GetReservations();
		Task<ReservationModel> GetReservationByID(Guid ID);
		Task<ReservationModel> InsertReservation(ReservationModel objReservation);
		Task<ReservationModel> UpdateReservation(ReservationModel objReservation);
		bool DeleteReservation(Guid ID);
	}
}
