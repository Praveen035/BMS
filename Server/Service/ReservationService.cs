using Data;
using IService;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
	public class ReservationService : IReservationService
	{
		private readonly DataContext _appDBContext;
		public ReservationService(DataContext context)
		{
			_appDBContext = context ??
			   throw new ArgumentNullException(nameof(context));
		}
		public bool DeleteReservation(Guid ID)
		{
			bool result = false;
			var reservation = _appDBContext.Reservations.Find(ID);
			if (reservation != null)
			{
				_appDBContext.Entry(reservation).State = EntityState.Deleted;
				_appDBContext.SaveChanges();
				result = true;
			}
			else
			{
				result = false;
			}
			return result;
		}

		public async Task<ReservationModel> GetReservationByID(Guid ID)
		{
			return await _appDBContext.Reservations.FindAsync(ID);
		}

		public async Task<IEnumerable<ReservationModel>> GetReservations()
		{
			return await _appDBContext.Reservations.ToListAsync();
		}

		public async Task<ReservationModel> InsertReservation(ReservationModel objReservation)
		{
			_appDBContext.Reservations.Add(objReservation);
			await _appDBContext.SaveChangesAsync();
			return objReservation;
		}

		public async Task<ReservationModel> UpdateReservation(ReservationModel objReservation)
		{
			_appDBContext.Entry(objReservation).State = EntityState.Modified;
			await _appDBContext.SaveChangesAsync();
			return objReservation;
		}
	}
}
