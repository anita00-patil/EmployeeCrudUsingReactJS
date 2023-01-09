using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EmployeeCRUD.Models;

public partial class GlobalDbContext : DbContext
{
   
    public GlobalDbContext(DbContextOptions<GlobalDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Employees { get; set; }

   
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__Employee__7AD04F118421EEAD");

            entity.ToTable("Employee");

            entity.Property(e => e.Band)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Designation)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.HiredDate).HasColumnType("datetime");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Responsibilities)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
