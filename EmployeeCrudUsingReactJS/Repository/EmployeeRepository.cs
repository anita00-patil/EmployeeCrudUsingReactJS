using EmployeeCRUD.Models;
using Microsoft.EntityFrameworkCore;
using static EmployeeCRUD.Repository.EmployeeRepository;

namespace EmployeeCRUD.Repository
{
    public class EmployeeRepository: IEmployeeRepository
    {
       
            private readonly GlobalDbContext _context;
            public EmployeeRepository(GlobalDbContext context)
            {
                _context = context;
            }
            

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        public async Task<Employee> AddEmployee(Employee employee)
        {

            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return employee;
        }

        public async Task<Employee> UpdateEmployee(Employee employee)
        {
            _context.Entry(employee).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return employee;
        }

        public bool DeleteEmployee(int id)
        {
            bool result = false;
            var student = _context.Employees.Find(id);
            if (student != null)
            {
                _context.Entry(student).State = EntityState.Deleted;
                _context.SaveChanges();
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
