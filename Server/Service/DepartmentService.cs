using Data;
using IService;
using Microsoft.EntityFrameworkCore;
using Models.Department;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class DepartmentService :IDepartmentService
    {
        private readonly DataContext _appDBContext;
        public DepartmentService(DataContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<DepartmentModel>> GetDepartment()
        {
            return await _appDBContext.Departments.ToListAsync();
        }
        public async Task<DepartmentModel> GetDepartmentByID(Guid ID)
        {
            return await _appDBContext.Departments.FindAsync(ID);
        }
        public async Task<DepartmentModel> InsertDepartment(DepartmentModel objDepartment)
        {
            _appDBContext.Departments.Add(objDepartment);
            await _appDBContext.SaveChangesAsync();
            return objDepartment;
        }
        public async Task<DepartmentModel> UpdateDepartment(DepartmentModel objDepartment)
        {
            _appDBContext.Entry(objDepartment).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objDepartment;
        }
        public bool DeleteDepartment(Guid ID)
        {
            bool result = false;
            var department = _appDBContext.Departments.Find(ID);
            if (department != null)
            {
                _appDBContext.Entry(department).State = EntityState.Deleted;
                _appDBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }
    }
}
