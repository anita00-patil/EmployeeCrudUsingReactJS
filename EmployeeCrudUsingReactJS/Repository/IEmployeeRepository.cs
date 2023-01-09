using EmployeeCRUD.Models;

namespace EmployeeCRUD.Repository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetEmployees();
        Task<Employee> GetEmployeeById(int id);
        Task<Employee> AddEmployee(Employee employee);
        Task<Employee> UpdateEmployee(Employee employee);
        bool DeleteEmployee(int id);
    }
}
