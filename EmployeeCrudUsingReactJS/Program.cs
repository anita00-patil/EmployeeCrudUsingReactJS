using EmployeeCRUD.Models;
using EmployeeCRUD.Repository;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
// Add services to the container.
builder.Services.AddDbContext<GlobalDbContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("FinalDatabase"));
});

builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddCors(p =>
p.AddPolicy("corspolicy", build =>
{
    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("corspolicy");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
