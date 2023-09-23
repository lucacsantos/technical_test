using BackEnd_Solution.Context;
using BackEnd_Solution.Domain;
using BackEnd_Solution.Infra;
using BackEnd_Solution.Infra.Data.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataBaseContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DataBaseSettings"));

});

//Repositories
builder.Services.AddScoped(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IEscolaridadeRepository, EscolaridadeRepository>();

//Services
builder.Services.AddScoped<IUsuarioService, UsuarioService>();


var app = builder.Build();

app.UseCors(builder => builder
.AllowAnyHeader()
.AllowAnyMethod()
.SetIsOriginAllowed((host) => true)
.AllowCredentials());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
