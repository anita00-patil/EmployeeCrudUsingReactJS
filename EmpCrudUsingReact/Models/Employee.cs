using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EmployeeCRUDusingREACT.Models;

public partial class Employee
{
    [Key]
    public int EmployeeId { get; set; }

    public string? Name { get; set; }

    public string? Band { get; set; }

    public string? Role { get; set; }

    public string? Designation { get; set; }

    public string? Responsibilities { get; set; }

    public DateTime? HiredDate { get; set; }
}
