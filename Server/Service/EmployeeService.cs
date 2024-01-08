using Data;
using IService;
using Microsoft.EntityFrameworkCore;
using Models.Employee;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class EmployeeService : IEmployeeService
    {
        private readonly DataContext _appDBContext;
        public EmployeeService(DataContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<EmployeeModel>> GetEmployees()
        {
            return await _appDBContext.Employees.ToListAsync();
        }
        public async Task<EmployeeModel> GetEmployeeByID(Guid ID)
        {
            return await _appDBContext.Employees.FindAsync(ID);
        }
        public async Task<EmployeeModel> InsertEmployee(EmployeeModel objEmployee)
        {
            _appDBContext.Employees.Add(objEmployee);
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }
        public async Task<EmployeeModel> UpdateEmployee(EmployeeModel objEmployee)
        {
            _appDBContext.Entry(objEmployee).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }
        public bool DeleteEmployee(Guid ID)
        {
            bool result = false;
            var department = _appDBContext.Employees.Find(ID);
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
