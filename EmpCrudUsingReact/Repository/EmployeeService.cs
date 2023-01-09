using EmployeeCRUDusingREACT.Models;

namespace EmployeeCRUDusingREACT.Repository
{
    public class EmployeeService:IEmployeeService
    {
        private readonly GlobalDbContext _dbContext;
        public EmployeeService(GlobalDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Employee AddEmployee(Employee employee)
        {
            var result = _dbContext.Employees.Add(employee);
            _dbContext.SaveChanges();
            return result.Entity;
        }
        public Employee UpdateEmployee(Employee employee)
        {
            var result = _dbContext.Employees.Update(employee);
            _dbContext.SaveChanges();
            return result.Entity;
        }
        public bool DeleteEmployee(int Id)
        {
            var filteredData = _dbContext.Employees.Where(x => x.EmployeeId == Id).FirstOrDefault();
            var result = _dbContext.Remove(filteredData);
            _dbContext.SaveChanges();
            return result != null ? true : false;
        }

        public IEnumerable<Employee> GetEmployees()
        {
            return _dbContext.Employees.ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            return _dbContext.Employees.Where(x => x.EmployeeId == id).FirstOrDefault();
        }
    }
}
